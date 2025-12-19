window.gameData = {
    "start": {
        "image": " ",
        "text": "이건 어떤 이를 소개하고자 만든 퀴즈 게임입니다.\n그리고 지금, 당신은 생판 모르는 누군가를 알기 위해서 기꺼이 자신의 소중한 시간을 쓰려고 하고 있죠.\n(네, 그것도 아무도 안 시켰는데 말입니다.)\n어쩔 수 없네요.\n첫 번째 문제부터 갑니다. \n이 사람은 둘 중에 뭘 더 원할까요?",
        "options": [
            { "text": "인생을 바꿀 묘책", "nextInfo": "start_wrong", "isCorrect": false },
            { "text": "신작 게임", "nextInfo": "start_correct", "isCorrect": true }
        ]
    },

    "start_wrong": {
        "image": " ",
        "text": "아닙니다.\n이 사람은 성장에 관심이 없는 건 아닌데,\n‘이거 하나면 인생이 바뀝니다’ 같은 말은 잘 못 믿습니다.\n방금 당신도 그 말에 가까운 선택을 했습니다.",
        "options": [
            { "text": "아무 일 없던 척 다시", "nextInfo": "start" }
        ]
    },

    "start_correct": {
        "image": " ",
        "text": "정답.\n분명, 신작 게임을 더 원할 겁니다.\n재미 있으면 좋고, 재미 없어도 그냥 넘기지 않습니다.\n‘왜 재미 없지?’ 까지 가는 피곤한 타입입니다.\n그래서 당신의 지금 이 선택도, 이미 관찰 대상입니다.",
        "options": [
            { "text": "괜히 눌렀다", "nextInfo": "next_random" }
        ]
    },

    "q2": {
        "image": " ",
        "text": "이 사람이 좋아할 만한 아이돌은?",
        "options": [
            { "text": "요즘 많이 보이는 팀", "nextInfo": "q2_wrong", "isCorrect": false },
            { "text": "르세라핌", "nextInfo": "q2_correct", "isCorrect": true }
        ]
    },

    "q2_wrong": {
        "image": " ",
        "text": "아닙니다.\n이 사람은 생각보다 한 번 꽂히면 오래 갑니다.\n당신의 선택은 빠르고 가벼웠습니다.\n이 사람은 그걸 맘에 들어하지 않습니다.",
        "options": [
            { "text": "다시 생각해 본다", "nextInfo": "q2" }
        ]
    },

    "q2_correct": {
        "image": "img/fim.png",
        "imageOffsetY": "10%",
        "text": "정답.\n노래도 좋아하지만, 메시지와 태도는 더욱 더 좋습니다.\n최고는 역시 퍼포먼스를 꼽습니다.\n대부분은 그냥 넘길 부분에서\n혼자 진지해지고, 혼자 벅차오릅니다.",
        "options": [
            { "text": "벌써 피곤하다", "nextInfo": "next_random" }
        ]
    },

    "q3": {
        "image": " ",
        "text": "이 사람의 일을 가장 정확하게 말하면?",
        "options": [
            { "text": "(아무튼) 기획자", "nextInfo": "q3_half", "isCorrect": false },
            { "text": "당신이 왜 그런 선택을 했는지 끝까지 캐묻는 사람", "nextInfo": "q3_correct", "isCorrect": true }
        ]
    },

    "q3_half": {
        "image": " ",
        "text": "반만 맞았습니다.\n‘아무튼’이라고 말하는 순간,\n이 사람 머릿속에서는 질문이 몇 개 더 생깁니다.\n지금 당신도 그 중 하나입니다.",
        "options": [
            { "text": "질문으로부터 도망치기", "nextInfo": "q3" }
        ]
    },

    "q3_correct": {
        "image": "",
        "text": "정답.\n네이버 커넥트재단에서 서비스 기획을 합니다.\n쉽게 말하면,\n서비스라는 집의 설계도를 그리는 역할입니다.\n그리고 지금 이 퀴즈도 설계가 좀 과합니다.",
        "options": [
            { "text": "불안하지만 진행", "nextInfo": "next_random" }
        ]
    },

    "q4": {
        "image": " ",
        "text": "이 사람의 집요함이 가장 많이 쓰이는 곳은?",
        "options": [
            { "text": "반려 고양이 일러스트 디테일", "nextInfo": "q4_correct", "isCorrect": true },
            { "text": "할 일 목록 깔끔하게 관리하기", "nextInfo": "q4_wrong", "isCorrect": false }
        ]
    },

    "q4_wrong": {
        "image": " ",
        "text": "아닙니다.\n할 일 목록은 생각보다 지저분하기 그지 없습니다.\n때때론 아예 없습니다.\n대신 반려 고양이 일러스트의 디테일은 절대 안 놓칩니다.\n중요도의 기준이 독특합니다.",
        "options": [
            { "text": "기준을 이해해본다", "nextInfo": "q4" }
        ]
    },

    "q4_correct": {
        "image": "img/hodu.png",
        "text": "정답.\nAI가 입가의 까만 점을 빼먹으면,\n‘아무리 잘 그려도 다시’ 입니다.\n당신의 관찰력은 간신히 통과.",
        "options": [
            { "text": "괜히 안도한다", "nextInfo": "next_random" }
        ]
    },

    "q5": {
        "image": " ",
        "text": "이 사람이 실제로 해본 요리는?",
        "options": [
            { "text": "고등어 스파게티", "nextInfo": "q5_correct", "isCorrect": true },
            { "text": "뵈프 부르기뇽", "nextInfo": "q5_wrong", "isCorrect": false }
        ]
    },

    "q5_wrong": {
        "image": " ",
        "text": "아닙니다.\n이건 과대평가입니다.\n대신 생선을 파스타에 넣는 정도의 용기는 있습니다.\n그리고 그건 당신의 예상보다 맛있을지 모릅니다.",
        "options": [
            { "text": "알 바 아님", "nextInfo": "q5" }
        ]
    },

    "q5_correct": {
        "image": "img/spaghetti.png",
        "imageOffsetY": "center",
        "text": "정답.\n레시피도 결국 유저 플로우라고 생각합니다.\n간은 취향 따라 조절하지만,\n당신의 선택권은 여기까지입니다.",
        "options": [
            { "text": "선택권 없이 계속", "nextInfo": "next_random" }
        ]
    },

    "q6": {
        "image": "",
        "text": "이 사람이 생각하는 기획자의 역할에 가장 가까운 설명은?",
        "options": [
            { "text": "일을 잘 정리해주는 사람", "nextInfo": "q6_wrong", "isCorrect": false },
            { "text": "고개를 끄덕이게 만드는 사람", "nextInfo": "q6_correct", "isCorrect": true }
        ]
    },

    "q6_wrong": {
        "image": "",
        "text": "아쉽습니다.\n정리도 하긴 합니다.\n하지만 정리만 잘 하는게 끝이라면,\n굳이 여기까지 오진 않았을 겁니다.",
        "options": [
            { "text": "납득해보며 다시", "nextInfo": "q6" }
        ]
    },

    "q6_correct": {
        "image": "img/planner.png",
        "text": "정답입니다.\n이 사람이 이 일을 계속 붙잡고 있는 이유도,\n대부분 여기쯤에 있습니다.",
        "options": [
            { "text": "이해는 잘 안 되지만 계속", "nextInfo": "q_end" }
        ]
    },

    "q7": {
        "image": " ",
        "text": "이 사람의 이름에서 비롯된, 본인이 직접 붙인 별명은?",
        "options": [
            { "text": "굴", "nextInfo": "q7_correct", "isCorrect": true },
            { "text": "홍당무", "nextInfo": "q7_wrong", "isCorrect": false }
        ]
    },

    "q7_wrong": {
        "image": " ",
        "text": "아닙니다.\n적어도 그 시절의 별명은 직접 붙이진 않았던 것 같습니다.",
        "options": [
            { "text": "다시 생각해본다", "nextInfo": "q7" }
        ]
    },

    "q7_correct": {
        "image": "img/oyster.png",
        "text": "정답입니다.\n석화는 굴입니다.\n이 사람은 그 사실을 꽤 마음에 들어 하고,\n지금도 종종 별명으로 씁니다.",
        "options": [
            { "text": "정말 특이하네", "nextInfo": "next_random" }
        ]
    },

    "q8": {
        "image": " ",
        "text": "이 사람이 스스로를 설명할 때 자주 꺼내는 단어는?",
        "options": [
            { "text": "완벽주의", "nextInfo": "q8_wrong", "isCorrect": false },
            { "text": "예민함", "nextInfo": "q8_correct", "isCorrect": true }
        ]
    },

    "q8_wrong": {
        "image": " ",
        "text": "아닙니다.\n완벽을 원하진 않습니다.\n다만, 남들보다 그걸 잘 캐치하는 편입니다.\n비슷해 보여도 이 사람은 구분합니다.",
        "options": [
            { "text": "구분해보며 다시", "nextInfo": "q8" }
        ]
    },

    "q8_correct": {
        "image": " ",
        "text": "정답입니다.\n이 사람은 예민함을\n'단점'보다는 '도구'에 가깝게 생각합니다.\n관리만 되면, 꽤 쓸 만하다고 믿습니다.",
        "options": [
            { "text": "도구 취급하면서 다음", "nextInfo": "next_random" }
        ]
    },

    "q9": {
        "image": " ",
        "text": "이 사람이 일을 할 때 중요하게 여기는 것은?",
        "options": [
            { "text": "있어 보이는가", "nextInfo": "q9_wrong", "isCorrect": false },
            { "text": "실제로 쓰이는가", "nextInfo": "q9_correct", "isCorrect": true }
        ]
    },

    "q9_wrong": {
        "image": " ",
        "text": "아닙니다.\n있어 보이는 건 금방 식습니다.\n쓰이지 않으면,\n없는 것과 다를 바 없다고 생각합니다.",
        "options": [
            { "text": "다시 고른다", "nextInfo": "q9" }
        ]
    },

    "q9_correct": {
        "image": "",
        "text": "정답입니다.\n‘있어 보이는 것’보다\n‘실제로 쓰이는 것’이 더 중요하다고 생각합니다.\n당연할지도 모르겠네요.",
        "options": [
            { "text": "그러시던지", "nextInfo": "next_random" }
        ]
    },

    "q_end": {
        "image": " ",
        "text": "이 사람을 한 문장으로 말하자면?\n여기까지 왔다면,\n이제 대충 감은 잡았을 겁니다.",
        "options": [
            { "text": "다재다능한 크리에이터", "nextInfo": "end_roast", "isCorrect": false },
            { "text": "이상한 데서 진지한 사람", "nextInfo": "end_true", "isCorrect": true }
        ]
    },

    "end_true": {
        "image": " ",
        "text": "정답입니다.\n당신은 여기까지 왔고,\n몇 개의 문제를 맞혔습니다.\n이 사람은 여전히 게임을 하고,\n르세라핌의 퍼포먼스를 찾아보고,\n고양이 점 위치에 까다로우며,\n왜 사람들이 버튼을 안 누르는지 고민합니다.\n당신의 삶에는,\n어쨌거나 큰 영향을 주지 않습니다.",
        "options": [
            { "text": "아무 일 없던 척 다시", "nextInfo": "next_random" }
        ]
    },

    "end_roast": {
        "image": " ",
        "text": "‘다재다능’은 아닙니다.\n당신도 몇 개의 문제를 틀렸고,\n이 사람도 그렇게 대단한 사람이 아닙니다.\n그래도 끝까지 왔네요.\n그 점이 제일 수상합니다.",
        "options": [
            { "text": "수상한 채로 다시", "nextInfo": "next_random" }
        ]
    },

    "true_ending": {
        "image": "img/true_ending.png",
        "text": "축하합니다.\n당신은 준비된 모든 퀴즈를 풀었습니다.\n이제 이 사람에 대해 꽤 많이 알게 되었습니다.\n하지만 현실에서 이 사람이,\n당신이 상상하는 그 모습일지는\n솔직히 잘 모르겠네요.",
        "options": [
            { "text": "처음부터 다시", "nextInfo": "reset_all" }
        ]
    },

    "game_over": {
        "image": " ",
        "text": "모든 하트를 잃었습니다. (그런게 있었나?)\n원한다면 다시 시작하세요.",
        "options": [
            { "text": "다시 시작하기", "action": "startGame" }
        ]
    }
};

// 오답 화면에서 쓸 ‘쓸데없는 사실’ 문구 세트

window.uselessFacts = [
    "이 사람은 한 문장을 20번 넘게 고칩니다. 지금도 그러고 있을 확률이 높습니다.",
    "짧은 문장을 쓰기 위해 생각보다 오래 고민합니다. 그래서 문장은 짧고 과정은 깁니다.",
    "고등어와 스파게티는 생각보다 잘 어울립니다. 믿기 힘들겠지만요.",
    "이 사람은 '왜?'라는 말을 생각보다 더 자주 씁니다.",
    "디테일을 잡느라 시간이 흐르는 걸 종종 잊어버립니다.",
    "이 사람은 '버튼'보다 '버튼을 누르지 않는 이유'에 관심히 있습니다.",
    "'UX'라는 말을 쓰지만, 사실은 사람 얘기라고 생각합니다.",
    "문장을 고치다 보면, 내용보다 톤을 먼저 보게 되는 편입니다.",
    "르세라핌을 좋아합니다.",
    "취향이 다양해 보이지만, 기준은 꽤 좁고 단순한 편입니다.",
    "반려 고양이를 그릴 땐 귀여움보다 디테일이 먼저입니다.",
    "반려 고양이 이름은 '최호두'입니다.",
    "입가의 까만 점은 빼먹으면 안 됩니다. 정말로요.",
    "디테일은 취향이 아니라 성격이라고 생각합니다.",
    "본인에 대한 평가는 늘 팍팍한 편입니다.",
    "ChatGPT 왈, '굳이 여기까지 만드는 사람'입니다.",
    "성가신 일을 정말 싫어하지만, 본인이 빠진 일은 남에게 늘 성가십니다.",
];

// 타이틀 화면 설정

window.gameConfig = {
    title: "아이엠 그라운드. 자기소개 하기.",
    image: " ",
    imageOffsetY: "center",
    buttonText: "지금부터 시작"
};