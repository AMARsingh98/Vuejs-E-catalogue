<template>
    <div class="invoice">
        <h1>Here is your invoice..</h1>
        <table class="table">
            <tr class="tableHead">
                <th>Item</th>
                <th>Unit Cost</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Remove</th>
            </tr>
           <tr><td>------------</td><td>---------</td><td>---------</td><td>---------</td><td>---------</td>
            <tr class="tableData" v-for="(item, index) in items" :key="index"> 
                <td><p> {{item.Item}} </p></td>
                <td><p> {{item.UnitCost}} </p></td>
                <td><p> {{item.Quantity}} </p></td>
                <td>Rs {{ item.UnitCost * item.Quantity }}/- </td>
                <td><button class="btn btn-danger" @click="remove(index)"><i class="fa fa-trash"></i> </button></td>
            </tr>
        </table>
        <tr class="total">
            <td colspan="3"></td>
            <td>Total: Rs-{{ total | currency }}/-</td>
        </tr>
        <br>
        <button class="btn btn-success"  @click="confirm">Place Order  <i class="fa fa-paper-plane" ></i></button>
    </div>
</template>

<script>
import { EventBus } from './event-bus.js';
export default {
    name: 'invoice',
    data(){
        return{
            
            items: [
            ],
            
        }
    },
    methods:{
        remove(index) {
            this.items.splice(index, 1);
        },
        confirm(itemName){
            if (this.items.length == 0){
                alert("Please select some items to place order.")
            }else{
            alert("Your Order for " + this.items.length +" Item(s) placed Successfully for RS-" + this.total +"/-  !!!!!!!!")
            }
        }
        

    },
    created() {
        EventBus.$on('clicked', (itemName, itemQuantity, itemPrice) => {
            console.log(itemName + itemPrice + " qunt "+ itemQuantity )
            this.items.push({ Item: itemName,  Quantity:itemQuantity, UnitCost: itemPrice, });
        })
    },
    computed: {
        total() {
            return this.items.reduce(
            (acc, item) => acc +  item.UnitCost * item.Quantity,0);
        }
    },
    filters: {
        currency(value) {
        return value.toFixed(2);
        }
    },
}
</script>

<style scoped>
button {
  border: 1px;
  border-radius: 4px;
  background: #2c3e50;
  padding: 10px 15px;
  color: white;
}

</style>
