package priv.linsu.game.life.simulator.common.spring.aop;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import priv.linsu.game.life.simulator.util.JSONUtils;

import javax.servlet.http.HttpServletRequest;

/**
 * Controller层日志记录AOP
 */
@Slf4j
@Aspect
@Component
@Order(1)
public class LoggerAOP {

    @Before(value = "execution(public * priv.linsu.game.life.simulator.controller.*.*(..))")
    public void beforeControllers(JoinPoint joinPoint) throws JsonProcessingException {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        Object[] args = joinPoint.getArgs();
        String apiName = request.getRequestURI();
        log.info("请求接口：{}", apiName);
        for (Object arg : args) {
            log.info("请求参数：{}", JSONUtils.toString(arg));
        }
    }

}
