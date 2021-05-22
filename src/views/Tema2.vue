<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 2
      .h3 Tipos de restricciones de integridad

    figure.mb-5
      img(src="@/assets/curso/tema2/img1.svg", alt="Tipos de restricciones")

    #t_2_1.titulo-segundo
      .h4 2.1 Datos requeridos
    
    p.mb-5 Establece que una columna tenga un valor Not Null. Se define efectuando la declaración de una columna es Not null cuando la tabla que contiene las columnas se crea por primera vez, como parte de la sentencia Create table.

    h4.mb-4.text-center Configuración propiedad NOT NULL
    .row.mb-5.justify-content-center
      .col-lg-10 
        figure
          img(src="@/assets/curso/tema2/img2.svg", alt="Configuración propiedad NOT NULL")

    #t_2_2.titulo-segundo
      .h4 2.2 Chequeo de validez

    p.mb-4 Cuando se crea una tabla, cada columna tiene un tipo de datos y el DBMS asegura que solamente los datos del tipo especificado sean ingresados en la tabla.

    .row.mb-4.justify-content-center.p-4
      .col-lg-2
        figure.mb-3
          img(src="@/assets/curso/tema2/img3.svg", alt="Chequeo de validez")
      .col-lg-10.align-self-center
        p.mb-4 El tipo de dato seleccionado en el diseño es de suma importancia ya que este define los datos que serán recibidos y almacenados; esto determina la capacidad, el tamaño y las restricciones al momento de realizar las operaciones de Insert, Update.
    
    p.mb-4 #[strong Ejemplo:] para la tabla Producto, se define un atributo llamado stock el cual define un campo de tipo entero, esto significa que, al momento de insertar algún registro, no se permitirá ingresar valores decimales como 25,5 computadores ya que se generaría un error en su validez.
    
    h4.mb-4.text-center Configuración tipos de datos

    .row.mb-5.justify-content-center
      .col-lg-10 
        figure
          img(src="@/assets/curso/tema2/img4.svg", alt="Configuración tipos de datos")



    #t_2_3.titulo-segundo
      .h4 2.3 Integridad de los datos

    p.mb-4 Aquí se establece que la clave primaria de una tabla debe tener un valor único para cada fila de la tabla; si no, la base de datos perderá su integridad; y se especifica en la sentencia Create table. El DBMS comprueba automáticamente la unicidad del valor de la clave primaria con cada sentencia Insert y Update. Un intento de insertar o actualizar una fila con un valor de la clave primaria ya existente fallará.

    h4.mb-4.text-center Configuración de la llave primaria

    .row.mb-5.justify-content-center
      .col-lg-10 
        figure
          img(src="@/assets/curso/tema2/img5.svg", alt="Configuración de la llave primaria")

    p.mb-4 Este tipo de prueba lo que debe garantizar es que no se repitan varios registros o tuplas con un mismo identificador, de ahí el concepto que la llave primaria debe ser un valor único.
    p.mb-4 #[strong Ejemplo:] en la tabla producto se realizó la inserción de un nuevo producto llamado computador portátil el cual quedó registrado con el idProducto= 1 tal como se evidencia en la siguiente imagen.

    h4.mb-4.text-center Inserción del primer registro I
    .row.mb-5.justify-content-center
      .col-lg-10 
        figure
          img(src="@/assets/curso/tema2/img6.svg", alt="Inserción del primer registro I")

    p.mb-4 Ahora, el tipo de prueba que se debe de hacer es insertar un nuevo registro de otro producto y tratar de utilizar el mismo identificador lo cual genera un error tal como se evidencia en la siguiente figura.

    h4.mb-4.text-center Inserción del primer registro II
    .row.mb-5.justify-content-center
      .col-lg-10 
        figure
          img(src="@/assets/curso/tema2/img7.svg", alt="Inserción del primer registro II")





    #t_2_4.titulo-segundo
      .h4 2.4	Integridad referencial

    p.mb-4 Esta asegura la integridad entre las llaves foráneas y primarias (relaciones padres/hijo). Existen cuatro actualizaciones de la base de datos que pueden comprometer la integridad referencial:

    .row.mb-4.align-items-center
      .col-lg-2
        figure
          img(src="@/assets/curso/tema2/img8.svg", alt="Integridad referencial")
      .col-lg-10
        ul.lista-ul
          li 
            i.fas.fa-check
            | La inserción de una fila hijo se produce cuando no coincide la llave foránea con la llave primaria del padre.
          li 
            i.fas.fa-check
            | La actualización en la llave foránea de la fila hijo, donde se produce una actualización en la clave ajena de la fila hijo con una sentencia Update y la misma no coincide con ninguna llave primaria.
          li 
            i.fas.fa-check
            | La supresión de una fila padre, con la que, si una fila padre –que tiene uno o más hijos– se suprime, las filas hijos quedarán huérfanas.
          li 
            i.fas.fa-check
            | La actualización de la llave primaria de una fila padre, donde si en una fila padre, que tiene uno o más hijos se actualiza su llave primaria, las filas hijos quedarán huérfanas.

    p.mb-4 El concepto de la integridad referencial y como se puede ver afectada se puede evidenciar en la siguiente figura.
    
    h4.mb-5.text-center Pérdida de la integridad de los datos
    .row.mb-5.justify-content-center
      .col-lg-6
        figure
          img(src="@/assets/curso/tema2/img9.svg", alt="Pérdida de la integridad de los datos")

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
