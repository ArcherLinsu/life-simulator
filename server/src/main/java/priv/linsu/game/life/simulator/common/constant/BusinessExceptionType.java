package priv.linsu.game.life.simulator.common.constant;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 业务异常
 */
@Getter
@AllArgsConstructor
public enum BusinessExceptionType {
    BUSINESS_ERROR("S100001", "服务异常"),
    REQUEST_VALIDATE_ERROR("S100002", "请求数据校验异常"),
    BUSINESS_VALIDATE_ERROR("S100003", "业务数据校验异常");
    private String code;
    private String desc;
}
