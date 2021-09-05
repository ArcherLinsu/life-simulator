package priv.linsu.game.life.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import priv.linsu.game.life.model.domain.Human;
import priv.linsu.game.life.model.vo.Request;
import priv.linsu.game.life.model.vo.Response;
import priv.linsu.game.life.service.MainService;

import javax.annotation.Resource;
import java.io.IOException;
import java.util.Map;

@Slf4j
@RestController
@CrossOrigin
@RequestMapping("/life_simulation")
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
    public Response createTalents(@RequestHeader Map<String, String> header, @RequestBody Request request) throws IOException {
        return Response.builder()
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
    public Response createLifeTexts(@RequestHeader Map<String, String> header, @RequestBody Request request) throws IOException {
        //创建一个随机人物
        Human human = Human.createByRandom();
        //天赋偏移计算
        mainService.talentFixUp(human, request.getSelectTalents());
        return Response.builder()
                       .lifeTexts(mainService.createLifeText(human, request.getScriptName()))
                       .build();
    }
}
