let cirs = []; // Used to store 4 types of dynamic circle ring
let stars = []; // Used to store stars
let meteors = []; // Used to store meteors
let scaleFactor = 1; // Scale factor for resizing content
let music
let waveform
let fft, analyser, rms = 0
// Stores the waveform data of the audio, obtained using the waveform() method from p5.FFT.
// This is an array of amplitude values used to create visual effects that respond dynamically to audio changes.
let arcAng = 0; // Rotation angle of the outer circle arc

function preload() {
  music = loadSound("asset/Lindsey Stirling - Lose You Now.mp3")
  // Load the music file
}

function mousePressed() {
  // Toggle music playback on mouse click: play if paused, pause if playing
  if (!music.isPlaying()) {  // If the music is not playing
    music.loop()             // Start playing music in a loop
  } else {                   // Otherwise (if the music is playing)
    music.pause()            // Pause the music
  }
}

function setup() {

  createCanvas(900, 900);
  angleMode(DEGREES);
  // Create a new instance of p5.FFT() object
  fft = new p5.FFT();
  // Create a new Amplitude analyser, this will analyse the volume of the song
  analyser = new p5.Amplitude();
  // Connect the input of the analyser to the song
  analyser.setInput(music);



  // Add circle rings at different positions: the first parameter is the x-coordinate, 
  // the second is the y-coordinate, the third is the circle ring type, 
  // the fourth is the circle ring size, and the fifth is the color
  cirs.push(new Circle(20, 9, 1, 160, color(176,224,230), true)); // First circle ring in the top left
  
  cirs.push(new Circle(515, 451, 2, 200, color(255,250,250), true)); // Circle ring in the center of the canvas
  
  cirs.push(new Circle(-40, 715, 1, 200, color(	250,250,210), true)); // First circle ring at the bottom edge

  cirs.push(new Circle(345, 130, 2, 130, color(250,250,210), true)); // Second circle ring at the top

  cirs.push(new Circle(650, 71, 3, 130, color(169,169,169), true)); // Third circle ring at the top

  cirs.push(new Circle(840, 306, 2, 150, color(176,224,230), false)); // First circle ring on the right edge

  cirs.push(new Circle(134, 370, 3, 140, color(153, 191, 236), false)); // Circle ring in the middle-left of the canvas


  cirs.push(new Circle(630, 903, 4, 200, color(	255,239,213), false)); // Third circle ring at the bottom edge

  cirs.push(new Circle(310, 730, 2, 150, color(153, 191, 236), false)); // Second circle ring at the bottom edge

  cirs.push(new Circle(850, 600, 1, 140, color(250,250,210), true)); // Second circle ring on the right edge

  for (let i = 0; i < 800; i++) {
    // Add 800 stationary stars
    stars.push(new Star());
  }
}

function draw() {
  // Use p5.FFT to get the waveform data of the current audio
  waveform = fft.waveform();
  
  // Apply the scale factor to adjust the size of the content
  scale(scaleFactor);

  // Create a gradient background from Black to dark blue
  let topColor = color(0); // Top color: Black
  let bottomColor = color(45, 64, 116); // Bottom color: dark blue

  // Draw a gradient background line by line from black to dark blue
  // Each line is drawn with an interpolated color in the gradient
  for (let y = 0; y < height / scaleFactor; y++) {
    // `inter` is a value between 0 and 1, representing the position from top to bottom
    let inter = map(y, 0, height / scaleFactor, 0, 1);
    let c = lerpColor(topColor, bottomColor, inter); // Calculate the color for the current line
    stroke(c); // Set the color for the current line
    line(0, y, width / scaleFactor, y); // Draw a horizontal line across the full canvas width
  }
  
  // Draw two audio spectrum bars at the top and bottom of the canvas
  waveformBar()

  // Start creating the meteor section
  if (random(1) < 0.7) {
    // There is a 70% chance to add a new meteor on each frame
    meteors.push(new Meteor());
  }

  // Draw all static stars
  for (let i = 0; i < stars.length; i++) {
    // Draw stars.
    push()
    translate(width / 2, height / 2)
    rotate(frameCount)
    stars[i].display(); // Display each star
    pop()
  }
  
  // Draw and update all meteors
  for (let i = 0; i < meteors.length; i++) {
    meteors[i].update(); // Update meteor position
    meteors[i].display(); // Display meteor on the canvas
  }

  // Remove meteors that have moved past the bottom of the canvas
  for (let i = meteors.length - 1; i >= 0; i--) {
    if (meteors[i].y > height / scaleFactor + 100) // Check if meteor is out of bounds
      meteors.splice(i, 1); // Remove the meteor from the array
  }

  // Draw a transparent, gradient white circle underneath each dynamic circle ring
  for (let i = 0; i < cirs.length; i++) {
    let baseX = cirs[i].x; // X-coordinate of the dynamic circle
    let baseY = cirs[i].y; // Y-coordinate of the dynamic circle
    let baseSize = cirs[i].cirSize * 0.5; // Base size for the feathering effect

    // Overlay multiple semi-transparent concentric circles for a feathering effect
    for (let j = 0; j < 10; j++) { 
    // Adjust the loop count to control the intensity of feathering
    let alpha = map(j,0, 10, 40, 0); // Gradually decrease opacity from the center outward

    // Use sin function to animate size changes over time
    let size = baseSize + j * 40 + sin(frameCount * 10 + j) * 10; // Oscillate the size

    fill(255, alpha); // Set color with adjusted opacity
    noStroke(); // Remove outline for a smoother gradient
    ellipse(baseX, baseY, size); // Draw the concentric circle
  }
    }
  if (music.isPlaying()) {
    // When the music is playing, set rms (root mean square) to the current audio level
    rms = analyser.getLevel();
  } else {
    // If the music is paused, gradually reduce rms towards zero
    rms = lerp(rms, 0.001, 0.1);
  }

  // Draw all dynamic circle rings
  for (let i = 0; i < cirs.length; i++) {
    cirs[i].display(); // Display each circle ring
    drawWhiteCircle(cirs[i]); // Draw a white circular border around each dynamic ring
  }

  // Adjust the rotation angle of the outer arc based on the audio volume (rms)
  arcAng += rms * 10;
    
  if (millis() < 5000) {
    // Display instructional text for the first 5 seconds of the program
    fill(255, 200);
    textAlign(CENTER);
    textSize(30);
    noStroke();
    // Set text to bold and italic
    textStyle(BOLDITALIC);
    text("Click on the screen to play music", 450, 450);
  }
}

function waveformBar() {
  // Define the gradient colors: blue to purple
  let startColor = color(	255,255,255); // white
  let endColor = color(135,206,250); //LightSkyBlue

  // Draw audio spectrum bars based on waveform data
  for (let i = 0; i < waveform.length; i++) {
    let hei = waveform[i] * 200; // Set bar height based on waveform data
    let wid = 900 / waveform.length * 0.3; // Calculate width of each rectangle
    let x = map(i, 0, waveform.length, 0, width); // Map rectangle position along the width of the canvas
    
    // Calculate the color for the current rectangle based on position in the gradient
    let inter = map(i, 0, waveform.length, 0, 1); // Interpolation factor from 0 to 1
    let c = lerpColor(startColor, endColor, inter); // Interpolated color

    rectMode(CENTER); // Draw rectangles from their center
    fill(c); // Set rectangle color
    noStroke(); // Remove rectangle border

    // Draw rectangle at the top of the canvas
    rect(x, 0, wid, hei);
    // Draw rectangle at the bottom of the canvas
    rect(x, 900, wid, hei);
  }
}


// Draw a white border around a dynamic circle ring
function drawWhiteCircle(circle) {
  stroke(255, 50); // Semi-transparent white stroke
  strokeWeight(5); // Set border thickness
  noFill(); // Hollow circle
  
  let s = circle.cirSize * 2.05 * map(rms, 0, 1, 0.8, 1.2); // Adjust size based on rms
  
  push(); // Start a new drawing state
  translate(circle.x, circle.y); // Move the origin to the center of the circle
  rotate(arcAng); // Rotate the arcs based on the current angle
  
  // Draw multiple arcs around the circle, with length based on the audio volume (rms)
  for (let a = 0; a < 360; a += 45) { 
    // Loop through 360 degrees in increments of 45
    arc(0, 0, s, s, a, a + rms * 90); 
    // Draw an arc at the current angle with size based on rms
  }
  
  pop(); 
}



// Class representing a static star
class Star {
  constructor() {
    // Generate a random position for the star within the canvas bounds
    this.x = random(-width * 0.7, width * 0.7);
    this.y = random(-width * 0.7, width * 0.7);

    // Assign a random color to each star with a certain probability
    if (random(1) < 0.5) {
      this.col = color(200, 161, 192);
    } else {
      this.col = color(255);
    }
  }
  display() {
    // Draw the static stars
    push()
    stroke(this.col);
    strokeWeight(2);
    point(this.x, this.y); // This technique is from https://p5js.org/reference/p5/point/
    pop()
  }
}
// Class representing the meteors with properties
class Meteor {
  constructor() {
    // Generate meteors at random positions at the top of the screen
    this.x = random(-width, width);
    this.y = 0;
    this.vx = 4;
    this.vy = 4;
  }
  display() {
    // Draw the meteor and its tail
    fill(255); // Set fill color to white for the meteor
    stroke(255, 80); // Set stroke color to semi-transparent white for the tail
    strokeWeight(1); // Set stroke weight for the tail
    ellipse(this.x, this.y, random(4, 7)); // Draw the meteor as a small ellipse with a random size
  
    // Generate a random length for the meteor's tail
    let tailLeng = random(5, 16);
  
    // Draw the tail line extending from the meteor's position
    line(this.x, this.y, -this.vx * tailLeng + this.x, -this.vy * tailLeng + this.y);
  }
  update() {
    // Update the meteor's position, making it move by adding velocity
    this.x += this.vx;
    this.y += this.vy;
  }
}

// Class representing the dynamic circle rings with properties
class Circle {
  constructor(x, y, s1, size, col, s2) {
    // Initialize dynamic circle ring
    this.x = x;
    this.y = y;
    this.style = s1; //The type of the circle rings
    this.cirSize = size;
    this.parts = [];
    this.angle = 10;
    this.col = col;
    // Control the rotation direction
    this.rotateDir = 4;
    if (random(1) < 0.5) {
      this.rotateDir = -1;
    }
    this.init();
    // Control whether particles move in response to music
     this.static = s2
  }

  init() {
    // Add particles in different arrangements based on the circle ring style
    if (this.style == 1) {
      this.layer = 10; // Number of layers in the ring
      for (let l = 0; l < this.layer; l += 1) {
        for (let i = 0; i < 4; i++) {
          for (let n = 0; n < 90; n += 2) {
            // Calculate position, rotation angle, opacity, and size for each particle
            let r = map(l, 0, this.layer, this.cirSize * 0.1, this.cirSize); // Radius for this layer
            let angle = map(i, 0, 4, 0, 360) + this.angle + n; // Rotation angle
            let x = cos(angle) * r;
            let y = sin(angle) * r;
            let alp = map(n, 0, 90, 255, 0); // Gradual opacity fade
            
            // Add a new particle with the calculated properties
            this.parts.push(new Particle1(x, y, alp, this.col));
          }
        }
      }
    }
  
    else if (this.style == 2) {
      this.layer = 15; // Number of circle ring layers
      for (let l = 0; l < this.layer; l += 1) {
        for (let i = 0; i < 2; i++) {
          for (let n = 0; n < 90; n += 2) {
             // Calculate the position, rotation angle, opacity, and size data for each circle ring 
            let r = map(l, 0, this.layer, this.cirSize * 0.2, this.cirSize);
            let angle = map(i, 0, 2, 0, 360) + l * 45 + n;
            let x = cos(angle) * r;
            let y = sin(angle) * r;
            let alp = map(n, 0, 100, 255, 0);
            this.parts.push(new Particle1(x, y, alp, this.col));
          }
        }
      }
    }
    else if (this.style == 3) {
      this.layer = 13; // Number of circle ring layers
      for (let l = 0; l < this.layer; l += 1) {
        for (let i = 0; i < 3; i++) {
          for (let n = 0; n < l + 2; n++) {
            // Calculate the position, rotation angle, opacity, and size data for each circle ring 
            let r = map(l, 0, this.layer, this.cirSize * 0.2, this.cirSize);
            let angle = map(i, 0, 3, 0, 360) + n * 12 + l * 20;
            let x = cos(angle) * r;
            let y = sin(angle) * r;
            let sw = map(n, 0, this.layer, 8, 1);
            this.parts.push(new Particle2(x, y, sw, this.col));
          }
        }
      }
    }

    else if (this.style == 4) {
      this.layer = 6; // Number of circle ring layers
      for (let l = 0; l < this.layer; l += 1) {
        for (let i = 0; i < 3; i++) {
          for (let n = 0; n < l * 4 + 12; n++) {
            // Calculate the position, rotation angle, opacity, and size data for each circle ring 
            let r = map(l, 0, this.layer, this.cirSize * 0.2, this.cirSize);
            let angle = map(n, 0, l * 4 + 12, 0, 360) + l * 180;
            let x = cos(angle) * r;
            let y = sin(angle) * r;
            let sw = map(abs(n - (l * 4 + 12) / 2), 0, (l * 4 + 12) / 2, 12, -1);
            this.parts.push(new Particle2(x, y, sw, this.col));
          }
        }
      }
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    noFill();
    beginShape();
    stroke(255, 50); // Semi-transparent white for waveform outline
    strokeWeight(1);
  
    // Draw the outer waveform line based on audio data
    for (let i = 0; i < waveform.length; i++) {
      let r = map(waveform[i], -1, 1, this.cirSize * 0.5, this.cirSize * 1.1); // Radius based on waveform data
      let deg = map(i, 0, waveform.length, 0, 360); // Map index to angle around the circle
  
      let x = cos(deg) * r;
      let y = sin(deg) * r;
      vertex(x, y); // Add vertex point based on calculated position
    }
    endShape();
    pop();
  



    // Draw all particles inside the dynamic circle ring
    for (let i = 0; i < this.parts.length; i++) {
      push();
      translate(this.x, this.y);
      rotate(this.angle);
  
      if (this.static) {
        // Scale particle based on waveform data to make it respond to the audio
        let r = map(waveform[i % waveform.length], -1, 1, 0.5, 1.1);
        scale(r); // Adjust particle size based on audio data
      }
     
      this.parts[i].display(); // Display each particle
      pop();
    }
  
    // Rotate the entire circle ring based on the audio volume level (rms)
    this.angle += this.rotateDir * rms * 15;
  }
}

// Two types of particles
class Particle1 {
  constructor(x, y, alp, col) {
    this.x = x;
    this.y = y;
    this.alp = alp;
    this.sw = 4; // Set the size

    this.r = red(col);
    this.g = green(col);
    this.b = blue(col);
  }
  display() {
    // Set the stroke weight and color with transparency, then draw the particle
    strokeWeight(this.sw);               // Set particle size
    stroke(this.r, this.g, this.b, this.alp); // Set color and transparency
    point(this.x, this.y);               // Draw particle at (x, y) position
  }
}
class Particle2 {
  constructor(x, y, sw, col) {
    this.x = x;
    this.y = y;
    this.sw = sw;
    this.col = col;
  }
  display() {
    strokeWeight(this.sw);
    stroke(this.col);
    point(this.x, this.y);
  }
}

// Function to make the canvas and content scale proportionally when the window size changes
function windowResized() {
  let aspectRatio = 900 / 900; // The aspect ratio of the original canvas.
  let newWidth = windowWidth;
  let newHeight = windowWidth / aspectRatio;

  if (newHeight > windowHeight) {
    newHeight = windowHeight;
    newWidth = newHeight * aspectRatio;
  }

  resizeCanvas(newWidth, newHeight); // This technique is from https://p5js.org/reference/p5/resizeCanvas/
  scaleFactor = newWidth / 900; // Update the scaling factor
}