<template>
  <div class="rooms">
    <div class="row">
      <div class="col-6">
        <h1 class="col-12">Create a Room</h1>
        <form @submit.prevent="createRoom">
          <input type="text" class="form-control mb-3" placeholder="Room Name" v-model="name">
          <button class="btn btn-outline-secondary">
            Create
            Room
          </button>
        </form>
      </div>
      <div class="col-6">
        <div class="row px-3">
          <h1 class="col-12">Rooms</h1>
          <div class="col-12 border border-secondary rounded" v-for="room in rooms" :key="room.id">
            <h3 @click="$router.push({name: 'chatroom', params: {roomId: room.id}})">{{room.name}}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "rooms",
  data() {
    return {
      name: ""
    };
  },
  mounted() {
    this.$store.dispatch("getRooms");
  },
  computed: {
    rooms() {
      return this.$store.state.rooms;
    }
  },
  methods: {
    createRoom() {
      if (!this.name.length) {
        return;
      }
      this.$store.dispatch("createRoom", { name: this.name });
    }
  },
  components: {}
};
</script>


<style scoped>
</style>