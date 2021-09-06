package priv.linsu.game.life.simulator.model.vto;

import lombok.Getter;
import lombok.Setter;
import priv.linsu.game.life.simulator.model.domain.talent.TalentContent;

import java.util.List;

@Getter
@Setter
public class LifeRequest {
    private String scriptName;
    private List<TalentContent> selectTalents;
}
