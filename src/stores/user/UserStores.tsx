import { makeAutoObservable } from 'mobx';

interface User {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    city?: string | null;
    phone?: string | null;
    password?: string | null
}

class UserStore {
    user: User | null = null;
    sessionStatus: 'loading' | 'authenticated' | 'unauthenticated' = 'loading';

    constructor() {
        makeAutoObservable(this);
    }

    setUser(user: User | null) {
        this.user = user;
    }

    setSessionStatus(status: 'loading' | 'authenticated' | 'unauthenticated') {
        this.sessionStatus = status;
    }

    clearUser() {
        this.user = null;
    }
}

const userStore = new UserStore();
export default userStore;
