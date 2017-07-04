<template>
    <div>
        <div class="layout-header"></div>
        <div class="layout-breadcrumb">
            <Breadcrumb>
                <Breadcrumb-item href="#">首页</Breadcrumb-item>
                <Breadcrumb-item href="/login">应用中心</Breadcrumb-item>
                <Breadcrumb-item>某应用</Breadcrumb-item>
            </Breadcrumb>
        </div>
        登录页面
    </div>
</template>
<style>

</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
    }
</script>
