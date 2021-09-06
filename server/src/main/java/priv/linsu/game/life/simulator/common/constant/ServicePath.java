package priv.linsu.game.life.simulator.common.constant;

import com.google.common.base.Strings;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 用来获取项目路径
 */
@Getter
@AllArgsConstructor
public enum ServicePath {
    /**
     * 当前项目路径
     */
    PROJECT_PATH(Strings.isNullOrEmpty(System.getProperty("project.path")) ? System.getProperty("user.dir") : System.getProperty("project.path"));

    private String path;

}
