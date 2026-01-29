window.onload = function() {
  // Put all bouncing elements in one array
  const bouncers = [
    { el: document.getElementById("couple"), dx: 2, dy: 2 },
    { el: document.getElementById("pug"), dx: 3, dy: 3 },
    { el: document.getElementById("caitvi"), dx: 4, dy: 4 },
    { el: document.getElementById("jarvis"), dx: 3, dy: 2 }
  ];

  // Set initial positions randomly
  bouncers.forEach(obj => {
    obj.x = Math.random() * (window.innerWidth - obj.el.offsetWidth);
    obj.y = Math.random() * (window.innerHeight - obj.el.offsetHeight);

    obj.el.style.left = obj.x + "px";
    obj.el.style.top = obj.y + "px";
  });

  function move(obj) {
    obj.x += obj.dx;
    obj.y += obj.dy;

    const maxX = window.innerWidth - obj.el.offsetWidth;
    const maxY = window.innerHeight - obj.el.offsetHeight;

    if (obj.x <= 0 || obj.x >= maxX) obj.dx *= -1;
    if (obj.y <= 0 || obj.y >= maxY) obj.dy *= -1;

    obj.el.style.left = obj.x + "px";
    obj.el.style.top = obj.y + "px";
  }

  function animate() {
    bouncers.forEach(move);
    requestAnimationFrame(animate);
  }

  animate();
};
