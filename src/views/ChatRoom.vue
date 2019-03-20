<template>
  <div class="chat m-4">
    <div class="row">
      <div class="col-12 messages-area border border-secondary rounded">
        <h1>{{room.name}} Chat</h1>
        <div class="row">
          <div
            class="col-12 text-left"
            :class="{'bg-secondary text-white': i%2 == 0, 'bg-light': i%2 != 0}"
            v-for="(m,i) in room.messages"
            :key="m.id"
          >{{getTime(m.time)}}{{m.user == user.name ? 'me' : m.user}}: {{m.message}}</div>
        </div>
      </div>
      <form class="col-12 input-group my-2 px-0" @submit.prevent="sendMessage">
        <input
          type="text"
          class="form-control border border-secondary"
          placeholder="message"
          v-model="message"
        >
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="submit" id="sendMessage">Send</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "chatroom",
  data() {
    return {
      message: ""
    };
  },
  mounted() {
    this.$store.dispatch("connectToRoom", { id: this.$route.params.roomId });
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    room() {
      return this.$store.state.chatRoom;
    }
  },
  methods: {
    sendMessage() {
      let message = {
        user: this.user.name,
        time: Date.now(),
        message: this.message
      };
      this.$store.dispatch("sendMessage", {
        message,
        roomId: this.$route.params.roomId
      });
    },
    getTime(ms) {
      let date = new Date(ms);
      return date.getHours() % 12 == 0
        ? `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}am `
        : `${date.getHours() -
            12}:${date.getMinutes()}:${date.getSeconds()}pm `;
    }
  }
};
</script>


<style>
.messages-area {
  height: 75vh;
}
</style>