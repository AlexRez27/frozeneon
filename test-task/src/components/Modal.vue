<template>
  <v-dialog v-model="$store.state.isModal">
    <v-card>
        <v-card-title class="headline grey lighten-2">
            {{ getModalInfo.name }}
        </v-card-title>
          <v-card-text>
            <v-list v-for="(value,i) in getModalInfo" :key="i">
            <ModalInfo v-if="i!=='name'" :getModalInfo="{name:i,value}">
            </ModalInfo>
            </v-list>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="$store.state.isModal = false"
            >
              Close
            </v-btn>
        </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
import ModalInfo from './ModalInfo'
export default {
  name: 'Modal',
  components: {
    ModalInfo
  },
  computed: {
    ...mapGetters(['getModalInfo'])
  }
}
</script>
