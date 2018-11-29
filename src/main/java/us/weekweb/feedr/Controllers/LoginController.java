package us.weekweb.feedr.Controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import us.weekweb.feedr.Objects.Token;
import us.weekweb.feedr.Objects.User;
import us.weekweb.feedr.Services.MongoTokenService;
import us.weekweb.feedr.Services.MongoUserDetailsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import java.util.Date;
import java.util.Map;

@Controller
public class LoginController {

    @Autowired
    MongoUserDetailsService userDb;
    @Autowired
    MongoTokenService tokenDb;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    /**
     * This will take in a in a User object
     * It will then return a token on success of creating an account
     */
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public ResponseEntity signup(@RequestBody User user) {
        try {
            if(user.getEmail() != null &&
                    user.getPassword() != null &&
                    user.getDefaultLocation() != null &&
                    user.getOrganizationName() != null) {
                UserDetails is_user = userDb.loadUserByUsername(user.getEmail());
                if(is_user == null) {
                    userDb.saveUser(user);
                    return ResponseEntity.ok(getToken(user.getEmail()));
                } else {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User already exists");
                }
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("One of the fields for the user is null");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.toString());
        }
    }

    /**
     * This will take in a Map<String, String> that will map email->the users email and password->users password
     * It will then return a fail to authenicate error on failure or a token on success
     */
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity login(@RequestBody Map<String, String> loginInfo) {
        UserDetails user = userDb.loadUserByUsername(loginInfo.get("email"));
        if(user == null)
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with email '" + "' not found.");

        if(bCryptPasswordEncoder.matches(loginInfo.get("password"), user.getPassword())) {
            Token token = getToken(loginInfo.get("email"));
            return ResponseEntity.ok(token);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed. Incorrect Password");
        }
    }

    /**
     * This will take in a String that a token and check if it is valid
     * It will then return a fail to authenicate error on failure or a token on success
     */
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/token", method = RequestMethod.POST)
    public ResponseEntity token(@RequestBody Token token) {
        try {
            if(token.getEmail() != null && token.getHash() != null) {
                Token foundToken = tokenDb.loadTokenByUsername(token.getEmail());
                if(foundToken == null)
                    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with email '" + token.getEmail() + "' not found.");

                if(foundToken.getHash().equals(token.getHash()) && foundToken.getExpirationDate().after(new Date())) {
                    //If we successfully authenticate, we need to reset expiration date on the token
                    foundToken.setExpirationDate();
                    tokenDb.saveToken(foundToken);
                    return ResponseEntity.ok("Good token");
                } else {
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Token failed. Bad token");
                }
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("One of the fields for the token is null");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.toString());
        }
    }

    private Token getToken(String email) {
        Token token = tokenDb.loadTokenByUsername(email);
        if(token == null || token.getExpirationDate().before(new Date())) {
            Token newToken = new Token(email);
            tokenDb.saveToken(newToken);
            return newToken;
        } else {
            return token;
        }
    }
}
