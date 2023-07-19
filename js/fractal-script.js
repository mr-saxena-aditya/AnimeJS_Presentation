const canvas = document.getElementById('fractalCanvas');
    const ctx = canvas.getContext('2d');

    function drawRandomFractal() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const maxDepth = 5; // Change this value to control the depth of the fractal
      drawFractalLine(canvas.width / 2, canvas.height, 100, 0, maxDepth);
    }

    function drawFractalLine(x, y, length, angle, depth) {
      if (depth === 0) {
        return;
      }

      const x2 = x + length * Math.sin(angle);
      const y2 = y - length * Math.cos(angle);

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      const newLength = length * 0.6; // Change this value to control the length of branches
      const newDepth = depth - 1;

      drawFractalLine(x2, y2, newLength, angle + Math.PI / 4, newDepth);
      drawFractalLine(x2, y2, newLength, angle - Math.PI / 4, newDepth);
    }

    // Generate a new random fractal every 1 second
    setInterval(drawRandomFractal, 1000);