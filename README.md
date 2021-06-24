# Resumen

En este repositorio se encuentran los apuntes de las clases de 2020 para las materias matemática (CBC código 51), análisis matemático (CBC código 66) e introducción a la física (Secundario).
Todo el material fue elaborado "en caliente" (a la par de las clases) con lo cual hay multiples errores de tipeo y de redacción.

Para la realización de las diapositivas se usó 
* plantillas .pug para el contenido.
* archivos .sass para los estilos.
* archivos .ggb para los gráficos interactivos.

Para la compilación de los archivos .pug y .sass se empleó el programa [Prepros](https://prepros.io/)

El repositorio se encuentra discontinuado, migrando los contenidos a https://github.com/cesarariet/diapositivas

## Estructura de archivos

### [Carpeta plantilla_diapositivas](https://github.com/cesarariet/cesarariet.github.io/tree/master/plantilla_diapositivas)

En esta carpeta se encuentra las plantillas  .pug y .sass del proyecto. Para cada clase debía copiarse el contenido de esta carpeta en la carpeta destino de la clase y editar el contenido. Allí tenemos:

* *index.pug*: Plantilla donde se escribe el contenido de la clase. En la misma plantilla esta explicado su uso.
* *sass/_diapositiva.sass*: Hoja de estilos donde se daba el grid a cada diapositiva usando mixins.

La estructura no es la mejor. A medida que se iban desarrollando las clases también iba aprendiendo a trabajar con páginas web. Existen clases que no siguen la estructura del proyecto pero que decidí no borrar por los alumnos que ya cursaron dichas clases.



### [Carpeta 51-matematica](https://github.com/cesarariet/cesarariet.github.io/tree/master/51-matematica)

Contenido de la materia matemática del cbc (código 51) del primer cuatrimestre del 2020. 

### [Carpeta 66-analisis](https://github.com/cesarariet/cesarariet.github.io/tree/master/66-analisis)

Contenido de la materia análisis matemático del cbc (código 66) del primer cuatrimestre del 2020.

### [Carpeta 2020/2c](https://github.com/cesarariet/cesarariet.github.io/tree/master/2020/2c)

Contenido de clases del segundo cuatrimestre. Mayormente usé el contenido de las carpetas anteriores (del 1er cuatrimestre), pero en algunos casos hice modificaciónes que aparecen en esta carpeta. 

Hay una subcarpeta [62](https://github.com/cesarariet/cesarariet.github.io/tree/master/2020/2c/62) que contiene algunos intentos de contenido para las clases de álgebra (código 62) del cbc.

### [Carpeta introduccion_a_la_fisica](https://github.com/cesarariet/cesarariet.github.io/tree/master/introduccion_a_la_fisica)

Contenido de algunas clases virtuales dadas para la materia introducción a la física de 4to año de colegio secundario.

### [Carpeta modulo_geogebra](https://github.com/cesarariet/cesarariet.github.io/tree/master/modulo_geogebra)

Un intento de implementar un script para trabajar con gráficos interactivos de Geogebra embebidos en la página. Las otras carpetas de nombre similar son intentos parecidos.

### [Carpeta portal_clase](https://github.com/cesarariet/cesarariet.github.io/tree/master/portal_clase)

Acá tengo la página que cargo en el navegador para dar las clases. Consiste en dos iframes que puedo mostrar o ocultar a voluntad con un check. En uno de los iframes pongo el contenido de la clase y en el otro accedo a un servidor web en un celular que me muestra las capturas de la cámara en tiempo real (así puedo filmarme mientras escribo).

El archivo importante de esta carpeta es [clase.html](https://github.com/cesarariet/cesarariet.github.io/blob/master/portal_clase/clase.html). El resto de archivos son intentos de mejoras o implementaciones circunstanciales.

# Nuevo repositorio

En el 2021 me encuentro migrando y creando contenido en https://github.com/cesarariet/diapositivas

Allí cambié el stack de trabajo. Sigo usando plantillas Pug y Sass (pero con extensión .scss). Sin embargo ya no utilizo Prepros sino que [Gulpjs](https://gulpjs.com/).

Además modifiqué la implementación para mitigar varios problemas que estaba teniendo. Los problemas son:
* Velocidad de carga de las diapostivas.
* Dificultad de mantener los estilos y plantillas dado que cada clase tenía una copia de las plantillas.
* Longitud de los .css resultantes luego de la compilación (aparentemente por un mal uso de .sass y de los mixins).
* Dificultad para trabajar con los gráficos en geogebra.
