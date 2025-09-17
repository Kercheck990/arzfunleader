document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.page-section');

    // Функция для переключения секций
    function showSection(sectionId) {
        sections.forEach(section => {
            section.style.display = 'none';
        });
        document.querySelector(sectionId).style.display = 'block';
    }

    // Обработчик кликов по ссылкам
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Удаляем класс 'active' со всех ссылок
            navLinks.forEach(item => item.classList.remove('active'));

            // Добавляем класс 'active' к нажатой ссылке
            event.currentTarget.classList.add('active');

            // Показываем нужную секцию
            const targetId = event.currentTarget.getAttribute('href');
            showSection(targetId);
        });
    });

    // Показать главную страницу при загрузке
    showSection('#profile-page');
});
