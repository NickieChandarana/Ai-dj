song1="";
song2="";
song3="";
song4="";
song5="";
song6="";
i=1;
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;
scoreRightWrist=0;
function preload(){
    song1=loadSound("Nayan.mp3");
    song2=loadSound("Aankhon.mp3");
    song3=loadSound("Sauda.mp3");
    song4=loadSound("Manma.mp3");
    song5=loadSound("Nadiyon.mp3");
    song6=loadSound("Panghat.mp3");
}
function play(){
if(i==1){song1.play();
song1.setVolume(1);
song1.rate(1);
}
    if(i==2){song2.play();
    song2.setVolume(1);
    song2.rate(1);
    }
    if(i==3){song3.play();
    song3.setVolume(1);
    song3.rate(1);
    }
    if(i==4){song4.play();
    song4.setVolume(1);
    song4.rate(1);
    }
    if(i==5){song5.play();
    song5.setVolume(1);
    song5.rate(1);
    }
    if(i==6){song6.play();
    song6.setVolume(1);
    song6.rate(1);
    }

}
function setup(){
    canvas=createCanvas(600,500);
    canvas.position(700,100);
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,600,500);
    fill("#32a852");
    stroke("#32a852");
    if(scoreRightWrist>0.2);
    {
    circle(rightWristX,rightWristY,20);
    if(scoreRightWrist>0 && rightWristY<=100)
    {
        document.getElementById("speed").innerHTML="speed = 0.5x";
        song.rate(0.5);
    }
    else if(rightWristY>100 && rightWristY<=200)
    {
        document.getElementById("speed").innerHTML="speed=1x";
        song.rate(1);
    }
    else if(rightWristY>200 && rightWristY<=300)
    {
        document.getElementById("speed").innerHTML="speed=1.5x";
        song.rate(1.5);
    }
    else if(rightWristY>300 && rightWristY<=400)
    {
        document.getElementById("speed").innerHTML="speed=2x";
        song.rate(2);
    }
    else if (rightWristY>400 && rightWristY<=500)
    {
        document.getElementById("speed").innerHTML="speed=2.5x";
        song.rate(2.5);
    }
}
    //if(scoreLeftWrist>0.2){

    circle(leftWristX,leftWristY,20);
    InNumberleftWristY=Number(leftWristY);
    remove_decimals=floor(InNumberleftWristY);
    volume=remove_decimals/500;
    document.getElementById("Volume").innerHTML="Volume="+volume;
    song.setVolume(volume);
   // }
}
function next(){
  i=i+1
}
function previous(){
    i=i-1
}
function modelLoaded(){
    console.log('Posenet is intialized');
}
function gotPoses(results){
    if(results.length>0)
    {
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        scoreRightWrist=results[0].pose.keypoints[10].score;
        console.log("scoreRightWrist="+scoreRightWrist+"scoreLeftWrist="+scoreLeftWrist);
        console.log("scoreLeftWrist=" +scoreLeftWrist);
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX="+leftWristX+ "leftWristY="+leftWristY);
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX="+rightWristX+"rightwWristY="+rightWristY);
    }
}
function stop(){
    if(song1.play()==true){
        song1.pause()
    }
    if(song2.play()==true){
        song2.pause()
    }
    if(song3.play()==true){
    song3.pause()
    }
    if(song4.play()==true){
        song4.pause()
    }
    if(song5.play()==true){
        song5.pause()
    }
    if(song6.play()==true){
        song6.pause()
    }
}