<template>
    <div>{{name}} {{age}}</div>
</template>

<script>
    import { toRef, toRefs } from 'vue'
    
    export default {
        props: 
        {
            name: String,
            age: Number
        },
        setup(props)
        {
            console.log(props.name)
            console.log(props.age)

            let { name, age } = toRefs(props)
            console.log(name.value, age.value)
        }
    }
</script>
