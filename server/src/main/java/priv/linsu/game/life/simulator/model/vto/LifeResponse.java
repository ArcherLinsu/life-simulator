package priv.linsu.game.life.simulator.model.vto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import priv.linsu.game.life.simulator.model.domain.Human;
import priv.linsu.game.life.simulator.model.domain.talent.TalentContent;

import java.util.List;
import java.util.Map;

@Getter
@Setter
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class LifeResponse {
    private Human human;
    private List<TalentContent> talents;
    private Map<Integer,String> lifeTexts;
}
