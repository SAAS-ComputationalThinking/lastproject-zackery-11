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
    y = 0
    x = 30 
    let rect;
    for (let i = 0; i < x; i++) {
        const jumper = document.getElementById("jumper");
        jumper.style.position = "absolute";
        rect = jumper.getBoundingClientRect();
        jumper.style.top = `${rect.top - 1}px`;
        y = y + 1
        
    }

    if (y = 30) {
        for (let j = 0; j < x; j++) {
            const jumper = document.getElementById("jumper");
            jumper.style.position = "absolute";
            rect = jumper.getBoundingClientRect();
            jumper.style.top = `${rect.top + 1}px`;
            y = y - 1 
        }
    }
}
        
    
