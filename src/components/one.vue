<template>
  <div>
    <h1>first list</h1>
    <ul>
      <li v-for="(product,index) in saleProducts" :key="index">
        <div class="names">{{product.name}} - $ {{product.price}}</div>
      </li>
    </ul>
    <button @click="reducePrice(4)"> reduce price</button>


  </div>

</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex'

export default {
  name: 'one',
  computed:{
    products(){
      return this.$store.state.products
    },
    // saleProducts(){
    //   return this.$store.getters.saleProducts;
    // }
    ...mapGetters([
      "saleProducts",
    ])
  },
  methods: {
    // reducePrice(price) {
    //   // this.$store.commit("reducePrice");
    //   this.$store.dispatch("reducePrice", price);
    // }
    ...mapActions([
      "reducePrice",
    ])
  },
  

}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  background-color: #ccc;
}
li {
  display: inline-block;
  margin: 10px 5px;
  padding: 10px;
  border:2px solid #42b983;
  width: 45%;
  background-color: #fff;
}
a {
  color: #42b983;
}
</style>
