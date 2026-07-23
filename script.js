const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
const scoreText = document.getElementById("score");

let jumping = false;
let score = 0;
let speed = 8;

function jump() {

    if (jumping) return;

    jumping = true;

    let position = 120;

    let up = setInterval(() => {

        if (position >= 320) {

            clearInterval(up);

            let down = setInterval(() => {

                if (position <= 120) {

                    clearInterval(down);
                    jumping = false;

                } else {

                    position -= 5;
                    player.style.bottom = position + "px";

                }

            }, 20);

        } else {

            position += 5;
            player.style.bottom = position + "px";

        }

    }, 20);

}

document.addEventListener("keydown", e => {
    if (e.code === "Space") jump();
});

document.addEventListener("click", jump);

let obstaclePos = window.innerWidth;

setInterval(() => {

    obstaclePos -= speed;

    obstacle.style.left = obstaclePos + "px";

    if (obstaclePos < -100) {

        obstaclePos = window.innerWidth + Math.random() * 300;

        score++;

        scoreText.innerHTML = "Score: " + score;

        if (score % 5 === 0) {
            speed++;
        }

    }

    let playerBottom = parseInt(player.style.bottom) || 120;

    if (
        obstaclePos < 220 &&
        obstaclePos > 110 &&
        playerBottom < 220
    ) {

        alert("💥 Game Over!\n\nScore: " + score);
        location.reload();

    }

}, 20);