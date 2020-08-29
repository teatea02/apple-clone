(() => {

    let yOffset = 0; // window.pageYOffset을 저장할 변수

    const sceneInfo = [
        {
            // scroll-section-0
            type: 'sticky',
            heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 설정
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-0')
            }
        },
        {
            // scroll-section-1
            type: 'normal',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-1')
            }
        },
        {
            // scroll-section-2
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-2')
            }
        },
        {
            // scroll-section-3
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-3')
            }
        },
    ];

    function setLayout() {
        // 각 스크롤 섹션의 높이 설정
        for (let i = 0; i < sceneInfo.length; i++) {
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        }
    }

    function scrollLoop() {
        console.log(yOffset);
    }

    window.addEventListener('resize', setLayout); // 화면 크기가 변경되면 실행
    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset; // 현재 스크롤 되고 있는 위치
        scrollLoop();
    });

    setLayout();

})();