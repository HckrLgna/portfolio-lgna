<template>
    <section class="custom-container py-5 ">
        <div class="container">
            <div class="row text-center">
                <h1>Hire Me</h1>
                <p class="text-center fst-italic fw-light my-3">I am available for freelance work. Connect with me via and call in to my account.</p>
            </div>
            <div class="row text-center">
                <div class="col-md-4 ">
                    <p>+51960817070</p>
                </div>
                <div class="col-md-4 ">
                    <p>ablanco837@gmail.com</p>
                </div>
                <div class="col-md-4 ">
                    <p>lgnasolutions.systems</p>
                </div>
            </div>
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-auto">
                    <Button
                        class="radius-btn text-danger"
                        :color="'light'"
                        :size="'md'"
                        @click="downloadFile"
                    >Hire me</Button>

                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Button from "@/components/buttons/MaterialButton.vue";
export default {
    name: 'Banner',
    components: {
        Button
    }
}
</script>

<style scoped>
.custom-container{
    background: #E45451;
    color: #fff;
}
</style>