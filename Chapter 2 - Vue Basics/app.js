const app = Vue.createApp({
  // We can register data, functions, and template data
  // template:'<h2>I am the Template</h2>'

  data() {
    return {
      title: "The Final Empire",
      author: "Jerry B",
      age: 45,
    };
  },

  methods: {
    ChangeTitle(title) {
      this.title = title;
    },
  },
});

app.mount("#app");
