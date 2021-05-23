<template>
    <v-container>
            <h1>NPM SEARCH APP</h1>
      <v-row
        justify="space-between"
      >
        <v-col
          cols="12"
          md="12"
        >
          <v-form ref="form">
            <v-text-field
              v-model="search"
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
    return { search: '' }
  },
  methods: {
    ...mapActions(['getData']),
    async getdata () {
      if (this.search) {
        await this.getData({ packageName: this.search })
        this.$parent._data.showList = true
      }
    }
  }
}
</script>

<style>
  small{
    color: red;
    display: block;
  }
  .invalid{
    border-bottom: 1px solid red;
  }
  h1  {
    text-align: center;
  }
</style>
