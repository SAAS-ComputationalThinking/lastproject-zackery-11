const jumper = document.getElementById("jumper");
const begin = document.getElementById("begin");
document.addEventListener("click",jump)
begin.addEventListener("click",spawn)
function spawn() {
    let div1;
    const move = document.getElementById("move");
    div1 = document.createElement('div');
    div1.style.backgroundColor = "red";
    div1.style.width = "20px";
    div1.style.height = "20px";
    div1.style.position = "absolute";
    div1.style.top = "55px";
    div1.style.right = "10px"
    move.appendChild(div1);  
}
function jump() {
    x = 20 
    y = 50
    const jumper = document.getElementById("jumper");
    for (let i = 0; i < x; i++){
        y - 1
        jumper.style.top = "ypx";
    }
}