import { defineStore } from 'pinia';


export const useUserStore = defineStore('carrt',{
state:()=>({

 // Liste des produits disponibles sur le site
  tableauProduit:[
    {
       "id":1,
       "image": {
            "thumbnail": "/images/image-waffle-thumbnail.jpg",
            "mobile": "/images/image-waffle-mobile.jpg",
            "tablet": "/images/image-waffle-tablet.jpg",
            "desktop": "/images/image-waffle-desktop.jpg"
       },
       "name": "Waffle with Berries",
       "category": "Waffle",
       "price": 6.50,
       "quantity":1,
       "isActive":false,
    },
    {
        "id":2,
        "image": {
            "thumbnail": "/images/image-creme-brulee-thumbnail.jpg",
            "mobile": "/images/image-creme-brulee-mobile.jpg",
            "tablet": "/images/image-creme-brulee-tablet.jpg",
            "desktop": "  /images/image-creme-brulee-desktop.jpg"
        },
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00,
        "quantity":1,
        "isActive":false,
     },
     {
        "id":3,
        "image": {
            "thumbnail": "  /images/image-macaron-thumbnail.jpg",
            "mobile": "  /images/image-macaron-mobile.jpg",
            "tablet": "  /images/image-macaron-tablet.jpg",
            "desktop": "  /images/image-macaron-desktop.jpg"
        },
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00,
        "quantity":1,
        "isActive":false,
     },
     {
       "id":4,
        "image": {
            "thumbnail": "  /images/image-tiramisu-thumbnail.jpg",
            "mobile": "  /images/image-tiramisu-mobile.jpg",
            "tablet": "  /images/image-tiramisu-tablet.jpg",
            "desktop": "  /images/image-tiramisu-desktop.jpg"
        },
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50,
        "quantity":1,
        "isActive":false,
     },
     {"id":5,
        "image": {
            "thumbnail": "  /images/image-baklava-thumbnail.jpg",
            "mobile": "  /images/image-baklava-mobile.jpg",
            "tablet": "  /images/image-baklava-tablet.jpg",
            "desktop": "  /images/image-baklava-desktop.jpg"
        },
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00,
        "quantity":1,
        "isActive":false,
     },
     {"id":6,
        "image": {
            "thumbnail": "  /images/image-meringue-thumbnail.jpg",
            "mobile": "  /images/image-meringue-mobile.jpg",
            "tablet": "  /images/image-meringue-tablet.jpg",
            "desktop": "  /images/image-meringue-desktop.jpg"
        },
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00,
        "quantity":1,
        "isActive":false,
     },
     {
       "id":7,
        "image": {
            "thumbnail": "  /images/image-cake-thumbnail.jpg",
            "mobile": "  /images/image-cake-mobile.jpg",
            "tablet": "  /images/image-cake-tablet.jpg",
            "desktop": "  /images/image-cake-desktop.jpg"
        },
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50,
        "quantity":1,
        "isActive":false,
     },
     {  "id":8,
        "image": {
            "thumbnail": "  /images/image-brownie-thumbnail.jpg",
            "mobile": "  /images/image-brownie-mobile.jpg",
            "tablet": "  /images/image-brownie-tablet.jpg",
            "desktop": "  /images/image-brownie-desktop.jpg"
        },

        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50,
        "quantity":1,
        "isActive":false,
     },

     {
       "id":9,
        "image": {
            "thumbnail": "  /images/image-panna-cotta-thumbnail.jpg",
            "mobile": "  /images/image-panna-cotta-mobile.jpg",
            "tablet": "  /images/image-panna-cotta-tablet.jpg",
            "desktop": "  /images/image-panna-cotta-desktop.jpg"
        },
       
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50,
        "quantity":1,
        "isActive":false,
     }
],
// Contenu du panier
cart: [],


isPopUpVisible:false,


}),

getters: {





  totalProduct:(state)=>{
    return state.cart.reduce((total, product) => total + product.quantity,0);
  },
    
  totalsommeproduit:(state)=>{

return state.cart.reduce((total,product)=>{
return total+product.price * product.quantity;
},0);
  }
 



  },
actions:{

    removeCartElement(id){

         this.cart = this.cart.filter((producct)=>producct.id !== id);

    this.cart.quantity=0;
       
         const product = this.tableauProduit.find((p) =>p.id === id);

         if(product){
            product.isActive=false;
            product.quantity=1;
         }
   console.log(this.cart);
  
        //  this.cart.forEach((product)=>{
          
         
         
        //     product.isActive=false;
        //      this.cart.splice(id,1);
            
        
        //      console.log(this.cart);
       
           
        //  });
     
      
      },


changePopupState(){
    this.isPopUpVisible=!this.isPopUpVisible;
},




changeAddtoCartbutton(){

this.cart.forEach((product)=>{
     product.isActive = !product.isActive;
 });

this.cart.length=0;
},




    addToCart(product){

        for (let i = 0; i < this.cart.length; i++) {
            if(this.cart[i].id === product.id){
             
          // faire la verification ici    
                 this.cart[i].quantity++;
             return;
          
            }
          
            


            
            }
            this.cart.push(product)
           

           },







   
  increment(id){

        // Trouver le produit par son id
        const product = this.tableauProduit.find((item) => item.id === id);
        if (product) {
          product.quantity++; // Incrémenter la quantité
        }

  },



  decrement(id){
    const product = this.tableauProduit.find((item)=>item.id === id);
    
if(product&& product.quantity>1){
    product.quantity--;
}
  },

  


   change(id){
    const product = this.tableauProduit.find((item)=>item.id === id);

    if(product){
        
        product.isActive=!product.isActive;

    }
}



























}


})