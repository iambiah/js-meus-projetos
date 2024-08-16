function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background("pink");
    fill("blue");
    textSize(64);
    textAlign(CENTER, CENTER)
    
    let maximo = width;
    let minimo = 0;
    let palavra = "vida";
    let quantidade = map(mouseX, 0, width, 4, palavra.length);
    let parcial = palavra.substring(0,quantidade);
    text(parcial,200,200);
    
  //  if(mouseX < 50){
  //    let palavra = "C";
  //    text(palavra, 200, 200);
  //  } else {
  //    let palavra = "vida";
  //    text(palavra, 200, 200);
  //  }
  }

  

  function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background("rgb(1,1,197)");
  stroke ("black")
    fill ("red")
    
    //console.log("mouseIsPressed")
    
    if(mouseIsPressed) {
      
    }
  rect (mouseX,mouseY,20,35)
    
  }