package priv.linsu.game.life.service;

import org.springframework.stereotype.Service;
import priv.linsu.game.life.common.compute.TalentCompute;
import priv.linsu.game.life.common.compute.TextCompute;
import priv.linsu.game.life.common.manager.ScriptManager;
import priv.linsu.game.life.model.domain.Human;
import priv.linsu.game.life.model.domain.talent.TalentContent;
import priv.linsu.game.life.model.dto.SimpleScript;

import javax.annotation.Resource;
import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Service
public class MainService {

    @Resource
    ScriptManager scriptManager = new ScriptManager();

    @Resource
    TalentCompute talentCompute = new TalentCompute();
    @Resource
    TextCompute textCompute = new TextCompute();

    public List<TalentContent> createTalents(String scriptName) throws IOException {
        SimpleScript script = SimpleScript.parseScript(scriptManager.getScript(scriptName));
        return talentCompute.getTalents(script);
    }

    public void talentFixUp(Human human, List<TalentContent> talents) {
        for (TalentContent talent : talents) {
            human.getTalent().add(talent.getName());
            human.fixup(talent.getOffset());
        }
    }

    public Map<Integer, String> createLifeText(Human human, String scriptName) throws IOException {
        SimpleScript script = SimpleScript.parseScript(scriptManager.getScript(scriptName));
        Map<Integer, String> lifeText = new LinkedHashMap<>();
        for (int i = 0; i < script.getSimpleConfig().getMaxNum(); i++) {
            if (human.getStatus().contains(script.getSimpleConfig().getEndStatus())) {
                break;
            }
            lifeText.put(i, textCompute.getText(human, script));
        }
        return lifeText;
    }

}
