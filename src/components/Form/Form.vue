<template>
    <form class="form" @submit.prevent="onSubmit">
        <h2 class="text-2xl mb-4">Заказать звонок</h2>
        <div
            class="sm:grid sm:grid-rows-2 grid-cols-3 gap-3 items-end xl:grid-cols-4"
        >
            <label class="sm:mb-0 mb-2 block relative">
                <p>Имя*</p>
                <input
                    class="h-9 border-slate-300 w-full border rounded p-1"
                    type="text"
                    placeholder="Иван Иванов"
                    v-model="v$.form.name.$model"
                />
                <p
                    class="form__error absolute inset-full left-0 w-full text-xs text-orange-600"
                    v-if="v$.form.name.$errors.length"
                >
                    Обязательно поле.
                </p>
            </label>
            <label class="sm:mb-0 mb-2 block relative">
                <p>Телефон*</p>
                <input
                    class="h-9 border-slate-300 w-full border rounded p-1"
                    type="text"
                    placeholder="+7 (___) ___-__-__"
                    v-maska="['+7 (###) ###-##-##', '+7 (###) ###-##-##']"
                    v-model="v$.form.phone.$model"
                />
                <p
                    class="form__error absolute inset-full left-0 w-full text-xs text-orange-600"
                    v-if="v$.form.phone.$errors.length"
                >
                    Обязательно поле.
                </p>
            </label>
            <label class="sm:mb-0 mb-2 block relative">
                <p>Email*</p>
                <input
                    class="h-9 border-slate-300 w-full border rounded p-1"
                    type="email"
                    placeholder="you@example.com"
                    v-model="v$.form.email.$model"
                />
                <p
                    class="form__error absolute inset-full left-0 w-full text-xs text-orange-600"
                    v-if="v$.form.email.$errors.length"
                >
                    Обязательно поле.
                </p>
            </label>
            <label class="sm:mb-0 mb-2 block col-span-2 xl:col-span-1">
                <p>Город*</p>
                <select
                    class="h-9 border-slate-300 w-full border rounded p-1"
                    v-model="v$.form.city.$model"
                >
                    <option
                        :value="elem.id"
                        v-for="elem in CITIES()"
                        :key="elem.id"
                    >
                        {{ elem.name }}
                    </option>
                </select>
            </label>
            <button
                :disabled="v$.form.$invalid"
                class="h-9 w-full bg-emerald-600 hover:bg-emerald-900 rounded-md text-white xl:col-start-4"
            >
                Отправить
            </button>
        </div>
    </form>
</template>

<script>
import Button from '../Button/Button.vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { mapGetters, mapActions } from 'vuex'

export default {
    setup() {
        return { v$: useVuelidate() }
    },
    components: { Button },
    data() {
        return {
            form: {
                name: '',
                phone: '',
                email: '',
                city: '',
            },
        }
    },
    validations() {
        return {
            form: {
                name: {
                    required,
                },
                email: {
                    required,
                    email,
                },
                phone: {
                    required,
                    minLength: minLength(18),
                },
                city: {
                    required,
                },
            },
        }
    },
    props: {
        city: {
            type: String,
            default: 1,
        },
    },
    beforeMount() {
        this.form.city = +this.city
    },
    methods: {
        ...mapActions(['GET_DATA']),
        ...mapGetters(['CITIES']),
        onSubmit() {
            this.GET_DATA(this.form)
            this.form.name = ''
            this.form.phone = ''
            this.form.email = ''
            this.form.city = ''
            this.$emit('hide', false)
        },
    },
}
</script>

<style lang="scss" scoped>
@import 'styles/main';
</style>
