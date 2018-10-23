package us.weekweb.feedr.Objects;

import org.springframework.data.annotation.Id;

import java.util.Date;

public class Event {

    public enum FoodType
    {
        MEXICAN, PIZZA, ITALIAN
    }

    @Id
    String id;

    String name;
    String location;
    Date timeOfEvent;
    String description;
    FoodType typeOfFood;
    String ownerID;

    public Event (String ownerID) {
        this.ownerID = ownerID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Date getTimeOfEvent() {
        return timeOfEvent;
    }

    public void setTimeOfEvent(Date timeOfEvent) {
        this.timeOfEvent = timeOfEvent;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public FoodType getTypeOfFood() {
        return typeOfFood;
    }

    public void setTypeOfFood(FoodType typeOfFood) {
        this.typeOfFood = typeOfFood;
    }

    public String getOwnerID() {
        return ownerID;
    }
}
