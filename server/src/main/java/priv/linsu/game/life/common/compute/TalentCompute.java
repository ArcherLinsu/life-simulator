package priv.linsu.game.life.common.compute;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import priv.linsu.game.life.common.manager.ScriptManager;
import priv.linsu.game.life.model.domain.Script;
import priv.linsu.game.life.model.domain.talent.Talent;
import priv.linsu.game.life.model.domain.talent.TalentContent;
import priv.linsu.game.life.model.dto.SimpleScript;
import priv.linsu.game.life.util.JSONUtils;
import priv.linsu.game.life.util.RandomUtils;

import java.io.IOException;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

@Component
public class TalentCompute {
    private Set<String> has = new HashSet<>();

    public List<TalentContent> getTalents(SimpleScript simpleScript) {
        List<TalentContent> talents = new LinkedList<>();
        int num = simpleScript.getSimpleConfig().getTalentTotal();
        for (int i = 0; i < num; i++) {
            if (hasTalent(simpleScript.getSimpleConfig().getProbability_leve_3())) {
                talents.add(randTalent(simpleScript.getSimpleTalent().getLevel_3()));
                continue;
            }
            if (hasTalent(simpleScript.getSimpleConfig().getProbability_leve_2())) {
                talents.add(randTalent(simpleScript.getSimpleTalent().getLevel_2()));
                continue;
            }
            talents.add(randTalent(simpleScript.getSimpleTalent().getLevel_1()));
        }
        has.clear();
        return talents;
    }

    private boolean hasTalent(int probability) {
        int seed = RandomUtils.randInt(0, 100);
        return seed <= probability;
    }

    private TalentContent randTalent(List<TalentContent> talentContents) {
        int level = talentContents.get(0).getLevel();
        for (int i = 0; i < talentContents.size(); i++) {
            int seed = RandomUtils.randInt(0, talentContents.size());
            String flag = String.format("%s_%s", level, seed);
            if (!has.contains(flag)) {
                has.add(flag);
                return talentContents.get(seed);
            }
        }
        return null;
    }

    public static void main(String[] args) throws IOException {
        ScriptManager scriptManager = new ScriptManager();
        Script script = scriptManager.getScript("default");
        SimpleScript simpleScript = SimpleScript.parseScript(script);
        List<TalentContent> talents = new TalentCompute().getTalents(simpleScript);
        String json = JSONUtils.om.writeValueAsString(talents);
        System.out.println(JSONUtils.om.readTree(json).toPrettyString());
    }

}
