noseX=0;
noseY=0;
function preload() {
mustache=loadImage('https://i.postimg.cc/0y31cph3/m.png');
}

function setup() 
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide()
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose',gotPoses);
}

function draw() 
{
    image(video, 0, 0, 300, 300);
    /*fill(17, 211, 237);
stroke(20, 237, 17);
circle(noseX,noseY,100);*/
image(mustache,noseX,noseY,30,30);

}

function take_snapshot() 
{
    save('myFilterImage.png');
}

function modelLoaded() 
{
    console.log('modelLoaded pose net is also initialized');
}

function gotPoses(results) 
{
    if (results.length > 0) 
    {
        console.log(results);
        noseX = results[0].pose.nose.x - 17;
        noseY = results[0].pose.nose.y + 5;
        console.log("noseX = " + results[0].pose.nose.x);
        console.log("nosey = " + results[0].pose.nose.y);

    }
}