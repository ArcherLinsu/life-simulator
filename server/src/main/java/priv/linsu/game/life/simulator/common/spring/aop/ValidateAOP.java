package priv.linsu.game.life.simulator.common.spring.aop;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import priv.linsu.game.life.simulator.common.validate.RequestValidate;

import javax.annotation.Resource;

/**
 * Controller层请求参数校验AOP
 */
@Slf4j
@Aspect
@Component
@Order(1)
public class ValidateAOP {

    @Resource
    private RequestValidate requestValidate;

    @Before(value = "execution(public * priv.linsu.common.springboot.controller.*.*()) && args())")
    public void beforeControllers() throws JsonProcessingException {
    }

}
