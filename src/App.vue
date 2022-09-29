<template>
    <div class="page p-2">
        <div class="buttons">
            <Button
                @click="openForm"
                title="1"
                class="sm:w-max w-full bg-sky-500 hover:bg-sky-700 rounded-md p-2 text-white"
                >Заказать в Москву</Button
            >
            <Button
                @click="openForm"
                title="2"
                class="sm:w-max sm:ml-4 sm:mt-0 w-full bg-emerald-600 hover:bg-emerald-900 rounded-md p-2 text-white mt-4"
                >Заказать в Санкт-Петербург</Button
            >
        </div>
        <Popup v-if="isShow" @hide="isShow = hide">
            <Form @hide="isShow = hide" :city="city"></Form>
        </Popup>
        <Popup v-if="SUCCESS_HTML" @hide="CLEAR_HTML(hide)">
            <div v-html="SUCCESS_HTML"></div>
        </Popup>
    </div>
</template>

<script>
import Button from './components/Button/Button.vue'
import Form from './components/Form/Form.vue'
import Popup from './components/Popup/Popup.vue'
import { mapGetters, mapMutations } from 'vuex'
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
        ...mapMutations(['CLEAR_HTML'], false),
    },
    computed: {
        ...mapGetters(['SUCCESS_HTML']),
    },
}
</script>

<style lang="scss" scoped>
@import 'styles/main';
</style>
