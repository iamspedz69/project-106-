function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/o23fMu7Sx/model.json',modelReady);

}
function modelReady(){
    classifier.classify(gotResults);

}
function gotResults(error,results){
    if(error){
        console.error(error);

    }else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML='I can hear-'+results[0].label;
        document.getElementById("result_confidence").innerHTML='accuracy-'+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        img=document.getElementById('cat');
        img1=document.getElementById('cow');
        img2=document.getElementById('dog');
        img3=document.getElementById('sheep');        
    }
    if(results[0].label=="Clap"){
        img.src='cat.gif';
        img1.src='cow.png';
        img2.src='dog.png';
        img3.src='sheep.png';
    }else if(results[0].label=="Bell")
    {
        img.src='cat.jpg';
        img1.src='cow.gif';
        img2.src='dog.jpg';
        img3.src='cheep.png';
    }else if(results[0].label=="Snapchrome://extensions")
    {
    img.src='cat.jpg';
    img1.src='cow.png';
    img2.src='dog.gif';
    img3.src='sheep.png';    
}   else{
    img.src='cat.jpg';
    img1.src='cow.png';
    img2.src='dog.jpg';
    img3.src='sheep.gif'; 
}
}



