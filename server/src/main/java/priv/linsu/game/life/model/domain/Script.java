package priv.linsu.game.life.model.domain;

import lombok.*;
import priv.linsu.game.life.model.domain.config.Config;
import priv.linsu.game.life.model.domain.talent.Talent;
import priv.linsu.game.life.model.domain.text.Text;

@Getter
@Setter
@Builder
@ToString
@AllArgsConstructor
public class Script {
    private Config config;
    private Talent talent;
    private Text text;
}
