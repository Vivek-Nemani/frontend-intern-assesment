package com.example.userformbackend;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Allow frontend (React app) on port 5173 to access backend
        registry.addMapping("/**")  // Allow all endpoints
                .allowedOrigins("http://localhost:5173")  // Allow frontend origin
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Allow these HTTP methods
                .allowedHeaders("*");  // Allow all headers
    }
}