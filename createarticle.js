document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("add-article-form");
  const msg = document.getElementById("add-article-msg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newArticle = {
      id: Date.now(),
      title: document.getElementById("title").value,
      author: document.getElementById("author").value,
      date: document.getElementById("date").value,
      image: document.getElementById("image").value,
      content: document.getElementById("content").value
    };

    let articles = JSON.parse(localStorage.getItem("articles")) || [];
    articles.push(newArticle);
    localStorage.setItem("articles", JSON.stringify(articles));

    msg.textContent = "✅ Article added successfully!";
    form.reset();
  });
});
