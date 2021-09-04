package priv.linsu.game.life.model.vo;

import lombok.Getter;
import lombok.Setter;
import priv.linsu.game.life.model.domain.talent.TalentContent;

import java.util.List;

@Getter
@Setter
public class Request {
    private String scriptName;
    private List<TalentContent> selectTalents;
}
