// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/PARTY-1.gif",
    title: "Fiesta \"ÖPHIC\" Final de Semestre",
    about: "Diseñamos una función de luces para \"ÖPHIC\" fiesta inspirada en el mundo onírico.",

}, {

    figure: "media/p1.gif",
    title: "Lorem ipsum 02",
    about: "Nulla pretium non sapien eget fermentum",

}, {

  figure: "media/p2.gif",
  title: "Lorem ipsum 02",
  about: "Nulla pretium non sapien eget fermentum",

}, {

  figure: "media/p3.gif",
  title: "Lorem ipsum 02",
  about: "Nulla pretium non sapien eget fermentum",

}, {

  figure: "media/p4.gif",
  title: "Lorem ipsum 02",
  about: "Nulla pretium non sapien eget fermentum",
}, {

  figure: "media/p5.gif",
  title: "Lorem ipsum 02",
  about: "Nulla pretium non sapien eget fermentum",

}, {

  figure: "media/p6.gif",
  title: "Lorem ipsum 02",
  about: "Nulla pretium non sapien eget fermentum",

}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
