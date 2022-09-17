const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다.",
        author: "키케로",
    },
    {
        quote: "산다는것, 그것은 치열한 전투이다.",
        author: "로망로랑",
    },
    {
        quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author: "사무엘존슨",
    },
    {
        quote: "언제나 현재에 집중할 수 있다면 행복할 것이다.",
        author: "파울로 코엘료",
    },
    {
        quote: "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 한다.",
        author: "찰리 채플린",
    },
    {
        quote: "직업에서 행복을 찾아라. 그러지 않으면 행복이 무엇인지 절대 모를 것이다.",
        author: "엘버트 허버드",
    },
    {
        quote: "신은 용기있는자를 결코 버리지 않는다.",
        author: "켄러",
    },
    {
        quote: "행복의 문이 하나 닫히면 다른 문이 열린다.",
        author: "헬렌켈러",
    },
    {
        quote: "피할수 없으면 즐겨라.",
        author: "로버트 엘리엇",
    },
    {
        quote: "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
        author: "L.론허바드",
    },
    {
        quote: "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다.",
        author: "제임스 오펜하임",
    },
    {
        quote: "모든 인생은 실험이다. 더 많이 실험할수록 더 나아진다.",
        author: "랄프 왈도 에머슨",
    },
    {
        quote: "한 번의 실패와 영원한 실패를 혼동하지 마라.",
        author: "F.스콧 핏제랄드",
    },
    {
        quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.",
        author: "앙드레 말로",
    },
    {
        quote: "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다.",
        author: "단테",
    },
    {
        quote: "행복은 습관이다. 그것을 몸에 지녀라.",
        author: "허버드",
    },
    {
        quote: "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
        author: "톰 모나건",
    },
    {
        quote: "자신감 있는 표정을 지으면 자신감이 생긴다.",
        author: "찰스다윈",
    },
    {
        quote: "평생 살 것처럼 꿈을 꾸어라. 내일 죽을 것처럼 오늘을 살아라.",
        author: "제임스 딘",
    },
    {
        quote: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",
        author: "괴테",
    },
    {
        quote: "마음만 먹어서는 안된다. 반드시 실천하여야 한다.",
        author: "이소룡",
    },
    {
        quote: "겨울이 오면 봄이 멀지 않으리.",
        author: "셸리",
    },
];

const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = `" ${todayQuote.quote} "`;
author.innerText = `- ${todayQuote.author} -`;