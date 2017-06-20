var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var sx,sy,sw,sh,x,y,w,h,index=0,nRow =4;

var image = new Image();
image.src = "cat.png";

image.addEventListener('load',()=>{
  sw = image.width / 4;
  sh = image.height / 2;
  w = sw;
  h = sh;

  setInterval(animate,50);
})

// xi=(index %)

function animate(){
  context.clearRect(0,0,800,600);
  x = 0;
  y = 0;
  sx = (index%nRow)*sw;
  sy = Math.floor(index/nRow)*sh;
  context.drawImage(image,sx,sy,sw,sh,x,y,w,h);
  index += 1;
  if(index > 7){
    index = 0;
  }

}
