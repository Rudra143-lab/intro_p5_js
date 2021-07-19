function preload(){}

function setup(){
    canvas=createCanvas(400,300);
    canvas.position(200,400);
    video=createCapture(VIDEO);
    video.hide();

    tint_color="";
}

function draw(){
    image(video,0,0,400,300);
    tint(tint_color);
    
}

function add_filter(){
    tint_color= document.getElementById("my_input").value;

}

function take_snapshot(){
    save('my_image.png');
}


