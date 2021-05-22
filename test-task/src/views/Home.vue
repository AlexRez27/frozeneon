<template>
    <div>
        <Search/>
        <PackageList v-if="showList"/>
    </div>
</template>

<script>
import Search from '.././components/Search'
import PackageList from '.././components/PackageList'

export default {
  name: 'Home',
  components: {
    Search,
    PackageList
  },
  data () {
    return { showList: false }
  }
}
</script>
