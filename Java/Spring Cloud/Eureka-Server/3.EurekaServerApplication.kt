package org.wenwu.eurekaserver

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class EurekaServerApplication

fun main(vararg args:String) {
    runApplication<EurekaServerApplication>(*args)
}