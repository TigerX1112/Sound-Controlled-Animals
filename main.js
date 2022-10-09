function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/47ssIvffU/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults() {
    console.log('got result');
}