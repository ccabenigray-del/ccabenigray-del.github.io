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
    //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(0, 300, 100, 20, "purple");
createPlatform(200, 500, 100, 50, "blue");
createPlatform(400, 500, 100, 50, "red");
createPlatform(600, 400, 100, 1000, "orange");
createPlatform(800, 400, 50, 50, "yellow");
createPlatform(950, 0, 100, 200, "green");
createPlatform(950, 350, 100, 1000, "green");
createPlatform(1100, 300, 50, 50, "purple");
createPlatform(1200, 200, 50, 50, "yellow");
createPlatform(1100, 100, 50, 50, "blue");




    // TODO 3 - Create Collectables
createCollectable("steve", 600, 100, 1, 1);
createCollectable("diamond", 950, 300);
createCollectable("steve", 1100, 50);

    // TODO 4 - Create Cannons
createCannon("right", 800, 0.001);
createCannon("top", 500, 800);
createCannon("left", 300, 1000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
