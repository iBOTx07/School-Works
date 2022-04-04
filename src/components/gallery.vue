<template>
 <div class="gallery">
  <center><h2>{{title}}</h2></center>
  <img src="../assets/id.jpg">
  <img src="../assets/Adult.jpg">
  <img src="../assets/grad.png">
  <img src="../assets/Teen3.jpg">
 </div>
</template>
<script>
export default{
  name: 'gallery',
  data (){
   return{
    title:'This is the Gallery page'
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

div{
  background-color:cornflowerblue;
  padding: 5%;
}

img{
  height: 300px;
  width: 260px;
  margin: 20px 0px 0px 20px;
}
</style>