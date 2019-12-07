<template>
<div class="hello">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>evento</title>
    
    <link rel="stylesheet" href="css/style.css" />

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"
    />

    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,800" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Questrial" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans:300" rel="stylesheet" />
  </head>

  <body>
    <div class="topnav">
      <!-- Centered link -->
      <div class="topnav-centered">
        <a href="#page1" class="active">
          it's
          <span class="matcha">evento</span>
        </a>
      </div>
      <!-- Left-aligned links -->
    </div>

    <main>
      <div
        id="page1"
        style="background-image:url(https://images.pexels.com/photos/1418360/pexels-photo-1418360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)"
      >
        <h1>Make Your Every Day Special With <span class="matcha"> evento </span></h1>
      </div>
      <div id="page2">
        <h2 class="animated infinite bounce">Welcome!</h2>
        <p>
          Evento  is the perfect place to enjoy real Indian food.
          <br />All our products are made with the best selection of natural food.
          <br />Love is our first ingredient and our goal is to bring you the taste of India in every bite.
        </p>
      </div>
        <button class="button"><a href="/invoice">Order Now</a></button>
      <div id="page6">
        <div class="foglia">
          <img
            class="animated wobble infinite slow"
            src="https://svgshare.com/i/AMJ.svgg"
            alt="foglia"/>
        </div>
      </div>  
    </main>
  </body>
</div>
</template>

<script>
export default {
  name: "home",

  data: function() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@charset "utf-8";
/* CSS Document ❤ */

body {
  font-family: "Questrial", sans-serif;
  color: white;
  background: rgb(135, 228, 223);
  background: linear-gradient(
    180deg,
    rgb(123, 243, 223) 0%,
    rgb(151, 190, 187) 50%,
    rgb(125, 128, 127) 97%
  );
  width: 100%;
  margin: 0;
}

/* ---- HEADER ---- */

/* ---- NAVBAR ---- */

.topnav {
  position: relative;
  overflow: hidden;
  background-color: #fff;
  padding: 30px;
  font-family: "Questrial", sans-serif;
}

.topnav a {
  float: left;
  color: black;
  text-align: center;
  padding: 16px 70px;
  text-decoration: none;
  font-size: 18px;
}


.topnav a.active {
  color: black;
}

.topnav-centered a {
  float: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bolder;
  font-size: 27px;
}

.matcha {
  font-family: "Alegreya Sans", sans-serif;
  background-color: #82af30;
  color: white;
  letter-spacing: 2px;
}

.topnav-right {
  float: right;
}

/*_____foto1________*/

#page1 {
  height: 650px;
}

#page1 {
  background-size: cover;
  background-position: center center;
}

#page1 h1 {
  position: static;
}

h1 {
  padding-top: 300px;
  text-align: center;
  font-size: 80px;
  font-family: "Questrial", sans-serif;
  letter-spacing: 2px;
}

#page2 {
  height: 420px;
}

h2 {
  padding-top: 65px;
  text-align: center;
  font-size: 70px;
  font-family: "Questrial", sans-serif;
  letter-spacing: 2px;
}

p {
  text-align: center;
  font-size: 23px;
  letter-spacing: 2px;
}

img {
  float: left;
  width: 50%;
}
h3 {
  padding-top: 55px;
  text-align: center;
  font-size: 40px;
  font-family: "Questrial", sans-serif;
  letter-spacing: 2px;
}


 
.foglia {
  width: 20%;
  margin: 0 auto;
  margin-top: 10px;
  padding-left: 150px;
  padding-bottom: 150px;
}
@media screen and (max-width: 980px) {
  .topnav a,
  .topnav-right {
    float: none;
    display: block;
  }

  .topnav-centered a {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
  }
}
@media screen and (max-width: 650px) {

  .topnav a,
  .topnav-right {
    float: none;
    display: block;
  }

  .topnav-centered a {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
  }

  /*_____foto1________*/

  #page1 {
    height: 630px;
  }

  #page1 {
    padding-top: 330px;
    margin-bottom: -340px;
    background-repeat: no-repeat;
    background-size: contain;
  }

  
  h2 {
    text-align: center;
    font-size: 29px;
    font-family: "Questrial", sans-serif;
    letter-spacing: 2px;
  }
  p {
    text-align: center;
    font-size: 13px;
    letter-spacing: 2px;
  }
  h3 {
    margin-top: -160px;
    text-align: center;
    font-size: 25px;
    font-family: "Questrial", sans-serif;
    letter-spacing: 2px;
  }
  #page6 {
    height: 830px;
  }
  .button{
      background-color: #2c3e50;
      color:white;
     border-radius: 50%;
      
    }
    .button:hover{
      box-shadow: 5px 5px 5px;
    }
}
</style>
