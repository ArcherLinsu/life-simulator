package priv.linsu.game.life.simulator.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JSONUtils {
    public static final ObjectMapper objectMapper = new ObjectMapper();

    public static String toString(Object o) throws JsonProcessingException {
        return objectMapper.writeValueAsString(o);
    }
}
