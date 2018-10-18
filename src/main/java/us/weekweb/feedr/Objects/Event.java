package us.weekweb.feedr.Objects;

import java.util.Date;

public class Event {

    public enum FoodType
    {
        MEXICAN, PIZZA, ITALIAN
    }

    String name;
    String location;
    Date time;
    String description;
    FoodType typeOfFood;
    User owner;

    public Event () {

    }
}
