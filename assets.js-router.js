const Router = {
    routes: {},
    current: '',
    
    register(path, handler) { 
        this.routes[path] = handler; 
    },
    
    navigate(path) {
        window.location.hash = path;
    },
    
    init() {
        window.addEventListener('hashchange', () => this.handleRoute());
        this.handleRoute();
    },
    
    handleRoute() {
        const hash = window.location.hash.slice(1) || '/';
        const [path] = hash.split('/').filter(Boolean);
        this.current = '/' + (path || '');
        const handler = this.routes[this.current] || this.routes['/'];
        if (handler) handler();
    }
};