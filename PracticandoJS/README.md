# Ejercicio 1. Construyendo HTML desde JavaScript

## 1. ¿Qué hace este ejercicio?

Primero, se crean títulos, subtítulos y párrafos utilizando `document.createElement()`, y se les asigna contenido mediante `textContent`. Después, se agregan al documento utilizando `append()` y `appendChild()`. Para las listas, se prueban tres formas diferentes de crearlas: utilizando un arreglo y un ciclo `for...of` para generar los elementos, creándolos individualmente y seleccionando una lista existente mediante `querySelectorAll()` para agregarle sus elementos.

## 2. ¿Qué conceptos de JavaScript utilizaste?

* Variables constantes (`const`).
* Arreglos.
* Ciclos `for...of`.
* DOM.
* `document.createElement()`.
* `textContent`.
* `append()` y `appendChild()`.
* `querySelector()` y `querySelectorAll()`.

## 3. ¿Ya conocías estos conceptos?

* Variables constantes (`const`).
* Arreglos.
* Ciclos `for...of`.
* `document.createElement()`.
* `textContent`.
* `append()` y `appendChild()`.
* `querySelector()` y `querySelectorAll()`.

# Ejercicio 2. Modificando elementos existentes

## 1. ¿Qué hace este ejercicio?

Primero, se selecciona el subtítulo creado en el ejercicio anterior mediante `querySelector()` y se modifica su contenido utilizando `textContent`. Después, se le asigna un identificador mediante `id` y se modifican sus propiedades visuales, como el color, el tamaño de letra, el fondo y la alineación, utilizando `style`. Finalmente, se seleccionan los dos párrafos mediante `querySelector()` y `querySelectorAll()`, y se les agregan clases con `classList.add()`.

## 2. ¿Qué conceptos de JavaScript utilizaste?

* Variables constantes (`const`).
* DOM.
* `querySelector()` y `querySelectorAll()`.
* `textContent`.
* Atributos (`id`).
* `classList.add()`.
* Propiedad `style`.
* Modificación de estilos CSS mediante JavaScript.

## 3. ¿Ya conocías estos conceptos?

* Variables constantes (`const`).
* `querySelector()` y `querySelectorAll()`.
* `textContent`.
* Atributos (`id`).
* `classList.add()`.

# Ejercicio 3. Crear una colección de elementos desde datos

## 1. ¿Qué hace este ejercicio?

Primero, se crea un arreglo de objetos que contiene cinco tecnologías web, cada una con su nombre, descripción y tipo. Después, se crea una sección para contener las tarjetas y se define una función que recorre el arreglo para generar dinámicamente un `div` por cada tecnología. Dentro de cada tarjeta se agregan los datos correspondientes y se aplican estilos para establecer bordes, espacios internos y separación entre tarjetas. Finalmente, se llama a la función para mostrar todas las tecnologías en la página.

## 2. ¿Qué conceptos de JavaScript utilizaste?

* Arreglos.
* Objetos.
* Variables constantes (`const`).
* Funciones.
* Ciclos `for...of`.
* DOM.
* `document.createElement()`.
* `textContent`.
* `append()`.
* `innerHTML`.
* Propiedad `style`.

## 3. ¿Ya conocías estos conceptos?

* Arreglos.
* Objetos.
* Variables constantes (`const`).
* Funciones.
* Ciclos `for...of`.
* `document.createElement()`.
* `textContent`.
* `append()`.

# Ejercicio 4. El DOM también se puede reorganizar

## 1. ¿Qué hace este ejercicio?

Primero, se guarda el orden original de las listas en un arreglo y se crea una copia para llevar el control del orden actual. Después, se crean dos botones: uno que reorganiza las listas desplazando cada una a la siguiente posición y otra que restaura el orden original. Para realizar los movimientos, se utiliza `insertBefore()`, que permite cambiar la posición de los nodos existentes en el DOM sin tener que crearlos nuevamente. Finalmente, se actualiza el arreglo del orden actual cada vez que se reorganizan las listas.

## 2. ¿Qué conceptos de JavaScript utilizaste?

* Arreglos.
* Variables constantes (`const`) y variables (`let`).
* Ciclos `for`.
* Condicionales (`if` y `else`).
* Funciones anónimas.
* Eventos mediante `addEventListener()`.
* Operador spread (`...`).
* DOM.
* `insertBefore()`.
* `nextSibling`.

## 3. ¿Ya conocías estos conceptos?

* Arreglos.
* Variables constantes (`const`) y variables (`let`).
* Ciclos `for`.
* Condicionales (`if` y `else`).

# Ejercicio 5. Agregar y eliminar elementos

## 1. ¿Qué hace este ejercicio?

Primero, se crea una lista vacía, un párrafo para mostrar mensajes y dos botones para agregar y eliminar elementos. También se declara un contador que permite llevar el registro de los elementos agregados. Al presionar el botón para agregar, se crea un nuevo elemento `li`, se le asigna un número y se inserta en la lista. Al presionar el botón para eliminar, se comprueba si la lista contiene elementos; si está vacía, se muestra un mensaje de aviso y se detiene la ejecución de esa función. De lo contrario, se elimina el último elemento y se actualiza el contador. Los mensajes desaparecen automáticamente después de un breve tiempo mediante `setTimeout()`, mientras que `clearTimeout()` evita que los avisos anteriores interfieran con los nuevos.

## 2. ¿Qué conceptos de JavaScript utilizaste?

* Variables constantes (`const`) y variables (`let`).
* Variables numéricas y cadenas de texto.
* Condicionales (`if`).
* Funciones anónimas.
* Eventos mediante `addEventListener()`.
* DOM.
* `document.createElement()`.
* `textContent`.
* `append()` y `appendChild()`.
* `children.length`.
* `lastElementChild`.
* `remove()`.
* `setTimeout()`.
* `clearTimeout()`.

## 3. ¿Ya conocías estos conceptos?

* Variables constantes (`const`) y variables (`let`).
* Variables numéricas y cadenas de texto.
* Condicionales (`if`).
* `document.createElement()`.
* `textContent`.
* `append()` y `appendChild()`.

# Ejercicio 6. Eventos e interacción

## 1. ¿Qué hace este ejercicio?

Primero, se crea una sección llamada “Panel Interactivo” y dentro de ella se agrega un cuadro que responde cuando el usuario pasa el mouse sobre él. Después, se agrega un botón que permite ocultar o mostrar el cuadro y un campo de texto que muestra en tiempo real lo que el usuario está escribiendo. Para esto se utilizan diferentes eventos: `mouseover` y `mouseout` para detectar cuando el mouse entra y sale del cuadro, `click` para el botón y `input` para detectar los cambios en el campo de texto.

## 2. ¿Qué conceptos de JavaScript utilizaste?

* Variables constantes (`const`).
* Condicionales (`if` y `else`).
* DOM.
* `document.createElement()`.
* `textContent`.
* `append()`.
* Eventos.
* `addEventListener()`.
* Evento `click`.
* Evento `mouseover`.
* Evento `mouseout`.
* Evento `input`.
* Modificación de estilos mediante `style`.

## 3. ¿Ya conocías estos conceptos?

* Variables constantes (`const`).
* Condicionales (`if` y `else`).
* `document.createElement()`.
* `textContent`.
* `append()`.

# Ejercicio 7. Formulario dinámico

## 1. ¿Qué hace este ejercicio?

Primero, se crea mediante JavaScript un formulario que contiene un campo para el nombre, un área para la descripción y un menú para seleccionar el tipo de tecnología. Después, se agregan las opciones disponibles al menú mediante un arreglo y un ciclo `for...of`. Al presionar el botón “Agregar tecnología”, se obtienen los valores introducidos por el usuario y se comprueba que ninguno de los campos esté vacío. Si falta información, se muestra un mensaje indicando qué campos deben completarse. Si todos los campos son válidos, se crea un nuevo objeto con los datos introducidos, se agrega al arreglo de tecnologías y se vuelven a dibujar las tarjetas para mostrar la nueva tecnología sin recargar la página. Finalmente, se limpian los campos del formulario.

## 2. ¿Qué conceptos de JavaScript utilizaste?

* Variables constantes (`const`).
* Variables (`let`).
* Arreglos.
* Objetos.
* Ciclos `for...of`.
* Condicionales (`if`).
* Funciones.
* Eventos mediante `addEventListener()`.
* DOM.
* `document.createElement()`.
* `textContent`.
* `append()`.
* `value`.
* `trim()`.
* `push()`.
* `join()`.
* Validación de campos.
* Actualización dinámica del contenido.

## 3. ¿Ya conocías estos conceptos?

* Variables constantes (`const`).
* Variables (`let`).
* Arreglos.
* Objetos.
* Ciclos `for...of`.
* Condicionales (`if`).
* Funciones.
* `document.createElement()`.
* `textContent`.
* `append()`.

# Ejercicio 8. Buscar y filtrar información

## 1. ¿Qué hace este ejercicio?

Primero, se crea un campo de texto para buscar tecnologías y se coloca antes de las tarjetas. Después, se utiliza el evento `input` para detectar cada cambio que realiza el usuario mientras escribe. El texto introducido se convierte a minúsculas y se utiliza `filter()` para buscar dentro del arreglo únicamente las tecnologías cuyo nombre contenga el texto escrito. Finalmente, se vuelven a dibujar las tarjetas utilizando solamente las coincidencias encontradas, por lo que los resultados se actualizan sin necesidad de recargar la página.

## 2. ¿Qué conceptos de JavaScript utilizaste?

* Arreglos.
* Funciones.
* Funciones anónimas.
* `filter()`.
* `toLowerCase()`.
* `includes()`.
* Eventos.
* `addEventListener()`.
* Evento `input`.
* DOM.
* `value`.
* `insertBefore()`.

## 3. ¿Ya conocías estos conceptos?

* Arreglos.
* Funciones.
* Funciones anónimas.

# Ejercicio 9. Estado y LocalStorage

## 1. ¿Qué hace este ejercicio?

Primero, se establece una clave para identificar los datos guardados y se hace una copia de las tecnologías iniciales para poder recuperar el estado original. Después, se crea una función que convierte el arreglo de tecnologías a texto mediante `JSON.stringify()` y lo guarda en `localStorage`. También se crea una función para consultar si existen datos guardados; si los encuentra, los convierte nuevamente a objetos con `JSON.parse()`, actualiza el arreglo y reconstruye las tarjetas. Finalmente, se agrega un botón para borrar los datos guardados, restaurar las tecnologías iniciales y actualizar nuevamente la interfaz. De esta manera, las tecnologías agregadas permanecen después de recargar la página.

## 2. ¿Qué conceptos de JavaScript utilizaste?

* Arreglos.
* Objetos.
* Funciones.
* Ciclos `for...of`.
* Condicionales (`if`).
* `localStorage`.
* `setItem()`.
* `getItem()`.
* `removeItem()`.
* `JSON.stringify()`.
* `JSON.parse()`.
* DOM.
* Eventos mediante `addEventListener()`.
* `value`.

## 3. ¿Ya conocías estos conceptos?

* Arreglos.
* Objetos.
* Funciones.
* Ciclos `for...of`.
* Condicionales (`if`).

# Ejercicio 10. Formularios y AJAX

## 1. ¿Qué hace este ejercicio?

Primero, se crea mediante JavaScript un formulario con un campo para introducir un nombre de usuario de GitHub, un botón para realizar la búsqueda y una sección donde se mostrará el resultado. Después, se utiliza el evento `submit` para detectar cuando se envía el formulario y `event.preventDefault()` para evitar que la página se recargue.

Antes de realizar la petición, se obtiene el nombre de usuario escrito y se comprueba que el campo no esté vacío. Si contiene información, se utiliza `fetch()` para realizar una petición a la API de GitHub utilizando dinámicamente el nombre introducido por el usuario.

Después, se comprueba la respuesta del servidor para identificar casos como un usuario inexistente, un límite de peticiones o algún otro error. Si la petición es correcta, se convierte la respuesta a JSON y se utilizan los datos obtenidos para crear una tarjeta con el avatar, nombre de usuario, nombre real, repositorios, seguidores, personas que sigue y un enlace a su perfil de GitHub.

Finalmente, cuando se realiza una nueva búsqueda, el contenido anterior de la sección de resultados se reemplaza por la nueva información, por lo que es posible realizar varias consultas sin recargar la página. Los errores también se muestran directamente en la página en lugar de utilizar `alert()`.

## 2. ¿Qué conceptos de JavaScript utilizaste?

* Variables constantes (`const`).
* Funciones.
* Funciones asíncronas (`async`).
* `await`.
* Condicionales (`if`).
* `else`.
* Eventos.
* `addEventListener()`.
* Evento `submit`.
* `event.preventDefault()`.
* DOM.
* `document.createElement()`.
* `textContent`.
* `append()`.
* `replaceChildren()`.
* `value`.
* `trim()`.
* `fetch()`.
* Peticiones HTTP.
* API.
* JSON.
* `response.json()`.
* `response.ok`.
* `response.status`.
* `try...catch`.
* Manejo de errores.
* `encodeURIComponent()`.
* Modificación de estilos mediante `style`.
* Atributos de elementos HTML (`src`, `alt`, `href`, `target`).
* `null`.

## 3. ¿Ya conocías estos conceptos?

* Variables constantes (`const`).
* Funciones.
* Condicionales (`if`).
* `else`.
* `document.createElement()`.
* `textContent`.
* `append()`.
* Peticiones HTTP.
* API.
* JSON.
* `response.json()`.
* `response.ok`.
* `response.status`.
* `try...catch`.
* Manejo de errores.

# Preguntas generales

## 4. ¿Tuviste dificultades? Explica qué parte te causó problemas y cómo intentaste resolverla y 5. ¿Utilizaste Inteligencia Artificial? Responde Sí o No.

En general, aunque ya tenía una idea de lo que debía hacer y cómo, lo que más me presentó dificultad fue la sintaxis, no me sé de memoria la manera en la que se escriben las cosas y muchas de las funciones de JS tampoco me las sé. Sé que existen y sé lo que quiero que hagan, pero no sabía escribirlas bien o las confundía con otras. Usé la IA para ayudarme con eso.

# Preguntas adicionales para el ejercicio 10

## 6. ¿Qué entiendes por AJAX?

AJAX es una forma de comunicación entre una página web y un servidor que permite enviar y recibir información sin tener que recargar toda la página. En este ejercicio se utiliza para consultar la API de GitHub y mostrar la información del usuario directamente en la página.

## 7. ¿Por qué la página no necesita recargarse para obtener nueva información?

Porque JavaScript realiza la petición al servidor mediante `fetch()` y recibe la información sin abandonar ni recargar la página actual. Después, JavaScript utiliza los datos recibidos para modificar directamente el DOM y mostrar el nuevo resultado.

## 8. ¿Qué hace `fetch()`?

`fetch()` permite realizar una petición a un recurso o servidor desde JavaScript. En este ejercicio se utiliza para enviar una petición a la API de GitHub utilizando el nombre de usuario introducido en el formulario.

## 9. ¿Qué representa la respuesta obtenida del servidor?

Representa la información que el servidor devuelve después de procesar nuestra petición. En este caso, cuando la búsqueda es correcta, contiene los datos del usuario de GitHub solicitado.

## 10. ¿Qué es JSON y para qué se utilizó?

JSON es un formato utilizado para representar y transportar información estructurada. En este ejercicio se utiliza para convertir la respuesta de la API a un formato que JavaScript pueda manejar como datos y así obtener información como el nombre de usuario, seguidores y repositorios.

## 11. ¿Qué hace `event.preventDefault()` en el formulario?

Evita el comportamiento predeterminado del formulario, que normalmente provocaría que el navegador recargara la página al enviarlo. De esta manera, JavaScript puede procesar el formulario y realizar la petición sin recargar la página.

## 12. ¿Qué diferencia existe entre un error en la petición y buscar un usuario que no existe?

Buscar un usuario que no existe significa que la petición sí llegó correctamente al servidor, pero GitHub respondió indicando que ese usuario no fue encontrado, normalmente mediante el código de estado `404`. En cambio, un error en la petición puede ocurrir cuando existe un problema de conexión, del servidor o de otro tipo que impide completar correctamente la consulta.

## 13. Describe, paso a paso, el recorrido de los datos desde que el usuario presiona “Buscar usuario” hasta que la información aparece en pantalla.

1. El usuario escribe un nombre de usuario de GitHub y presiona el botón “Buscar usuario”.
2. El evento `submit` detecta el envío del formulario.
3. `event.preventDefault()` evita que el navegador recargue la página.
4. JavaScript obtiene el valor escrito en el campo y elimina espacios innecesarios con `trim()`.
5. Se comprueba que el campo no esté vacío.
6. Si contiene información, `fetch()` realiza una petición a la API de GitHub utilizando el nombre de usuario.
7. El servidor de GitHub procesa la petición y devuelve una respuesta.
8. JavaScript revisa el estado de la respuesta para comprobar si ocurrió algún error.
9. Si la respuesta es correcta, se utiliza `response.json()` para obtener los datos del usuario en formato JSON.
10. JavaScript toma los datos necesarios de la respuesta, como el nombre, avatar, repositorios y seguidores.
11. Se crean los elementos HTML necesarios mediante el DOM.
12. Los datos obtenidos se agregan a esos elementos y se insertan en la sección de resultados.
13. Si se realiza otra búsqueda, los datos anteriores se reemplazan por la nueva información sin recargar la página.