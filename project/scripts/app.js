const images = document.querySelectorAll(".about-img img");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

images.forEach(function (img) {
  img.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
      // Show the about container
      about.classList.add("active");

      // Hide other articles
      articles.forEach(function (article) {
        article.classList.remove("active");
      });

      // Show the selected article
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
});
