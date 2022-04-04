<template>
 <div class="contact">
  <center><h2>{{title}}</h2></center>
  <h3>Message me or Email me through my Socials</h3>
  <a href="https://www.facebook.com/pineda.raymondjoseph">My Facebook</a><br>
  <p>Raymond Joseph Pineda</p>
  <a href="https://www.instagram.com/ibot_07/">My Instagram</a><br>
  <p>@ibot_07</p>
  <a href="https://twitter.com/iBOT_07">My twitter</a><br>
  <p>@iBOT_07</p>
  <h6>My HAU Email</h6>
  <p>rpgalupe@student.hau.edu.ph</p>
 </div>
</template>
<script>
export default{
  name: 'contact',
  data (){
   return{
    title:'This is the Contact page'
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
h3{
  font-family: 'Times New Roman', Times, serif;
}


div{
  background-color:cornflowerblue;
  padding: 5%;
}
</style>