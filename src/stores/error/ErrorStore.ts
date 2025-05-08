import { makeAutoObservable } from 'mobx'

export interface ErrorType {
    message: string
    status: number | string
    timestamp: string
}

class ErrorStore {
    errors: ErrorType[] = []
    lowestError: ErrorType[] = []

    constructor() {
        makeAutoObservable(this)
    }

    setError = (newErrors: ErrorType[]) => {
        this.errors = newErrors
    }

    addError = (newError: ErrorType) => {
        this.errors = [...this.errors, newError]
    }

    removeByIndex = (i: number) => {
        this.errors = this.errors.filter((_, index) => index !== i)
    }

    clearError = () => {
        this.errors = []
    }

    setLowestError = (newErrors: ErrorType[]) => {
        this.lowestError = newErrors
    }

    addLowestError = (newError: ErrorType) => {
        this.lowestError = [...this.lowestError, newError]
    }

    removeLowestErrorByIndex = (i: number) => {
        this.lowestError = this.lowestError.filter((_, index) => index !== i)
    }

    clearLowestError = () => {
        this.lowestError = []
    }
}

export default new ErrorStore()
