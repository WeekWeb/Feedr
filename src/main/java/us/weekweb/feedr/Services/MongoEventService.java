package us.weekweb.feedr.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import us.weekweb.feedr.Objects.Event;
import us.weekweb.feedr.Repositories.EventRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class MongoEventService {

    @Autowired
    private EventRepository repository;

    public List<Event> loadEventsByUsername(String email) throws UsernameNotFoundException {
        return repository.findByOwnerEmail(email);
    }

    public List<Event> loadEvents() {
        return repository.findAll();
    }

    public Event loadEventById(String id) {
        return repository.getById(id);
    }

    public void deleteEvent(Event event) {
        repository.delete(event);
    }

    public void upsertEvent(Event event) {
        if(event.getId() == null)
            repository.insert(event);
        else
            repository.save(event);
    }
}
