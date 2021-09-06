package priv.linsu.game.life.simulator.common.spring.advice;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import priv.linsu.game.life.simulator.common.exception.BusinessException;
import priv.linsu.game.life.simulator.common.exception.ValidateException;
import priv.linsu.game.life.simulator.model.vo.ServiceResponse;

/**
 * 全局异常捕获，统一处理器
 */
@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

    /**
     * 校验异常处理
     *
     * @param e
     * @return ServiceResponse
     */
    @ExceptionHandler(value = ValidateException.class)
    public ServiceResponse validateExceptionHandler(ValidateException e) {
        log.error(e.getMessage(), e);
        return ServiceResponse.buildFailure(e);
    }

    /**
     * 业务异常处理
     *
     * @param e
     * @return ServiceResponse
     */
    @ExceptionHandler(value = BusinessException.class)
    public ServiceResponse businessExceptionHandler(BusinessException e) {
        log.error(e.getMessage(), e);
        return ServiceResponse.buildFailure(e);
    }

    /**
     * 未知异常处理
     *
     * @param e
     * @return ServiceResponse
     */
    @ExceptionHandler(value = Exception.class)
    public ServiceResponse otherExceptionHandler(Exception e) {
        log.error(e.getMessage(), e);
        return ServiceResponse.buildFailure();
    }

}
