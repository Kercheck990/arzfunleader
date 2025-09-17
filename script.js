// Заглушка: вывод профиля из базы (будет через backend)
document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:5000/profile/1") // запрос к Flask
    .then(res => res.json())
    .then(data => {
      document.getElementById("profile").innerHTML = `
        <h2>${data.nickname}</h2>
        <p>Организация: ${data.org}</p>
        <p>Роль: ${data.role}</p>
        <p>Варнов: ${data.warns}</p>
      `;
    });
});
