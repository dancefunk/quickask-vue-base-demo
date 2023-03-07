<template>
    <button @click="HandleClick"> {{ name }} 点击一下我</button>
</template>

<script>
    import { inject } from 'vue'

    export default {
        setup()
        {
            const name = inject('myName')
            const HandleClick = inject('HandleClick')

            return {
                name,
                HandleClick
            }
        }
    }
</script>
