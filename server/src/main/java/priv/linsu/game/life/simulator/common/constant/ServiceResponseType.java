package priv.linsu.game.life.simulator.common.constant;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 响应报文统一状态码
 */
@Getter
@AllArgsConstructor
public enum ServiceResponseType {
    /**
     * 响应正常
     */
    SUCCESS("000000", "请求处理成功"),
    /**
     * 响应异常
     */
    FAILURE("100000", "请求处理失败");

    private String code;
    private String desc;

}
