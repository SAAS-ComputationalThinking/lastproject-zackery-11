const jumper = document.getElementById("jumper");
const begin = document.getElementById("begin");
document.addEventListener("click",jump)
begin.addEventListener("click",spawn)
function spawn() {
    let rect;
    let div1;
    let m = 1;
    const move = document.getElementById("move");
    div1 = document.createElement('div');
    div1.style.backgroundColor = "red";
    div1.style.width = "20px";
    div1.style.height = "20px";
    div1.style.position = "absolute";
    div1.style.top = "55px";
    div1.style.right = "10px"
    move.appendChild(div1);
    go();
    function go() {
        let z = 100
        let rect;
        let div1;
        let move;
        for (let l = 0; l < z; l++) {
            setTimeout(function(index) {
                rect = div1.getBoundingClientRect();
                console.log(rect.left, rect.bottom, rect.top, rect.right);
                div1.style.left = `${rect.left - 1}px`;
            }(l), l * 10);
        }
    }
}


    function jump() {
        let y = 0;
        let x = 50;
        let rect;
        
        for (let p = 0; p < x; p++) {
            setTimeout(function(index) {
                return function() {
                    const jumper = document.getElementById("jumper");
                    jumper.style.position = "absolute";
                    rect = jumper.getBoundingClientRect();
                    jumper.style.top = `${rect.top - 1}px`;
                    y = y + 1;
                    const x = 50;
                    if (y === x) {
                        movedown();
                    }
                };
            }(p), p * 10); 
        }
    
        function movedown() {
            for (let j = 0; j < x; j++) {
                setTimeout(function(index) {
                    return function() {
                        const jumper = document.getElementById("jumper");
                        jumper.style.position = "absolute";
                        rect = jumper.getBoundingClientRect();
                        jumper.style.top = `${rect.top + 1}px`;
                        y = y - 1;
                    };
                }(j), j * 10); 
            }
        }
    }
    