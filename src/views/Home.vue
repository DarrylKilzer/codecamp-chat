<template>
  <div class="home container-fluid">
    <rooms/>
  </div>
</template>

<script>
import Rooms from "../components/Rooms.vue";
export default {
  name: "home",
  components: { Rooms }
};
</script>
