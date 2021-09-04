package priv.linsu.game.life.common.manager;

import com.google.common.base.Strings;
import org.springframework.stereotype.Component;
import priv.linsu.game.life.model.domain.Script;
import priv.linsu.game.life.model.domain.config.Config;
import priv.linsu.game.life.model.domain.talent.Talent;
import priv.linsu.game.life.model.domain.text.Text;
import priv.linsu.game.life.util.JSONUtils;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.LinkedList;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class ScriptManager {

    private static final String PathTemplate = "script/%s/%s.json";
    private static final String PathWithDirTemplate = "script/%s/%s/%s.json";

    private Map<String, Script> localCache = new ConcurrentHashMap<>();

    public Script getScript(String scriptName) throws IOException {
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

    public Config getConfig(String scriptName) throws IOException {
        String filePath = String.format("script/%s/config.json", scriptName);
        return JSONUtils.om.readValue(Files.newInputStream(Paths.get(filePath)), Config.class);
    }

    public Talent getTalent(String scriptName) throws IOException {
        String filePath = String.format("script/%s/talent.json", scriptName);
        Talent talent = JSONUtils.om.readValue(Files.newInputStream(Paths.get(filePath)), Talent.class);
        if (talent.getContent() == null) {
            talent.setContent(new LinkedList<>());
        }
        if (!Strings.isNullOrEmpty(talent.getInclude())) {
            if (!Strings.isNullOrEmpty(talent.getDir())) {
                for (String fileName : talent.getInclude().split(",")) {
                    String filePathTemp = String.format(PathWithDirTemplate, scriptName, talent.getDir(), fileName);
                    Talent talentTemp = JSONUtils.om.readValue(Files.newInputStream(Paths.get(filePathTemp)), Talent.class);
                    if (talentTemp.getContent() != null) {
                        talent.getContent().addAll(talentTemp.getContent());
                    }

                }
            } else {
                for (String fileName : talent.getInclude().split(",")) {
                    String filePathTemp = String.format(PathTemplate, scriptName, fileName);
                    Talent talentTemp = JSONUtils.om.readValue(Files.newInputStream(Paths.get(filePathTemp)), Talent.class);
                    if (talentTemp.getContent() != null) {
                        talent.getContent().addAll(talentTemp.getContent());
                    }
                }
            }

        }
        return talent;
    }

    public Text getText(String scriptName) throws IOException {
        String filePath = String.format("script/%s/text.json", scriptName);
        Text text = JSONUtils.om.readValue(Files.newInputStream(Paths.get(filePath)), Text.class);
        if (text.getContent() == null) {
            text.setContent(new LinkedList<>());
        }
        if (!Strings.isNullOrEmpty(text.getInclude())) {
            if (!Strings.isNullOrEmpty(text.getDir())) {
                for (String fileName : text.getInclude().split(",")) {
                    String filePathTemp = String.format(PathWithDirTemplate, scriptName, text.getDir(), fileName);
                    Text textTemp = JSONUtils.om.readValue(Files.newInputStream(Paths.get(filePathTemp)), Text.class);
                    if (textTemp.getContent() != null) {
                        text.getContent().addAll(textTemp.getContent());
                    }
                }
            } else {
                for (String fileName : text.getInclude().split(",")) {
                    String filePathTemp = String.format(PathTemplate, scriptName, fileName);
                    Text textTemp = JSONUtils.om.readValue(Files.newInputStream(Paths.get(filePathTemp)), Text.class);
                    if (textTemp.getContent() != null) {
                        text.getContent().addAll(textTemp.getContent());
                    }
                }
            }
        }
        return text;
    }

    public static void main(String[] args) throws IOException {
        ScriptManager scriptManager = new ScriptManager();
        System.out.println(scriptManager.getText("template").toString());
//        Script script = scriptManager.getScript("template");
//        String json = JSONUtils.om.writeValueAsString(script);
//        System.out.println(JSONUtils.om.readTree(json).toPrettyString());
    }
}
