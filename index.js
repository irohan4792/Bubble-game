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
    var temp = document.querySelector("#pbtm");
    var bub = document.getElementsByClassName(".bubble")
    var nos = Math.floor((temp.clientHeight*temp.clientWidth)/4450);
    console.log(nos)
    for(var i = 1 ; i <= nos ; i++){
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
const start = document.querySelector(".startbut")
start.addEventListener("click", function(){

    runtimer()
})
makehit()
makebubble()
getscore()