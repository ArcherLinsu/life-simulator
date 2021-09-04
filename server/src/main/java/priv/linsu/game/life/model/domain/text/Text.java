package priv.linsu.game.life.model.domain.text;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class Text {
    private String dir;
    private String include;
    private List<TextContent> content;
}
