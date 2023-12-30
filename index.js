let time = 60;
let sc = 0;
let hitnm=0;
document.querySelector("#pbtm").addEventListener("click", function(dets){
    // alert("good")
    if(Number(dets.target.textContent)==hitnm){
        getscore()
        makebubble()
        makehit()
    }

})
function getscore(){
    sc+=10;
    document.querySelector("#score").textContent=sc;
}
function makebubble(){
    let bubble =""
    for(var i = 1 ; i <= 75 ; i++){
        bubble +=`<div class="bubble">${Math.floor(Math.random()*10)}</div>`
    }
    document.querySelector("#pbtm").innerHTML = bubble
}

function runtimer(){
    let inter = setInterval(function(){
        if(time>0){
            time--;
            document.querySelector("#timeval").textContent=time;
        }
        else{
            clearInterval(time)
            document.querySelector("#pbtm").innerHTML=""
        }

}, 1000)
}
function makehit(){
    hitnm = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=hitnm;

}
makehit()
makebubble()
runtimer()
getscore()