song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function setup()
{
    canvas=createCanvas(600,500);
    canvas.position(450,160);

    video=createCapture(VIDEO);
    video.hide();

    posenet=ml5.poseNet(video,modelLoaded());
    posenet.on('pose',gotPoses);
}
function preload()
{
    song=loadSound("music.mp3");
}
function draw()
{
    image(video,0,0,600,500);
}
function start()
{
    song.play();
    song.rate(1);
    song.setVolume(1);
}
function modelLoaded()
{
    console.log("Posenet is on!");
}
function gotPoses(results)
{
    if (results.length>0)
    {
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log(leftWristX,leftWristY);

        righhtWristX=results[0].pose.leftWrist.x;
        rightWristY=results[0].pose.leftWrist.y;
        console.log(rightWristX,rightWristY);
    }
}
