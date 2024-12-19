
const togglesTheme = document.querySelector('.toggle--themes');
const light = document.querySelector('.light');
const dark = document.querySelector('.dark');

const sidebar = document.querySelector('.responsive-sidebar');
const subsidebar = document.querySelector('.video-subscriptions');
const txtLatest = document.querySelector('.txt-latest'); 

const btn = document.querySelector('.header--menu');
const mainBody = document.querySelector('.main--container');
const tablis = document.querySelector('.scroll-container');

const savedTheme = localStorage.getItem('themes');
if (savedTheme) document.body.classList.add(savedTheme);

togglesTheme.addEventListener('click', () => {
     if (!document.body.classList.contains('dark')) {
          document.body.classList.add('dark');
          localStorage.setItem('themes', 'dark');
     }

     else {
          document.body.classList.remove('dark');
          document.body.classList.add('light');
          localStorage.setItem('themes', 'light');

     }
});

btn.addEventListener('click', () => {
     
     sidebar.classList.toggle('responsive-sidebar');
     tablis.classList.toggle('tablis-move');
     mainBody.classList.toggle('moveAside');

});


btn.addEventListener('click', () => {
     subsidebar.classList.toggle('video-subscriptions-sidebar');
     txtLatest.classList.toggle('text-latest');
});

