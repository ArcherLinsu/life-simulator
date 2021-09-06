package priv.linsu.game.life.simulator.model.domain.text;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonNaming(value = PropertyNamingStrategies.KebabCaseStrategy.class)
public class Condition {
    private ConditionEqual equal;
    private ConditionLessThan lessThan;
    private ConditionGreaterThan greaterThan;
}
