<template>
    <div class="container">
        <div class="row">
            <div class="col-md-2 img-container">
                <img :src=url_image alt="">
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
<style>
.img-container img{
    border-radius: 50%;
    border: 1px solid #EE6C4D;
}
</style>