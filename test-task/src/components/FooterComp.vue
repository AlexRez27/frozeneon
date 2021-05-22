<template>
    <v-footer
      dark
      padless
      absolute
      app
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title class="teal">

          <v-btn
          v-for="(icon,i) in icons"
          :key="i"
          class="mx-3"
          dark
          icon
        >
          <a class="social" :href="icon.url" :target="icon.target"><v-icon size="42px">{{ icon.name }}</v-icon></a>
        </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>&copy; Rezident Oleksii</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>

<script>
export default {
  name: 'FooterComp',
  data () {
    return {
      icons: [
        {
          name: 'mdi-facebook',
          url: 'https://www.facebook.com/profile.php?id=100009266531894',
          target: '_blank'
        },
        {
          name: 'mdi-github',
          url: 'https://github.com/AlexRez27',
          target: '_blank'
        },
        {
          name: 'mdi-linkedin',
          url: 'https://www.linkedin.com/in/oleksii-rezydent-838559207/',
          target: '_blank'
        },
        {
          name: 'mdi-youtube',
          url: 'https://www.youtube.com/watch?v=A3ytTKZf344&ab_channel=TheKeyofAwesome',
          target: '_blank'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  a i{
    color: white !important;
  }
  footer .v-card__title{
    background-image: url(../assets/nethernite.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    justify-content: flex-end;
    padding: 40px;
  }
  @media (max-width: 900px){
     footer .v-card__title{
       background-position: left;
     }
  }

  @media (max-width: 600px){
    footer .v-card__title{
      justify-content: center !important;
      opacity: 1;
      align-items: flex-end;
      background-position: top !important;
      padding: 3px;
      padding-top: 100px;
    };
  }
  .social{
    text-decoration: none !important;
  }
</style>
