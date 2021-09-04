package priv.linsu.game.life.model.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import priv.linsu.game.life.model.domain.talent.TalentContent;

import java.util.List;

@Getter
@Setter
@Builder
@ToString
public class SimpleTalent {
    private List<TalentContent> level_1;
    private List<TalentContent> level_2;
    private List<TalentContent> level_3;
}
