//Shiraz Fazli (sf5828@bard.edu)
//2/13/17
//IDEA 135
//Sketch 4: Avatar
//Collaboration statement: I worked alone on this assignment.
//I tried to make an avatar of a face using different shapes and colors to come together to look like one solid figure. I wanted the primitive shapes to not look like themselves (like I didn't want the ellipses to look like a bunch of ellipses, but for them to just look like a face shape. When I see the graphical represenation of the code next to the text of the code, I can see the relationship between the two and see where each piece of code is represented on the image.

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(255, 92, 103);
    fill(239, 146, 7); //base color
    noStroke()
    ellipse (250, 250, 225, 300);
        ellipse(272, 263, 190, 280);
    fill(238,139,9)//dark shade 1
        ellipse(195, 300, 96, 140);
        ellipse(214, 316, 80, 150);
        ellipse(250, 385, 100, 40);
        ellipse(250, 370, 25, 50);
        ellipse(200, 220, 100, 175);
        ellipse(255, 280, 25, 100);//nose shade
    fill(223, 134, 17);//dark shade 2
        ellipse(250, 300, 20, 50);//nose
        ellipse(250, 370, 70, 20);//chin
        ellipse(200, 260, 80, 60);//left eye socket
    fill(239, 146, 7); //base color
        ellipse(200, 240, 80, 20); //eyelid
        arc(200, 285, 80, 80, 0, PI, OPEN);
        ellipse(235, 280, 17, 40);
    fill(222,162,21);//highlight
        arc(200, 285, 30, 50, 0, PI, OPEN);//undereye
        arc(250, 230, 90, 50, 100, PI+QUARTER_PI, OPEN);//forehead stuff
        arc(250, 130, 90, 50, 100, PI+QUARTER_PI, OPEN);
        ellipse(250, 180, 50, 100);
        ellipse(255, 300, 8, 50);//nose
        ellipse(250, 360, 70, 20);//chin
    fill(235, 173, 30); //lighter highlight
        arc(250, 230, 70, 30, 100, PI+QUARTER_PI, OPEN);//forehead stuff
        arc(250, 130, 70, 30, 100, PI+QUARTER_PI, OPEN);
        ellipse(250, 180, 30, 100);
    fill(255,199,67); //eye
        ellipse(200,268,48,40);
    fill(100);   //inside eye stuff
        ellipse(200, 268, 20, 20);
    fill(200);
        ellipse(200, 268, 5, 5);
    fill(255, 92, 103); //cut face
    translate(width/2, height/2);
rotate(PI/7);
rect(125, -50, 32, 160);
fill(255, 92, 103); //cut face
    rect(125, 125, 32, 200)
} 
