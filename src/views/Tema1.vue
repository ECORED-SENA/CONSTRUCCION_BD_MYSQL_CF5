<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Pruebas de integridad de datos

    figure.mb-5
      .video
        iframe(width="969" height="545" src="https://www.youtube.com/embed/SLPqBj9XjWc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Pruebas de integridad de datos
    
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({}),
}
</script>

<style lang="sass" scoped></style>
