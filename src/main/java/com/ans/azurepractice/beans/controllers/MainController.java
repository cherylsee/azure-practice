package com.ans.azurepractice.beans.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLOutput;

//@RestController
@Controller
public class MainController {

    @GetMapping("/random")
    public String getRandom() {
        return "redirect:/resources/random.html";
    }

    @GetMapping("/user")
    public String getUser() {
        return "This is a user";
    }

    @GetMapping("/")
    public String getRoot() {
        System.out.println("Root directory hit");
        return "redirect:/random.html";
    }

    @GetMapping("/error")
    public String getErrorMessage() {
        System.out.println("Some error seems to have occurred!");
        return "Error!";
    }
}
