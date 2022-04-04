<template>
 <div class="blog">
  <center><h2>{{title}}</h2></center>
  <br>
  <h3>{{msg}}</h3>
  <br>
  <p>{{msg2}}</p>
  <p>{{msg3}}</p>
  <p>{{msg4}}</p>
  <p>{{msg5}}</p>
 </div>
</template>
<script>
export default{
  name: 'blog',
  data (){
   return{
    title:'This is the Blog page',
    msg: 'What is Vue.js?',
    msg2: 'Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.',
    msg3: 'Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.',
    msg4: 'The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand,' ,
    msg5: 'Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.'
    
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
  margin: 0px 0px 20px 20px;
}

p{
  margin: 0px 0px 10px 20px;
}

div{
  background-color:cornflowerblue;
  padding: 5%;
}

</style>