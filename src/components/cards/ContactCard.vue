<template>
    <div class="container">
        <div class="row">
            <div class="col-md-2 img-container p-1">
                <img :src=url_image :alt=via width="35" height="35">
            </div>
            <div class="col-md-10">
                <h6>{{ via }}</h6>
                <p>{{ data }}</p>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'ContactCard',
    props:{
        url_image: String,
        via: String,
        data: String,
    }
}

</script>
<style scoped>
.img-container img{
    width: 45px;
    height: 45px;
}
</style>