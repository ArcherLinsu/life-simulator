package priv.linsu.game.life.model.domain.text;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class ConditionEqual {
    //岁数
    private Integer age;
    //体质
    private Integer constitution;
    //智力
    private Integer intelligence;
    //运气
    private Integer luck;
    //容貌
    private Integer appearance;
    //财富
    private Integer wealth;
    //权力
    private Integer power;
    //时间节点
    private Integer currentId;
    private String status;
    private String talent;
}
