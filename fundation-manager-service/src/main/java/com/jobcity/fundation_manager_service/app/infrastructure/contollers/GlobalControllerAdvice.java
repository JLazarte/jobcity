package com.jobcity.fundation_manager_service.app.infrastructure.contollers;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalControllerAdvice {

    @ExceptionHandler(value = Exception.class)
    public ResponseEntity<?> defaultErrorHandler(
            HttpServletRequest req,
            HttpServletRequest res,
            Exception ex) throws Exception {

        return ResponseEntity.internalServerError().build();
    }

}
