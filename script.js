const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
const scoreText = document.getElementById("score");

let jumping = false;
let score = 0;

function jump(){

    if(jumping) return;

    jumping = true;

    let position = 0;

    let up = setInterval(()=>{

        if(position >= 180){
            clearInterval(up);

            let down = setInterval(()=>{

                if(position <= 0){
                    clearInterval(down);
                    jumping = false;
                }else{
                    position -= 5;
                    player.style.bottom = position + "px";
                }

            },20);

        }else{
            position += 5;
            player.style.bottom = position + "px";
        }

    },20);

}

document.addEventListener("keydown",(e)=>{
    if(e.code==="Space"){
        jump();
    }
});

document.addEventListener("click",jump);

let obstaclePos = window.innerWidth;

setInterval(()=>{

    obstaclePos -= 8;

    obstacle.style.left = obstaclePos + "px";

    if(obstaclePos < -70){
        obstaclePos = window.innerWidth;
        score++;
        scoreText.innerHTML = "Score: " + score;
    }

    let playerBottom = parseInt(player.style.bottom) || 0;

    if(
        obstaclePos < 220 &&
        obstaclePos > 120 &&
        playerBottom < 90
    ){
        alert("💥 Game Over!\nScore: " + score);
        location.reload();
    }

},20);