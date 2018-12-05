package us.weekweb.feedr.Objects;

import org.springframework.data.annotation.Id;

import java.security.SecureRandom;
import java.util.Date;

public class Token {


    public final long EXPIRATION_LENGTH = 1800000;// = 30 MIN.

    @Id
    String id;

    String email;
    String hash;
    Date expirationDate;

    public Token() {
        this.expirationDate = new Date(System.currentTimeMillis() + EXPIRATION_LENGTH);
    };

    public Token(String email, String hash) {
        this.email = email;
        this.hash = hash;
        this.expirationDate = new Date(System.currentTimeMillis() + EXPIRATION_LENGTH);
    }

    public Token(String email) {
        SecureRandom random = new SecureRandom();
        byte bytes[] = new byte[20];
        random.nextBytes(bytes);

        this.hash = bytes.toString();
        this.email = email;
        this.expirationDate = new Date(System.currentTimeMillis() + EXPIRATION_LENGTH);
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getHash() {
        return hash;
    }

    public  void setHash(String hash) {
        this.hash = hash;
    }

    public Date getExpirationDate() {
        return this.expirationDate;
    }

    public void setExpirationDate() {
        this.expirationDate = new Date(System.currentTimeMillis() + EXPIRATION_LENGTH);
    }
}
