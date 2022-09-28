<template>
    <div class="popup">
        <div class="popup__back" @click.stop="$emit('hide', false)"></div>
        <div class="popup__body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import 'styles/main';
</style>
