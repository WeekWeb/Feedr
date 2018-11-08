package us.weekweb.feedr.Controllers;

import org.springframework.web.bind.annotation.*;
import us.weekweb.feedr.Objects.Token;
import us.weekweb.feedr.Objects.User;
import us.weekweb.feedr.Security.MongoUserDetailsService;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.servlet.ModelAndView;

import java.security.Principal;
import java.util.Collections;
import java.util.Map;

@Controller
public class LoginController {

    @Autowired
    MongoUserDetailsService db;

    @RequestMapping("/signup")
    @ResponseBody
    /**
     * This will take in a in a User object
     * It will then return a token on success of creating an account
     */
    public Token signup(@RequestBody User user) {
        try {
            if(user.getEmail() != null &&
                    user.getPassword() != null &&
                    user.getDefaultLocation() != null &&
                    user.getOrganizationName() != null) {
                db.saveUser(user);
                return createToken();
            } else {
                return null;
            }
        } catch (Exception e) {
            return null;
        }
    }

    @RequestMapping("/login")
    @ResponseBody
    /**
     * This will take in a Map<String, String> that will map email->the users email and password->users password
     * It will then return a fail to authenicate error on failure or a token on success
     */
    public Token login(@RequestBody Map<String, String> loginInfo) {
        //TODO
        return createToken();
    }

    @RequestMapping("/token")
    @ResponseBody
    /**
     * This will take in a String that will map email->the users email and password->users password
     * It will then return a fail to authenicate error on failure or a token on success
     */
    public boolean token(@RequestBody Token token) {
        //TODO
        return false;
    }

    private Token createToken() {
        return null;
    }
}
