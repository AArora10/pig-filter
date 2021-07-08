nose_x = "0";
nose_y = "0";

function preload(){

  pig_nose = loadImage('https://i.postimg.cc/cJVdYPGC/pig-nose.png');
}

function setup(){

    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on( 'pose'  , gotPoses);


}

function gotPoses( results ){

  if (results.length > 0){
    console.log (results);
    nose_x = results[0].pose.nose.x - 10  ;
    nose_y = results[0].pose.nose.y - 10 ;
    console.log ("nose x = " + nose_x);
    console.log ("nose_y = " + nose_y);
  }
}

function modelLoaded(){
console.log ("poseNet is initialized");
}

function draw() {

  image( video , 0 , 0 , 300 , 300 );

 

  image(pig_nose ,  nose_x, nose_y , 30 , 30 , );
}

function take_snapshot(){
  save('your snapshot.png');
}