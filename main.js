canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
nasa_img=["m1.jpg","m2.jpg","m3.jpg","mars.jpg"];
random_number=Math.floor(Math.random()*4);

background_image=nasa_img[random_number];
console.log("background_image="+background_image)
rover_image="rover.png";
rover_x=10;
rover_y=10;
rover_width=100;
rover_height=90;


function add()
{
background_imagetag=new Image();
background_imagetag.onload=uploadbackground;
background_imagetag.src=background_image

rover_imagetag=new Image();
rover_imagetag.onload=uploadrover;
rover_imagetag.src=rover_image
}
function uploadbackground(){
ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height)
}
function uploadrover(){
ctx.drawImage(rover_imagetag,rover_x,rover_y,rover_width,rover_height)
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=='37'){
left();
console.log("left")
}
if(keyPressed=='38'){
    up();
    console.log("up")
}
if(keyPressed=='39'){
    right();
    console.log("right")
}
if(keyPressed=='40'){
    down();
    console.log("down")
}
}
function up(){
if(rover_y>=0){
rover_y=rover_y-10;
console.log("when up arrow is pressed  x= "+ rover_x +",y= "+ rover_y);
uploadbackground();
uploadrover();
}
}
function down(){
    if(rover_y<=500){
    rover_y=rover_y+10;
    console.log("when down arrow is pressed  x= "+ rover_x +",y= "+ rover_y);
    uploadbackground();
    uploadrover();
    }
    }
    function left(){
        if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("when left arrow is pressed  x= "+ rover_x +",y= "+ rover_y);
        uploadbackground();
        uploadrover();
        }
        }
        function right(){
            if(rover_x<=700){
            rover_x=rover_x+10;
            console.log("when right arrow is pressed  x= "+ rover_x +",y= "+ rover_y);
            uploadbackground();
            uploadrover();
            }
            }