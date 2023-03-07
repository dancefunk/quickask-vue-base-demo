<template>
    <!-- 父组件向子组件传递数据 -->
    <button @click="HandleClick">Children</button>
</template>

<script>
    export default {
        setup (props, context)
        {
            let { attrs, slots, emit } = context

            // vue3.x 获取组件上的属性
            console.log(attrs.SubData)

            // vue3.x 获取slot插槽的节点
            console.log(slots.default())

            // vue3.x emit方法(子组件向父组件传递数据)
            function HandleClick ()
            {
                emit('SubClick', 'vue3.x - this is subData')
            }

            return {
                HandleClick
            }
        }
    }
</script>
