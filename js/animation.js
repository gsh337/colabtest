document.addEventListener("DOMContentLoaded", function() {
  const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll(".circle");
  
  const colors = [
    "#ffffff",
    "#FDEFE9",
    "#FAE0D4",
    "#F8D0BE",
    "#F6C0A9",
    "#F4B194",
    "#ED8154",
    "#EA713E",
  ];
  
  circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
  });
  
  window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;
  });
  
  function animateCircles() {
    let x = coords.x;
    let y = coords.y;
    
    circles.forEach(function (circle, index) {
      circle.style.left = x - 12 + "px";
      circle.style.top = y - 12 + "px";
      
      circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
      
      circle.x = x;
      circle.y = y;
  
      const nextCircle = circles[index + 2] || circles[0];
      x += (nextCircle.x - x) * 0.4;
      y += (nextCircle.y - y) * 0.4;
    });
  
    requestAnimationFrame(animateCircles);
  }
  
  animateCircles();
});