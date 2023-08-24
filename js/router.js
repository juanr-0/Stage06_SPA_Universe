export class Router {
  constructor() {
    this.routes = {};
    this.defaultRoute = '404'; // Default route key for non-matching routes
  }

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();

    const targetHref = event.target.href;
    window.history.pushState({}, '', targetHref);

    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[this.defaultRoute];

    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html;
      })
      .catch(error => {
        console.error('Error loading route:', error);
        // Optionally, display an error page or message
      });
  }
  
  changeColor(element) {
    element.style.backgroundColor = 'red';
  }
}
