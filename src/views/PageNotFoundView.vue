<template>
    <h1> {{title}}</h1>
    <p>{{subtitle}}</p>
</template>

<script>
export default{
    name: "PageNotFoundView",
    data(){
        return{
            title:"Page Not Found",
            subtitle:"I'm sorry but the path does not match any page in the app!"
        }
    }
}
</script>

<style scoped>
</style>