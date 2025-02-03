<script setup>

</script>

<template>
    <div class="slider">

        <div class="text">
         <h1>Simplifiez votre accès.</h1>
         <h2>Vérifier avec iNdeep.</h2>

         <div class="buton-part">

         <button class="green"> Mon espace</button>
         <button class="black"> A propos iNdeep</button>

         </div>






        </div>
        <div class="photo">

          
                

           
            

                    
        </div>


    </div>


</template>

<style>

.slider{
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: row;
    background: rgb(2,0,36);
    background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(24,28,28,1) 0%, rgba(16,16,20,1) 100%);
   
   
}

.text{
    width: 50%;
    display: flex;
   justify-content: center;
    flex-direction: column;
    padding-left: 120px;
 
}

.text h1{
    color: white;
    font-size: 4vw;
    font-family: 'Roboto';
    font-weight: 700;
    margin: 0px;
}

.text h2{
    background: -webkit-linear-gradient(180deg, #3bdf77 0%, #ff9264);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 3vw;
    font-family: 'Roboto';
    font-weight: 700;
    margin-top: 10px;
}

.text p{
    color: rgb(199 199 199);
    font-size: 1.4vw;
    font-family: 'Roboto';
    font-weight: 400;
    margin: 0px;
}

.black{
    width: 200px;
    height: 50px;
    background-color: #18181c;
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    border-color: #2c2c2e;
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.7s ease-in-out;
    margin-right: 20px;
  
}

.black:hover{
    background-color: #9fb86e;
    border-color: transparent;
    
}
.green{
    width: 200px;
    height: 50px;
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
    
}
.green:hover{
    background-color: #18181c;
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    border-color: #2c2c2e;
    color: #ffffff;
}

.buton-part{
    display: flex;
    margin-top: 30px;
}















.photo{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
   
   
}

@media (max-width: 768px) {
    .slider{
    flex-direction: column;
   
}
   
    .text{
    width: 100%;
    height: 50vh;
    justify-content: center;
    align-items: center;
    padding-left: 0px;
   }

   .text h1{
    font-size: 6vw;
}
.text h2{
    font-size: 5vw;
}
   .photo{
    width: 100%;
    height: 50vh;
   }
   .buton-part{
    display: flex;
    flex-direction: column;
    justify-content: center;
   
   }
}

</style>