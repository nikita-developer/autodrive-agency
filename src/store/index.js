import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        succesHtml: '',
        cities: [
            {
                id: 1,
                name: 'Москва',
            },
            {
                id: 2,
                name: 'Санкт-Петербург',
            },
            {
                id: 3,
                name: 'Казань',
            },
        ],
    },
    actions: {
        GET_DATA(context, payload) {
            axios
                .post(
                    'http://hh.autodrive-agency.ru/test-tasks/front/task-7/',
                    {
                        name: payload.name,
                        phone: payload.phone.replace(/[^+\d]/g, ''),
                        email: payload.email,
                        city_id: payload.city,
                    }
                )
                .then((response) => {
                    context.commit('SET_DATA', response.data)
                })
                .catch(function (error) {
                    context.commit('SET_DATA', error.response.data)
                })
        },
    },
    mutations: {
        SET_DATA(state, payload) {
            return (state.succesHtml = payload)
        },
        CLEAR_HTML(state, payload) {
            return (state.succesHtml = payload)
        },
    },
    getters: {
        CITIES(state) {
            return state.cities
        },
        SUCCESS_HTML(state) {
            return state.succesHtml
        },
    },
})
