<template>
  <div class="hello">
<br>
    <div class="invoice-box">                                                                                                                                                                                                                                                                                                                                             
      <img src="data:image/png;base64,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" style="width:100%; max-width:300px;">                
      <h1 style="text-align:center">{{ msg }}</h1>               
    </div>
      
     
      <br>
     <div class="card">
       <div class="cards">
      
       </div>

     </div>
   </div>
</template>

<script>

export default {
  name: 'menue',
  props:{
      msg: "Oy! It's Our Menu ",
      itemName:"pizza domino's", 
      itemPrice: 20,
      itemQuantity:2,
      item: [{description:''
      }
      ],
    
  },
 
  }
                     


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 .invoice-box {
    max-width: 695px;
    margin: auto;
    padding: 30px;
    background-color:#8de78a; 
    border: 1px solid rgb(248, 243, 243);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    font-size: 16px;
    line-height: 24px;
    font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
    color: rgb(158, 154, 154);
    text-align: center;
    
    }


  #navBar{
      float: left;
      height: 100px;
      width: 1350px;
      background-color: rgb(52, 53, 53)
    }
    li {
    border-right: 1px solid #bbb;
  }

  li:last-child {
    border-right: none;
  }
  .services{
    float:right;

  }
  .hello{ 
    background: rgb(245, 243, 243)
  }
  .table{
    background-color: #333;
    max-width: 695px;

  }
  .head{
      background-color: rgb(217, 241, 241);
    
  }
  .dta{
    background-color: darkorange
  }
  .cards{
    display: flex;
    text-align: center;
    margin: 5px;
    height: 300px;
    width: 300px;
    background-color: rgb(253, 251, 251);
    box-shadow: 5px 5px 5px rgba(17, 17, 17, 0.15);

  }
  .card{
    display: flex;  
    margin: 10x;
  }
  .cards{
    display: flex;
    margin: 10x;}
  img{
    aspect-ratio:2.75
  }
  #cards-details{
    margin: 20px;
    display: flex;
  background-color: rgb(138, 134, 134);

  }

#custom-search-input {
           
        padding-right: 30%;
        padding-left: 40%;
       
        
    }

</style>
