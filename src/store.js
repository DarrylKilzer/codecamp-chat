import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import db from './utils/firebaseinit'
import axios from 'axios'

Vue.use(Vuex)

let api = axios.create({
  baseURL: 'https://uinames.com/api/?amount=1&ext&region=United States'
})

export default new Vuex.Store({
  state: {
    user: {},
    chatRoom: {},
    rooms: [],
    listener: function () { }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setChatroom(state, room) {
      state.chatRoom = room
    },
    setRooms(state, rooms) {
      state.rooms = rooms
    },
    setListener(state, listener) {
      //unsubscribe from current listener
      state.listener()
      state.listener = listener
    }
  },
  actions: {
    getRooms({ commit, dispatch }) {
      //set listener
    },
    createRoom({ commit, dispatch }, room) {
      //add data
    },
    connectToRoom({ commit, dispatch }, payload) {
      //set listener
    },
    sendMessage({ commit, dispatch }, payload) {
      //add data
    },
    login({ commit }) {
      api.get('')
        .then(res => {
          commit('setUser', res.data)
        })
        .catch(err => {
          console.error(err)
        });
    }
  }
})
































































// getRooms({ commit, dispatch }) {
//   commit('setListener', db.collection('rooms').onSnapshot(querySnapshot => {
//     let rooms = []
//     querySnapshot.forEach(docRef => {
//       let room = docRef.data()
//       room.id = docRef.id
//       rooms.push(room)
//     })
//     commit('setRooms', rooms)
//   }))
// },
// createRoom({ commit, dispatch }, room) {
//   db.collection("rooms").add(room)
//     .then(docRef => {
//       console.log("successfully created room", docRef)
//       router.push({ name: 'chatroom', params: { roomId: docRef.id } })
//     }).catch(err => {
//       console.error(err)
//     })
// },
// connectToRoom({ commit, dispatch }, payload) {
//   commit('setListener',
//     db.collection('rooms').doc(payload.id).onSnapshot(docSnapshot => {
//       let room = docSnapshot.data()
//       room.id = docSnapshot.id
//       db.collection('rooms').doc(payload.id).collection("messages").orderBy("time", "desc").limit(13).onSnapshot(querySnapshot => {
//         room.messages = []
//         querySnapshot.forEach(docRef => {
//           let message = docRef.data()
//           room.messages.push(message)
//         })
//         room.messages.sort((a, b) => {
//           return a.time - b.time > 0 ? 1 : -1;
//         });
//         commit('setChatroom', room)
//       })

//     }))
// },
// sendMessage({ commit, dispatch }, payload) {
//   db.collection('rooms').doc(payload.roomId).collection("messages").add(payload.message)
//     .then(docRef => {
//       console.log(docRef)
//     })
// },