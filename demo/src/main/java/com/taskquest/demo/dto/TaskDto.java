package com.taskquest.demo.dto;


import com.taskquest.demo.constants.TaskStatus;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class TaskDto {
    private Long id;
    private String title;
    private String description;
    private Long points;
    private LocalDateTime deadline;
    private String userTimezone = "UTC";
    private TaskStatus status = TaskStatus.PENDING;
    private Long userId;
    private Long taskTypeId;
}
