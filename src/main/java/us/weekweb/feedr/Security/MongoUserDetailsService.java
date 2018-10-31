package us.weekweb.feedr.services;

import us.weekweb.feedr.Objects.FeedrUser;
import us.weekweb.feedr.Security.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import java.util.Arrays;
import java.util.List;

@Component
public class MongoUserDetailsService implements UserDetailsService {
    @Autowired
    private UsersRepository repository;

    @Override
    public UserDetails loadUserByEmail(String email) throws UsernameNotFoundException {
        FeedrUser user = repository.findByEmail(email);
        if (user == null) {
            throw new EmailNotFoundException(“FeedrUser not found”);
        }
        List<SimpleGrantedAuthority> authorities = Arrays.asList(new SimpleGrantedAuthority(“user”));
        return new User(user.getEmail(), user.getPassword(), authorities);
    }
}
