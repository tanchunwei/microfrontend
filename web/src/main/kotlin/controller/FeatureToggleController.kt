package com.web.controller

import com.fasterxml.jackson.databind.ObjectMapper
import com.web.model.response.ToggleResponse
import org.slf4j.LoggerFactory
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController()
@RequestMapping("api")
class FeatureToggleController(
        private val objectMapper : ObjectMapper
){
    @GetMapping("toggle")
    fun getToggle() : ResponseEntity<String>{
        val response = ToggleResponse(mapOf(
                "frontend1" to true,
                "frontend2" to true,
                "frontend3" to true
        ))
        return ResponseEntity(objectMapper.writeValueAsString(response.toggle), HttpStatus.OK)
    }

    @GetMapping("toggle/featureA")
    fun getToggleFeatureA() : ResponseEntity<String>{
        return ResponseEntity(objectMapper.writeValueAsString(true), HttpStatus.OK)
    }

    companion object{
        private val logger = LoggerFactory.getLogger(FeatureToggleController::class.java)
    }
}
