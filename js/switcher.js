let parent = document.querySelector('.switcher__buttons');
let switcherBlock = document.getElementsByClassName('switcher__block');
let switcherButtons = document.getElementsByClassName('switcher__buttons');


parent.addEventListener('click', (event) => {
    let target = event.target;  
    let buttons = parent.children;
    for (let i = 0; i < buttons.length; i++){
        let button = buttons[i];

        if (button.id == target.id){
            button.classList.add('active');
        }else{
            button.classList.remove('active');
        }
    }

    let element = target.id;
        
    for (let i = 0; i < switcherBlock.length; i++){
        let block = switcherBlock[i];

        if (block.classList.contains(element)){
            block.classList.add('active');
        }else{
            block.classList.remove('active');
        }
    }
});