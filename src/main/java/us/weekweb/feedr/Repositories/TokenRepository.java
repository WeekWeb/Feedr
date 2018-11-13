package us.weekweb.feedr.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import us.weekweb.feedr.Objects.Token;

public interface TokenRepository extends MongoRepository<Token, String> {
    Token findByEmail(String email);
}