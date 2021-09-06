package priv.linsu.game.life.simulator.model.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.google.common.base.Strings;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;
import priv.linsu.game.life.simulator.model.domain.offset.Offset;
import priv.linsu.game.life.simulator.util.RandomUtils;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

/**
 * 人物实体
 */
@Slf4j
@Getter
@Setter
@Builder
@ToString
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class Human {
    //岁数
    private int age;
    //体质
    private int constitution;
    //智力
    private int intelligence;
    //运气
    private int luck;
    //容貌
    private int appearance;
    //财富
    private int wealth;
    //权力
    private int power;
    //当前时间点
    private int currentId;
    //状态
    private Set<String> status;
    //天赋
    private Set<String> talent;

    /**
     * 属性偏移
     *
     * @param offset
     * @return
     */
    public Human fixup(Offset offset) {
        if (offset != null) {
            this.age += Optional.ofNullable(offset.getAge()).orElse(0);
            this.constitution += Optional.ofNullable(offset.getConstitution()).orElse(0);
            this.intelligence += Optional.ofNullable(offset.getIntelligence()).orElse(0);
            this.luck += Optional.ofNullable(offset.getLuck()).orElse(0);
            this.appearance += Optional.ofNullable(offset.getAppearance()).orElse(0);
            this.wealth += Optional.ofNullable(offset.getWealth()).orElse(0);
            this.power += Optional.ofNullable(offset.getPower()).orElse(0);
            this.currentId = Optional.ofNullable(offset.getCurrentId()).orElse(this.currentId);
            if (offset.getStatus() != null) {
                if (!Strings.isNullOrEmpty(offset.getStatus().getAdd())) {
                    for (String status : offset.getStatus().getAdd().split(",")) {
                        this.status.add(status);
                    }
                }
                if (!Strings.isNullOrEmpty(offset.getStatus().getDelete())) {
                    for (String status : offset.getStatus().getDelete().split(",")) {
                        this.status.remove(status);
                    }
                }
            }
        }
        return this;
    }

    /**
     * 随机生成人物信息
     *
     * @return
     */
    public static Human createByRandom() {
        return Human.builder()
                    .age(0)
                    .constitution(RandomUtils.randInt(0, 10))
                    .intelligence(RandomUtils.randInt(0, 10))
                    .luck(RandomUtils.randInt(0, 10))
                    .appearance(RandomUtils.randInt(0, 10))
                    .currentId(0)
                    .status(new HashSet<>())
                    .talent(new HashSet<>())
                    .build();
    }
}
