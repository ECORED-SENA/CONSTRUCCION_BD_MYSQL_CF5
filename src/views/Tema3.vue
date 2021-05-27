<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
    .titulo-principal
        .titulo-principal__numero
          .h3 3
        .h3 Pruebas de ejecución de scripts

    p.mb-4 Una vez terminado el diseño de la base de datos en la herramienta visual Workbench, se realiza la exportación del modelo y se genera un script el cual debe de probarse para validar si la ejecución es correcta.
    p.mb-4 Acá es importante mencionar que en las nuevas versiones de MySQL y al utilizar el Workbench como herramienta de diseño visual, al momento de finalizar el diseño de la base de datos se procede a exportar dicho modelo en un script de tipo SQL que permita la creación de la base de datos, este script debe ser probado en el servidor o en cualquier otro servidor para validar si se ejecuta de manera correcta.

    .h6.mb-4.text-center Exportar el modelo a un script SQL
    .row.mb-5.justify-content-center
      .col-lg-10  
        figure
          img(src="@/assets/curso/tema3/img1.svg", alt="Exportar el modelo a un script SQL")
    
    p.mb-4 Al exportar el script se debe cargar una consola de SQL y probarlo ejecutándose para validar si el diseño quedó de manera correcta, si se cumplieron con todas las reglas, restricciones y propiedades a tener en consideración al momento de construir las bases de datos.

    .h6.mb-4.text-center Prueba de ejecución del script
    .row.mb-5.justify-content-center
      .col-lg-10 
        figure
          img(src="@/assets/curso/tema3/im2x.jpg", alt="Prueba de ejecución del script")

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
