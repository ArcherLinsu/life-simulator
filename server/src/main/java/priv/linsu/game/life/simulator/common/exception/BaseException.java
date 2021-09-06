package priv.linsu.game.life.simulator.common.exception;

/**
 * 基础异常
 */
public class BaseException extends RuntimeException {

    private String code;

    public BaseException(Throwable e) {
        super(e);
    }

    public BaseException(String code, String message) {
        super(message);
        this.code = code;
    }

    public BaseException(String code, String message, Throwable e) {
        super(message, e);
        this.code = code;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

}
