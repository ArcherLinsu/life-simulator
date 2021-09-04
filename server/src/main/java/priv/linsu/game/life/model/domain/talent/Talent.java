package priv.linsu.game.life.model.domain.talent;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class Talent {
    private String dir;
    private String include;
    private List<TalentContent> content;
}
