<template>
  <div id="app">
    <div class="paper">
        <h2>{{ msg }}</h2>
        <h2>{{ msg2 }}</h2>
        <h2>{{ msg3 }}</h2>
        <h2>{{ msg4 }}</h2>
        <img src="./assets/picture.png" alt="My picture" class="photo">
        <div class="content">
            <h1>Personal Information</h1>
                <p>Name: Raymond Joseph P. Galupe</p>
                <p>Address: Bulaon Resettlement City of San Fernando Pampanga </p>
                <p>Birthdate: July 31, 2002</p>
                <p>Gender: Male</p>
                <p>Nationality: Filipino</p>
                <p>Email: rpgalupe@student.hau.edu.ph</p>
            <h1>Education</h1>
                <p>Elementary: Bacolor Elementary School</p>
                <p>High School: Holy Angel University</p>
                <p>College: Holy Angel University</p>
            <h1>Skills</h1>
                <ul>
                    <li>Good Communication Skills</li>
                    <li>Web Developer</li>
                    <li>Programmer</li>
                </ul>
            <h1>Achievements</h1>
                <ul>
                    <li>Elementary Diploma</li>
                    <li>High School Diploma</li>
                    <li>Dean's Lister 1st year 1st Semester </li>
                </ul>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to my Resume'
    }
  }
}
</script>

<style>
h2 {
  font-size: 15px;
  text-indent: 0px;
  text-align: right;
  float: right;
  margin: 180px 20px 0px -39px;
}

body {
    background-color: rgb(200, 190, 180);
}

.paper{
    width: 29%;
    height: 830px;
    background-color: white;
    display: flex;
    margin: 1% auto 20px auto;
    position: relative;
    justify-content: space-evenly;
    align-items: normal;
    border-style: solid;
}

.photo{
    width: 150px;
    height: 20%;
    margin: 0px 10px 0px -60px;
    float: none;
    position: top;
}

.content{
    background-color:aliceblue;
    font-family: 'Times New Roman';
    font-size: 16px;
}

ul{
    margin: 5px 0px 0px 0px;
    color:dimgray;
    font-size: 18px;
}

h1{
    margin: 0px 0px 20px 5px;
}

p{
    margin: 10px 0px 15px 15px;
    padding-left: 1%;
}
</style>
