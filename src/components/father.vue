<template>
    <h1>父组件向子组件传递数据</h1>
  
    <!-- 父组件向子组件传递数据 -->
    <Son1 :name="name" :age="age"></Son1>

    <Son2 SubData="some other data" @SubClick="SubClick">parent</Son2>
    <br/>
</template>

<script>
    import { ref } from 'vue'
    import Son1 from './son1.vue'
    import Son2 from './son2.vue'

    export default {
        setup ()
        {
            const name = ref('张三')
            const age = ref(20)

            function SubClick (data)
            {
                // 接收子组件传递过来的数据
                console.log(data)
            } 

            return {
                name,
                age,
                SubClick
            }
        },
        components: {
            Son1,
            Son2,
        }
    }
</script>
