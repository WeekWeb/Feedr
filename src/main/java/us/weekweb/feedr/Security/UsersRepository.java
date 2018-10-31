package us.weekweb.feedr.Security;

import us.weekweb.feedr.Objects.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsersRepository extends MongoRepository<User, String> {
    User findByEmail(String email);
}