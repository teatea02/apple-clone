(() => {

    let yOffset = 0; // window.pageYOffset을 저장할 변수
    let prevScrollHeight = 0; // 현재 스크롤 위치 보다 이전에 위치한 스크롤 섹션들의 높이의 합
    let currentScene = 0; // 현재 스크롤이 위치한 scene의 번호

    const sceneInfo = [
        {
            // scroll-section-0
            type: 'sticky',
            heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 설정
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-0'),
                messageA: document.querySelector('#scroll-section-0 .main-message.a'),
                messageB: document.querySelector('#scroll-section-0 .main-message.b'),
                messageC: document.querySelector('#scroll-section-0 .main-message.c'),
                messageD: document.querySelector('#scroll-section-0 .main-message.d')

            },
            values: {
                messageA_opacity: [0, 1] // message A의 opacity 시작, 끝 값
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

        yOffset = window.pageYOffset;
        let totalScrollHeight = 0;
        for (let i = 0; i < sceneInfo.length; i++) {
            totalScrollHeight += sceneInfo[i].scrollHeight;
            if (totalScrollHeight >= yOffset) {
                currentScene = i;
                break;
            }
        }
        document.body.setAttribute('id', `show-scene-${currentScene}`);
    }

    function playAnimation() {
        switch (currentScene) {
            case 0:
                console.log('0 play');
                break;

            case 1:
                console.log('1 play');
                break;

            case 2:
                console.log('2 play');
                break;

            case 3:
                console.log('3 play');
                break;
        }
    }

    function scrollLoop() {
        prevScrollHeight = 0;
        for (let i = 0; i < currentScene; i++) {
            prevScrollHeight += sceneInfo[i].scrollHeight;
        }

        if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
            currentScene++;
        } else if (yOffset < prevScrollHeight) {
            if (currentScene === 0) return; // 웹 브라우저의 bounce 효과로 scroll이 음수값이 되는것을 방지
            currentScene--;
        }
        document.body.setAttribute('id', `show-scene-${currentScene}`);
        playAnimation();
    }

    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset; // 현재 스크롤 되고 있는 위치
        scrollLoop();
    });

    window.addEventListener('load', setLayout); // 화면 로딩이 완료되면 실행
    window.addEventListener('resize', setLayout); // 화면 크기가 변경되면 실행

})();