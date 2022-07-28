

<template>
  <div class="backdrop" @click="closeModal()">
    <div class="modal" :class="{ sale: theme == 'sale' }">
      <h2>{{ header }}</h2>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "content", "theme"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.modal.sale {
  background: red;
}
.modal.sale h2,
.modal.sale p {
  color: white;
}
.backdrop {
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.51);
  width: 100%;
  height: 100%;
}
</style>