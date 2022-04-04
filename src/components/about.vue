<template>
 <div class="about">
  <center><h2>{{title}}</h2></center>
  <img src="../assets/id.jpg">
  <p>My name is Raymond Joseph P. Galupe and I from section WD - 202.</p>
  <p>I am 19 years old and currently a 2nd year college student of Holy Angel University.</p>
  <p>My dream to be a professional Website Developer someday.</p>
  <p>I mostly play some video games when I not doing any activities from school, but because I love playing games,</p> 
  <p>I started to get curious about how a website programs and how in functions.</p> 
  <p> That is why I took School of Computing in Holy Angel.</p>
 </div>
</template>
<script>
export default{
  name: 'about',
  data (){
   return{
    title:'This is the About page'
  }
 }
}
</script>
<style scoped>
h2{
  font-family: 'Times New Roman', Times, serif;
  color: cadetblue;
  background-color: bisque;
}

img{
  height: 200px;
  width: 180px;
  margin: 20px 0px 0px 20px;
}

p{
  margin: 20px 0px 0px 20px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 20px;
  text-align: justify;
  padding: -10px 0px 0px 20px;
}

div{
  background-color:cornflowerblue;
  padding: 5%;
}
</style>