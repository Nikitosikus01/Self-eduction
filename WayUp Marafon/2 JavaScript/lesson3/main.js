

const tabBtns = document.getElementById('tabs'); 
const content = document.querySelectorAll('.content'); 


const changeClass = el => {
    for (let i = 0; i < tabBtns.children.length; i++) {
        tabBtns.children[i].classList.remove('active');
    }
    el.classList.add('active');
}


tabBtns.addEventListener('click', element => {
    const currntTabBtn = element.target.dataset.btn;
    changeClass(element.target);
    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if (content[i].dataset.content === currntTabBtn) {
            content[i].classList.add('active');
        }
    }
});


