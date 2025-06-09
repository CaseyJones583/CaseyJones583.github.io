$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    

    // TODO 2 - Create Platforms
    
    createPlatform(700, 600, 100, 200, "#d9722f" )
    createPlatform(600, 700, 100, 100, "#d9722f" )
    createPlatform(800, 700, 100, 100, "#d9722f" )
    createPlatform(500, 475, 100, 25, "#d9722f" )
    createPlatform(400, 400, 100, 100, "#d9722f" )
    createPlatform(900, 475, 100, 25, "#d9722f" )
    createPlatform(1000, 400, 100, 100, "#d9722f" )
    createPlatform(800, 350, 100, 25, "#d9722f" )
    createPlatform(600, 350, 100, 25, "#d9722f" )
    createPlatform(700, 250, 100, 25, "#d9722f" )
    createPlatform(500, 150, 100, 25, "#d9722f" )
    createPlatform(900, 150, 100, 25, "#d9722f" )
    createPlatform(300, 200, 100, 100, "#d9722f" )
    createPlatform(200, 200, 100, 25, "#d9722f" )
    createPlatform(1100, 200, 100, 100, "#d9722f" )
    createPlatform(1200, 200, 100, 25, "#d9722f" )





    // TODO 3 - Create Collectables
    createCollectable("database", 732.5, 523.5);
    createCollectable("database", 532.5, 423.5);
    createCollectable("database", 932.5, 423.5);
    createCollectable("database", 832.5, 300.5);
    createCollectable("database", 632.5, 300.5);
    createCollectable("database", 732.5, 200.5);
    createCollectable("database", 532.5, 100.5);
    createCollectable("database", 932.5, 100.5);
    createCollectable("database", 232.5, 132.5);
    createCollectable("database", 1232.5, 132.5);
    

    // TODO 4 - Create Cannons
    createCannon("bottom", 673.5, 1000);
    createCannon("left", 273.5, 1000);
    createCannon("right", 123.5, 1000);




    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }
  

  registerSetup(setup);
});
