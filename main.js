whale = 0;
giraffe = 0;
elephant = 0;
rooster = 0;


function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/47ssIvffU/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        red = Math.floor(Math.random * 255) +1;
        blue = Math.floor(Math.random * 255) +1;
        green = Math.floor(Math.random * 255) +1;
        document.getElementById("result_animal").innerHTML = "Animal sound = "+results[0].label;
        document.getElementById("result_animal").style.color = "rgb("+red+","+blue+","+green+")";

        document.getElementById("result_sound1").innerHTML = "Detected whale count: "+whale;
        document.getElementById("result_sound2").innerHTML = "Detected giraffe count: "+giraffe;
        document.getElementById("result_sound3").innerHTML = "Detected elephant count: "+elephant;
        document.getElementById("result_sound4").innerHTML = "Detected rooster count: "+rooster;

        document.getElementById("result_sound1").style.color = "rgb("+red+","+blue+","+green+")";
        document.getElementById("result_sound2").style.color = "rgb("+red+","+blue+","+green+")";
        document.getElementById("result_sound3").style.color = "rgb("+red+","+blue+","+green+")";
        document.getElementById("result_sound4").style.color = "rgb("+red+","+blue+","+green+")";

        img1 = document.getElementById("img_1");
        img2 = document.getElementById("img_2");
        img3 = document.getElementById("img_3");
        img4 = document.getElementById("img_4");

        if (results[0].label =- "Whale") {
            whale = whale+1;
            img1.src = "whale.gif";
            img2.src = "giraffe.png";
            img3.src = "elephant.png";
            img4.src = "rooster.png";
        } else if (results[0].label =- "Giraffe"){
            giraffe = giraffe+1;
            img1.src = "whale.png";
            img2.src = "giraffe.gif";
            img3.src = "elephant.png";
            img4.src = "rooster.png";
        }
        else if (results[0].label =- "Elephant"){
            elephant = elephant+1;
            img1.src = "whale.png";
            img2.src = "giraffe.gif";
            img3.src = "elephant.png";
            img4.src = "rooster.png";
        }
        else if (results[0].label =- "Rooster"){
            rooster = rooster+1;
            img1.src = "whale.png";
            img2.src = "giraffe.gif";
            img3.src = "elephant.png";
            img4.src = "rooster.png";
        }
    }
}