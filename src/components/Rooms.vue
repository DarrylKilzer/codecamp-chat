<template>
  <div class="rooms">
    <div class="row">
      <div class="col-6">Create a room below, or join one to the left.
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Room Name" v-model="name">
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              @click="createRoom"
            >
              Create
              Room
            </button>
          </div>
        </div>
      </div>
      <div class="col-6">
        <h1>Rooms</h1>
        <h3
          @click="$router.push({name: 'chatroom', params: {roomId: room.id}})"
          v-for="room in rooms"
          :key="room.id"
        >{{room.name}}</h3>
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
      this.$store.dispatch("createRoom", { name: this.name });
    }
  },
  components: {}
};
</script>


<style scoped>
</style>