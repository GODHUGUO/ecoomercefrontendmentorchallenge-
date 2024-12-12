<template>
  <div  class="container">
 
    <div class="overlay"  v-if="useStore.isPopUpVisible">

      <popup class="indexpopup" />

      
    </div>
    <div class="over" v-if="useStore.isPopUpVisible">
      <popup class="indexpopu" />
    </div>
    
    <div class="xx">
<h2>Desserts</h2>
        <div class="productsection">    
         <div
          class="product"
          v-for="product in useStore.tableauProduit"
          :key="product.id">
        
     <img :src="product.image.desktop" alt="Image"   class="productimage"/>
          
          <div class="SP">
       
             <div v-if="!product.isActive" class="essaie">  <button
              @click="useStore.addToCart(product);changestate(product.id)"
              
              
              ><img src="@/public/images/icon-add-to-cart.svg" alt=""> <p>Add to cart</p></button></div> 
              <div v-else class="counteur">
                
              
              
                
                <div   class="counteurelment">
    
                  
                  <button  @click="handledecrement(product.id)">
                    
                    
                    <img         src="@/public/images/icon-decrement-quantity.svg" alt="">
                  </button>
                     <p>{{product.quantity}} </p>


                     <button  @click="handleincrement(product.id)" >
                     <img  src="@/public/images/icon-increment-quantity.svg" alt="">
                    </button>
                  
                  
                  
                  
                  
               
                
                </div> 
                
                
        
            </div>
        
             <div class="description">
            <p class="categories">{{ product.category }}</p>
            <p class="nom">{{ product.name }}</p>
            <p class="prix">${{ product.price }}</p>
     
        </div>
          </div>
         </div>
      </div>
    </div>



    <div class="cartsection"> 
    
      
    
  <productPage/>
  

  </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/food.js";

const useStore = useUserStore();
const image = useStore.tableauProduit;
const see =ref(true);


const handleincrement=(id)=>{
           useStore.increment(id)
}

const handledecrement=(id)=>{
useStore.decrement(id);
}

const changestate=(id)=>{
  useStore.change(id);
}




//  const addTocart=(product)=>{
//    useStore.addToCart(product)
//   }


</script>




<style lang="scss">
$primary-color: #3498db;
$background-color: #8a7c7c;
$text-color: #b3512e;
$text-color2: black;


.popupmobile{
  position:absolute;
  z-index:2000;
  bottom:0;
  border:1PX SOLID RED;
}



.overlay{
  position:fixed;

  display: flex;
  justify-content: center;
  align-items:center;
  z-index:100;
   height: 100vh;
   width:100vw;
  background-color: rgba(0,0,0,0.5);
}
.over{
  
 

  display: flex;
  justify-content: center;
  align-items:center;
  z-index:100;
   height: 100vh;
   width:100vw;
  background-color: rgba(0,0,0,0.5);


}






.indexpopup{
  position: fixed;
  background-color: #FFFFFF;
  z-index:101;
  width:30% ;
}



.description{
.categories {
      color: $background-color;
    }
    .nom {
      color: $text-color2;
      
      font-weight:bolder;
    }
    .prix {
      color: $text-color;
      font-weight: bold;
    }
  }
.essaie{
    cursor:pointer;
    display:flex;
    width: 75%;
    justify-content:center;

}
.description{
    padding:3% 0;
}
.xx{
    padding:20PX;
    h2{
        margin-bottom:9px;
    }
}

.productsection {
    display: grid;
  
    // grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    grid-template-columns: repeat(3, 1fr);
    //  width: ;

    .productimage{

         
         width: 75%;
         border-radius:5px;
         
         z-index:1;
      
    }  







    .product {
    //     display:flex;
        align-items: center;
        flex-direction: column;
        .SP{
            position: relative;
            margin-top:-24px; 
          
        }
        // border:1PX SOLID RED;
   
      button{
 
        border:1px solid $text-color;
        background-color: #ffffff;
    //   width:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 18px;
        padding: 5PX 12PX;
      
     position:relative;
        z-index:20;
        img{
            // background-color: red;
            width:25px;
            height:25px;
            
        }
      }
 
    }
    .categories {
      color: $background-color;
    }
    .nom {
      color: $text-color2;
      font-weight: bold;
    }
    .prix {
      color: $text-color;
      font-weight: bold;
    }
  }


.container{
  display: flex;
position: relative;
// width: min(100%,1300PX);
 justify-content: center;

  .cartsection{
padding: 20PX;
width: 48%;
color:$text-color;
  }
}
.counteur {
    // background-color:$text-color;
    width: 75%;
    display:flex;
    justify-content: center;
    cursor:pointer;
      
      

    .counteurelment{
      display:flex;
      background-color:$text-color;
      align-items: center;
      border-radius: 18px;
       P{
        cursor:pointer;
        margin-right: 25PX;
        margin-left: 25PX;
        color:#ffffff;
        font-weight: bold;
        font-size:20px;
       }
   button{
    cursor:pointer;

    background-color:$text-color;
    padding: 7PX 12PX;
    img{
        width:18PX;
        height:18px;
        padding: 2PX;
        border-radius:50%;
        border:1PX SOLID #FFFFFF;
    
        }
         }
       
    }
}

 @media (max-width:768px){

  .overlay{
    display: none;
  }
.over{
  display: flex;
  justify-content: center;
  align-items:center;
  z-index:100;
   height: 1000vh;
   position:fixed;

   width:100vw;
  background-color: rgba(0,0,0,0.5);
  .indexpopu{
    position:fixed;
     
     bottom:0;
     width:100%;
     border-radius:12PX 12PX 0 0;
   
z-index:2000;
     background-color: #ffffff;
  
      // height: 93vh;
      right:0PX;

  }
}
  .productsection{
     grid-template-columns: repeat(2,1fr);
    
    .product{
      margin-left: 70PX;
    }
  }

  .delivery{
    display: none;
  }
  .xx{
    h2{
      margin-left: 74PX;}
  }
}
@media (min-width:748px){
.over{
  display:none;
}
}
@media (max-width:748px){
  .productsection{
  display: FLEX;
  flex-direction: column;

 
  align-items: center;
  justify-content: center;

    
    
  }
.container{
  display:flex;
    flex-direction: column;
    align-items: center;
     justify-content: center;
      position:relative;
 

.cartsection{
  width:80% ;
}


}


.overlay{
  // display: none;
}
}
</style>


