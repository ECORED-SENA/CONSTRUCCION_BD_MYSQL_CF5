<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    
    figure.mb-5
      img(src="@/assets/curso/introduccion.svg", alt="intro")
    p.mb-5 Una vez hecho el diseño y construcción de las bases de datos relacionales, el siguiente paso es probar el modelo, validar si está ajustado a los requerimientos y si este es funcional; en este módulo se aprenderá cuáles, qué tipo y cómo se pueden ejecutar las pruebas para validar el diseño y la integridad de los datos modelados y construidos en una base de datos relacional MySQL.
    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
