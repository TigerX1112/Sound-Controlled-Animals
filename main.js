function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true, video:false});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/47ssIvffU/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}

var whale = 0;
var giraffe = 0;
var elephant = 0;
var rooster = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_animal").innerHTML = 'Animal sound  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Whale - '+whale+ ' Detected Giraffe - '+giraffe+' Detected Elephant - '+elephant+ ' Detected Rooster - '+rooster;
    document.getElementById("result_animal").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img1 = document.getElementById('img_1');
    img2 = document.getElementById('img_2');
    img3 = document.getElementById('img_3');
    img4 = document.getElementById('img_4');

    if (results[0].label == "Whale") {
      img1.src = 'whale.gif';
      img2.src = 'giraffe.png';
      img3.src = 'elephant.png';
      img4.src = 'rooster.png';
      whale = whale+1;
    } else if (results[0].label == "Girafe") {
        img1.src = 'whale.png';
        img2.src = 'giraffe.gif';
        img3.src = 'elephant.png';
        img4.src = 'rooster.png';
        giraffe = giraffe+1;
    } else if (results[0].label == "Elephant") {
        img1.src = 'whale.png';
        img2.src = 'giraffe.png';
        img3.src = 'elephant.gif';
        img4.src = 'rooster.png';
        elephant = elephant+1;
    } else if (results[0].label == "Rooster") {
        img1.src = 'whale.png';
        img2.src = 'giraffe.png';
        img3.src = 'elephant.png';
        img4.src = 'rooster.gif';
        rooster = rooster+1;
    } else{
      img1.src = 'whale.png';
      img2.src = 'giraffe.png';
      img3.src = 'elephant.png';
      img4.src = 'rooster.png';
    }
  }
}
