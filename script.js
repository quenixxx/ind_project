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