document.addEventListener('DOMContentLoaded', function () {
    let blocks = document.querySelectorAll('.project');

    function checkBlocksVisibility() {
        let windowHeight = window.innerHeight;

        blocks.forEach(block => {
            let blockPosition = block.getBoundingClientRect().top;
            let blockBottom = block.getBoundingClientRect().bottom;

            if (blockPosition < windowHeight - 100 && blockBottom > 0) {
                block.classList.add('visible');
            } else {
                block.classList.remove('visible'); 
            }
        });
    }

    checkBlocksVisibility();

    window.addEventListener('scroll', checkBlocksVisibility);
});
const skill1 = document.querySelector(".skill1")
skill1.addEventListener("mouseover", function(event){
    skill1.style.animation = "skill-animation 2s infinite ease-in 1s;"
})
skill1.addEventListener("mouseout", function(event){
    skill1.style.animation = "none"
})
document.querySelector('button').addEventListener('click', () => {
    const egg = document.getElementById('easter-egg');
    egg.style.display = 'block';

    setTimeout(() => {
        egg.style.display = 'none';
    }, 1000);
});
window.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bg-music');
    music.volume = 0.1;
    const enableAudio = () => {
        music.play().catch(e => {
            console.log("Автовоспроизведение заблокировано:", e);
        });
        window.removeEventListener('click', enableAudio);
    };

    window.addEventListener('click', enableAudio);
});
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    const timeText = `${hours}:${minutes}:${seconds}`;
    document.querySelector(".time").textContent = timeText;
}

setInterval(updateTime, 1000);
updateTime();
