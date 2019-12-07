<template>
  <div class="hello">
    
        <div class="cards">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxFM4WjRWU6CxCfQ3DIBM0FNfvqlbN6lm-msz2_9KnQdx22VWbQ"
              aspect-ratio="2.75">
          <div>
             <h3 class="headline mb-0">{{itemName}}</h3>
             <div> Price:{{ itemPrice }}</div>
             <button class="w3-btn w3-round-xxlarge" @click="addItem()">Add To Cart</button>
          </div>
      
        </div>
  </div>
</template>

<script>

export default {
   
  name: 'cards',

  data: function() {
    return{
      itemName: "HOt Pizza",
      itemQuantity:1,
      itemPrice:249,
    }
  },
   methods:{
    addItem(event) {
            this.$emit('clicked', this.itemName, this.itemQuantity, this.itemPrice );
            },
 
        }
    }
  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
        .cards{
          border-radius: 5px;
            display: flex;
            max-width: 444px;
            flex-wrap: wrap;
            padding-top: 10px;
            padding-left: 10px;
            text-align: center;
            margin: 19px;
            height: 300px;
            color: rgb(41, 40, 40);
            width: 300px;
            background-color:rgba(209, 236, 229, 0.308);
            box-shadow: 5px 5px 5px rgba(33, 34, 34, 0.15);}
        .cards:hover{
           background-color:rgba(135, 240, 140, 0.521);
            box-shadow: 5px 5px 5px rgba(12, 12, 12, 0.15);
            border-radius: 2px;
}

        img{
            border-radius: 5px;
            aspect-ratio:2.75
            }
       #cards-details{
            margin: 20px;
            display: flex;
            background-color:rgba(99, 102, 99, 0.226);

        }
</style>
