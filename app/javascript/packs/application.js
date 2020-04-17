// require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

document.addEventListener("DOMContentLoaded", async function(event) {
  await fetch("http://localhost:3000/products")
  .then((data) => {
    console.log(data.json())
  })
    .catch((error) => {
      console.log(error)
    });
});
