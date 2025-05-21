import { makeAutoObservable } from 'mobx'

class GlobalLoaderStore {
    isLoading = false

    constructor() {
        makeAutoObservable(this)
    }

    toggleLoader = () => {
        this.isLoading = !this.isLoading
    }

    setLoader = (newState: boolean) => {
        this.isLoading = newState
    }
}
// 
export default new GlobalLoaderStore()
