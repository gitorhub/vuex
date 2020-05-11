import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[
      {name:"patlıcan", price:20},
      {name:"biber", price:30},
      {name:"salatalık", price:25},
      {name:"kabak",price:14}
    ]
  },
  getters: {
    saleProducts:state=> {
      return  state.products.map(product =>{
        return{
          name:"**"+product.name+"**",
          price:product.price/4
        }
      })

    }
  },
  mutations:{
    reducePrice:(state,payload)=>{
      state.products.forEach(product=>{
        product.price-=payload;
      })
    }
  },
  actions:{
    reducePrice:(context,payload)=>{
      setTimeout(() => {
        context.commit("reducePrice",payload)
      }, 2000);
    }
  }
  
})
