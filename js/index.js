import {Router} from './router.js'

const router = new Router()
router.add( '/', "pages/home.html")
router.add('/universe',"pages/universe.html",)
router.add( '/exploration',"pages/exploration.html")
router.add(404,"pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

const menuItems = document.querySelectorAll('a');

// Itera pelos itens do menu e adiciona um ouvinte de evento de clique
menuItems.forEach(item => {
  item.addEventListener('click', function() {
    // Remove a classe 'white' de todos os itens do menu
    menuItems.forEach(item => {
      item.classList.remove('white');
    });

    // Adiciona a classe 'white' ao item do menu clicado
    this.classList.add('white');
  });
});