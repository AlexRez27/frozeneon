<template>
    <v-container>
      <v-row
        justify="space-between"
      >
        <v-col
          cols="12"
          md="12"
        >
          <v-form ref="form">
            <v-text-field
              v-model="value"
              label="Enter npm package name you want to find"
            ></v-text-field>
            <v-btn
                elevation="2"
                @click="getdata()"
                color="#26A69A"
                class="white--text"
            >Search</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Search',
  data () {
    return { value: '' }
  },
  methods: {
    ...mapActions(['getData']),
    async getdata () {
      if (this.value) {
        await this.getData({ packageName: this.value })
        this.$parent._data.showList = true
      }
    }
  }
}
</script>
