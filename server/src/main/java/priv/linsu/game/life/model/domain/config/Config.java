package priv.linsu.game.life.model.domain.config;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@JsonNaming(value = PropertyNamingStrategies.KebabCaseStrategy.class)
public class Config {
    private Integer maxNum;
    private String endStatus;
    private ConfigInfo info;
    private ConfigTalent talent;
}
