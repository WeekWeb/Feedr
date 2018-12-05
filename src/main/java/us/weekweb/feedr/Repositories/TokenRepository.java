package us.weekweb.feedr.Repositories;

import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import us.weekweb.feedr.Objects.Token;

import java.util.List;

public interface TokenRepository extends MongoRepository<Token, String> {
    List<Token> findByEmail(String email);

    @Query("{ 'email' : ?0}")
    List<Token> findByEmail(String email, Sort sort);
}