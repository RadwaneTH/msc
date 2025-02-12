<script setup>

</script>

<template>

    <div class="container">

        <div class="slider background-container">

            <div class="text fade-up">
                <h5>Facilite votre accès</h5>
                <h1>indeep</h1>
                <h2>vérification</h2>
                <p>Votre solution optimale pour l'authentification en toute sécurité, fluidité et simplicité.</p>
                <button class="btn">S'identifier</button>


            </div>
        </div>
    </div>


</template>


<style scoped>

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  margin-bottom: 50px;
  
 
}
.background-container {
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/img/background.svg'); /* Replace with your image URL */
  background-size: 150%;
  background-position: center;
  background-repeat: no-repeat;
  
  animation: scaleBackground 0.5s ease-out forwards;
}

.slider{

    display: flex;
    justify-content: center;
    padding-top: 70px;
    
    width: 90%;
    margin-top: 120px;
    height: 100vh;
   
    border-radius: 48px;
}

.text{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
   
    -webkit-backdrop-filter: blur(1rem);
    backdrop-filter: blur(1rem);
    background-color: #ffffff4d;
    position: relative;
    border-radius: 48px;
    height: fit-content;
    font-family: 'Satoshi', sans-serif;
    gap: 0.1em;
    padding: 50px;
}

.text h5{
    letter-spacing: .14vw;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 0;
    font-size: .89vw;
    font-weight: 400;
    line-height: 1.44vw;
}

.text h1{
    text-transform: uppercase;
    font-size: 6rem;
    line-height: 5.5rem;
    font-weight: 400;
}

.text h2{
    font-style: italic;
    font-weight: lighter;
    text-transform: uppercase;
    font-size: 5rem;
    line-height: 5.5rem;
   
}

.text p{
    letter-spacing: .07vw;
    margin-bottom: 0;
    font-size: 1.11vw;
    font-weight: 300;
    line-height: 1.89vw;
    text-align: center;
}

.btn {
    margin-top: 20px;
  padding: 0.8em 2em;
  border-color: transparent;
  border-radius: 0.4em;
  border-bottom: 1px solid #e28e2a;
  color: #767676;
}

.btn:hover {
  padding: 0.77em 2em;
  border-bottom-width: 2px;
  cursor: pointer;
}





@keyframes scaleBackground {
  from {
    background-size: 110%;
    opacity: 0;
  }
  to {
    background-size: 100%;
    opacity: 1;
  }
}



























.fade-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 1s ease-out forwards;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


@media (max-width: 768px) {

    
.slider{

display: flex;
justify-content: center;
align-items: center;
width: 90%;
margin-top: 24%;
height: 95vh;

border-radius: 48px;
}


}

</style>