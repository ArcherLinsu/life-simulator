package priv.linsu.game.life.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;

public class JSONUtils {
    public static ObjectMapper om = new ObjectMapper();

    @SneakyThrows
    public static String toString(Object o){
        return om.writeValueAsString(o);
    }
}
