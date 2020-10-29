## Delilah Restó 

API destinada a la gestión de productos, usuarios y pedidos online

Proyecto de backend realizado en el módulo final de la carrera DWFS en Acámica.
El objetivo del proyecto es generar el backend de una app de pedidos de comida llamada Delilah Restó, generando la arquitectura, bases de datos relacionales, endpoints funcionales y documentación.

* * *

### Comenzando

Las siguientes instrucciones le permitirán al usuario obtener una copia del proyecto funcionando en la máquina.

### Pre-requisitos

Recursos utilizados y recomendados para poder levantar el proyecto y realizar las pruebas.

- **Node.js**
- **Nodemon**
- **Express**
- **JWT para autenticación via Token**
- **MySQL**
- **Sequelize**
- **PHPMYADMIN**
- **Postman** 
- **Swagger** 


### Estructura del proyecto

Esto te ayudará a entender de antemano como se organizan las carpetas del proyecto

- **delilahRESTO**
    - database
    - src
        - routes 
        - middlewares
        - models
    - app


### Creando la base de datos
 
- Abrir XAMPP y configurar el puerto en el deseado. Ver más abajo 'configurando el server'.
- Inicializar los servicios de Apache y MySQL
- Abrir el panel de control del servicio MySQL
- Generar una nueva base de datos llamada `delilahresto`. 
  El archivo en `/database/delilahresto.sql` contiene el script para crear nuestra base de datos, la cual contiene toda la estructura y datos para poder comenzar con la prueba de esta API.

### Configurando el server 
Primero, entraremos a la siguiente ruta, en donde configuraremos la conexión a la base de datos.
  
 `DelilahRESTO/database/db.config.js`
  
Una vez dentro de ese archivo cambiar los valores de los campos `port` , `user` , `password` por los datos que correspondan a su base de datos.

### Corriendo el servidor  

- Con el siguiente comando, se instalarán los paquetes y dependencias del proyecto para la ejecución del mismo.

~~~  
npm i  
~~~

- Para correr el servidor deberíamos ejecutar el siguente comando:
  
~~~  
node app.js  
~~~


##### Aclaración para pruebas

role_id : 1 -> es para Administrador

role_id : 2 -> es para Usuario


### Autor:
- **Cristian Gianoboli**
---
