package priv.linsu.game.life.model.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import priv.linsu.game.life.model.domain.config.ConfigInfo;

@Getter
@Setter
@Builder
@ToString
public class SimpleConfig {
    private ConfigInfo info;
    private int maxNum;
    private String endStatus;
    private int talentTotal;
    private int probability_leve_1;
    private int probability_leve_2;
    private int probability_leve_3;
}
