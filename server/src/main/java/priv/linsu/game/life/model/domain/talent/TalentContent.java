package priv.linsu.game.life.model.domain.talent;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import priv.linsu.game.life.model.domain.offset.Offset;

@Getter
@Setter
@ToString
public class TalentContent {
    private int level;
    private String name;
    private String desc;
    private Offset offset;
}
