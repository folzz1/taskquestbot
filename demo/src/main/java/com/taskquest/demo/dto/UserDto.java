package com.taskquest.demo.dto;

import lombok.Data;

@Data
public class UserDto {
    private Long id;
    private String username;
    private Long chatId;
    private Long totalPoints = 0L;
}
