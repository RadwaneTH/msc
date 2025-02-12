<script setup>


</script>

<template>

    <div class="container">
         <div class="passwinfo">

            <div class="info-photo">

             <img src="../assets/img/img1.jpg" alt="img1">
             <div class="pop-up-card top-right background-blur"><h4>2X</h4><p>Essais gratuits</p></div>
            </img>


            </div>
            <div class="info-text">

                <h1>Validation <span>Passeport</span></h1>
                <p> Validez votre passeport en ligne en toute sécurité et obtenez une version numérique.</p>
                <button class="btn">Explorer</button>

            </div>

         </div>

    </div>

</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Quicksand:wght@300..700&display=swap');

.container{

    width: 100%;
 
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Satoshi', sans-serif;
    gap: 1em;


}

.passwinfo{

    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 500px;
    margin-top: 50px;
   
}


.info-photo{

display: flex;
justify-content: center;
align-items: center;
width: 50%;
height: 400px;

}

.info-photo img {

    flex-flow: column;
    justify-content: space-between;
    align-items: flex-start;
    min-width: 19.7vw;
    max-width: 19.7vw;
    min-height: 28.8vw;
    max-height: 28.8vw;
    display: flex;
    position: relative;
    border-radius: 64px;
    

}



.pop-up-card.top-right {
    margin-right: -20em;
    margin-top: -13em;
}

.pop-up-card {
    border-radius: var(--border-radius);
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: 1.5vw 3vw 1.5vw 3vw;
    display: flex;
    position: absolute;
    box-shadow: -1rem 1rem 2rem #00000014;
    -webkit-backdrop-filter: blur(1rem);
    backdrop-filter: blur(1rem);
    background-color: #ffffff4d;
    border-radius: 30px;
}

.pop-up-card h4 {
    font-size: 50px;
    font-weight: 400;
}




.btn {
    
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

































.info-text{

display: flex;
flex-direction: column;
justify-content: center;
align-items:flex-start;
width: 50%;
height: 400px;

color: var(black);
padding: 2em;
gap: 2em;
    
}

.info-text span{
    font-family: Inter, sans-serif;
    font-size: 50px;
    line-height: 1.4vw;
    font-style: italic;
    font-weight: 100;
}

.info-text h1{
    font-family: Inter, sans-serif;
    font-size: 50px;
    line-height: 1.4vw;

    font-weight: 300;
}

.info-text p{
    letter-spacing: .07vw;
    margin-bottom: 0;
    font-size: 1.11vw;
    font-weight: 300;
    line-height: 1.89vw;
    max-width: 70%;
   
}


</style>