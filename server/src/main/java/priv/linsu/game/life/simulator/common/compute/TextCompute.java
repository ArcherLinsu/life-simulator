package priv.linsu.game.life.simulator.common.compute;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.google.common.base.Strings;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import priv.linsu.game.life.simulator.model.domain.Human;
import priv.linsu.game.life.simulator.model.domain.offset.Offset;
import priv.linsu.game.life.simulator.model.domain.text.*;
import priv.linsu.game.life.simulator.model.dto.SimpleScript;
import priv.linsu.game.life.simulator.model.dto.SimpleText;
import priv.linsu.game.life.simulator.util.JSONUtils;
import priv.linsu.game.life.simulator.util.RandomUtils;

import java.util.LinkedList;
import java.util.List;
import java.util.Objects;

/**
 * 人生记录生成
 */
@Slf4j
@Component
public class TextCompute {
    private static final String Separator = ",";

    /**
     * 生成一条人生记录
     *
     * @param human
     * @param simpleScript
     * @return
     */
    public String createLifeText(Human human, SimpleScript simpleScript) throws JsonProcessingException {
        //获取角色所在时间点的剧本信息
        SimpleText simpleText = simpleScript.getSimpleTexts().get(human.getCurrentId());
        if (simpleText == null) {
            return "";
        }
        //获取当前时间点所有可选的故事点
        List<TextContent> meetConditionText = new LinkedList<>();
        for (TextContent content : simpleText.getContents()) {
            Condition condition = content.getCondition();
            if (Objects.isNull(condition)) {
                meetConditionText.add(content);
                continue;
            }
            boolean equal = Objects.isNull(condition.getEqual()) || meetEqual(human, condition.getEqual());
            boolean lessThan = Objects.isNull(condition.getLessThan()) || meetLessThan(human, condition.getLessThan());
            boolean greaterThan = Objects.isNull(condition.getGreaterThan()) || meetGreaterThan(human, condition.getGreaterThan());
            if (equal && lessThan && greaterThan) {
                meetConditionText.add(content);
            }
        }
        //没有可选的故事点
        if (meetConditionText.size() < 1) {
            return "";
        }
        int seed = RandomUtils.randInt(0, meetConditionText.size());
        TextContent textContent = meetConditionText.get(seed);
        log.debug("故事点：{}", JSONUtils.toString(textContent));
        //设置该故事点对角色属性的偏移数据
        Offset offset = Objects.isNull(textContent.getOffset()) ? new Offset() : textContent.getOffset();
        offset.setCurrentId(textContent.getNextId());
        human.fixup(offset);
        log.info("计算故事点偏移：{}", JSONUtils.toString(human));
        return textContent.getDesc();
    }

    /**
     * 是否满足匹配条件
     *
     * @param human
     * @param equal
     * @return
     */
    private boolean meetEqual(Human human, ConditionEqual equal) {
        //没有匹配条件
        if (equal == null) {
            return true;
        }
        if (equal.getAge() != null && human.getAge() != equal.getAge()) {
            return false;
        }
        if (equal.getConstitution() != null && human.getConstitution() != equal.getConstitution()) {
            return false;
        }
        if (equal.getIntelligence() != null && human.getIntelligence() != equal.getIntelligence()) {
            return false;
        }
        if (equal.getLuck() != null && human.getLuck() != equal.getLuck()) {
            return false;
        }
        if (equal.getAppearance() != null && human.getAppearance() != equal.getAppearance()) {
            return false;
        }
        if (equal.getWealth() != null && human.getWealth() != equal.getWealth()) {
            return false;
        }
        if (equal.getPower() != null && human.getPower() != equal.getPower()) {
            return false;
        }
        if (equal.getCurrentId() != null && human.getCurrentId() != equal.getCurrentId()) {
            return false;
        }
        if (!Strings.isNullOrEmpty(equal.getStatus())) {
            //单个状态条件匹配
            if (!equal.getStatus().contains(Separator) && !human.getStatus().contains(equal.getStatus())) {
                return false;
            }
            //多个状态条件匹配
            for (String status : equal.getStatus().split(Separator)) {
                if (!human.getStatus().contains(status)) {
                    return false;
                }
            }
        }
        if (!Strings.isNullOrEmpty(equal.getTalent())) {
            if (!equal.getTalent().contains(Separator) && !human.getTalent().contains(equal.getTalent())) {
                return false;
            }
            for (String talent : equal.getTalent().split(Separator)) {
                if (!human.getTalent().contains(talent)) {
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * 是否满足低于的条件
     *
     * @param human
     * @param lessThan
     * @return
     */
    private boolean meetLessThan(Human human, ConditionLessThan lessThan) {
        if (lessThan == null) {
            return true;
        }
        if (lessThan.getAge() != null && human.getAge() > lessThan.getAge()) {
            return false;
        }
        if (lessThan.getConstitution() != null && human.getConstitution() > lessThan.getConstitution()) {
            return false;
        }
        if (lessThan.getIntelligence() != null && human.getIntelligence() > lessThan.getIntelligence()) {
            return false;
        }
        if (lessThan.getLuck() != null && human.getLuck() > lessThan.getLuck()) {
            return false;
        }
        if (lessThan.getAppearance() != null && human.getAppearance() > lessThan.getAppearance()) {
            return false;
        }
        if (lessThan.getWealth() != null && human.getWealth() > lessThan.getWealth()) {
            return false;
        }
        if (lessThan.getPower() != null && human.getPower() > lessThan.getPower()) {
            return false;
        }
        return true;
    }

    /**
     * 是否满足高于的条件
     *
     * @param human
     * @param greaterThan
     * @return
     */
    private boolean meetGreaterThan(Human human, ConditionGreaterThan greaterThan) {
        if (greaterThan == null) {
            return true;
        }
        if (greaterThan.getAge() != null && human.getAge() < greaterThan.getAge()) {
            return false;
        }
        if (greaterThan.getConstitution() != null && human.getConstitution() < greaterThan.getConstitution()) {
            return false;
        }
        if (greaterThan.getIntelligence() != null && human.getIntelligence() < greaterThan.getIntelligence()) {
            return false;
        }
        if (greaterThan.getLuck() != null && human.getLuck() < greaterThan.getLuck()) {
            return false;
        }
        if (greaterThan.getAppearance() != null && human.getAppearance() < greaterThan.getAppearance()) {
            return false;
        }
        if (greaterThan.getWealth() != null && human.getWealth() < greaterThan.getWealth()) {
            return false;
        }
        if (greaterThan.getPower() != null && human.getPower() < greaterThan.getPower()) {
            return false;
        }
        return true;
    }
}
