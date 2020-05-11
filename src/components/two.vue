<template>
  <div>
    <h1>second list</h1>
    <ul>
      <li v-for="(product, index) in saleProducts" :key="index">
        <span>{{product.name}}- ${{product.price}}</span>

      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: 'one',
    computed: {
      products() {
        return this.$store.state.products;
      },
      saleProducts() {
        return this.$store.getters.saleProducts;
      },
      
    }
  }
</script>

<style scoped>
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
    border: 2px solid #e0d387;
    width: 45%;
    background-color: rgb(240, 230, 230);
  }

  a {
    color: #42b983;
  }
</style>