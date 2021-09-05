package priv.linsu.game.life.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.extern.java.Log;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import priv.linsu.game.life.common.compute.TalentCompute;
import priv.linsu.game.life.common.compute.TextCompute;
import priv.linsu.game.life.common.manager.ScriptManager;
import priv.linsu.game.life.model.domain.Human;
import priv.linsu.game.life.model.domain.talent.TalentContent;
import priv.linsu.game.life.model.dto.SimpleScript;
import priv.linsu.game.life.util.JSONUtils;

import javax.annotation.Resource;
import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
public class MainService {

    @Resource
    ScriptManager scriptManager = new ScriptManager();

    @Resource
    TalentCompute talentCompute = new TalentCompute();
    @Resource
    TextCompute textCompute = new TextCompute();

    /**
     * 生成天赋抽卡信息
     *
     * @param scriptName
     * @return
     * @throws IOException
     */
    public List<TalentContent> createTalents(String scriptName) throws IOException {
        //解析剧本信息
        SimpleScript script = SimpleScript.parseScript(scriptManager.getScript(scriptName));
        return talentCompute.getTalents(script);
    }

    /**
     * 天赋偏移计算
     *
     * @param human
     * @param talents
     */
    public void talentFixUp(Human human, List<TalentContent> talents) throws JsonProcessingException {
        for (TalentContent talent : talents) {
            human.getTalent().add(talent.getName());
            human.fixup(talent.getOffset());
        }
        log.info("计算天赋偏移：{}", JSONUtils.toString(human));
    }

    /**
     * 生成人生记录
     *
     * @param human
     * @param scriptName
     * @return
     * @throws IOException
     */
    public Map<Integer, String> createLifeText(Human human, String scriptName) throws IOException {
        //解析剧本信息
        SimpleScript script = SimpleScript.parseScript(scriptManager.getScript(scriptName));
        Map<Integer, String> lifeText = new LinkedHashMap<>();
        //避免没有终结标识造成死循环
        for (int i = 0; i < script.getSimpleConfig().getMaxNum(); i++) {
            //角色拥有终结标识，结束记录生成
            if (human.getStatus().contains(script.getSimpleConfig().getEndStatus())) {
                break;
            }
            lifeText.put(i, textCompute.createLifeText(human, script));
        }
        return lifeText;
    }

}
