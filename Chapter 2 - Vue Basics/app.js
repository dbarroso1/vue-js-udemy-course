const app = Vue.createApp({
  // We can register data, functions, and template data
  // template:'<h2>I am the Template</h2>'

  data() {
    return {
      url: "https://www.google.com/",
      showBooks: true,
      books: [
        {
          title: "Name of the Wind",
          author: "patrick rothfuss",
          img: "https://picsum.photos/seed/asdasd/150",
          isFav: true,
        },
        {
          title: "the way of the kings",
          author: "brandon sanderson",
          img: "https://picsum.photos/seed/asdfds/150",
          isFav: false,
        },
        {
          title: "the final empire",
          author: "brandon sanderson",
          img: "https://picsum.photos/seed/piewrwerrcsum/150",
          isFav: false,
        },
      ],
      /* title: "The Final Empire",
      author: "Jerry B",
      age: 45,
      x: 0,
      y: 0, */
    };
  },

  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFavorite(index) {
      this.books[index].isFav = !this.books[index].isFav;
    },

    /* handleEvent(event, numb) {
      console.log("event", event, event.type);

      if (numb) {
        console.log(numb);
      }
    },
    handleMouseMove(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    }, */
  },
  computed: {
    filteredBooks() {
      /* Can be used in v-for-=-= */
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
