<script setup>

onMounted( () => {
  const {$startTracking} = useNuxtApp()

  $startTracking()
})

</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>

