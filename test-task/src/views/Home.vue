<template>
    <div>
        <Search/>
        <PackageList v-if="showList"/>
        <FooterComp/>
    </div>
</template>

<script>
import Search from '.././components/Search'
import PackageList from '.././components/PackageList'
import FooterComp from '.././components/FooterComp'

export default {
  name: 'Home',
  components: {
    Search,
    PackageList,
    FooterComp
  },
  data () {
    return { showList: false }
  }
}
</script>

<style>
.v-main__wrap{
  position: static;
}

</style>
