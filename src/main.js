import { createApp } from 'vue'
import App from './pages/App.vue'

import './assets/css/tailwind.css'

import {stateSymbol, createStore} from "@/store";

const app = createApp(App)

app.provide(stateSymbol, createStore())


app.mount('#app')
