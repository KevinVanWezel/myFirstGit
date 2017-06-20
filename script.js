const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const myTime = document.getElementById('myTime');
var time = new Date();
var hoek = 0;
var hoek2 = 0;
var hoek3 = 0;

const face = new Image();
face.src = "face.png";

const secondspointer = new Image();
secondspointer.src = "seconds.png";

const minutespointer = new Image();
minutespointer.src = "minutes.png";

const hourspointer = new Image();
hourspointer.src = "hours.png";

face.addEventListener('load',()=>{
  setInterval(draw,10);
})

function draw(){
  time = new Date();
  context.clearRect(0,0,500,500);
  context.drawImage(face,0,0);
  context.save();
  context.translate(250,250);
  context.rotate(hoek);
  context.drawImage(secondspointer,-26,-224);
  context.restore();
  context.save();
  context.translate(250,250);
  context.rotate(hoek2)
  context.drawImage(minutespointer,-26,-224);
  context.restore();
  context.save();
  context.translate(250,250);
  context.rotate(hoek3)
  context.drawImage(hourspointer,-30,-190);
  context.restore();





myTime.innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
hoek = time.getSeconds()/60*2*Math.PI;
hoek2 = time.getMinutes()/60*2*Math.PI;
hoek3 = ((time.getHours()/12) + (time.getMinutes() / 720))*(2*Math.PI);
}
