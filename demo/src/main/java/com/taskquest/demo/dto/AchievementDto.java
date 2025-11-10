package com.taskquest.demo.dto;

import com.taskquest.demo.constants.AchievementLevel;
import com.taskquest.demo.model.TaskType;
import lombok.Data;

@Data
public class AchievementDto {
    private Long id;
    private AchievementLevel level;
    private Long countTask;
    private Long userId;
    private TaskType taskType;
}
