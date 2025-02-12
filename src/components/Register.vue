<script setup>
import { onMounted } from 'vue';
import Navbar from './Navbar.vue';
import { useRouter } from "vue-router";
import { ref } from "vue";
import axios from "axios";


////////////////////////////////////////////////////////////////
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.3 });

  // Observe all elements with the 'fade-in-up' class
  document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
});

///////////////////////////////////////////////////////////////




////////////////// Register Function  ///////////////////////


const router = useRouter();

// Reactive state for user input
const user = ref({
  username: "",
  lastname:"",
  email: "",
  password: "",
});

const message = ref(""); // To store success/error messages

const registerUser = async () => {
  try {
    const response = await axios.post("/.netlify/functions/register", {
      username: user.value.username,
      lastname: user.value.lastname,
      email: user.value.email,
      password: user.value.password,
    });

    message.value = response.data.message;
    alert("Un email de confirmation a été envoyé. Veuillez vérifier votre boîte de réception.");
    router.push("/connexion"); // Redirect after email is sent
  } catch (error) {
    console.error("Erreur d'inscription:", error.response?.data || error.message);
    message.value = error.response?.data?.message || "L'inscription a échoué.";
  }
};




///////////////////////////////////////////////////////////

</script>

<template>

  <Navbar />

<div class="wrapper  fade-in-up">
			<div class="inner">
				<form @submit.prevent="registerUser">
					<h3>Rejoignez <span>Indeep.</span></h3>
					<div class="form-group">
						<div class="form-wrapper">
							<label for="">Votre Nom</label>
							<input type="text" class="form-control" v-model="user.username">
						</div>
						<div class="form-wrapper">
							<label for="">Prenom</label>
							<input type="text" class="form-control" v-model="user.lastname">
						</div>
					</div>
					<div class="form-wrapper">
						<label for="">Email</label>
						<input type="email" class="form-control" v-model="user.email">
					</div>
					<div class="form-wrapper">
						<label for="">Creer un mot de passe</label>
						<input type="password" class="form-control" v-model="user.password">
					</div>
					<div class="form-wrapper">
						<label for="">Confirmer votre mot de passe</label>
						<input type="password" class="form-control">
					</div>
					<div class="checkbox">
						<label>
							<input type="checkbox">J'accepte les Politiques de confidentialité.
							<span class="checkmark"></span>
						</label>
					</div>
					<button class="btn" type="submit">Inscription</button>
				</form>
			</div>
		</div>
  
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Quicksand:wght@300..700&display=swap');


* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box; 
  font-family: Inter, sans-serif;
}



input, textarea, select, button {

  color: #333;
  font-size: 10px; 
  font-family: Inter, sans-serif;
}

p, h1, h2, h3, h4, h5, h6, ul {
  margin: 0; 
  font-family: Inter, sans-serif;
}

img {
  max-width: 100%; }

ul {
  padding-left: 0;
  margin-bottom: 0; }

a:hover {
  text-decoration: none; }

:focus {
  outline: none; }

.wrapper {
  padding-top: 120px;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center; 
 
}

.inner {
  min-width: 850px;
  border-radius: 48px;
  margin: auto;
  padding-top: 68px;
  padding-bottom: 48px;
  background: url("../assets/img/register2.jpg"); }
  .inner h3 {
    font-family: Inter, sans-serif;
    font-size: 40px;
    line-height: 1.4vw;
    font-weight: 300;
  
    margin-bottom: 32px;
    
    color: #333;
   }

   .inner h3 span {

    font-family: Inter, sans-serif;
    font-size: 40px;
    line-height: 1.4vw;
    font-style: italic;
    font-weight: 100;
   }

form {
  width: 50%;
  padding-left: 45px; }

.form-group {
  display: flex; }
  .form-group .form-wrapper {
    width: 50%; }
    .form-group .form-wrapper:first-child {
      margin-right: 20px; }

.form-wrapper {
  margin-bottom: 17px; }
  .form-wrapper label {
    margin-bottom: 10px;
    display: block; 
    font-size: 14px;  
  }

.form-control {
  border: 1px solid #ccc;
  display: block;
  width: 100%;
  height: 40px;
  padding: 0 20px;
  border-radius: 5px;
  font-family: "Muli-Bold";
  background: none; }
  .form-control:focus {
    border: 1px solid #e28e2a; }

select {
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  padding-left: 20px; }
  select option[value=""][disabled] {
    display: none; }

    .btn {
      margin-top: 20px;
  padding: 1em 2.2em;
  border-color: transparent;
  border-radius: 0.4em;
  border-bottom: 1px solid #e28e2a;
  color: #767676;
  font-size: 13px;
}

.btn:hover {
  padding: 1em 2.2em;
  border-bottom-width: 2px;
  cursor: pointer;
}

.checkbox {
  position: relative; }
  .checkbox label {
    padding-left: 22px;
    cursor: pointer; 
    font-size: 14px;
  }
  .checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer; }
  .checkbox input:checked ~ .checkmark:after {
    display: block; }

.checkmark {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 16px;
  width: 16px;
 
  background-color: #e28e2a;
  border: transparent;
  font-family: Inter, sans-serif;
  color: #ffffff;
  font-size: 10px;
  font-weight: bolder; }
  .checkmark:after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    content: '✔'; }



    .fade-in-up {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  
  .fade-in-up.visible {
    opacity: 1;
    transform: translateY(0);
  }

@media (max-width: 991px) {
  .inner {
    min-width: 768px; } }
@media (max-width: 767px) {
  .inner {
    min-width: auto;
    background: none;
    padding-top: 0;
    padding-bottom: 0; }

  form {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px; } }


</style>