package us.weekweb.feedr.Objects;

import org.springframework.data.annotation.Id;

public class FeedrUser {

    @Id
    String id;

    String email;
    String organizationName;
    String password;
    String defaultLocation;

    public FeedrUser(String email) {
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
