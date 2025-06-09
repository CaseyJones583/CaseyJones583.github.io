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
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(100, 100, 20, 500);
    createPlatform(380, 200, 20, 700);
    createPlatform(300, 650, 100, 20);
    createPlatform(100, 550, 100, 20);
    createPlatform(300, 450, 100, 20);
    createPlatform(100, 350, 100, 20);
    createPlatform(300, 250, 100, 20);
    createPlatform(100, 150, 100, 20);
    createPlatform(400, 200, 100, 20);
    createPlatform(600, 200, 100, 20);
    createPlatform(800, 200, 100, 20);
    createPlatform(1000, 200, 100, 20);

    // TODO 3 - Create Collectables
    createCollectable("database", 232.5, 575);
    createCollectable("database", 232.5, 475);
    createCollectable("database", 232.5, 375);
    createCollectable("database", 232.5, 275);
    createCollectable("database", 232.5, 175);
    createCollectable("database", 232.5, 75);
    createCollectable("database", 532.5, 75);
    createCollectable("database", 732.5, 75);
    createCollectable("database", 932.5, 75);

    // TODO 4 - Create Cannons
    createCannon("bottom", 172.5, 1000);
    createCannon("bottom", 472.5, 1000);
    createCannon("bottom", 672.5, 1000);
    createCannon("bottom", 872.5, 1000);
    createCannon("bottom", 1072.5, 1000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }
  

  registerSetup(setup);
});
