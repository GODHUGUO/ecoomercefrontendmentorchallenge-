<template>
   
<div class="popup">

<div class="orderconfirmed">
<img src="@/public/images/icon-order-confirmed.svg" alt="">
<h1>Order Confirmed</h1>
<span class="enjoy">We hope you enjoy your food!</span>

 <div v-for="product in useStore.cart" :key="product.id"  class="productvonfirmedlist">


<div class="eachproduct">

<div class="ligne"> 
    
    <div class="firstelemet">
    <img :src="product.image.thumbnail" alt="Image" class=""/>
    <div>
     <h5>{{ product.name }}</h5> 
     <p>{{product.quantity}}x  <span class="sp">@${{product.price }}</span></p>
    </div>
    </div>

    <div class="secondelement">
        ${{product.price*product.quantity}}
    </div>
  



</div>
<hr class="h">


  <p></p>

</div>





</div>    

<div class="confirm">
<p >Order Total    <span>${{useStore.totalsommeproduit}}</span>    </p>
</div>
</div>


<div class="confirmbutton">
    <button    @click="useStore.changePopupState();useStore.changeAddtoCartbutton()"> Start New  Order</button>
</div>


</div>





</template>


<script setup>
import { useUserStore } from "@/stores/food.js";

const useStore = useUserStore();




</script>


<style lang="scss">
.popup{
    background-color: #ffffff;
    border-radius: 19px;

    .orderconfirmed{
        .enjoy{
             color:#b3512e;
        }
        padding:  3%;
    }

    .productvonfirmedlist{
        background-color:#f6fbf5 ;
        // border-radius: 15PX;

    }
}

.eachproduct{

}
.firstelemet{
    display: flex;
    align-items:center;
    gap:9px;
    img{
        height: 55px;
        margin-top:5px;
    }
    p{
        color: #b3512e;
        font-weight: bold;

        span {
         
        font-weight: 100;
            color: grey;
          margin-left:8px
        }
    }
}

.ligne{
   padding-right: 5px;
   padding-left: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:9px;
}

.h{
    opacity:0.3;
}


.confirm{
    p{
        display: flex;
        justify-content: space-between;
        padding:5px 0;
        align-items: center;
    }
   
    span{
        font-size: 20px;
        font-weight: bold;
    }
}

.confirmbutton{
    width:      100% ;
    display:flex;
    justify-content: center;
    
    button{
        background-color: red;
        border-radius:15px;
        color:#ffffff;
        font-weight: bold;
        border: none;
        width:95% ;
        margin:5px;
        padding: 9px;
        cursor:pointer;
    }
    
}
</style>
