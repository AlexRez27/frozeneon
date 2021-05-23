<template>
    <v-container>
      <v-row
        justify="space-between"
      >
        <v-col
          cols="12"
          md="12"
        >
            <v-data-table
            :page.sync="page"
            :items-per-page="itemsPerPage"
            :headers="columnNames"
            :items="getInfo"
            :loading="!loader"
            @click:row="showModal"
            @page-count="pageCount = $event"
            hide-default-footer
            >
      <template v-slot:[`item.info`]="{ item }">
              <b>{{item.package.name}}</b>
               <em> v.{{item.package.version}}</em>
                ({{item.package.description}})
      </template>
            </v-data-table>
        <div class="text-center pt-2">
        <v-pagination
          v-model="page"
          :length="pageCount"
        ></v-pagination>
      </div>
        </v-col>
      </v-row>
        <Modal v-if="$store.state.isModal"/>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Modal from './Modal'

export default {
  name: 'PackageList',
  components: {
    Modal
  },
  data () {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      columnNames: [
        { text: 'Packages', value: 'info', sortable: false }
      ],
      loader: false
    }
  },
  computed: mapGetters(['getInfo', 'getModalInfo']),
  methods: {
    ...mapActions(['getModalData']),
    showModal (value) {
      this.getModalData({ data: value.package })
      this.$store.state.isModal = true
    }
  },
  mounted () {
    const x = 'Packages'
    const n = document.querySelector('.v-data-table-header-mobile__wrapper')
    if (n) {
      n.innerHTML = x
    } if (this.getInfo) {
      this.loader = true
    }
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
        .v-data-table-header, .text-start{
            display: block !important;
        }
        .v-data-table > .v-data-table__wrapper > table > tbody > tr > td{
            height: initial !important;
        }
    }
    .v-data-table__mobile-row__header{
        display: none !important;
    }
    .v-data-table__mobile-row__cell{
        text-align: left !important;
    }
    .v-data-table > .v-data-table__wrapper > table > tbody > tr > td{
        min-height: 48px !important;
    }

</style>
