package priv.linsu.game.life.controller;

import lombok.extern.java.Log;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import priv.linsu.game.life.model.domain.Human;
import priv.linsu.game.life.model.vo.Request;
import priv.linsu.game.life.model.vo.Response;
import priv.linsu.game.life.service.MainService;
import priv.linsu.game.life.util.JSONUtils;

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

    @PostMapping("/talents")
    public Response createTalents(@RequestHeader Map<String, String> header, @RequestBody Request request) throws IOException {
        log.info("请求体：{}", JSONUtils.toString(request));
        return Response.builder()
                       .talents(mainService.createTalents(request.getScriptName()))
                       .build();
    }

    @PostMapping("/lifeTexts")
    public Response createLifeTexts(@RequestHeader Map<String, String> header, @RequestBody Request request) throws IOException {
        Human human = Human.createByRandom();
        mainService.talentFixUp(human, request.getSelectTalents());
        return Response.builder()
                       .lifeTexts(mainService.createLifeText(human, request.getScriptName()))
                       .build();
    }
}
