# Consumiendo Api de Marvel

Este proyecto permite consumir la Api de Marvel https://developer.marvel.com/ usando Angular versión 15.0.5.

Nos permite ver ...

## App

### Componentes 

* about
* characters
* comics
* events
* partials
* series
* stories

#### Componente about
```
Muestra una breve descripción de la api y con que se consume
```

#### Componente characters
```
Muestra una lista e imagenes de personajes con su descripción, comics, series, historietas a las que pertenecen
```

#### Componente comics
```
Muestra información e imágenes de los diferentes comics con su respectiva descripción
```

#### Componente serie
```
Muestra información e imágenes de las diferentes series con su respectiva descripción
```
#### Componente stories
```
Muestra información e imágenes de las diferentes historias con su respectiva descripción
```

#### Módulo partials
```
Contiene componentes para el manejo de información del banner, encabezado, pie de página,
lista, grupo de listas, buscador y demás funciones para poder mostrar información en la página.
```

### Modelos

* image.model.ts
* request.model.ts
* response.model.ts

#### Modelo image
```
contiene los tipos de imágenes de la API de Marvel
```

#### Modelo request
```
contiene los tipos de parámetros de solicitud de la API de Marvel.
```

#### Modelo Response
```
contiene la respuesta de la API de Marvel, los datos y los tipos de caché.
```

### Servicios

* marvel.service.ts

```
Permite formar una URL de imagen usando la miniatura de la imagen y la variante.
Obtiene los datos de la entidad en función de la categoría y las opciones
```

### Environments

* environment.ts
```
Permite definir las variables de entorno 
```


### Servidor 

Ejecutar ng serve -o para servidor local. Navegar a http://localhost:4200/characters

## Construido con 🛠️

* [Angular](https://angular.io/) - El framework web usado
* [Bootstrap 5](https://getbootstrap.com/) - Para los estilos de la página


## Autor ✒️

* **Valentina Santa Muñoz** - (https://github.com/Valen2605)

