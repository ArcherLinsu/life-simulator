package priv.linsu.game.life.simulator.model.vo;

import lombok.*;
import lombok.extern.slf4j.Slf4j;
import priv.linsu.game.life.simulator.common.constant.ServiceResponseType;
import priv.linsu.game.life.simulator.common.exception.BaseException;

/**
 * 服务统一响应实体
 */
@Slf4j
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ServiceResponse {
    private String code;
    private String msg;
    private Object data;

    public static ServiceResponse buildSuccess() {
        return ServiceResponse.builder()
                              .code(ServiceResponseType.SUCCESS.getCode())
                              .msg(ServiceResponseType.SUCCESS.getDesc())
                              .build();
    }

    public static ServiceResponse buildSuccess(Object data) {
        return ServiceResponse.builder()
                              .code(ServiceResponseType.SUCCESS.getCode())
                              .msg(ServiceResponseType.SUCCESS.getDesc())
                              .data(data)
                              .build();
    }

    public static ServiceResponse buildFailure() {
        return ServiceResponse.builder()
                              .code(ServiceResponseType.FAILURE.getCode())
                              .msg(ServiceResponseType.FAILURE.getDesc())
                              .build();
    }

    public static ServiceResponse buildFailure(BaseException e) {
        return ServiceResponse.builder()
                              .code(e.getCode())
                              .msg(e.getMessage())
                              .build();
    }

}
