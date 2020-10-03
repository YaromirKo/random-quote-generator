import {reactive, inject} from 'vue';
import axios from "axios";

export const createStore = () => {

    const state = reactive({
        data: {},
        name: ''
    })

    const getRandomQuote = async () =>  {
        await axios.get('https://quote-garden.herokuapp.com/api/v2/quotes/random')
            .then(response => {
                state.data = [response.data.quote]
                state.name = state.data[0]['quoteAuthor']
            })
    }
    const getQuoteByAuthor = async () =>  {
        await axios.get(`https://quote-garden.herokuapp.com/api/v2/authors/${state.name.split(' ')[1]}?page=1&limit=10`)
            .then(response => {
                state.data = response.data.quotes
            })
    }


    return {state, getRandomQuote, getQuoteByAuthor}
}

export const stateSymbol = Symbol('store');

export const injectStore = () => inject(stateSymbol);
