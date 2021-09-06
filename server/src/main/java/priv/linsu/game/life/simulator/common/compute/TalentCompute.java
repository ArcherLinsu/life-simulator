package priv.linsu.game.life.simulator.common.compute;

import org.springframework.stereotype.Component;
import priv.linsu.game.life.simulator.model.domain.talent.TalentContent;
import priv.linsu.game.life.simulator.model.dto.SimpleScript;
import priv.linsu.game.life.simulator.util.RandomUtils;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

/**
 * 天赋生成计算
 */
@Component
public class TalentCompute {
    //记录天赋是否已经抽取过
    private Set<String> used = Collections.newSetFromMap(new ConcurrentHashMap<>());

    public List<TalentContent> getTalents(SimpleScript simpleScript) {
        List<TalentContent> talents = new LinkedList<>();
        //获取一次抽卡的最大数
        int num = simpleScript.getSimpleConfig().getTalentTotal();
        for (int i = 0; i < num; i++) {
            //如果抽到三级卡，本次结束
            if (gacha(simpleScript.getSimpleConfig().getProbability_leve_3())) {
                talents.add(randTalent(simpleScript.getSimpleTalent().getLevel_3()));
                continue;
            }
            //如果抽到二级卡，本次结束
            if (gacha(simpleScript.getSimpleConfig().getProbability_leve_2())) {
                talents.add(randTalent(simpleScript.getSimpleTalent().getLevel_2()));
                continue;
            }
            //如果都没抽到，随机获取一个一级卡
            talents.add(randTalent(simpleScript.getSimpleTalent().getLevel_1()));
        }
        //清理已使用缓存
        used.clear();
        return talents;
    }

    /**
     * 抽卡
     *
     * @param probability
     * @return
     */
    private boolean gacha(int probability) {
        int seed = RandomUtils.randInt(0, 100);
        return seed <= probability;
    }

    /**
     * 从卡池中随机抽取一张
     *
     * @param talentContents
     * @return
     */
    private TalentContent randTalent(List<TalentContent> talentContents) {
        //获取卡池等级
        int level = talentContents.get(0).getLevel();
        for (int i = 0; i < talentContents.size(); i++) {
            //获取抽卡种子
            int seed = RandomUtils.randInt(0, talentContents.size());
            String flag = String.format("%s_%s", level, seed);
            //如果该卡没抽取过，结束
            if (!used.contains(flag)) {
                used.add(flag);
                return talentContents.get(seed);
            }
        }
        return null;
    }
}
