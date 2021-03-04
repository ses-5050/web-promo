package satasme.promo.web.configuration;



//public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
//
//	private UserDetailsService userDetailsService;
//
//	@Override
//	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		auth.userDetailsService(userDetailsService).passwordEncoder(encodePWD());
//	}
//
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		http.csrf().disable();
//		http.authorizeRequests().antMatchers("/api/**").authenticated().anyRequest().permitAll().and().formLogin()
//				.permitAll();
//	}
//
//	@Bean
//	public BCryptPasswordEncoder encodePWD() {
//		return new BCryptPasswordEncoder();
//	}
//}
