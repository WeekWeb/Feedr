package us.weekweb.feedr.Objects;

import org.springframework.data.annotation.Id;

import java.security.SecureRandom;

public class Token {

    @Id
    String id;

    String email;
    String hash;

    public Token() {};

    public Token(String email) {
        SecureRandom random = new SecureRandom();
        byte bytes[] = new byte[20];
        random.nextBytes(bytes);

        this.hash = bytes.toString();
        this.email = email;
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
}
