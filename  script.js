// Animação de scroll suave para links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efeito de aparecimento ao rolar
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.card, .conexao-content > *');
hiddenElements.forEach((el) => {
    el.classList.add('hidden');
    observer.observe(el);
});

// Atualizar ano no footer
document.querySelector('footer p').innerHTML += ` &copy; ${new Date().getFullYear()}`;