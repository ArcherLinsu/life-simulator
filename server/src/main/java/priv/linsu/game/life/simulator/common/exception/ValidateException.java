package priv.linsu.game.life.simulator.common.exception;

/**
 * 校验异常
 */
public class ValidateException extends BaseException {

    public ValidateException(Throwable e) {
        super(e);
    }

    public ValidateException(String code, String message) {
        super(code, message);
    }

    public ValidateException(String code, String message, Throwable e) {
        super(code, message, e);
    }

}
