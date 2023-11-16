#Chamleon

    Chameleon es un proyecto de aplicación web desarrollado con React que aprovecha la API de Pixabay para mostrar y buscar imágenes de alta calidad. Esta aplicación proporciona a los usuarios una interfaz intuitiva y atractiva para explorar una amplia variedad de imágenes disponibles en la plataforma Pixabay.

#Instrucciones sobre cómo instalar y ejecutar el proyecto localmente.

    Nota: se requiere que tenga instalado node js en la version 20.8.1 o superior
    1. clonar el repositorio:
        - abrir una terminal de comandos y navegar a la ruta donde quiere almacenar el repositorio
        - escribir: git clone https://github.com/iutria/chameleon
    2. inspalar paquetes npm
        - una vez clonado el repositorio navevar a la cerpeta ./chameleon
        - cd .\chameleon\
        - escribir el siguiente comando: npm i
    3. ejecutar el proyecto en local
        - una vez intalados todos los paquetes npm, ejecutaremos el comando: npm run dev
        - el proyecto estará corriendo en http://localhost:5173/

#Explicación de decisiones técnicas importantes tomadas durante el desarrollo.

    1. Estructura de carpetas:
        /app: Directorio principal que encapsula toda la lógica y elementos de la aplicación.
            /api: Contiene los métodos encargados de realizar peticiones a una API externa de pixabay. 
            /components: Almacena componentes de React que han sido diseñados para ser reutilizables en diferentes partes de la aplicación.
            /contexts: Contiene los contextos de React utilizados en la aplicación.
            /routes: Aquí se encuentran las rutas nombradas de la aplicación.
            /states: Contiene los manejadores de estado de la aplicación usando zustand. 
            /utils: Almacena métodos y funciones de utilidad que se utilizan en varias partes de la aplicación. 
            /views: Contiene las vistas principales de la aplicación. 
        /assets: Este directorio almacena las imagenes utilizadas en la aplicación
    2. Manejo de rutas: para el manejo de rutas se uso la biblioteca de enrutamiento de React router dom
    3. Manejador de estado: Se utilizó zustand para el manjo de estados

#Despliegue

    La aplicación fue desplegada usando el servicio de GitHub Pages. Accede a https://iutria.github.io/chameleon/ para ver la aplicación.

    1. para el despliegue se instaló el paquete gh-pages
    2. se agregó en vite.config.js la siguiente linea de codigo: base: '/chameleon/',
    3. en el packaje.json dentro de escripts se agregó lo siguiente: "deploy": "gh-pages -d dist"
    4. para el despliegue se escribe el terminal npm run build, y luego npm run deploy

#funcionamiento

    1. en la vista principal encontrará en banner principal, donde puede ingresar la palabra que desea buscar y seleccionar el tipo de busqueda(foto, ilustracion o vector)
    2. en la parte inferior del banner encontrará 3 botones, los cuales sirven para realizar un filtro por tipo de imagen
    3. resultado de busqueda, arrojará un listado de imagenes que cumple con los requisitos de la busqueda
    4. tarjeta: la tarjeta conteien: imagen, foto del autor, numero de likes, si pasa el cursor sobre la tarjeta, apareceran las etiquetas que contiene la imagen y al hacer click sobre ella le llevara a la busqueda de imagenes relacionadas con la etiqueta
    5. al hacer click sobre el autor de la imagen, lo redireccionará al sitio del autor
    6. vista de detalles: al hacer click sobre la tarjeta, se visualizará la imagen, autor, etiquetas y tendrá la opcion de descargar en tamaño pequeño, mediano y grande. Al hacer click sobre la etiqueta le llevara a la busqueda de imagenes relacionadas con la etiqueta


