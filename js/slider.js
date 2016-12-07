var timer=null;   //定时器
var width=0;       //图片宽度
var time1=1000;   //图片动画时间
var time2=2000;   //间隔时间
var count;         //一组图片个数
var index=0;
var flag=true;
$(function(){
    init();
    move(1);
    }
);

function init(){
    width=$("#slider").width();
    count=countImg();
    $(".slider-img").width(width);
    $("#slider-content").width(2*width*count);
    index=count;
    setMarginLeft(index);
    appendGroup();
}
function countImg(){
   return  $("#slider-content").children().length;
}
function move(direction){
    clearTimeout(timer);
    if(index==0){
        index=count;
        setMarginLeft(index);
    }else if(index==2*count-1){
        index=count-1;
        setMarginLeft(index);
    }
    if(direction==0){
        index--;
    }else{
        index++;
    }
    $("#slider-content").animate({"margin-left":-index*width},time1);
    countTime();
}
function setFlag(f){
    flag=f;
    if(!f){
        setTimeout(function(){
            setFlag(true);
        },900);
    }
}
function countTime(){
    timer=setTimeout(function(){
       move(1);
    },time2);
}
function setMarginLeft(index){
    $("#slider-content").animate({"marginLeft":-index*width},0);
}
//后面追加一组
function appendGroup(){
    for( var i=0;i<count;i++){
        $("#slider-content").append($($("#slider-content").children().get(i)).prop("outerHTML"));
    }
}
//下一个
function next(){
    if(judge()){
        move(1);
    }
}
//上一个
function last(){
   if(judge()){
        move(0);
   }
}
function judge(){
    if(!flag){
        return false;
    }else{
        setFlag(false);
        return true;
    }
}
