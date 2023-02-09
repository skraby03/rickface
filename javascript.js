var ball=document.getElementsByClassName("ball");

document.onmousemove=function(){
    var x= event.clientX*90/window.innerWidth+"%";
    var y= event.clientY*60/window.innerHeight+"%";

    for(var i=0;i<2;i++){
        ball[i].style.left=x/2;
        ball[i].style.top=y/2;
        ball[i].style.transform="translate("+x+","+y+")";
    }
}