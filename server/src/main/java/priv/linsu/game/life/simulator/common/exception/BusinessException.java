package priv.linsu.game.life.simulator.common.exception;

/**
 * 业务异常
 */
public class BusinessException extends BaseException {

    public BusinessException(Throwable e) {
        super(e);
    }

    public BusinessException(String code, String message) {
        super(code, message);
    }

    public BusinessException(String code, String message, Throwable e) {
        super(code, message, e);
    }

}
