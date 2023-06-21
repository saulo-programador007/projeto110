//https://teachablemachine.withgoogle.com/models/lEKTc9a-w/
camera=document.getElementById("camera");
Webcam.attach('#camera');

console.log('ml5 version', ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/J2Ip11PDF/model.json',modelLoaded);

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

function check(){
    
}

function gotResult(){
    
}

function speak(){
    if (condition) {
        
    }
}