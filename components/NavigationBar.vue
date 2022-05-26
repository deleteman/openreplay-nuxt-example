
<template>
<nav>
    <ul>
        <li>
            <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/second">Second page</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/third">Third page</NuxtLink>
        </li>
    </ul>
</nav>
</template>


<style scoped>  
nav {
    display: block;
    width: 100%;
    height: 30px;
    text-align: center;
}


nav ul {
  list-style-type: none;
}

nav ul li {
  float: left;
  margin-right: 0.5em;
}
nav ul li a {
  padding: 0.25em 1em;
  text-decoration: none; /* no underline */
  background-color: #EBF5FF; /* pale bluish white */
  color: #4312AE; /* dark blue */
  border: 2px solid black;
  border-top-left-radius: 1em 1em; /* rounded corner! */
  border-top-right-radius: 1em 1em; /* another rounded corner! */
}

nav ul li a:hover, nav ul li a:focus {
  color: black;
  background-color: white;
  font-weight: bold;
}

</style>