<template>
  <div id="app">
           <nav class="navbarInverse">
             
                <div class="container-fluid">
                  <div class="navbar-header">
                    <a class="navbar-brand" href="#">FOOD ORDERING</a>
                  </div>
                  
                  <div id="navBar">
                  <ul class="nav navbar-nav">
                    <li><button  class="btn btn-primary" v-on:click="component='home'">HOME</button></li>
                     <li><button  class="btn btn-primary" v-on:click="component='OrderPanel'">MENU</button></li>
                    <li><button  class="btn btn-primary" v-on:click="component='about'">ABOUT US</button></li>
                   
                  </ul>

                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search" name="search">
                    <div class="input-group-btn">
                     <button class="btn btn-default" type="submit">
                        <i class="glyphicon glyphicon-search"></i>
                     </button>
                   </div>
                </div>
             </div>
           </div>
         <component v-bind:is="component"></component>
       </nav>
       

  </div>
</template>

<script>
export default {
   data (){
    return{
      component: "OrderPanel",
    
    }
  },
  name: 'app',
  components: {
  
  }
}
</script>

<style>
#app {
  font-family: 4'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #919599;
  
}
.navbarInverse{
    background-color:rgb(3, 87, 81);
    color:rgb(253, 251, 251) 
}
#navBar{
    float: right; 
    height: 10px;
    width: 750px;
    
    }
   
 li {
    border-right: 1px solid #bbb;
    margin:5px;
    float: right;
    border-right: none;
  

    }
    .input-group{
      margin-top:5px; 
    }
    

   
    
        

    
</style>
