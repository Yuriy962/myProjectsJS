const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);


for(const placeholder of placeholders){
    console.log(placeholder);
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
}

function dragstart(event) {
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragend(event) {
    console.log('drag end');
    event.target.className ='item'; // затираем все классы, оставляем только item
    //className работает со строчкой внутри class=""
}

function dragover(event) {//По умолчанию, событие dragover отменяет поведение, кот.позволяет нам перетаскивать эти элементы
    event.preventDefault();
    // Эта функция призвана отменить стандартное поведение при данном событии
}
function dragenter(event) {
    event.target.classList.add('hovered');
}
function dragleave(event) {
    event.target.classList.remove('hovered');
}
function dragdrop(event) {
    event.target.append(item);
    event.target.classList.remove('hovered');
}