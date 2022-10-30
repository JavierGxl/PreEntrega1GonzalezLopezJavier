# El Proyecto
Este repositorio contiene un trabajo realizado por el estudiante Javier González López para el curso de ReactJS de (https://www.coderhouse.com/).

## ¿Qué características tiene?
El proyecto pretende simular el manejo de un Ecommerce con sus funciones principales. La idea es que el usuario pueda entrar en la aplicación, recorrer las categorías e ítems y seleccionar cuáles le interesan. Una vez seleccionado todo, yendo al carrito, el usuario podrá comprar, rellenando sus datos para la orden de compra.

## Filtrado.
El proyecto permite al usuario filtrar los objetos por categorías. De esta forma, el usuario podrá elegir más fácilmente qué es lo que le interesa y seleccionar los objetos que sean de su agrado.

## Objetos.
Al tratarse de una página inspirada en una librería, los objetos que se encuentran en ella son libros de ficción y no ficción, comics, mangas y CD´s. Actualmente hay diez objetos debido a la distribución entre las categorías y a que son suficientes para demostrar las funcionalidades.

## Carrito.
El carrito de compra es accesible desde cualquier parte de la aplicación y permite al usuario ver los elementos ya seleccionados, así como el precio final de los mismos y el total de objetos a comprar. Al finalizar la compra, el usuario completará sus datos y recibirá una orden de compra correspondiente a su pedido (la orden de compra se guarda en la base de datos con la información de contacto y del precio pagado).

## Datos.
Los datos a colocar serán comprobados. Si no se rellena alguno de los campos, se pedirá que se llene. Si los mails no coinciden, la página web no avanzará, etc.

## Base de Datos.
La base de datos utilizada contiene dos colecciones de datos. Aquella con los datos referidos a los productos y una segunda que se utiliza para almacenar las ordenes de compra. En caso de que la segunda no exista, se crea automáticamente.
Por otro lado, la base de datos no actualiza el stock al finalizar la compra ya que se trata tan solo de una prueba y la idea es que pueda ser utilizada por un tiempo indeterminado sin tener que recargar los datos de productos. En lugar de esto, al terminar, el sitio borra el carrito y devuelve a uno a la página de inicio para que se pueda seguir probando.

## Recorrido de la página.
En el siguiente vídeo se puede observar un recorrido que demuestra las distintas funcionalidades del sitio web (https://youtu.be/GOZakMKd2uM).
