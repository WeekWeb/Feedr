package us.weekweb.feedr.Security;

import us.weekweb.feedr.Objects.User;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import us.weekweb.feedr.Repositories.UsersRepository;

@Service
public class MongoUserDetailsService implements UserDetailsService {
    @Autowired
    private UsersRepository repository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = repository.findByEmail(email);
        if(user != null) {
            return buildUserForAuthentication(user);
        } else {
            return null;
        }
    }

    public void saveUser(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        repository.save(user);
    }

    public User findUserByEmail(String email) throws UsernameNotFoundException {
        return repository.findByEmail(email);
    }

    private UserDetails buildUserForAuthentication(User user) {
        List<GrantedAuthority> authorities = new ArrayList<>();
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), authorities);
    }
}
