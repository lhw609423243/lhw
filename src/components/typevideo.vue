<template>
    <div class="test">{{tmp_data.id}}</div>
</template>
<script>
export default {
    data(){
        return {
            // tmp_datalist: tmp_data
        }
    },
    props: ['tmp_data'],
    created(){
        console.log(this.tmp_data);
        mpvue.request()
    }
}
</script>
<style>
.test{
    font-size: 16px;
}
</style>


