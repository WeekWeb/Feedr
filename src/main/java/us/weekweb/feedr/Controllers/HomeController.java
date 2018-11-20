package us.weekweb.feedr.Controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import us.weekweb.feedr.Objects.Event;
import us.weekweb.feedr.Objects.Token;
import us.weekweb.feedr.Services.MongoEventService;
import us.weekweb.feedr.Services.MongoTokenService;

@Controller
public class HomeController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String redirectEverythingElseHome(){
        return "redirect:/index.html";
    }

}
