package priv.linsu.game.life.simulator.common.spring.advice;

import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.MethodParameter;
import org.springframework.http.MediaType;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseBodyAdvice;
import priv.linsu.game.life.simulator.model.vo.ServiceResponse;
import priv.linsu.game.life.simulator.util.JSONUtils;

/**
 * 响应报文统一规范处理器
 */
@Slf4j
@RestControllerAdvice
public class UnifiedResponseHandler implements ResponseBodyAdvice {

    @Override
    public boolean supports(MethodParameter returnType, Class converterType) {
        return true;
    }

    @SneakyThrows
    @Override
    public Object beforeBodyWrite(Object returnValue,
                                  MethodParameter returnType, MediaType selectedContentType,
                                  Class selectedConverterType, ServerHttpRequest request, ServerHttpResponse response) {
        log.info("响应数据：{}", JSONUtils.toString(returnValue));
        if (returnValue instanceof ServiceResponse || returnValue instanceof String) {
            return returnValue;
        }
        return ServiceResponse.buildSuccess(returnValue);
    }

}
