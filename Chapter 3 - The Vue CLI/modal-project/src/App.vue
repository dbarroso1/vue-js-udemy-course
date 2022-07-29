<template>
  <h1>{{ title }}</h1>
  <p>Welcome In!</p>
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal()">
      <template v-slot:links>
        <a href="#">Sign up Now</a>
        <a href="#">More Info</a>
      </template>

      <h2>This is a Slot Test</h2>
      <p>This is a test modal text content</p>
    </Modal>
  </div>
  <button @click.shift="toggleModal()">Open Modal</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      title: "My First Vue App",
      header: "New Sale Available",
      content: "Click here to see what sales are right up your alley!",
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  display: inline-block;
  border-bottom: 1px solid #2c3e50;
}
</style>