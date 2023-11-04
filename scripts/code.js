$(document).ready(function() {
TESTER = document.getElementById("tester");

Plotly.newPlot(
  TESTER,
  [
    {
      x: [1, 2, 3, 4, 5],

      y: [1, 2, 4, 8, 16],
    },
  ],
  {
    margin: { t: 0 },
  }
);
});

//Credit to W3 https://www.w3schools.com/howto/howto_js_typewriter.asp
var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
