package com.project.loginservice;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LoginServiceApplication {

	public static void main(String[] args) {
		System.out.println("inside ;login service");
		SpringApplication.run(LoginServiceApplication.class, args);
	}
}