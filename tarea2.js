document.addEventListener("mousedown", dibujarMouse);
document.addEventListener("mousemove", dibujarMouse);
document.addEventListener("mouseup", dibujarMouse);

var cuadrito = document.getElementById("area_de_dibujot");
var papel = cuadrito.getContext("2d");
var x = 0;
var y = 0;
var colorBordeCanvas = "black";
var canvasMaxX = area_de_dibujot.width;
var canvasMaxY = area_de_dibujot.height;
var boton_activo;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarMouse(evento)
{
  var colorcito = "orange";
  var coordenadaX = evento.clientX;
  var coordenadaY = evento.clientY;
  var tipodeevento = evento.type;
  switch (tipodeevento)
  {
    case "mousedown":
        boton_activo = true;
        console.log("boton presionado");
        x = evento.clientX;
        y = evento.clientY;
    break;
    case "mousemove":
      if (boton_activo == true)
      {
        dibujarLinea(colorcito, x, y, coordenadaX, coordenadaY, papel);
        x = coordenadaX;
        y = coordenadaY;
        console.log("trazando");
      }
    break;
    case "mouseup":
        boton_activo = false;
        console.log("boton liberado");
    break;
  }
  console.log(evento);
}

dibujarLinea(colorBordeCanvas, x, y, canvasMaxX, y, papel);
dibujarLinea(colorBordeCanvas, x, canvasMaxY, canvasMaxX, canvasMaxY, papel);
dibujarLinea(colorBordeCanvas, x, y, x, canvasMaxY, papel);
dibujarLinea(colorBordeCanvas, canvasMaxX, y, canvasMaxX, canvasMaxY, papel);
