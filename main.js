document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    const pageNumber = document.querySelector(".page-number");
    const container = document.querySelector(".contain");

    const page1Content = `
    <div class="left-side">
        <div class="box-of-doom">
            <h1 class="shrimp"><img src="/images/shrimper.jpg" alt="Shrimper">Shrimper</h1>
            <div class="second-layer-of-the-box">
                <p>Owner Of Damnation</p>
                <p>Developer at NullFire</p>
                <p>Had the idea for NullFire GOLD</p>
                <p>Ex-Owner of TNC / TNV</p>
                <p>13 Year Old Roblox Scripter</p>
                <p>Coding since 2023!</p>
            </div>
            <div class="social-buttons">
                <a href="https://discord.gg/hvjmaxtRvC" target="_blank" class="icon2"><i class="fab fa-discord"></i></a>
                <a href="https://www.roblox.com/users/2207964975/profile" target="_blank" class="icon2"><i class="fab fa-r"></i></a>
                <a href="https://www.youtube.com/@Damnation_Roblox" target="_blank" class="icon2"><i class="fab fa-youtube"></i></a>
                <a href="https://github.com/ShrimperIsReal" target="_blank" class="icon2"><i class="fab fa-github"></i></a>
                <a href="https://fr.pinterest.com/scriptermeta/_profile/" target="_blank" class="icon2"><i class="fab fa-pinterest"></i></a>
            </div>
            <audio style="display: none;" loop class="shrimperddddddddddddddddddd" src="/assets/Hatred.mp3"></audio>
            <audio style="display: none;" class="iconing1" src="/assets/Hover.mp3"></audio>
        </div>
    </div>
    <div class="right-side">
        <div class="box-of-doom">
            <p class="sexkoso"><img src="/images/seikoso.png" alt="Seikoso">Seikoso</p>
            <div class="second-layer-of-the-box">
                <p>Owner of NullFire</p>
                <p>Developer at Damnation</p>
                <p>16 Year Old Roblox Scripter</p>
                <p>Coder since 2023!</p>
            </div>
            <div class="social-buttons">
                <a href="https://discord.gg/bNuJfzANUV" target="_blank" class="icon"><i class="fab fa-discord"></i></a>
                <a href="https://youtube.com/@seikosos" target="_blank" class="icon"><i class="fab fa-youtube"></i></a>
                <a href="https://github.com/seikosos" target="_blank" class="icon"><i class="fab fa-github"></i></a>
                <a href="https://github.com/TeamNullFire" target="_blank" class="icon"><i class="fab fa-github"></i></a>
            </div>
            <audio style="display: none;" loop class="seikosoddddddddddddddddddd" src="/assets/Dess.mp3"></audio>
        </div>
    </div>
    `;

    const page2Content = `
    <div class="left-side2">
        <div class="box-of-doom">
            <h1 class="shrimp"><img src="/images/maxime.png" alt="Maxime">Maxime</h1>
            <div class="second-layer-of-the-box">
                <p>13 year old</p>
                <p>Silly guy</p>
                <p>Likes Teto</p>
                <p>Shrimper's first online friend</p>
            </div>
            <div class="social-buttons">
                <a href="https://discord.gg/SPaeXzFyna" target="_blank" class="icon2"><i class="fab fa-discord"></i></a>
                <a href="https://www.tiktok.com/@mx465378" target="_blank" class="icon2"><i class="fab fa-tiktok"></i></a>
            </div>
            <audio style="display:none;" loop preload="auto" class="maximemusic" src="/assets/Teto.mp3"></audio>
        </div>
    </div>
    <div class="right-side">
        <div class="box-of-doom">
            <p class="sexkoso"><img src="/images/seikoso.png" alt="Seikoso">Seikoso</p>
            <div class="second-layer-of-the-box">
                <p>Owner of NullFire</p>
                <p>Developer at Damnation</p>
                <p>16 Year Old Roblox Scripter</p>
                <p>Coder since 2023!</p>
            </div>
            <div class="social-buttons">
                <a href="https://discord.gg/bNuJfzANUV" target="_blank" class="icon"><i class="fab fa-discord"></i></a>
                <a href="https://youtube.com/@seikosos" target="_blank" class="icon"><i class="fab fa-youtube"></i></a>
                <a href="https://github.com/seikosos" target="_blank" class="icon"><i class="fab fa-github"></i></a>
                <a href="https://github.com/TeamNullFire" target="_blank" class="icon"><i class="fab fa-github"></i></a>
            </div>
            <audio style="display: none;" loop class="seikosoddddddddddddddddddd" src="/assets/Dess.mp3"></audio>
        </div>
    </div>
    `;

    function stopAllMusic() {
        document.querySelectorAll("audio").forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });
    }

    function attachHoverMusic() {
        const leftSide = container.querySelector(".left-side, .left-side2");
        const rightSide = container.querySelector(".right-side");
        const hoverSound = container.querySelector(".iconing1");

        const leftMusic1 = leftSide ? leftSide.querySelector(".shrimperddddddddddddddddddd") : null;
        const leftMusic2 = leftSide ? leftSide.querySelector(".maximemusic") : null;
        const rightMusic = rightSide ? rightSide.querySelector(".seikosoddddddddddddddddddd") : null;

        if (leftSide) {
            leftSide.onmouseenter = () => {
                stopAllMusic();
                if (leftMusic2) {
                    leftMusic2.volume = 0.4;
                    leftMusic2.play();
                } else if (leftMusic1) {
                    leftMusic1.volume = 0.4;
                    leftMusic1.play();
                }
            };
        }

        if (rightSide) {
            rightSide.onmouseenter = () => {
                stopAllMusic();
                if (rightMusic) {
                    rightMusic.volume = 0.4;
                    rightMusic.play();
                }
            };
        }

        attachIconHover(hoverSound);
    }

    function attachIconHover(hoverSound) {
        if (!hoverSound) return;
        container.querySelectorAll(".icon, .icon2").forEach(icon => {
            icon.onmouseenter = () => hoverSound.play();
            icon.onmouseleave = () => {
                hoverSound.pause();
                hoverSound.currentTime = 0;
            };
        });
    }

    function initPage(content, pageNum) {
        stopAllMusic();
        container.innerHTML = content;
        pageNumber.textContent = pageNum;
        attachHoverMusic();
    }

    function preloadAudio() {
        document.querySelectorAll("audio").forEach(audio => {
            audio.volume = 0.4;
            audio.muted = true;
            audio.play().then(() => {
                audio.pause();
                audio.currentTime = 0;
                audio.muted = false;
            }).catch(() => {});
        });
    }

    if (overlay) {
        overlay.addEventListener("click", () => {
            overlay.style.display = "none";
            preloadAudio();
        });
    }

    initPage(page1Content, "Page 1");
    leftArrow.disabled = true;
    rightArrow.disabled = false;

    rightArrow.addEventListener("click", () => {
        initPage(page2Content, "Page 2");
        leftArrow.disabled = false;
        rightArrow.disabled = true;
    });

    leftArrow.addEventListener("click", () => {
        initPage(page1Content, "Page 1");
        leftArrow.disabled = true;
        rightArrow.disabled = false;
    });
});

