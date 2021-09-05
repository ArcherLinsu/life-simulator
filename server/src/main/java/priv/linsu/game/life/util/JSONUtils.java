package priv.linsu.game.life.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JSONUtils {
    public static ObjectMapper om = new ObjectMapper();

    public static String toString(Object o) throws JsonProcessingException {
        return om.writeValueAsString(o);
    }
}
