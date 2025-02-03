<script setup>
import Navbar from './Navbar.vue';
import axios from 'axios';
</script>


<script>



/////////////////////////////////////////

export default {
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      message: ''
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await axios.post('/api/register', this.user);
        this.message = response.data.message;
      } catch (error) {
        this.message = error.response?.data?.message || 'Registration failed';
      }
    }
  }
};











///////////////////////////////////////////

</script>
<template>

    <Navbar />
    <div class="register">
        
        <form class="form" @submit.prevent="registerUser">
            <div >
                <h1>Tout comence par un compte.</h1>
            </div>

            <div>
                <h2>Creer votre compte iNdeep.</h2>
            </div>

            <div style="display: flex;width: 100%;">
                <input v-model="user.username" type="text" name="name" placeholder="Votre nom" style="width: 50%;" />
                <input type="text" name="lastname" placeholder="Votre prenom" style="width: 50%;" />
            </div>

            <div style="display: flex;width: 100%;">

                <input v-model="user.email"   type="email" name="email" placeholder="Votre email" style="width: 100%;" />
               
            </div>

            <div style="display: flex;width: 100%;">
                
                <input  v-model="user.password"  type="password" name="password" placeholder="Votre mot de passe" style="width: 100%;" />
            
            </div>

            <div style="display: flex;width: 100%;">
                
                <input type="password" name="confirm" placeholder=" Confirmer votre mot de passe" style="width: 100%;" />
            
            </div>

            <button type="submit"> Creer un compte</button>


        </form>
        <p v-if="message" style="color:aliceblue">{{ message }}</p>



    </div>
</template>

<style scoped>
.register {

    width: 100%;
    height: 100vh;
   padding-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(2,0,36);
    background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(24,28,28,1) 0%, rgba(16,16,20,1) 100%);
}

.form{
    backdrop-filter: saturate(180%) blur(20px);
    background: #19191ec7;
    height:fit-content;
    width: 45%;
    padding: 40px;
    border-radius: 20px;
    border-color: #252525;
    border-style: solid;
    border-width: 0.1px;
    transition: 0.5s ease-in-out;
   

}

.form h1{
    color: rgb(220, 220, 220);
    font-size: 1.9vw;
    font-family: 'Roboto';
    font-weight: 500;
    margin: 0px;
}

.form h2{
    background: -webkit-linear-gradient(180deg, #3bdf77 0%, #ff9264);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.5vw;
    font-family: 'Roboto';
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 40px;
}

.form  input{
    padding: 15px;
    background-color: #16161a;
    color: #a1a2a5;
    margin-bottom: 10px;
    border-style: solid;
    border-width: 1px;
    border-color: #2e3135;
    border-radius: 5px;
    width: 40%;
    margin-right: 10px;
}

.form button{
    width: 160px;
    height: 43px;
    background-color: #9fb86e;
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    border-color: #2c2c2e;
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.7s ease-in-out;
    margin-right: 20px;
    margin-bottom: 10px;
    margin-top: 30px;
    
}

.form button:hover{

    background-color: #429570;


}


@media (max-width: 768px) {

    .form{
 

    height: fit-content;
    width: 80%;
    padding: 30px;
    transition: 0.5s ease-in-out;

   

}

}



</style>