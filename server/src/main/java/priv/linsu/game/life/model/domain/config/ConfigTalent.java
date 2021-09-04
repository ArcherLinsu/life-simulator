package priv.linsu.game.life.model.domain.config;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class ConfigTalent {
    private int total;
    private int select;
    private List<TalentMake> make;
}
