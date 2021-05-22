<template>
    <div>
        <v-list-item v-if="info.type !== 'object' && info.type !== 'array'">
            <v-list-item-title v-html="`<b>${info.name}:</b> ${info.value}`"></v-list-item-title>
        </v-list-item>

        <v-list-group v-else-if="info.type === 'object'"
                :value="true"
                no-action>
            <template v-slot:activator>
                <v-list-item-title v-html="`<b>${info.name}</b>`"></v-list-item-title>
            </template>
            <v-list-item
            v-for="(valueNest,key) in info.value" :key="key"
            link
            >
                <v-list-item-title v-html="`<b>${key}:</b> ${valueNest}`"></v-list-item-title>
            </v-list-item>
        </v-list-group>

        <v-list-item v-else-if="info.name === 'keywords'"
                link
                >
            <v-list-item-title v-html="`<b>${info.name}:</b> ${keywords}`"></v-list-item-title>
        </v-list-item>

        <v-list-group v-else-if="info.name === 'maintainers'"
                :value="true"
                no-action>
            <template v-slot:activator>
                <v-list-item-title v-html="`<b>${info.name}</b>`"></v-list-item-title>
            </template>
                    <v-list-item
                    v-for="(valueNest,key) in info.value" :key="key"
                    link
                    >
                <v-list-item-title v-html="`<b>Username:</b> ${valueNest.username}; \n <b>Email: </b> ${valueNest.email}`"></v-list-item-title>
            </v-list-item>
        </v-list-group>

        <v-list-group v-else
                :value="true"
                no-action>
            <template v-slot:activator>
                <v-list-item-title v-html="`<b>${info.name}</b>`"></v-list-item-title>
            </template>
                    <v-list-item
                    v-for="(valueNest,key) in info.value" :key="key"
                    link
                    >
                <v-list-item-title v-html="valueNest"></v-list-item-title>
            </v-list-item>
        </v-list-group>
    </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  name: 'ModalInfo',
  props: {
    getModalInfo: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      info: {}
    }
  },
  computed: {
    // ...mapGetters(['getModalInfo']),
    keywords: function () {
      return this.getModalInfo.value.join(', ')
    }
  },
  created () {
    let par = {}
    if (!Array.isArray(this.getModalInfo.value)) {
      par = {
        name: this.getModalInfo.name,
        value: this.getModalInfo.value,
        type: typeof this.getModalInfo.value
      }
    } else if (Array.isArray(this.getModalInfo.value)) {
      par = {
        name: this.getModalInfo.name,
        value: this.getModalInfo.value,
        type: 'array'
      }
    }
    this.info = (par)
  }
}
</script>

<style lang="scss">
    .v-list-item__title{
        white-space: pre-wrap !important;
    }
    @media (max-width: 768px) {
        .v-list-item{
            padding-left: 0 !important;
        }
    }
</style>
