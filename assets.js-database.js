const DB = {
    init() {
        if (!localStorage.getItem('ch_initialized')) {
            localStorage.setItem('ch_users', JSON.stringify([]));
            localStorage.setItem('ch_jobs', JSON.stringify([]));
            localStorage.setItem('ch_listings', JSON.stringify([]));
            localStorage.setItem('ch_applications', JSON.stringify([]));
            localStorage.setItem('ch_photos', JSON.stringify([]));
            localStorage.setItem('ch_announcements', JSON.stringify([]));
            localStorage.setItem('ch_initialized', 'true');
        }
    },
    generateId() { 
        return Date.now().toString(36) + Math.random().toString(36).substr(2); 
    },
    get(key) { 
        return JSON.parse(localStorage.getItem('ch_' + key) || '[]'); 
    },
    set(key, data) { 
        localStorage.setItem('ch_' + key, JSON.stringify(data)); 
    }
};