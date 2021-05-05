const firstName = prompt('Ingrese el nombre del alumno');
const lastName = prompt('Ingrese el apellido del alumno');

const career = prompt('Ingrese la carrera del alumno');

const ramo1Name = prompt('Ingrese el nombre del primer ramo');
const ramo1Note1 = parseInt(prompt(`Ingrese Nota 1 [${ramo1Name}]`));
const ramo1Note2 = parseInt(prompt(`Ingrese Nota 2 [${ramo1Name}]`));
const ramo1Note3 = parseInt(prompt(`Ingrese Nota 3 [${ramo1Name}]`));

const ramo2Name = prompt('Ingrese el nombre del segundo ramo');
const ramo2Note1 = parseInt(prompt(`Ingrese Nota 1 [${ramo2Name}]`));
const ramo2Note2 = parseInt(prompt(`Ingrese Nota 2 [${ramo2Name}]`));
const ramo2Note3 = parseInt(prompt(`Ingrese Nota 3 [${ramo2Name}]`));

const ramo3Name = prompt('Ingrese el nombre del tercer ramo');
const ramo3Note1 = parseInt(prompt(`Ingrese Nota 1 [${ramo3Name}]`));
const ramo3Note2 = parseInt(prompt(`Ingrese Nota 2 [${ramo3Name}]`));
const ramo3Note3 = parseInt(prompt(`Ingrese Nota 3 [${ramo3Name}]`));

//Aquí creamos nuestro div contenedor
document.write("<div class='container'>");
document.write("<h1>Notas finales</h1>");

document.write("<table class='table'>");
document.write("<tbody>");
document.write("<tr>");
document.write(`<td>Nombre:</td>`);
document.write(`<td>${firstName ? firstName : '-'} ${lastName ? lastName : '-'}</td>`);
document.write("</tr>");
document.write("<tr>");
document.write(`<td>Carrera:</td>`);
document.write(`<td>${career ? career : '-'}</td>`);
document.write("</tr>");
document.write("</tbody>");
document.write("</table>");

//Aquí creamos nuestra tabla con Bootstrap
document.write("<table class='table'>");
//Aquí indicamos que nuestra tabla tendrá encabezado
document.write("<thead class='bg-dark text-white'>");
//Con tr definimos las columnas de la tabla
document.write("<tr>");
//Aquí definimos el tipo de dato que tendrá cada columna y su encabezado
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");
//Aquí definimos el tipo de dato que tendrá cada columna y su encabezado
document.write("</tr");
//Aquí cerramos el tr donde definimos las columnas de la tabla
document.write("</thead>");
//Aquí cerramos el encabezado de nuestra tabla
//Aquí definimos el cuerpo con el contenido de la tabla según la columna
document.write("<tbody>");
document.write("<tr>");
document.write(`<td scope='row'>${ramo1Name}</td>`);
document.write(`<td>${ramo1Note1 ? ramo1Note1 : '-'}</td>`);
document.write(`<td>${ramo1Note2 ? ramo1Note2 : '-'}</td>`);
document.write(`<td>${ramo1Note3 ? ramo1Note3 : '-'}</td>`);
document.write(`<td>${((ramo1Note1 + ramo1Note2 + ramo1Note3) / 3).toFixed(2)}</td>`);
document.write("<tr>");

document.write("<tr>");
document.write(`<td scope='row'>${ramo2Name}</td>`);
document.write(`<td>${ramo2Note1 ? ramo2Note1 : '-'}</td>`);
document.write(`<td>${ramo2Note2 ? ramo2Note2 : '-'}</td>`);
document.write(`<td>${ramo2Note3 ? ramo2Note3 : '-'}</td>`);
document.write(`<td>${((ramo2Note1 + ramo2Note2 + ramo2Note3) / 3).toFixed(2)}</td>`);
document.write("<tr>");

document.write("<tr>");
document.write(`<td scope='row'>${ramo3Name}</td>`);
document.write(`<td>${ramo3Note1 ? ramo3Note1 : '-'}</td>`);
document.write(`<td>${ramo3Note2 ? ramo3Note2 : '-'}</td>`);
document.write(`<td>${ramo3Note3 ? ramo3Note3 : '-'}</td>`);
document.write(`<td>${((ramo3Note1 + ramo3Note2 + ramo3Note3) / 3).toFixed(2)}</td>`);
document.write("<tr>");
document.write("</tbody>");
//Aquí cerramos el cuerpo con el contenido de la tabla según la columna
document.write("</table");
//Aquí cerramos nuestra tabla
document.write("</div>");
//Aquí cerramos nuestro div contenedor