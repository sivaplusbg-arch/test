const Auth = {
    currentUser: null,
    token: null,
    
    init() {
        const stored = localStorage.getItem('ch_session');
        if (stored) {
            const session = JSON.parse(stored);
            this.currentUser = session.user;
            this.token = session.token;
        }
    },
    
    login(email, password) {
        const users = DB.get('users');
        const user = users.find(u => u.email === email);
        if (user) {
            this.currentUser = user;
            this.token = 'jwt_' + DB.generateId();
            localStorage.setItem('ch_session', JSON.stringify({ user, token: this.token }));
            return { success: true, user };
        }
        return { success: false, error: 'Invalid credentials' };
    },
    
    logout() {
        this.currentUser = null;
        this.token = null;
        localStorage.removeItem('ch_session');
    },
    
    isAdmin() { return this.currentUser?.role === 'admin'; },
    isLoggedIn() { return !!this.currentUser; }
};