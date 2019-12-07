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
    <main id="main">
     <h1>About Us</h1>
     <p>We are Evento a system for ordering food,<br>
        we are India’s favourite food ordering and order managing system</p>
     <br>
     <br>
      <div id="page6">
        <div id="address">
          <p>VISIT US</p>
          <p>My Company Software Pvt. Ltd</p>
          <p>311020 Bhilwara (RAJ.)</p>
          <p>INDIA</p>
        </div>
        <div class="hours">
          <p>OPENING HOURS</p>
          <p>Monday - Saturday</p>
          <p>9:00 - 18:00</p>
          <p>Sunday - Closed</p>
          <p />
        </div>
        
      </div>
      <div class="mapouter">
        <iframe
          width="100%"
          height="500px"
          id="mapcanvas"
          src="https://maps.google.com/maps?q=via%20meravigli,%204%20milano&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        >
          <div style="overflow:hidden;">
            <div id="gmap_canvas" style="height:100%;width:100%;"></div>
          </div>
          <div class="zxos8_gm"></div>
        </iframe>
      </div>

      <footer>
        <div id="final">
          <ul id="collegamenti">
            <li>evento@gmail.com</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </footer>
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
 
  color: rgb(14, 13, 13);
  background: rgb(135, 228, 223);
  background: linear-gradient(
    180deg,
    rgb(164, 250, 236) 0%,    
    rgb(182, 214, 213) 50%,
    rgb(131, 139, 138) 97%
  );
  width: 100%;
  margin: 0;
  padding:0
}

/* ---- HEADER ---- */

header {
  width: 100%;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 950;
}

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

.topnav a:hover {
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

p {
  text-align: center;
  font-size: 23px;
  letter-spacing: 2px;
}



.slide-1 {
  background-image: url("https://images.unsplash.com/photo-1546644578-fba5cbad008d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80");
}

.slide-2 {
  background-image: url("https://images.unsplash.com/photo-1528352311227-abbd6f7f0a46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
}
.slide-3 {
  background-image: url("https://images.unsplash.com/photo-1522160196-1a0efa63778d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80");
}

#page6 {
  height: 920px;
}

#address {
  float: left;
  margin-left: 150px;
}

.hours {
  float: right;
  margin-right: 150px;
  padding-bottom: 80px;
}

footer {
  height: 100px;
  bottom: 0;
  background-color: #fff;
}

#final {
  width: 50%;
  position: relative;
  margin: 0 auto;
}

ul#collegamenti {
  display: flex;
  font-family: "Questrial", sans-serif;
}

ul#collegamenti li {
  list-style: none;
  color: black;
  line-height: 50px;
  font-size: 18px;
  text-align: center;
  padding-top: 25px;
  margin: 0 auto;
  display: inline-block;
}

#collegamenti li:hover {
  cursor: pointer;
}

/* For landscape mode */

@media screen and (max-width: 980px) {
  header {
    position: absolute;
  }
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

/* For mobile */

@media screen and (max-width: 650px) {
  header {
    position: absolute;
  }

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

  .wrap {
    width: 90%;
    text-align: center;
  }

  .menublock {
    border: 3px solid #fff;
    width: 80%;
    margin-top: 15px;
  }

  .menuheader {
    border: 3px solid #fff;
  }

  .detalj {
    text-align: left;
  }



  /*sliders*/

  .slider-container {
    height: 60%;
    width: 90%;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    text-align: center;
  }

  .menu {
    position: absolute;
    left: 0;
    z-index: 900;
    width: 100%;
    bottom: 0;
    margin-bottom: 50px;
  }



  .slide {
    margin-top: -110px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 100%;
    z-index: 10;
    padding: 8em 1em 0;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    transition: left 0s 0.75s;
  }

  [id^="slide"]:checked + .slide {
    left: 0;
    z-index: 100;
    transition: left 0.65s ease-out;
  }

  #page6 {
    height: 300px;
  }

  .foglia {
    width: 50%;
    margin: 0 auto;
    margin-top: -70px;
    padding-left: 150px;
    padding-bottom: 150px;
  }

  #address {
    float: left;
    margin: 0 auto;
    width: 50%;
  }

  .hours {
    float: right;
    margin: 0 auto;
    width: 50%;
    padding-bottom: 80px;
  }

  footer {
    height: 200px;
    bottom: 0;
    background-color: #fff;
  }

  #final {
    width: 100%;
    position: relative;
    margin: 0 auto;
    text-align: center;
  }

  ul#collegamenti {
    display: block;
    font-family: "Questrial", sans-serif;
    text-align: center;
  }

  ul#collegamenti li {
    list-style: none;
    color: black;
    line-height: 40px;
    font-size: 18px;
    text-align: center;
    padding-top: 20px;
    margin: 0 auto;
    width: 100%;
    display: block;
  }

  #collegamenti li:hover {
    cursor: pointer;
  }
}
</style>
