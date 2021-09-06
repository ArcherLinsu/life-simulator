package priv.linsu.game.life.simulator.model.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import priv.linsu.game.life.simulator.common.manager.ScriptManager;
import priv.linsu.game.life.simulator.model.domain.Script;
import priv.linsu.game.life.simulator.model.domain.config.Config;
import priv.linsu.game.life.simulator.model.domain.config.TalentMake;
import priv.linsu.game.life.simulator.model.domain.talent.Talent;
import priv.linsu.game.life.simulator.model.domain.talent.TalentContent;
import priv.linsu.game.life.simulator.model.domain.text.Text;
import priv.linsu.game.life.simulator.model.domain.text.TextContent;
import priv.linsu.game.life.simulator.util.JSONUtils;

import java.io.IOException;
import java.util.*;

@Getter
@Setter
@Builder
@ToString
public class SimpleScript {
    private SimpleConfig simpleConfig;
    private SimpleTalent simpleTalent;
    private Map<Integer, SimpleText> simpleTexts;

    public static SimpleScript parseScript(Script script) {
        return SimpleScript.builder()
                           .simpleConfig(parseConfig(script.getConfig()))
                           .simpleTalent(parseTalent(script.getTalent()))
                           .simpleTexts(parseText(script.getText()))
                           .build();
    }

    private static SimpleConfig parseConfig(Config config) {
        int probability_leve_1 = 100;
        int probability_leve_2 = 30;
        int probability_leve_3 = 10;
        for (TalentMake talentMake : config.getTalent().getMake()) {
            if (talentMake.getLevel() == 1) {
                probability_leve_1 = talentMake.getProbability();
            }
            if (talentMake.getLevel() == 2) {
                probability_leve_2 = talentMake.getProbability();
            }
            if (talentMake.getLevel() == 3) {
                probability_leve_3 = talentMake.getProbability();
            }
        }
        return SimpleConfig.builder()
                           .info(config.getInfo())
                           .maxNum(Optional.ofNullable(config.getMaxNum()).orElse(100))
                           .endStatus(Optional.ofNullable(config.getEndStatus()).orElse("死亡"))
                           .talentTotal(config.getTalent().getTotal())
                           .probability_leve_1(probability_leve_1)
                           .probability_leve_2(probability_leve_2)
                           .probability_leve_3(probability_leve_3)
                           .build();
    }

    private static SimpleTalent parseTalent(Talent talent) {
        List<TalentContent> level_1 = new LinkedList<>();
        List<TalentContent> level_2 = new LinkedList<>();
        List<TalentContent> level_3 = new LinkedList<>();
        for (TalentContent talentContent : talent.getContent()) {
            if (talentContent.getLevel() == 1) {
                level_1.add(talentContent);
            }
            if (talentContent.getLevel() == 2) {
                level_2.add(talentContent);
            }
            if (talentContent.getLevel() == 3) {
                level_3.add(talentContent);
            }
        }
        return SimpleTalent.builder()
                           .level_1(level_1)
                           .level_2(level_2)
                           .level_3(level_3)
                           .build();
    }

    private static Map parseText(Text text) {
        Map<Integer, SimpleText> simpleTexts = new HashMap<>();
        for (TextContent textContent : text.getContent()) {
            if (simpleTexts.get(textContent.getId()) == null) {
                LinkedList<TextContent> contents = new LinkedList<>();
                contents.add(textContent);
                simpleTexts.put(textContent.getId(), SimpleText.builder().contents(contents).nextId(textContent.getNextId()).build());
                continue;
            }
            simpleTexts.get(textContent.getId()).getContents().add(textContent);
        }
        return simpleTexts;
    }

    public static void main(String[] args) throws IOException {
        ScriptManager scriptManager = new ScriptManager();
        Script script = scriptManager.getScript("default");
        SimpleScript simpleScript = SimpleScript.parseScript(script);
        String json = JSONUtils.objectMapper.writeValueAsString(simpleScript);
        System.out.println(JSONUtils.objectMapper.readTree(json).toPrettyString());
    }
}
