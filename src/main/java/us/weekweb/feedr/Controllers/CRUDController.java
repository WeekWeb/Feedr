package us.weekweb.feedr.Controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import us.weekweb.feedr.Objects.Token;
import us.weekweb.feedr.Objects.Event;
import us.weekweb.feedr.Services.MongoEventService;
import us.weekweb.feedr.Services.MongoTokenService;

import java.util.Map;

@Controller
public class CRUDController {

    @Autowired
    MongoTokenService tokenDb;
    @Autowired
    MongoEventService eventDb;
    @Autowired
    ObjectMapper mapper;

    @RequestMapping(value = "/event/user", method = RequestMethod.GET)
    public ResponseEntity getUsersEvents(@RequestBody Token token) {
        try {
            if(!tokenValid(token))
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Bad token");
            else
                return ResponseEntity.ok(eventDb.loadEventsByUsername(token.getEmail()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.toString());
        }
    }

    @RequestMapping(value = "/event/all", method = RequestMethod.GET)
    public ResponseEntity getEvents() {
        try {
            return ResponseEntity.ok(eventDb.loadEvents());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.toString());
        }
    }

    @RequestMapping(value = "/event", method = RequestMethod.POST)
    public ResponseEntity createEvent(@RequestBody Event event, @RequestHeader(value = "token") String tokenHash) {
        try {
            if(tokenValid(new Token(event.getOwnerEmail(), tokenHash))) {
                if (event.getTimeOfEvent() != null &&
                        event.getLocation() != null &&
                        event.getName() != null &&
                        event.getTypeOfFood() != null) {
                    eventDb.upsertEvent(event);
                    return ResponseEntity.ok("Event uploaded");
                } else {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("One of the required feilds is null");
                }
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Bad token");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.toString());
        }
    }

    @RequestMapping(value = "/event", method = RequestMethod.DELETE)
    public ResponseEntity deleteEvent(@RequestBody Event event, @RequestHeader(value = "token") String tokenHash) {
        try {
            if (event != null) {
                if (tokenValid(new Token(event.getOwnerEmail(), tokenHash))) {
                    eventDb.deleteEvent(event);
                    return ResponseEntity.ok("Event deleted");
                } else {
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Bad token");
                }
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Could not find Event wit id '" + event.getId() + "'.");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.toString());
        }
    }

    private boolean tokenValid(Token token) {
        return tokenDb.loadTokenByUsername(token.getEmail()).getHash().equals(token.getHash());
    }
}