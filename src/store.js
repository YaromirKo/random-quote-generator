import {reactive, inject} from 'vue';




export const createStore = () => {


    const getRandomQuote = async () =>  {
        const res = await fetch('https://quote-garden.herokuapp.com/api/v2/quotes/random')
        state.random = await res.json()
    }
    const state = reactive({
        all: [],
        random: getRandomQuote(),
        showAll: false
    })


    return {state, getRandomQuote}
}

export const stateSymbol = Symbol('store');

export const injectStore = () => inject(stateSymbol);
