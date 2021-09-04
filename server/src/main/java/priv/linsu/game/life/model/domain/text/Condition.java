package priv.linsu.game.life.model.domain.text;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@JsonNaming(value = PropertyNamingStrategies.KebabCaseStrategy.class)
public class Condition {
    private ConditionEqual equal;
    private ConditionLessThan lessThan;
    private ConditionGreaterThan greaterThan;
}
