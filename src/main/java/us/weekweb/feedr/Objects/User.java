package us.weekweb.feedr.Objects;

public class User {

    String email;
    String organizationName;
    //String password; For figuring out password encyption
    String defaultLocation;

    public User(String email) {
        this.email = email;
    }

    public String getEmail() {
        return this.email;
    }

    public String getOrganizationName() {
        return this.organizationName;
    }

    public void setOrganizationName(String organizationName) {
        this.organizationName = organizationName;
    }

    public String getDefaultLocation() {
        return this.defaultLocation;
    }

    public void setDefaultLocation(String defaultLocation) {
        this.defaultLocation = defaultLocation;
    }
}
