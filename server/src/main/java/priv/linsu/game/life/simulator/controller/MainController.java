package priv.linsu.game.life.simulator.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import priv.linsu.game.life.simulator.model.domain.Human;
import priv.linsu.game.life.simulator.model.vto.LifeRequest;
import priv.linsu.game.life.simulator.model.vto.LifeResponse;
import priv.linsu.game.life.simulator.service.MainService;
import priv.linsu.game.life.simulator.util.JSONUtils;

import javax.annotation.Resource;
import java.io.IOException;
import java.util.Map;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/life-simulation")
public class MainController {

    @Resource
    MainService mainService;

    /**
     * 生成天赋抽卡信息
     *
     * @param header
     * @param request
     * @return
     * @throws IOException
     */
    @PostMapping("/talents")
    public LifeResponse createTalents(@RequestHeader Map<String, String> header, @RequestBody LifeRequest request) throws IOException {
        return LifeResponse.builder()
                           .talents(mainService.createTalents(request.getScriptName()))
                           .build();
    }

    /**
     * 生成人生记录
     *
     * @param header
     * @param request
     * @return
     * @throws IOException
     */
    @PostMapping("/lifeTexts")
    public LifeResponse createLifeTexts(@RequestHeader Map<String, String> header, @RequestBody LifeRequest request) throws IOException {
        //创建一个随机人物
        Human human = Human.createByRandom();
        log.info("生成人物信息：{}", JSONUtils.toString(human));
        //天赋偏移计算
        mainService.talentFixUp(human, request.getSelectTalents());
        return LifeResponse.builder()
                           .lifeTexts(mainService.createLifeText(human, request.getScriptName()))
                           .build();
    }
}
