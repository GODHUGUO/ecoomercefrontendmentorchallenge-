<template>
<div class="containerProductpage">




 <div  v-if="cart.length<1"  class="empty">
    <h3>Your cart(0)</h3>
    <img src="@/public/images/illustration-empty-cart.svg" alt=""  >
    <p>Your added items will appear here </p>
</div>

<div  v-else >
<h3>Your cart ({{ useStore.totalProduct }})</h3>


<div v-for="product,id in cart" :key="product.id" >
    <h4>{{product.name}}</h4>
    <div class="eachproduct">
<div>
    <ul >
            <li class="number">{{ product.quantity}}x</li>
            <li class="price">@${{product.price}}</li>
            <li class="total">${{product.price*product.quantity}}</li>
        
        </ul>
      
      
</div>
 
<div class="removeitem" >
     
     <img src="@/public/images/icon-remove-item.svg" alt=""  @click="useStore.removeCartElement(id)"  >
 </div>

</div>

<hr>


</div> 

<div class="totalOrder">
    <P>Order Total</P>
    <p class="totalp">${{useStore.totalsommeproduit}}</p>
</div>
<p class="delivery">
    
    <img src="@/public/images/icon-carbon-neutral.svg">    
    
    
    This is a <span> carbon-neutral</span> delivery


</p>

<div class="confirmorder"   @click="useStore.changePopupState"           >Confirm Order</div>
<div>

</div>


</div>











<div>
       

</div>

<div>


</div> 









</div>


</template>


<style lang="scss">
$primary-color: #3498db;
$background-color: #8a7c7c;
$text-color: #b3512e;
$text-color2: black;
.empty{
    display: flex;
    flex-direction:column;
    align-items: center;
    padding: 5px;
}

.delivery{
    background-color:#f6fbf5 ;
    text-align:center;
    display: flex;
    align-items:center;
    justify-content: center;
    padding:12px;
    border-radius:15px;
    span{
        color:black;
        font-weight: bold;
        margin: 0 4px 0 4px;
    }
}

.totalOrder{
    display:flex;
    align-items: center;
    justify-content: space-between;
    color:black;
    padding: 20px  0 ;
    .totalp{
    color: BLACK;
    font-weight: bold;
    font-size:20px
}

}




.confirmorder{
    background-color: $text-color;
    padding: 12PX;
    border-radius:15px;
    color:#ffffff;
    text-align:center;
    font-weight: bold;
    margin-top:9px;
    cursor:pointer;
}
.containerProductpage{
    background-color:#ffffff;
    display: flex;
    flex-direction:column;
    // align-items:center;
padding:20px;
    h3{
        font-weight: bold;
    }
    h4{
        color:black;
        font-size: 23px;
    }
    ul {
        display: flex;
        align-items: center;
       
       
        gap:45px;
         margin-bottom:px;
        li{
            list-style:none;
            font-size: 18px;
        }
    }

    .number{
        font-weight: bold;
    }
    .price{
        color:$background-color;
    }
    .total{
        font-weight: bold;
        color:gray;
    }

    .productlist{
        padding-bottom: 9px;
    }

    .eachproduct{
        display:flex;
        align-items: center;
        justify-content: space-between;
    
        img{
            border: 1PX SOLID gray;
            padding:5px;
            border-radius:50%;
            &:hover{
                border:3px solid black;
            }
        
        }
        
    }
}


@media (max-width:768px){

    .containerProductpage{
        h4{
            font-size:14px;
        }


        .number{
        font-size:15px ;
    }
    .price{
        font-size:15px ;
    }
    .total{
        font-size:15px ;
    }


    }

    .removeitem{
        img{
            height: 18px;
          
        }
    }





    ul {
     
    
         margin-bottom:4px;
  
    }
}


@media (max-width:744px){

.cartsection{
  
  width:90%;
}
}
</style>


<script setup> 
import { useUserStore } from "@/stores/food.js";

const useStore = useUserStore();

const cart = useStore.cart;




</script>