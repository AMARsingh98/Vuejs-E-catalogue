<template>
    <div class="row container-fliud" id="order" >
        
        <div class="col-md-8" id="menue">
            <div><h3>fastfood</h3></div>
            <div id = "fooditem">
                <food-items :itemQuantity="1"  :itemPrice= "69" itemName="Desert"  image="desert.jpg" discription="have fun with delicious desert"></food-items>
                <food-items :itemQuantity="1"  :itemPrice= "109" itemName="Manchurian" image="manchurian.jpeg"></food-items>
                <food-items :itemQuantity="1"  :itemPrice= "99" itemName="Pav-Bhaji" image="pavbhaji.jpg"></food-items>
                <food-items :itemQuantity="1"  :itemPrice= "229" itemName="Dal-Bati-Churma" image="dalbatichurma.jpg"></food-items>
                <food-items :itemQuantity="1"  :itemPrice= "69" itemName="Desert"  image="desert.jpg" discription="have fun with delicious desert"></food-items>
                <food-items :itemQuantity="1"  :itemPrice= "109" itemName="Manchurian" image="manchurian.jpeg"></food-items>
                <food-items :itemQuantity="1"  :itemPrice= "99" itemName="Pav-Bhaji" image="pavbhaji.jpg"></food-items>
            </div> 
            <div><h3>healthyfood</h3></div>
            <div id = "fooditem">
                <food-items :itemQuantity="1"  :itemPrice= "69" itemName="Desert"  image="desert.jpg" discription="have fun with delicious desert"></food-items>
                <food-items :itemQuantity="1"  :itemPrice= "109" itemName="Manchurian" image="manchurian.jpeg"></food-items>
                <food-items :itemQuantity="1"  :itemPrice= "99" itemName="Pav-Bhaji" image="pavbhaji.jpg"></food-items>
                <food-items :itemQuantity="1"  :itemPrice= "69" itemName="Desert"  image="desert.jpg" discription="have fun with delicious desert"></food-items>
                <food-items :itemQuantity="1"  :itemPrice= "109" itemName="Manchurian" image="manchurian.jpeg"></food-items>
                <food-items :itemQuantity="1"  :itemPrice= "99" itemName="Pav-Bhaji" image="pavbhaji.jpg"></food-items>
                <food-items :itemQuantity="1"  :itemPrice= "69" itemName="Desert"  image="desert.jpg" discription="have fun with delicious desert"></food-items>
                <food-items :itemQuantity="1"  :itemPrice= "109" itemName="Manchurian" image="manchurian.jpeg"></food-items>
                <food-items :itemQuantity="1"  :itemPrice= "99" itemName="Pav-Bhaji" image="pavbhaji.jpg"></food-items>
            </div>
        </div>
        
        <div class="col-md-6" id= "invoice">
            <invoice-panel></invoice-panel>
        </div>
    </div>
</template>

<script>

import FoodItems from './FoodItems.vue'
import InvoicePanel from './InvoicePanel.vue'



export default {
    name: 'OrderPanel',
    components: {
       'food-items': FoodItems,
       'invoice-panel':InvoicePanel
    },
    data () {
        return {

        }
    },
    methods:{
       /* onClickChild(value1, value2){
            console.log(value1)
            console.log(value2)

        }*/

    }
}
</script>

<style scoped>
#order{
    display:flex;;
}
#menu{

    display:auto;
    width:70%; 
}
#fooditem {
    align-items:center;
    display: inline-grid;
    grid-template-columns: auto auto auto;
    
}
#invoice {
    float:right;
    width:30%;
}  
h3{
    padding:10px;
    margin:10px;
    text-align: center;
}
</style>
