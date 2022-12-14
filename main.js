Webcam.set({
    width: 400,
    height:350,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");

Webcam.attach('#camera')
 function Capture_image(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    })
 }
 console.log('ml5 version:' , ml5.version);
 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aFQXoTlz7/model.json',modalLoaded);
function modalLoaded(){
    console.log('modal Loaded!')
}
function Check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if (error){
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_image").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = (results[0].confidence.toFixed(3))*100 + "%";
    }
    

}