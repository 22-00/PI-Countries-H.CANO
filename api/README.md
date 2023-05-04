# **Anotaciones de Base de datos**


## **belongsToMany**
  "belongsToMany" es un método de asociación en el ORM (Object-Relational Mapping) de Node.js llamado Sequelize. Este método se utiliza para establecer una relación de muchos a muchos entre dos modelos de la base de datos.

La relación de muchos a muchos implica que un registro en un modelo puede estar asociado con múltiples registros en otro modelo y viceversa. La sintaxis del método "belongsToMany" especifica el modelo de destino y la tabla intermedia que se utilizará para almacenar los registros de la relación.

Además, este método también proporciona opciones adicionales para personalizar la asociación, como el nombre de la clave externa y la clave externa personalizada en la tabla intermedia. En general, "belongsToMany" es una herramienta útil para establecer relaciones complejas entre modelos en una base de datos.

 ## *Mi codigo*
    La sintaxis que tengo en mi carpeta db.js en la linea 36 y 37 es una definición de una relación de muchos a muchos entre dos modelos en una base de datos Sequelize.

    El modelo "Country" está estableciendo una relación de muchos a muchos con el modelo "Activity" mediante el método "belongsToMany". Además, se especifica que la tabla intermedia que se utilizará para almacenar los registros de esta relación es 'activities_countries'.

    En resumen, esta sintaxis establece una relación de muchos a muchos entre los modelos "Country" y "Activity" utilizando la tabla intermedia 'activities_countries'.


## **Modelos**

Tenemos 2 modelos  "country" y"activity"


## **Op**

Esta línea de código importa el objeto Op desde la librería Sequelize, la cual es una herramienta de mapeo objeto-relacional (ORM) para Node.js.

El objeto Op es utilizado en Sequelize para definir operadores especiales que se pueden usar en consultas a la base de datos, como por ejemplo los operadores de comparación (Op.eq, Op.ne, Op.gt, Op.lt, etc.), los operadores lógicos (Op.and, Op.or, Op.not, etc.), y otros operadores especiales (Op.like, Op.between, Op.in, etc.). Al importar el objeto Op de Sequelize, se pueden utilizar estos operadores especiales en las consultas a la base de datos de una manera más sencilla y eficiente.

## *[Op.iLike]*
En resumen, [Op.iLike]: '%${name}%' es una forma de utilizar el operador iLike en Sequelize para realizar una búsqueda de texto insensible a mayúsculas y minúsculas en una base de datos, con la cadena de búsqueda especificada como un valor dinámico a través de la variable name.