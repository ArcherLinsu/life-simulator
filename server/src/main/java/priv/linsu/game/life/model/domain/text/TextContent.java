package priv.linsu.game.life.model.domain.text;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import priv.linsu.game.life.model.domain.offset.Offset;

@Getter
@Setter
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonNaming(value = PropertyNamingStrategies.KebabCaseStrategy.class)
public class TextContent {
    private int id;
    private int nextId;
    private String desc;
    private Condition condition;
    private Offset offset;
}
