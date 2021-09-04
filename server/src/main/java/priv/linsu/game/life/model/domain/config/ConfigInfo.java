package priv.linsu.game.life.model.domain.config;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ConfigInfo {
    private String name;
    private String author;
    private String version;
}
