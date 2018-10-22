package us.weekweb.feedr;

import org.springframework.boot.autoconfigure.SpringBootApplication;
/* intelliJ is saying to change to this notation to import SpringApplication
   and to deprecate the use of SpringApplication.run(...) */
import static org.springframework.boot.SpringApplication.*;

@SpringBootApplication
public class FeedrApplication {

    public static void main(String[] args) {
        /* Check import static note for clarification of run(...)
           without SpringApplication */
        run(FeedrApplication.class, args);
    }
}
