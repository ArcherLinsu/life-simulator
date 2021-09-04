package priv.linsu.game.life.util;

import java.util.Random;

public class RandomUtils {
    public static Random random = new Random();

    public static int randInt(int min, int max) {
        return random.nextInt(max) + min;
    }

}
