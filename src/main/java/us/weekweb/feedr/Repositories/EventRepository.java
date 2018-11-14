package us.weekweb.feedr.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import us.weekweb.feedr.Objects.Event;

import java.util.List;

public interface EventRepository extends MongoRepository<Event, String> {
    List<Event> findByOwnerEmail(String email);

    Event findByTypeOfFood(Event.FoodType type);

    Event getById(String id);
}