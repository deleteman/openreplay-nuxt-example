<script setup>

let userId = useUserId()

</script>



<template>
    <div class="main-container">
    <NavigationBar />
    <h1 class="centered">
        Hello there!
    </h1>
    <p>
        User Id: {{userId}}
    </p>
    </div>
</template>


<style scoped>
.main-container {
    margin: 0 auto;
    width: 80%;
}
.centered {
text-align: center;
}
</style>

