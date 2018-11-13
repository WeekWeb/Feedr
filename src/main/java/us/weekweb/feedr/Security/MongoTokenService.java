package us.weekweb.feedr.Security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import us.weekweb.feedr.Objects.Token;
import us.weekweb.feedr.Objects.User;
import us.weekweb.feedr.Repositories.TokenRepository;
import us.weekweb.feedr.Repositories.UsersRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class MongoTokenService {

    @Autowired
    private TokenRepository repository;

    public Token loadTokenByUsername(String email) throws UsernameNotFoundException {
        return repository.findByEmail(email);
    }

    public void saveToken(Token token) {
        repository.save(token);
    }
}
