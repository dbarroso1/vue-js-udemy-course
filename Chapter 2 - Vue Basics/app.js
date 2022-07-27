const app = Vue.createApp({
  // We can register data, functions, and template data
  // template:'<h2>I am the Template</h2>'

  data() {
    return {
      showBooks: true,
      title: "The Final Empire",
      author: "Jerry B",
      age: 45,
    };
  },

  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
