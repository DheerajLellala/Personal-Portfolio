document.addEventListener('DOMContentLoaded', function () {
    const homeContent = document.getElementById('home');
    const aboutContent = document.getElementById('about');
    const skillsContent = document.getElementById('skills');
    const projectsContent = document.getElementById("projects");

    aboutContent.style.display = 'none';
    skillsContent.style.display = 'none';
    projectsContent.style.display = 'none';

    const homeLink = document.querySelector('a[href="#home"]');
    const aboutLink = document.querySelector('a[href="#about"]');
    const skillsLink = document.querySelector('a[href="#skills"]');
    const projectsLink = document.querySelector('a[href="#projects"]');

    homeLink.addEventListener('click', function (e) {
        e.preventDefault();
        homeContent.style.display = 'flex';
        aboutContent.style.display = 'none';
        skillsContent.style.display = 'none';
        projectsContent.style.display = 'none';
    });

    aboutLink.addEventListener('click', function (e) {
        e.preventDefault();
        homeContent.style.display = 'none';
        aboutContent.style.display = 'block';
        skillsContent.style.display = 'none';
        projectsContent.style.display = 'none';
    });

    skillsLink.addEventListener('click', function (e) {
        e.preventDefault();
        homeContent.style.display = 'none';
        aboutContent.style.display = 'none';
        skillsContent.style.display = 'block';
        projectsContent.style.display = 'none';
    });

    projectsLink.addEventListener('click', function(e){
        e.preventDefault();
        homeContent.style.display = 'none';
        aboutContent.style.display = 'none';
        skillsContent.style.display = 'none';
        projectsContent.style.display = 'block';
    });
});
