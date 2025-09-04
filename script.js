// Load articles from JSON and display on homepage
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("articles-container");
  const articleContent = document.getElementById("article-content");

  // Homepage articles
  if (container) {
    fetch("articles.json")
      .then(res => res.json())
      .then(data => {
        data.forEach(article => {
          const card = document.createElement("div");
          card.className =
            "bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden flex flex-col";

          card.innerHTML = `
            <img src="${article.image}" alt="${article.title}" class="w-full h-48 object-cover">
            <div class="p-4 flex flex-col flex-grow">
              <h3 class="text-lg font-bold mb-2">${article.title}</h3>
              <p class="text-gray-600 text-sm mb-4 flex-grow">${article.content.substring(0, 100)}...</p>
              <div class="flex justify-between items-center text-sm text-gray-500">
                <span>By ${article.author}</span>
                <span>${article.date}</span>
              </div>
              <a href="article.html?id=${article.id}" class="mt-3 inline-block bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 text-center">Read More</a>
            </div>
          `;
          container.appendChild(card);
        });
      });
  }

  // Individual article page
  if (articleContent) {
    const params = new URLSearchParams(window.location.search);
    const articleId = params.get("id");

    fetch("articles.json")
      .then(res => res.json())
      .then(data => {
        const article = data.find(a => a.id == articleId);
        if (article) {
          articleContent.innerHTML = `
            <h2 class="text-3xl font-bold mb-4">${article.title}</h2>
            <img src="${article.image}" alt="${article.title}" class="w-full max-h-[400px] object-cover rounded mb-6">
            <div class="text-sm text-gray-500 mb-6">
              <span>By ${article.author}</span> • <span>${article.date}</span>
            </div>
            <p class="text-lg leading-relaxed text-gray-700">${article.content}</p>
          `;
        } else {
          articleContent.innerHTML =
            "<p class='text-red-600 font-semibold'>⚠️ Article not found.</p>";
        }
      });
  }
});
