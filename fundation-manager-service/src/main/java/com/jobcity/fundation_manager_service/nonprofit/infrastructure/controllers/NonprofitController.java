package com.jobcity.fundation_manager_service.nonprofit.infrastructure.controllers;

import com.jobcity.fundation_manager_service.nonprofit.model.NonprofitCompany;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/nonprofit")
public class NonprofitController {

    @GetMapping("")
    public List<NonprofitCompany> getAll() {
        return List.of(
                new NonprofitCompany(" ", "addresssss", "email1@gmail.com"),
                new NonprofitCompany(" ", "addresssss", "email2@gmail.com"),
                new NonprofitCompany(" ", "addresssss", "email3@gmail.com"),
                new NonprofitCompany(" ", "addresssss", "email4@gmail.com"),
                new NonprofitCompany(" ", "addresssss", "email5@gmail.com")
        );
    }



}
