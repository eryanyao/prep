package com.intians.hack2hire.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class helloWorldController {

    @GetMapping("/helloWorld")
    public String getMessage() {
        return "Hello World";
    }
}
