document.getElementById('modeToggle').addEventListener('click', function() {
    document.body.classList.toggle('night-mode');
    const icon = document.getElementById('modeIcon');
    if (document.body.classList.contains('night-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});