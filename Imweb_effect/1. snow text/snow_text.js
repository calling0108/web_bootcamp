document.addEventListener("DOMContentLoaded", function() {
    const rainContainer = document.getElementById("rain-container");
    const hangulText = "나랏말싸미 듕귁에 달아 문자와로 서로 사맛디 아ㅇ니할 쌔 이런 전차로 어린 백셩이 니르고져 할 배 이셔도 마참내 제 뜨들 시러 펴디 몯할 노미 하니라 내 이랄 위하야 여엿비 너겨 새로 스믈여듧 자를 맹가노니 사람마다 해여 수비 니겨 날로 쑤메 뻔한킈 하고져 할 따라미니라";
    
    const fixedTexts = [
        "나랏말싸미 듕귁에 달아",
        "문자와로 서로 사맛디 아ㅇ니할 쌔",
        "이런 전차로",
        "어린 백셩이 니르고져",
        "할 배 이셔도 마참내",
        "제 뜨들 시러 펴디",
        "몯할 노미 하니라",
        "내 이랄 위하야 여엿비 너겨",
        "새로 스믈여듧 자를 맹가노니"
    ];

    function createRaindrop() {
        const raindrop = document.createElement("div");
        raindrop.className = "raindrop";
        raindrop.textContent = hangulText[Math.floor(Math.random() * hangulText.length)];
        raindrop.style.left = Math.random() * 100 + "vw";
        raindrop.style.animationDuration = 3 + Math.random() * 2 + "s";
        raindrop.style.transform = `rotate(${Math.random() * 360}deg)`;
        raindrop.style.fontSize = `${30 + Math.random() * 12}px`;
        rainContainer.appendChild(raindrop);

        raindrop.addEventListener('animationed', () => {
            raindrop.style.animartion = 'none';
            raindrop.style.bottom = "0";
            raindrop.style.position = 'absolute';
        });

    }

    for (let i = 0; i < 20; i++) {
        createRaindrop();
    }

    setInterval(createRaindrop, 400);

    const position = [
        {top: "15%", left: "8%"},
        {top: "20%", left: "11%"},
        {top: "20%", left: "15%"},
        {top: "20%", left: "18%"},
        {top: "20%", left: "21%"},
        {top: "20%", left: "24%"},
        {top: "20%", left: "27%"},
        {top: "20%", left: "31%"},
        {top: "25%", left: "34%"}
    ]

    fixedTexts.forEach((text, index) => {
        const fixedText = document.createElement("div");
        fixedText.className = "fixed-text";
        fixedText.textContent = text;
        fixedText.style.top = positions[index].top;
        fixedText.style.left = positions[index].left;
        rainContainer.appendChild(fixedText);
    })

    document.fonts.load("1em EBSHunminjeongeumSBA").then(() => {
        console.log('Font EBSHunminjeongeumSBA has been loaded successfully.');
    }).catch((error) => {
        console.error('Font failed to load:', error);
    });
});
