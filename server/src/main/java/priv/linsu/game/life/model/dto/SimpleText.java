package priv.linsu.game.life.model.dto;

import lombok.*;
import priv.linsu.game.life.model.domain.text.TextContent;

import java.util.List;

@Getter
@Setter
@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class SimpleText {
    private List<TextContent> contents;
    private int nextId;
}
