const app = Vue.createApp({
  // We can register data, functions, and template data
  // template:'<h2>I am the Template</h2>'

  data() {
    return {
      showBooks: true,
      title: "The Final Empire",
      author: "Jerry B",
      age: 45,
      x: 0,
      y: 0,
    };
  },

  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(event, numb) {
      console.log("event", event, event.type);

      if (numb) {
        console.log(numb);
      }
    },
    handleMouseMove(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  },
});

app.mount("#app");
