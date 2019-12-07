<template>
    <div>
        <div class="container">
            <img :src="require(`@/assets/images/${image}`)" alt="kuch bhi">
            <div class="content">
                <h4>{{ itemName }}</h4>
                <h4>RS {{ itemPrice }}/-</h4>                
            </div>
        </div>

        <div class="submit">
            <input type="number" value="1" v-model="itemQuantity" min="1" max="9" >
            <button class="btn btn-primary" @click="addItem()">Add {{itemQuantity}}  Item(s) </button>
            <img src="../assets/images/veg.svg" alt="img" style="width:18px; height:20px">
        </div>
    </div>
</template>

<script>
import { EventBus } from './event-bus.js';
export default {
    name: 'FoodItems',
    data(){
        return{
        }
    },
    props:{
        image:String,
        altText: String,
        itemName: String,
        itemPrice: Number,
        discription:String,
        itemQuantity:Number
        },
        methods:{
            addItem(event){ 
                EventBus.$emit('clicked', this.itemName, this.itemQuantity, this.itemPrice)
            }
        }
}
</script>

<style scoped>
img{
  position: relative; 
  border-top-right-radius: 10%;
  border-top-left-radius: 10%;
  width: 200px;
  height:200px;
  margin: 10px;
}
img:hover{
    box-shadow:  5px rgb(32, 36, 61);
    
}

.container {
   position: relative; 
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 200px;
  height:200px;
  margin: 10px; 
  
}
.content {
  position: absolute; 
  bottom:0px;
  background: rgb(0, 0, 0); 
  background: rgba(0, 0, 0, 0.4);
  color: #f1f1f1; 
  width: 200px; 
  margin:10px;
}
button {
  border: 1px;
  border-radius: 30px;
  padding: 10px 15px;
  background-color:#2c3e50;
  border: 1px solid white;
  color: white;
}

input{
    background-color:#0F9D58;
    width:45px;
    border: 1px solid white;
    border-radius: 20%;
    color: white;
}
button:hover{
    
  box-shadow: 5px 5px 10px #4285F4
   
}
.submit{
    background-color: rgb(197, 197, 197);
    margin-top:34px;
    margin-left:44px;
    width:200px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    
}
</style>
