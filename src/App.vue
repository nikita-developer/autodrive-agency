<template>
    <div class="page p-2">
        <div class="buttons">
            <Button
                @click="openForm"
                title="Москва"
                class="sm:w-max w-full bg-sky-500 hover:bg-sky-700 rounded-md p-2 text-white"
                >Заказать в Москву</Button
            >
            <Button
                @click="openForm"
                title="Санкт-Петербург"
                class="sm:w-max sm:ml-4 sm:mt-0 w-full bg-emerald-600 hover:bg-emerald-900 rounded-md p-2 text-white mt-4"
                >Заказать в Санкт-Петербург</Button
            >
        </div>
        <Popup v-if="isShow" @hide="isShow = hide">
            <Form :city="city"></Form>
        </Popup>
    </div>
</template>

<script>
import Button from './components/Button/Button.vue'
import Form from './components/Form/Form.vue'
import Popup from './components/Popup/Popup.vue'
export default {
    components: { Button, Popup, Form },
    data() {
        return {
            isShow: false,
            city: '',
        }
    },
    methods: {
        openForm(e) {
            this.city = e.target.title
            this.isShow = true
        },
    },
}
</script>

<style lang="scss" scoped>
@import 'styles/main';
</style>
