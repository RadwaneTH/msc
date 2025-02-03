<script setup>
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}
</script>

<template>
    <nav class="navbar">
        <div class="logo"><span>IN</span>deep</div>
        <button class="menu-toggle" @click="toggleMenu">☰</button>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><button>Sign in</button></li>
        </ul>
    </nav>

</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
   
}

.logo{
    margin-left: 120px;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
}
.logo span{
    color: #ff6f00;
}


.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #19191ec7;
    backdrop-filter: saturate(180%) blur(20px);
    color: white;
    font-family: 'roboto';
    font-weight: 300;
    position: fixed;
    width: 100%;
    height: 70px;
    z-index: 9999;
    border-bottom: #252525;
    border-bottom-style: solid;
    border-bottom-width: 0.1px;
}

.nav-links {
    list-style: none;
    display: flex;
    margin-right: 120px;
    justify-content: center;
    align-items: center;
}

.nav-links button{
    width: 70px;
    height: 40px;
    background-color: #18181c;
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    border-color: #2c2c2e;
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.7s ease-in-out;
}
.nav-links button:hover{
    background-color: #ff6f00;
    border-color: transparent;

}

.nav-links li {
    margin: 0 10px;
}

.nav-links a {
    color: #ffffffba;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.5s ease-in-out;
}


.nav-links a:hover {
    color: #ffffff;
   
}


.menu-toggle {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
}

@media (max-width: 768px) {
    .nav-links {
        display: none;
        flex-direction: column;
        background: #18181c;
        position: absolute;
        top: 50px;
        left: 0;
        width: 100%;
        height: 100vh;
        text-align: center;
        padding: 10px 0;
    }

    .nav-links.show {
        display: flex;
    }

    .menu-toggle {
        display: block;
        margin-right:30px ;
    }
    .logo{
    margin-left: 50px;
}
}


</style>