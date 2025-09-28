// Заглушка для объявлений (пока без базы)
let listings = JSON.parse(localStorage.getItem("listings")) || [];

function renderListings() {
  const container = document.getElementById("listings");
  if (!container) return;
  container.innerHTML = listings.map((l, i) => `
    <div class="card">
      <img src="${l.image || 'https://via.placeholder.com/200'}" alt="">
      <h3>${l.title}</h3>
      <p>${l.price} грн</p>
      <a href="listing.html?id=${i}">Подробнее</a>
    </div>
  `).join("");
}

renderListings();
