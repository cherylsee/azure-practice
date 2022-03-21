package com.ans.azurepractice.beans.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @GetMapping("/random")
    public String getRandom() {
        return "Random thing";
    }

    @GetMapping("/user")
    public String getUser() {
        return "This is a user";
    }

    @GetMapping("/")
    public String getIndex() {
        return "This is the root directory.";
    }
}
