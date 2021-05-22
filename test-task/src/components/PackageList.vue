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
        { text: 'Package', value: 'info', sortable: false }
      ],
      columnContent: [
        {
          name: '',
          description: '',
          version: ''
        }
      ]
    }
  },
  computed: mapGetters(['getInfo', 'getModalInfo']),
  methods: {
    ...mapActions(['getModalData']),
    showModal (value) {
      this.getModalData({ data: value.package })
      this.$store.state.isModal = true
    }
  }
}

</script>
