# Gamestore

## Descripción del proyecto
Gamestore es mi primer emprendimiento, una tienda en línea donde puedes conseguir los juegos del momento al mejor precio. Ofrecemos una amplia variedad de juegos para todas las plataformas y aceptamos cualquier tipo de moneda para facilitar tus compras. Nuestro objetivo es cumplir con las expectativas de cada uno de nuestros clientes y brindarles la mejor experiencia de compra posible. ¡A jugar!

## Tecnologías utilizadas
- Vite
- React
- Firebase

## Funcionalidades principales de la aplicación
- Ver el catálogo de los juegos disponibles en la tienda.
- Agregar juegos al carrito de compras.
- Realizar una orden de compra con múltiples métodos de pago.
- Acceder a tus juegos favoritos y ver el historial de compras.

## Instrucciones de instalación y ejecución del proyecto
1. Clona el repositorio a tu máquina local.
2. Abre una terminal en el directorio del proyecto.
3. Ejecuta el comando `npm install` para instalar las dependencias.
4. Configura las variables de entorno para Firebase en el archivo `.env`. Asegúrate de tener las credenciales de Firebase listas.
5. Ejecuta el comando `npm run dev` para iniciar la aplicación en modo de desarrollo.
6. Abre tu navegador y navega a http://localhost:5173/ para ver la aplicación en acción.

## Configuración de Firebase
Para utilizar Firebase en esta aplicación, sigue los siguientes pasos:
1. Crea una cuenta en Firebase y crea un nuevo proyecto.
2. En la sección "Authentication" de Firebase, habilita el proveedor de autenticación de correo electrónico y contraseña.
3. En la sección "Firestore" de Firebase, crea una nueva base de datos y configura las reglas de seguridad para permitir lectura/escritura solamente a usuarios autenticados.
4. En la sección "Project settings" de Firebase, haz clic en "Add app" y sigue las instrucciones para agregar una nueva aplicación web.
5. Copia las credenciales de Firebase y configura las variables de entorno en el archivo `.env` de tu proyecto.

## Dependencias

- React: ^17.0.2
- React-dom: ^17.0.2
- React-router-dom: ^5.3.0
- Firebase: ^9.0.0
- Vite: ^2.5.0
- Sweetalert2: ^11.1.5
- Node-sass: ^6.0.1
- Axios: ^0.23.0


## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.

