# Segunda Vida: banco de materiales para maquetas

Aplicación hecha con React y Vite para registrar, buscar, consultar y reservar los materiales que sobran en el taller después de cada proyecto. Los ocho ejercicios forman una sola aplicación.

## Instalación y ejecución

Se necesita tener instalado Node.js. Dentro de la carpeta `PracticandoReact`:

```bash
npm install
npm run dev
```

Después se abre en el navegador la dirección que muestra la terminal, normalmente `http://localhost:5173`.

## Organización de los archivos

* `src/data/materiales.js`: los seis materiales iniciales y la lista de categorías.
* `src/utils/materiales.js`: las funciones auxiliares.
* `src/App.jsx`: el componente que coordina la aplicación, con el estado, los filtros, la reserva y la persistencia.
* `src/components/Encabezado.jsx`: el encabezado.
* `src/components/FormularioMaterial.jsx`: el formulario de registro y su validación.
* `src/components/Filtros.jsx`: la búsqueda, el filtro de categoría, la casilla "Solo disponibles" y el botón "Limpiar filtros".
* `src/components/Resumen.jsx`: el resumen de totales.
* `src/components/Material.jsx`: la lista de materiales, la tarjeta de cada material y la sección de detalle.
* `src/App.css`: los estilos.

# Ejercicio 1. Datos y diferentes formas de función

## 1. ¿Qué hace esta funcionalidad y en qué archivos está?

Primero, en `src/data/materiales.js` se crea y se exporta un arreglo con seis materiales distribuidos en cuatro categorías: Madera, Cartón, Tela y Plástico. Cada material tiene un identificador fijo (`mat-01` a `mat-06`), nombre, descripción, categoría, ubicación y `reservado: false`. En el mismo archivo se exporta la lista de categorías que usan los select.

Después, en `src/utils/materiales.js` se crean tres funciones auxiliares. `textoMaterial` es una función declarada con `function` que devuelve el nombre y la ubicación de un material. `estaDisponible` es una función flecha con retorno implícito que indica si un material no está reservado. `normalizarTexto` es una función flecha con bloque y `return` explícito que quita los espacios al principio y al final de un texto y lo convierte a minúsculas.

Finalmente, las tres funciones se usan en la aplicación. `textoMaterial` aparece en los mensajes del formulario y en el título del detalle. `estaDisponible` se usa en las tarjetas, en el detalle, en el filtro "Solo disponibles" y en el resumen. `normalizarTexto` se usa en la búsqueda y para detectar duplicados.

## 2. ¿Qué conceptos utilizaste?

* Arreglos.
* Objetos.
* `export` y `export default`.
* `import`.
* Funciones declaradas con `function`.
* Funciones flecha con retorno implícito.
* Funciones flecha con bloque y `return` explícito.
* `trim()`.
* `toLowerCase()`.
* Concatenación de textos.

## 3. ¿Qué datos recibe y qué resultado produce?

El arreglo no recibe nada, solo se exporta para usarlo en `App.jsx`. `textoMaterial` recibe un material y devuelve un texto como `"Cartón corrugado (Estante A)"`. `estaDisponible` recibe un material y devuelve `true` si no está reservado y `false` si lo está. `normalizarTexto` recibe un texto como `"  Cartón Corrugado "` y devuelve `"cartón corrugado"`.

## 4. ¿Qué dificultad encontraste y cómo la resolviste?

Lo que más me costó fue entender la diferencia entre las tres formas de función. Yo pensaba que las funciones flecha se usaban cuando se querían ejecutar más instrucciones antes del `return`, pero en realidad son otra forma de escribir una función: si no lleva llaves devuelve directamente lo que está después de la flecha, y si lleva llaves funciona igual que una función normal y necesita su `return`. También me costó el `import` y `export`, porque en la práctica de JS los archivos compartían variables solo por el orden de los scripts. Lo relacioné con los imports de Java, con la diferencia de que aquí no se importan métodos de una clase, sino lo que cada archivo exporta. Lo resolví comparando las tres funciones del archivo y revisando dónde se usaba cada una. Tengo buena noción de cómo se usan, pero a veces confundo conceptos de otros lenguajes.

## 5. ¿Utilizaste inteligencia artificial?

Sí. Usé la IA para definir las funciones auxiliares y en qué partes de la aplicación usarlas. Le pedí que me explicara qué tarea cumple cada una y por qué conviene separarlas de los componentes. Incorporé las tres funciones. Funcionan así: `textoMaterial` junta el nombre y la ubicación para los mensajes y el detalle; `estaDisponible` revisa si un material no está reservado y se usa en tarjetas, filtros y resumen; y `normalizarTexto` deja los textos sin espacios extra y en minúsculas para poder compararlos en la búsqueda y en los duplicados.

# Ejercicio 2. Interfaz dividida en componentes

## 1. ¿Qué hace esta funcionalidad y en qué archivos está?

Primero, la interfaz se divide en componentes dentro de `src/components/`: `Encabezado`, `FormularioMaterial`, `Filtros`, `Resumen` y, dentro de `Material.jsx`, `Lista`, `Tarjeta` y `Detalle`. `Material.jsx` exporta `Lista` y `Detalle` juntos en un objeto, por lo que en `App.jsx` se usan como `<Material.Lista />` y `<Material.Detalle />`. `Tarjeta` solo la usa `Lista`, así que no se exporta.

Después, `App.jsx` guarda el arreglo de materiales en un estado con `useState` y se lo envía a los componentes mediante props. `Lista` recorre los materiales con `map` y crea una `Tarjeta` por cada uno, usando el `id` del material como `key`. Cada tarjeta muestra el nombre, la categoría, la ubicación y si está disponible o reservado.

Finalmente, los componentes hijos no modifican sus props. Cuando necesitan cambiar algo, como reservar un material o ver su detalle, llaman a funciones que reciben de `App` por props.

## 2. ¿Qué conceptos utilizaste?

* Componentes de React.
* JSX.
* Props.
* Desestructuración de props.
* Estado con `useState`.
* `map()`.
* `key`.
* Funciones enviadas mediante props.
* Fragmentos (`<>`).

## 3. ¿Qué datos recibe y qué resultado produce?

`App` recibe los materiales guardados, o los iniciales si no hay nada guardado. `Lista` recibe el arreglo de materiales que se debe mostrar y las funciones `verDetalle` y `cambiarReserva`. `Tarjeta` recibe un material y esas mismas funciones. El resultado es una tarjeta en pantalla por cada material.

## 4. ¿Qué dificultad encontraste y cómo la resolviste?

Ya sabía crear componentes, pasarles props y usar `map`, pero no tenía claro para qué servía la `key`. Pensaba que solo era un identificador como en Java, y entendí que React la usa para saber qué tarjeta es cuál cuando la lista cambia, por eso se usa el `id` y no la posición, que cambia al filtrar. También confundía el estado con una variable local. La diferencia es que React recuerda el estado y vuelve a dibujar el componente cuando cambia. Al principio pensé que la comunicación entre `App` y sus hijos era algo como herencia, pero es composición: los datos bajan por props y los hijos piden cambios llamando a funciones que reciben del padre. Por último, creí que `Tarjeta` necesitaba exportarse, pero como está en el mismo archivo que `Lista`, no hace falta. Lo resolví revisando cómo viajan los datos desde `App` hasta cada tarjeta.

## 5. ¿Utilizaste inteligencia artificial?

Sí. Usé la IA para decidir cómo dividir la interfaz y cómo se comunican los componentes. Le pedí que me explicara dónde debe vivir el arreglo de materiales y cómo los componentes hijos pueden pedir cambios sin modificar los datos. Incorporé la estructura de componentes. Funciona así: `App` es el único que guarda y modifica los materiales; los demás componentes solo reciben datos para mostrarlos y funciones como `verDetalle` y `cambiarReserva`, que al llamarse le piden a `App` que haga el cambio.

# Ejercicio 3. Formulario controlado y validación

## 1. ¿Qué hace esta funcionalidad y en qué archivos está?

Está en `src/components/FormularioMaterial.jsx`, y el mensaje se guarda en el estado de `src/App.jsx`.

Primero, el formulario tiene un campo para el nombre, un área para la descripción, un select para la categoría y un campo para la ubicación. Cada campo tiene su propio estado y se actualiza con `onChange`, así que siempre muestra lo que está guardado en el estado.

Después, al enviar el formulario se usa `event.preventDefault()` para que la página no se recargue. Se revisa cada campo con `trim()`, por lo que un campo vacío o con solo espacios cuenta como faltante, y se muestra un mensaje en rojo con los campos que faltan. También se busca con `find` si ya existe un material con el mismo nombre y la misma ubicación, comparando ambos con `normalizarTexto` para no distinguir mayúsculas ni espacios. Si existe, se muestra un mensaje de error. En los dos casos de error los datos escritos se conservan.

Finalmente, si los datos son válidos, se crea un material nuevo con un identificador único (`"mat-"` más la fecha actual en milisegundos) y `reservado: false`, se agrega al arreglo, se limpian los campos y se muestra un mensaje de confirmación en verde.

## 2. ¿Qué conceptos utilizaste?

* Formularios controlados.
* Estado con `useState`.
* Eventos `onChange` y `onSubmit`.
* `event.preventDefault()`.
* `event.target.value`.
* Condicionales (`if`).
* `trim()`.
* `push()` y `join()`.
* `find()`.
* Operador spread (`...`).
* `Date.now()`.
* Mensajes en la interfaz en lugar de `alert()`.
* Estilos en línea con `style`.

## 3. ¿Qué datos recibe y qué resultado produce?

Recibe por props el arreglo de materiales, la función `agregarMaterial`, el mensaje actual y la función `cambiarMensaje`. Recibe del usuario el nombre, la descripción, la categoría y la ubicación. Si algo está mal, produce un mensaje de error y no agrega nada. Si todo está bien, produce un material nuevo en la lista, un formulario vacío y un mensaje de confirmación.

## 4. ¿Qué dificultad encontraste y cómo la resolviste?

La validación ya la conocía de la práctica de JS, pero me costó entender los campos controlados. Pensaba que el `value` servía para saber a qué campo pertenecía el dato, pero en realidad muestra lo que hay en el estado, y sin `onChange` el campo no deja escribir porque el estado nunca cambia. También tuve dudas con la validación de duplicados: no tenía claro por qué se normalizaban los dos textos ni cómo el `&&` permitía registrar el mismo nombre en otra ubicación, hasta que vi que solo se rechaza si coinciden las dos cosas. Para el identificador usé la fecha en milisegundos, porque es prácticamente imposible que se registren dos materiales en el mismo momento, a diferencia de usar la cantidad de materiales, que podría repetirse. Lo resolví probando el formulario con campos vacíos, con espacios y con duplicados escritos con otras mayúsculas.

## 5. ¿Utilizaste inteligencia artificial?

Sí. Usé la IA para la lógica de validación del formulario, sobre todo para detectar duplicados. Le pedí que me explicara cómo comparar materiales sin que importen las mayúsculas o los espacios, y cómo permitir el mismo nombre en otra ubicación. Incorporé la función `registrar`. Funciona así: primero revisa que ningún campo esté vacío, después busca un material con el mismo nombre y la misma ubicación ya normalizados, y solo si no lo encuentra crea uno nuevo con un identificador único, lo agrega y limpia el formulario.

# Ejercicio 4. Búsqueda y filtros combinados

## 1. ¿Qué hace esta funcionalidad y en qué archivos está?

Los controles están en `src/components/Filtros.jsx`, y el estado y el filtrado están en `src/App.jsx`.

Primero, se agregan un campo para buscar por nombre, un select de categoría con la opción "Todas", una casilla "Solo disponibles" y un botón "Limpiar filtros". El valor de cada control se guarda en un estado de `App`.

Después, en cada render se usa `filter` sobre el arreglo de materiales para obtener solo los que cumplen los tres criterios a la vez: el nombre normalizado contiene el texto buscado en cualquier posición, la categoría coincide o el filtro está en "Todas", y el material está disponible si la casilla está marcada. Como se calcula en cada render, los resultados cambian mientras se escribe o se mueven los controles. El arreglo original no se modifica, solo se crea uno nuevo con los resultados.

Finalmente, si no queda ningún material, la lista muestra "No hay materiales que coincidan con los filtros". El botón "Limpiar filtros" regresa los tres controles a sus valores iniciales y vuelven a aparecer todos los materiales.

## 2. ¿Qué conceptos utilizaste?

* Estado con `useState`.
* Formularios controlados.
* Eventos `onChange` y `onClick`.
* `event.target.checked`.
* `filter()`.
* `includes()`.
* Operadores lógicos `&&`, `||` y `!`.
* Renderizado condicional.

## 3. ¿Qué datos recibe y qué resultado produce?

Recibe el texto de búsqueda, la categoría elegida y el valor de la casilla. Con eso produce un arreglo nuevo con los materiales que cumplen todo, y es el que se envía a `Lista`. Por ejemplo, con "cart", la categoría "Cartón" y "Solo disponibles" activado, solo aparecen los materiales de cartón con "cart" en el nombre que no están reservados.

## 4. ¿Qué dificultad encontraste y cómo la resolviste?

Ya sabía filtrar con `filter`, `toLowerCase()` e `includes()` por la práctica de JS, pero aquí me causó dudas cómo se actualizaba la lista, porque nunca se llama a una función para volver a dibujarla. Entendí que al cambiar un estado React vuelve a ejecutar el componente, y con eso se recalculan los resultados. También me costó la condición de "Solo disponibles": pensaba que al estar desmarcada mostraba solo los disponibles, pero es al revés, porque `!soloDisponibles` hace que todos pasen cuando la casilla no está marcada. Tampoco sabía que las casillas usan `checked` en lugar de `value`. Lo resolví revisando cada condición del filtro por separado y probando las combinaciones de búsqueda, categoría y disponibilidad.

## 5. ¿Utilizaste inteligencia artificial?

Sí. Usé la IA para la lógica que combina la búsqueda y los dos filtros. Le pedí que me explicara cómo hacer que los tres criterios funcionen al mismo tiempo y cómo ignorar un filtro cuando no está activo. Incorporé el cálculo de `filtrados`. Funciona así: cada material se revisa con tres condiciones, que el nombre contenga lo buscado, que la categoría coincida o esté en "Todas", y que esté disponible o que la casilla no esté marcada. Solo se muestran los que cumplen las tres, y el arreglo original no se modifica.

# Ejercicio 5. Consulta de detalle con find

## 1. ¿Qué hace esta funcionalidad y en qué archivos está?

El estado está en `src/App.jsx`, y el botón y la sección de detalle están en `src/components/Material.jsx`.

Primero, cada tarjeta tiene un botón "Ver detalle" que guarda en el estado `idSeleccionado` el identificador del material.

Después, en `App` se usa `find` para obtener del arreglo completo el material con ese identificador, y se envía a `Detalle`. Como se busca en el arreglo completo y no en los resultados filtrados, el detalle sigue visible aunque un filtro oculte su tarjeta.

Finalmente, `Detalle` usa renderizado condicional. Si no hay selección, muestra "Selecciona un material para consultar sus datos". Si hay un identificador pero `find` no encontró el material, muestra un mensaje que dice que ya no existe. Si lo encontró, muestra todos sus datos. Un botón "Cerrar detalle" regresa la selección a `null`.

## 2. ¿Qué conceptos utilizaste?

* Estado con `useState`.
* `find()`.
* `null` y `undefined`.
* Renderizado condicional con `if` y varios `return`.
* Funciones enviadas mediante props.
* Eventos `onClick`.

## 3. ¿Qué datos recibe y qué resultado produce?

Recibe el identificador del material que se eligió, el material encontrado con `find` y las funciones para cerrar el detalle y cambiar la reserva. Produce una sección con todos los datos del material, o el mensaje que corresponde cuando no hay selección o el material ya no existe.

## 4. ¿Qué dificultad encontraste y cómo la resolviste?

No conocía `find`, así que tuve que investigar qué hacía. Entendí que devuelve solo el primer elemento que cumple la condición, o `undefined` si no hay ninguno, a diferencia de `filter`, que devuelve un arreglo. Al principio no entendía por qué se guardaba solo el `id` en lugar del material completo, pero si se guardara el objeto, el detalle se quedaría con los datos viejos al reservarlo. También me costó distinguir `null` de `undefined`: `null` lo asigno yo para indicar que no hay selección, y `undefined` aparece cuando `find` no encuentra el material. Por último, no sabía por qué el botón necesitaba una función flecha en el `onClick`. Sin ella, la función se ejecuta al dibujar la tarjeta y no al hacer clic, igual que en JS hay que pasarle una función a `addEventListener` y no llamarla. Lo resolví probando a seleccionar un material, filtrarlo y reservarlo para ver que el detalle se mantenía actualizado.

## 5. ¿Utilizaste inteligencia artificial?

Sí. Usé la IA para la lógica de selección del detalle. Le pedí que me explicara por qué conviene guardar solo el identificador y cómo distinguir entre no tener selección y que el material ya no exista. Incorporé la selección y el componente `Detalle`. Funciona así: al elegir un material se guarda su `id`, en cada actualización se busca ese material en el arreglo completo, y el detalle muestra un mensaje si no hay selección, otro si no se encontró el material, o todos sus datos si existe.

# Ejercicio 6. Reservar y liberar sin modificar el estado directamente

## 1. ¿Qué hace esta funcionalidad y en qué archivos está?

La función `cambiarReserva` está en `src/App.jsx`, y los botones están en las tarjetas y en el detalle, dentro de `src/components/Material.jsx`.

Primero, cada tarjeta y el detalle muestran un botón "Reservar" si el material está disponible o "Liberar" si está reservado.

Después, al presionarlo se llama a `cambiarReserva` con el identificador del material. Esta función usa `map` para crear un arreglo nuevo. Cuando encuentra el material, crea un objeto nuevo con spread (`{...material, reservado: !material.reservado}`), que conserva las demás propiedades. Los demás materiales se pasan igual. Nunca se usa algo como `material.reservado = true`.

Finalmente, se guarda el arreglo nuevo en el estado, y React vuelve a dibujar la tarjeta, el detalle, el resumen y los resultados de los filtros. Si "Solo disponibles" está activado y se reserva un material, su tarjeta desaparece de la lista. Al desactivar el filtro vuelve a aparecer y se puede liberar.

## 2. ¿Qué conceptos utilizaste?

* Inmutabilidad del estado.
* `map()`.
* Operador spread (`...`) en arreglos y objetos.
* Operador `!`.
* Operador ternario.
* Funciones enviadas mediante props.

## 3. ¿Qué datos recibe y qué resultado produce?

Recibe el identificador del material. Produce un arreglo nuevo de materiales en el que solo cambió el valor de `reservado` de ese material.

## 4. ¿Qué dificultad encontraste y cómo la resolviste?

Ya había usado `map` para modificar un solo elemento de un arreglo en una actividad de clase, pero no entendía por qué no se podía cambiar el material directamente. Entendí que React compara el estado por referencia, así que si modifico el mismo arreglo no detecta el cambio y no vuelve a dibujar. También me costó el spread con objetos, aunque ya lo había visto: copia todas las propiedades y lo que se escribe después las sobrescribe, por eso `reservado` tiene que ir al final. Por último, no me quedaba claro por qué el detalle seguía visible cuando un filtro ocultaba la tarjeta, hasta que vi que la lista usa los materiales filtrados y el detalle busca en el arreglo completo. Lo resolví probando a reservar un material con "Solo disponibles" activado y luego desactivando el filtro para liberarlo.

## 5. ¿Utilizaste inteligencia artificial?

Sí. Usé la IA para la función `cambiarReserva`. Le pedí que me explicara por qué no se puede cambiar el material directamente y cómo crear una versión nueva sin perder los demás datos. Incorporé la función completa. Funciona así: recorre todos los materiales, al encontrar el elegido crea una copia con la disponibilidad invertida y deja los demás igual. Con ese arreglo nuevo se actualizan la tarjeta, el detalle, el resumen y los filtros.

# Ejercicio 7. Resumen y mensajes según el estado

## 1. ¿Qué hace esta funcionalidad y en qué archivos está?

Los totales se calculan en `src/App.jsx` y se muestran en `src/components/Resumen.jsx`.

Primero, en cada render se calculan los valores a partir del arreglo y de los filtros. El total es `materiales.length`, los disponibles se obtienen con `filter(estaDisponible)`, los reservados son el total menos los disponibles, y los resultados son la cantidad de materiales filtrados. No existe ningún contador aparte que haya que actualizar a mano.

Después, `Resumen` muestra los cuatro valores. Con un operador ternario alterna entre "Se muestran todos los materiales" y "Se muestran X de Y materiales". Con `&&` muestra el aviso "No hay materiales disponibles por ahora" solo cuando no queda ninguno disponible.

Finalmente, como todo se calcula a partir del estado, el resumen se actualiza solo al registrar, reservar, liberar o filtrar.

## 2. ¿Qué conceptos utilizaste?

* Valores derivados del estado.
* `filter()` y `length`.
* Operador ternario.
* Renderizado condicional con `&&`.
* Props.

## 3. ¿Qué datos recibe y qué resultado produce?

Recibe por props el total, los disponibles, los reservados y los resultados. Produce el resumen en pantalla, la frase del ternario y el aviso cuando no hay materiales disponibles.

## 4. ¿Qué dificultad encontraste y cómo la resolviste?

En este ejercicio no tuve muchas dificultades. Entendí que calcular los totales a partir del arreglo garantiza que siempre estén actualizados y evita tener que modificar contadores a mano, como hice en la práctica de JS. El cálculo de reservados como el total menos los disponibles me pareció un poco raro al principio, pero funciona porque cada material solo puede estar disponible o reservado. Ya conocía el operador ternario, aunque prefiero usar un `if` porque es más explícito. Entendí que dentro del JSX no se puede escribir un `if` y por eso se usan el ternario y el `&&`. Lo comprobé registrando, reservando, liberando y filtrando materiales para ver que el resumen cambiaba correctamente.

## 5. ¿Utilizaste inteligencia artificial?

Sí. Usé la IA para la lógica del resumen. Le pedí que me explicara cómo calcular los totales sin llevar contadores aparte. Incorporé los cálculos y el componente `Resumen`. Funciona así: cada vez que la aplicación se actualiza, el total se obtiene de la cantidad de materiales, los disponibles se cuentan con `estaDisponible`, los reservados son el total menos los disponibles y los resultados son la cantidad de materiales filtrados. Con esos valores se decide qué mensaje mostrar y si aparece el aviso de que no hay disponibles.

# Ejercicio 8. Persistencia con JSON y useEffect

## 1. ¿Qué hace esta funcionalidad y en qué archivos está?

Está en `src/App.jsx`.

Primero, la función `cargarMateriales` busca en `localStorage` los datos guardados con la clave `materialesGuardados`. Si existen, los convierte a un arreglo con `JSON.parse()`. Si no existen, devuelve los seis materiales iniciales. Esta función se pasa a `useState`, así que los materiales se leen antes del primer render.

Después, un `useEffect` que depende de `materiales` convierte el arreglo a texto con `JSON.stringify()` y lo guarda en `localStorage` cada vez que cambia, es decir, al registrar, reservar, liberar o restablecer. Como los datos guardados se leen antes de que se ejecute el efecto, el arreglo inicial no sobrescribe lo que ya estaba guardado.

Finalmente, el botón "Restablecer datos iniciales" regresa el estado a los seis materiales originales, todos disponibles, y limpia la selección, los filtros y el mensaje del formulario. El `useEffect` guarda ese resultado, así que se conserva al recargar.

## 2. ¿Qué conceptos utilizaste?

* `localStorage`.
* `getItem()` y `setItem()`.
* `JSON.stringify()` y `JSON.parse()`.
* `useEffect` y su arreglo de dependencias.
* Inicialización de `useState` con una función.
* Constantes en mayúsculas para la clave.

## 3. ¿Qué datos recibe y qué resultado produce?

Al iniciar recibe el texto guardado en `localStorage`, si existe. Produce el arreglo de materiales con el que arranca la aplicación. Cada vez que cambian los materiales, produce un texto JSON guardado en `localStorage`.

## 4. ¿Qué dificultad encontraste y cómo la resolviste?

Ya sabía guardar y leer datos con `localStorage`, `JSON.stringify` y `JSON.parse` por la práctica de JS, pero no conocía `useEffect` y fue lo que más me costó de toda la actividad. Entendí que ejecuta código después de dibujar la pantalla, y que el arreglo de dependencias hace que solo se ejecute cuando cambian los materiales. Por eso ya no hace falta llamar a una función para guardar después de cada cambio, como hacía antes. Tampoco entendía la diferencia entre `useState(cargarMateriales)` y `useState(cargarMateriales())`: la primera le pasa la función a React para que la ejecute solo al inicio, y la segunda la ejecutaría en cada render. Lo más difícil fue entender cómo se podían sobrescribir los datos guardados con los iniciales. Al leerlos dentro de `useState`, ya están cargados antes de que el efecto guarde por primera vez. Lo resolví probando a registrar y reservar materiales, recargar la página, y después restablecer y volver a recargar.

## 5. ¿Utilizaste inteligencia artificial?

Sí. Usé la IA para la lógica de guardado y recuperación, que fue la que más me costó. Le pedí que me explicara en qué momento conviene cargar los datos, cuándo guardarlos y cómo evitar que los iniciales borren lo guardado. Incorporé `cargarMateriales`, el guardado automático y la función `restablecer`. Funciona así: al iniciar, `cargarMateriales` busca los datos guardados y, si no hay, usa los seis iniciales; después, cada vez que cambian los materiales se guardan automáticamente, y `restablecer` regresa los materiales a los iniciales y limpia la selección, los filtros y el mensaje, para que el guardado automático conserve ese resultado.

# Preguntas adicionales

## ¿Qué información llega mediante props y cuál se conserva en estado?

En el estado de `App` se conservan el arreglo de materiales, el texto de búsqueda, la categoría del filtro, la casilla "Solo disponibles", el identificador seleccionado y el mensaje del formulario. Los campos del formulario son estado de `FormularioMaterial`. Por props llegan los materiales que debe mostrar cada componente, el material seleccionado, los valores de los filtros, los totales del resumen y las funciones con las que los hijos piden cambios a `App`.

## ¿Por qué filtrar no debe eliminar materiales del arreglo original?

Porque los filtros solo cambian lo que se ve, no lo que existe. Si se borraran materiales del arreglo al filtrar, al limpiar los filtros ya no se podrían recuperar, el resumen contaría mal y se guardaría en `localStorage` una lista incompleta. Por eso `filter` crea un arreglo nuevo solo para mostrar y el original queda completo.

## ¿Por qué actualizar el estado requiere crear nuevos arreglos u objetos?

React compara el valor anterior del estado con el nuevo para saber si debe volver a dibujar. Si se modifica el mismo arreglo u objeto, la referencia sigue siendo la misma y React no detecta el cambio, así que la interfaz no se actualiza y el `useEffect` tampoco se ejecuta. Al crear un arreglo nuevo con `map` y un objeto nuevo con spread, React sí ve que algo cambió.

## ¿Qué hace el useEffect de persistencia y de qué depende?

Guarda el arreglo de materiales en `localStorage` convertido a JSON. Depende solo de `materiales`, así que se ejecuta al iniciar y cada vez que ese arreglo cambia, pero no cuando cambian la búsqueda, los filtros o la selección.

## ¿Por qué esta aplicación puede cambiar su interfaz sin recargar y por qué eso no significa que tenga un servidor propio?

Porque todo pasa en el navegador. Cuando cambia el estado, React vuelve a calcular el JSX y actualiza solo las partes de la página que cambiaron, sin pedir una página nueva. Los datos se guardan en el `localStorage` del mismo navegador, no en una base de datos. Vite solo sirve los archivos mientras se desarrolla, pero no guarda ni procesa la información de los materiales, y otra persona en otra computadora no vería los mismos datos.
