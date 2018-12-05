package us.weekweb.feedr.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import us.weekweb.feedr.Objects.Token;
import us.weekweb.feedr.Repositories.TokenRepository;


import java.util.Date;
import java.util.Iterator;
import java.util.List;

@Service
public class MongoTokenService {

    @Autowired
    private TokenRepository repository;

    public Token loadTokenByUsername(String email) throws UsernameNotFoundException {
        Sort sort = new Sort(Sort.Direction.ASC, "expirationDate");
        List<Token> tokens = repository.findByEmail(email, sort);
        Iterator<Token> it = tokens.iterator();
        while (it.hasNext()) {
            Token t = it.next();
            if(t.getExpirationDate().before(new Date())) {
                repository.delete(t);
                it.remove();
            } else {
                return t;
            }
        }
        return null;
    }

    public void saveToken(Token token) {
        repository.save(token);
    }
}
