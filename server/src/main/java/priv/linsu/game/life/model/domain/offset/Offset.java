package priv.linsu.game.life.model.domain.offset;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonNaming(value = PropertyNamingStrategies.KebabCaseStrategy.class)
public class Offset {
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
    //状态
    private OffsetStatus status;
}
