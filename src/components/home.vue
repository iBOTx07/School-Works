<template>
  <div class ="home">
    <center><h1> {{ msg }}</h1></center>
    <br>
    <center><h2> {{ msg2 }}</h2></center>

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to My Vue.js App',
      msg2: 'This is the Home page'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit css to this component only -->
<style scoped>
h1{
  color:darkslategray;
}
h2{
  color:cadetblue;
  background-color: bisque;
}

div{
  background-color:cornflowerblue;
  padding: 5%;
}

</style>