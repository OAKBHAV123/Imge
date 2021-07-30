Webcam.set({
height:310,
width:360,
image_format:'png',
png_quality:90

});

camera=document.getElementById("camera");

Webcam.attach("#camera");

 function Take_snapshot()
 {
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML='<img id="caputure_img" src="'+data_uri+'">';
     });
 }

 console.log("ml5 version is",ml5.version);

 classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/E-ZyrkYJ8/model.json',model_loaded);

 function model_loaded()
 {
     console.log("model loaded successfully");
 }
 

 function check()
 {
     img=document.getElementById("caputure_img")
     classifier.classify(img,got_results);
 }


 function got_results(error,result)
 {
     if(error)
     {
console.log(error)
     }
     else
     {
         console.log(result);
         document.getElementById("result_object_name").innerHTML=result[0].label;
         document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(2);
     }
 }
