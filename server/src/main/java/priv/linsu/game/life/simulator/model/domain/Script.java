package priv.linsu.game.life.simulator.model.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;
import priv.linsu.game.life.simulator.model.domain.config.Config;
import priv.linsu.game.life.simulator.model.domain.talent.Talent;
import priv.linsu.game.life.simulator.model.domain.text.Text;

@Getter
@Setter
@Builder
@ToString
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class Script {
    private Config config;
    private Talent talent;
    private Text text;
}
