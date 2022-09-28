<template>
    <form>
        <h2 class="text-2xl mb-4">Заказать звонок</h2>
        <div
            class="sm:grid sm:grid-rows-2 grid-cols-3 gap-3 items-end xl:grid-cols-4"
        >
            <label class="sm:mb-0 mb-2 block">
                <p>Имя*</p>
                <input
                    class="h-9 border-slate-300 w-full border rounded p-1"
                    type="text"
                    placeholder="Иван Иванов"
                />
            </label>
            <label class="sm:mb-0 mb-2 block">
                <p>Телефон*</p>
                <input
                    class="h-9 border-slate-300 w-full border rounded p-1"
                    type="text"
                    placeholder="+7 (___) ___-__-__"
                    v-maska="['+7 (###) ###-##-##', '+7 (###) ###-##-##']"
                />
            </label>
            <label class="sm:mb-0 mb-2 block">
                <p>Email*</p>
                <input
                    class="h-9 border-slate-300 w-full border rounded p-1"
                    type="text"
                    placeholder="you@example.com"
                />
            </label>
            <label class="sm:mb-0 mb-2 block col-span-2 xl:col-span-1">
                <p>Город*</p>
                <select class="h-9 border-slate-300 w-full border rounded p-1">
                    <option :value="elem" v-for="elem in cities" :key="elem">
                        {{ elem }}
                    </option>
                </select>
            </label>
            <input
                @submit="submit"
                type="submit"
                value="Отправить"
                class="h-9 w-full bg-emerald-600 hover:bg-emerald-900 rounded-md text-white xl:col-start-4"
            />
        </div>
    </form>
</template>

<script>
import Button from '../Button/Button.vue'
export default {
    components: { Button },
    data() {
        return {
            cities: ['Москва', 'Санкт-Петербург', 'Казань'],
            formName: {
                text: '',
                errorTxt: '',
            },
            formPhone: {
                text: '',
                errorTxt: '',
            },
            formEmail: {
                text: '',
                errorTxt: '',
            },
            formCity: {
                text: '',
                errorTxt: '',
            },
        }
    },
    props: {
        city: {
            type: String,
            default: 'Москва',
        },
    },
    beforeMount() {
        this.formCity.text = this.city
    },
    methods: {
        submit() {},
    },
}
</script>

<style lang="scss" scoped>
@import 'styles/main';
</style>
