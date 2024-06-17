'use strict';

const mainfield = document.getElementById('main');
const ctx = mainfield.getContext('2d');

let object1 = new Image();
object1.src = 'see.png'

function draw(){
    ctx.drawImage(object1,0,0);
    window.requestAnimationFrame(draw);
}

let object2 = new Image();
object2.src = 'human1.png'

let object3 = new Image();
object3.src = 'o2illust.png';

let item ={x:700,y:500};

let object4 = new Image();
object4.src = 'unit.png';

let unit ={x:1000,y:1000};


let gazo = {x:0,y:0};
function move(){
if(gazo.x >=1600){
    gazo.x = 0
}else if(gazo.y>=1200){
    gazo.y = 0; 
  }
}
let moving = setInterval(move,1000/30);


function draw(){
    ctx.clearRect(0,0,1600,1200);
    ctx.drawImage(object1,0,0);
    ctx.drawImage(object2, gazo.x, gazo.y);
    ctx.drawImage(object3, item.x, item.y);
    ctx.drawImage(object4, unit.x, unit.y);
    window.requestAnimationFrame(draw);
}
draw();

//クリックしたときの処理
mainfield.addEventListener('click',e => {
    //クリックした位置を取得
    const rect = mainfield.getBoundingClientRect();
    let mousedown ={
        x: e.clientX - rect.left,
        y: e.clientY -rect.top
    }
    if(mousedown.x >= gazo.x && mousedown.x <= 1600 && mousedown.y >= gazo.y && mousedown.y <= 1200){
        clearInterval(moving);
        gazo.x = 0 + mousedown.x;
        gazo.y = 0 + mousedown.y;
    }else if(mousedown.x <= gazo.x && mousedown.x >=0 && mousedown.y <= gazo.y && mousedown.y >= 0){
            clearInterval(moving);
            gazo.x = 0 + mousedown.x;
            gazo.y = 0 + mousedown.y;
    }else if(mousedown.x >= gazo.x && mousedown.x <=1600 && mousedown.y >= 0 && mousedown.y <= gazo.y){
        clearInterval(moving);
        gazo.x = 0 + mousedown.x;
        gazo.y = 0 + mousedown.y;
    }else if(mousedown.x >= 0 && mousedown.x <= gazo.x && mousedown.y >= gazo.y && mousedown.y <= 1200){
        clearInterval(moving);
        gazo.x = 0 + mousedown.x;
        gazo.y = 0 + mousedown.y;
    }
    })