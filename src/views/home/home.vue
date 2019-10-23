<template>
  <div class="hello">
  <Titlea v-show="title_show"></Titlea>
  <Swipera></Swipera>
  <Nava></Nava>
   <Kanjiaa></Kanjiaa>
   <Scrolla></Scrolla>
   <Lista :shopa_list="shopa_list"></Lista>
  </div>
</template>
<script>

import Titlea from "../../components/shouye/titlea.vue"
import Swipera from "../../components/shouye/swipera.vue"
import Nava from "../../components/shouye/nava.vue"
import Kanjiaa from "../../components/shouye/kanjiaa.vue"
import Scrolla from "../../components/shouye/scrolla.vue"
import Lista from "../../components/shouye/lista.vue"
export default {
  name: 'HelloWorld',
  data () {
    return {
     title_show:false,
            scroll:0
    }
  },
  components:{
   Titlea,Swipera,Nava,Kanjiaa,Scrolla,Lista
  },
  mounted() {
    window.addEventListener("scroll",this.homeshowf)
  },
  computed: {
    shopa_list(){
      return this.$store.state.shopa_list
    },
  },
  methods: {
    homeshowf(){
            this.scroll=document.documentElement.scrollTop||document.body.scrollTop;
            if(this.scroll>=400){
                this.title_show=true
            }else{
                this.title_show=false
            }
        }
  },
}
</script>
<style scoped lang="scss">

</style>
