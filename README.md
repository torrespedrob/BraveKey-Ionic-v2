# BraveKey-Ionic-v2
2ª versión de Bravekey. Bravekey es una aplicación Ionic de tipo CRUD, dedicada al almacenamiento de teclados mecánicos y manejo de usuarios de la app mediante Firebase.

[Acceder a BraveKey](https://bravekey2.web.app/)

## ¿De qué trata?
El propósito de BraveKey es el de ayudar a los fanáticos de los teclados mecánicos custom a organizar sus colecciones y almacenar detalles de ellas.
Gracias a Ionic esta app dispone de un funcionamiento muy sencillo, además de una interfaz intuitiva y simple.

## Funcionamiento
Al entrar a la aplicación, el usuario encontrará la pantalla de bienvenida, donde podrá iniciar sesión, crear una cuenta, o recuperar su contraseña en caso de haberla olvidado.

![CapturaInicio](https://github.com/torrespedrob/BraveKey-Ionic-v2/blob/main/CapturaInicio.png)

En la siguiente imagen podemos apreciar el proceso de logeo de un usuario. Tras iniciar sesión, el usuario es dirigido a la pantalla donde se encuentran sus teclados.

![CapturaLogin](https://github.com/torrespedrob/BraveKey-Ionic-v2/blob/main/CapturaLogin.gif)

### Creación de un teclado
Mediante el botón +, el usuario será dirigido al formulario de creación de teclados, donde rellenará con los datos deseados el perfil del teclado a registar.

![CapturaCreateKeyboard](https://github.com/torrespedrob/BraveKey-Ionic-v2/blob/main/CapturaCreateKeyboard.gif)

### Edición y eliminación de un teclado
Usando los iconos de lápiz y basura en la miniatura de nuestro teclado, procederemos con la edición y eliminado del teclado respectivamente.

![CapturaEditDelete](https://github.com/torrespedrob/BraveKey-Ionic-v2/blob/main/CapturaEditDelete.gif)

### Registro de un usuario
En la página de inicio, mediante el botón de crear cuenta, el usuario accederá al formulario para registrarse en la app.

![CapturaSignUp](https://github.com/torrespedrob/BraveKey-Ionic-v2/blob/main/CapturaSignUp.gif)

### Navegación
El usuario podrá moverse en todo momento por las secciones de la aplicación mediante el menú hamburguesa de la esquina superior izquierda.

![CapturaMenu](https://github.com/torrespedrob/BraveKey-Ionic-v2/blob/main/CapturaMenu.png)

### Reseteo de contraseña
Esta aplicación incluye la funcionalidad de recuperación de contraseñas. Gracias a la integración con Firebase, si el usuario ingresa su email, recibirá un correo con un enlace que le permitirá establecer una nueva contraseña.

![CapturaReset](https://github.com/torrespedrob/BraveKey-Ionic-v2/blob/main/CapturaReset.png)

### Ionic Storage Local
Al pulsar el botón mostrar hora, aparece una alerta en la que se muestra la fecha en la que se completó la aplicación y la fecha en la que el usuario accede a la página. Estos valores quedan registrados localmente en la base de datos de Ionic Storage, demostrando que funciona correctamente. 

![CapturaIonicStorage](https://github.com/torrespedrob/BraveKey-Ionic-v2/blob/main/CapturaIonicStorage.gif)

## Requisitos de la aplicación
✅ Páginas y/o componentes que aíslen correctamente las diferentes funcionalidades.

✅ Servicio/s para grabar datos y para proveer datos a la aplicación.

✅ Inyección de dependencias.

✅ Estructuras ngIf y ngFor.

✅ Clase/s y/o interfaz/interfaces.

✅ Estilos propios.

✅ Almacenamiento de datos de manera local (no quita que se puedan utilizar datos en la nube).

✅ Ventana/s emergente/es.

## Funcionalidad extra añadida
* Control de errores: Comprueba que la sesión está cerrada antes de crear otra cuenta o resetear la contraseña.
 
* Error: Controlar si en la creación de cuenta, el correo ya está registrado y mostrar alert.
 
* Formulario: Un segundo option tendrá otros resultados según lo seleccionado en el anterior.

* Ng-If: Si el length del array es 0, mostrar un mensaje que nos invite a guardar un teclado.

