package priv.linsu.game.life.simulator.model.domain.talent;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import priv.linsu.game.life.simulator.model.domain.offset.Offset;

@Getter
@Setter
@ToString
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class TalentContent {
    private int level;
    private String name;
    private String desc;
    private Offset offset;
}
