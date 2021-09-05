# 人生模拟器 - 自定义剧本版

本项目是受[VickScarlet/lifeRestart: やり直すんだ。そして、次はうまくやる。 (github.com)](https://github.com/VickScarlet/lifeRestart)的启发，完全重写的一个可进行自定义剧本创作的文字版人生模拟器框架。

本项目主要目的是提供一个通用的服务进行不同剧本演绎，避免改动代码的悲剧。

目前对剧本进行演绎的基础算法是：以**时间线+故事点**的方式进行推进。即要在一个时间点上编写不同的故事点，系统会在符合条件的故事点中随机选择一个，然后将时间点推进到该故事点指向的下一个时间点。因此理论上剧情的多样性（怪异性）只取决于编写人的脑洞。

目前还没确定好怎么自主上传剧本，如果想要将剧本上传到服务端，请先提交PR把剧本放到`sript`目录下，我会不定期更新，或者直接联系我本人也行。

当然有小伙伴反馈json文件编写不太方便（尤其是非码农同学），所以正在考虑更换更简单的方式来写剧本。

因为是本人是后端开发选手，写前端简直是人类的灾难，界面就凑合看吧……

## 1 项目部署

本项目分为服务端和客户端两部，服务端由java11+springboot编写，现在还没整理好代码，整理好之后，直接pull下来应该就能编译打包（猜的，反正跑不起来就是环境问题）。

客户端是H5页面，用bootstrap+jquery编写，实在不会写前端，就这样吧。

## 2 剧本编写指南

剧本模板在`script/template`目录下。

一个剧本对应一个目录，互相独立，目录下必须具备如下结构：

- demo
  - config.json（总配置）
  - talent.json（天赋信息总配置）
  - text.json（剧本信息总配置）
  - text（用来存放多个剧本；文件夹和下面的文件可自定义名称，只要写在总配置里就行，最好先别用中文）
  - talent（用来存放多个剧本；文件夹和下面的文件可自定义名称，只要写在总配置里就行，最好先别用中文）

### 2.1 人物属性说明

人物属性是随机分配的，暂时不可改，计划调整成可更改。

|     字段     |    说明    |  备注   |
| :----------: | :--------: | :-----: |
|     age      |    岁数    | 初始为0 |
| constitution |    体质    |         |
| intelligence |    智力    |         |
|     luck     |    运气    |         |
|  appearance  |    容貌    |         |
|    power     |    权力    | 初始为0 |
|    wealth    |    财富    | 初始为0 |
|  currentId   | 当前时间点 | 初始为0 |
|    status    |    状态    |         |
|    talent    |    天赋    |         |

### 2.2 整体配置编写

在`config.json`文件中编写对于剧本整体的一些设置。

- info：填写剧本信息，用来显示在页面上
  - name：剧本名称
  - author：作者
  - version：版本
- max-num：在没有结束标识的情况下，最多生成几条人生记录
- end-status：如果人物拥有指定的状态，则结束人生
- talent：天赋卡池配置
  - total：配置每次抽卡总共从天赋卡池中获取几张天赋卡
  - select：配置每次能从抽取到的天赋卡中选择几项
  - make：配置抽卡概率
    - level：配置天赋卡级别
    - probability：配置该级别天赋卡抽取到的概率，最大100%（即每次都能从该等级的卡中随机抽取一张，除非有更高级的被抽中）；

```json
{
  "info": {
    "name": "示例剧本",
    "author": "林苏",
    "version": "1.0"
  },
  "max-num": 50,
  "end-status": "死亡",
  "talent": {
    "total": 10,
    "select": 3,
    "make": [
      {
        "level": 1,
        "probability": 100
      },
      {
        "level": 2,
        "probability": 20
      },
      {
        "level": 3,
        "probability": 10
      }
    ]
  }
}
```

### 2.3 天赋编写

可以在`talent.json`文件中设置所有天赋信息，推荐单独建立一个文件夹分开编写，词条等级共1、2、3三级，暂不可自定义；

- dir：配置天赋卡文本所在目录
- include：配置包含哪些天赋卡文本（没有填写的文件则不加入系统）

```json
{
  "dir": "talent",
  "include": "level-1,level-2,level-3"
}
```

- level：配置天赋卡级别
- name：配置该天赋卡名称
- desc：配置该天赋卡说明
- offset：配置天赋卡对于人物属性的影响；如果是增加，对应属性写正数；如果是降低，对应属性写负数；如果是添加状态，根据示例填写（对于状态（status）的处理计划调整的更简单一些）

```json
{
  "content": [
    {
      "level": 1,
      "name": "天赋1-1",
      "desc": "智力+4，体质-2",
      "offset": {
        "constitution": -2,
        "intelligence": 4
      }
    },
    {
      "level": 1,
      "name": "天赋1-2",
      "desc": "体质+4",
      "offset": {
        "constitution": 4
      }
    },
    {
      "level": 1,
      "name": "天赋1-3",
      "desc": "运气+5",
      "offset": {
        "luck": 5,
        "status": {
          "add": "幸运护符",
          "delete":"噩运连连"
        }
      }
    }
  ]
}
```

### 2.4 剧本编写

在`text.json`文件配置剧本信息，具体的内容推荐为了清晰独建立一个文件夹管理且按照时间点分类。

- dir：配置剧本文本所在目录
- include：配置包含哪些剧本文本（没有填写的文件则不加入系统）

```json
{
  "dir": "text",
  "include": "time-01,time-02"
}
```

- id：配置故事点所在时间点的编号
- next-id：配置该故事点下一个时间点的编号
- desc：编写该故事点内容
- condition：配置触发该故事点的条件
  - equal：配置必须完全对应的条件（状态和天赋如果有多个，用英文的逗号`,`分隔）
  - less-than：配置人物指定属性低于一个值的时候触发
  - greater-than：配置人物指定属性高于一个值的时候触发
- offset：配置该故事点对人物属性的影响

```json
{
  "content": [
    {
      "id": 0,
      "next-id": 1,
      "desc": "你出生了，是个普通的男孩",
      "condition": {
        "equal": {
          "status": "",
          "talent": "",
          "constitution":,
          "intelligence":,
          "luck":,
          "appearance":,
          "wealth":,
          "power":,
          "currentId":
        },
        "less-than": {
          "constitution":,
          "intelligence":,
          "luck":,
          "appearance":,
          "wealth":,
          "power":
        },
        "greater-than": {
        }
      },
      "offset": {
        "status": {
          "add": "男孩",
          "delete": ""
        },
        "constitution":,
        "intelligence":,
        "luck":,
        "appearance":,
        "wealth":,
        "power":
      }
    }
  ]
```
