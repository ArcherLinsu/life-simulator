package priv.linsu.game.life.simulator.common.manager;

import com.google.common.base.Strings;
import org.springframework.stereotype.Component;
import priv.linsu.game.life.simulator.common.constant.ServicePath;
import priv.linsu.game.life.simulator.model.domain.Script;
import priv.linsu.game.life.simulator.model.domain.config.Config;
import priv.linsu.game.life.simulator.model.domain.talent.Talent;
import priv.linsu.game.life.simulator.model.domain.text.Text;
import priv.linsu.game.life.simulator.util.JSONUtils;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.LinkedList;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * 剧本管理
 */
@Component
public class ScriptManager {

    private static final String ConfigPathTemplate = ServicePath.PROJECT_PATH.getPath() + "/script/%s/config.json";
    private static final String TalentPathTemplate = ServicePath.PROJECT_PATH.getPath() + "/script/%s/talent.json";
    private static final String TextPathTemplate = ServicePath.PROJECT_PATH.getPath() + "/script/%s/text.json";
    private static final String NoDirPathTemplate = ServicePath.PROJECT_PATH.getPath() + "/script/%s/%s.json";
    private static final String PathWithDirTemplate = ServicePath.PROJECT_PATH.getPath() + "/script/%s/%s/%s.json";

    private Map<String, Script> localCache = new ConcurrentHashMap<>();

    /**
     * 获取原始剧本信息
     *
     * @param scriptName
     * @return
     * @throws IOException
     */
    public Script getScript(String scriptName) throws IOException {
        //先从本地缓存获取
        Script script = localCache.get(scriptName);
        if (script != null) {
            return script;
        }
        script = Script.builder()
                       .config(getConfig(scriptName))
                       .talent(getTalent(scriptName))
                       .text(getText(scriptName))
                       .build();
        localCache.put(scriptName, script);
        return script;

    }

    /**
     * 获取原始剧本配置信息
     *
     * @param scriptName
     * @return
     * @throws IOException
     */
    public Config getConfig(String scriptName) throws IOException {
        String filePath = String.format(ConfigPathTemplate, scriptName);
        return JSONUtils.objectMapper.readValue(Files.newInputStream(Paths.get(filePath)), Config.class);
    }

    /**
     * 获取原始天赋信息
     *
     * @param scriptName
     * @return
     * @throws IOException
     */
    public Talent getTalent(String scriptName) throws IOException {
        String filePath = String.format(TalentPathTemplate, scriptName);
        Talent talent = JSONUtils.objectMapper.readValue(Files.newInputStream(Paths.get(filePath)), Talent.class);
        if (talent.getContent() == null) {
            talent.setContent(new LinkedList<>());
        }
        //解析多个文件
        if (!Strings.isNullOrEmpty(talent.getInclude())) {
            //处理二级目录
            String pathTemplate = NoDirPathTemplate;
            if (!Strings.isNullOrEmpty(talent.getDir())) {
                pathTemplate = String.format(PathWithDirTemplate, "%s", talent.getDir(), "%s");
            }
            for (String fileName : talent.getInclude().split(",")) {
                String filePathTemp = String.format(pathTemplate, scriptName, fileName);
                Talent talentTemp = JSONUtils.objectMapper.readValue(Files.newInputStream(Paths.get(filePathTemp)), Talent.class);
                if (talentTemp.getContent() != null) {
                    talent.getContent().addAll(talentTemp.getContent());
                }
            }
        }
        return talent;
    }

    /**
     * 获取原始剧本信息
     *
     * @param scriptName
     * @return
     * @throws IOException
     */
    public Text getText(String scriptName) throws IOException {
        String filePath = String.format(TextPathTemplate, scriptName);
        Text text = JSONUtils.objectMapper.readValue(Files.newInputStream(Paths.get(filePath)), Text.class);
        if (text.getContent() == null) {
            text.setContent(new LinkedList<>());
        }
        if (!Strings.isNullOrEmpty(text.getInclude())) {
            String pathTemplate = NoDirPathTemplate;
            if (!Strings.isNullOrEmpty(text.getDir())) {
                pathTemplate = String.format(PathWithDirTemplate, "%s", text.getDir(), "%s");
            }
            for (String fileName : text.getInclude().split(",")) {
                String filePathTemp = String.format(pathTemplate, scriptName, fileName);
                Text textTemp = JSONUtils.objectMapper.readValue(Files.newInputStream(Paths.get(filePathTemp)), Text.class);
                if (textTemp.getContent() != null) {
                    text.getContent().addAll(textTemp.getContent());
                }
            }
        }
        return text;
    }
}
