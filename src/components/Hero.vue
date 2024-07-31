<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-xl-8 col-lg-8 col-md-8 p-5">
                   <div class="row">
                    <h1>
                        Hello, I'm Angel <br>
                        Frontend and Mobile <br>
                        Developer.
                    </h1>
                    <p class="text">Innovations and inspiration are the two powerfull tools that permit to construct full movil and web desing </p> 
                   </div>
                   <div class="row">
                    <div class="col-3">
                        <a class="radius-btn btn-desactive">
                            About
                        </a>
                    </div>
                    <div class="col-3">
                        <a class="radius-btn btn-active">
                            Resume
                        </a>
                    </div>
                   </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 ">
                    <img :src="require('@/assets/developer.svg')" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default{

    }
</script>
<style scoped>
.text{
    margin-bottom: 45px;
    padding-right: 175px;
}
.radius-btn{
    text-decoration: none;
    color: inherit;
    padding-left: 43px;
    padding-right: 43px;
    padding-top: 15px;
    padding-bottom: 15px;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;
}

.btn-active{
    color: #ffff;
    background-color: #52BD94;
}
.btn-desactive{
    color: #52BD94;
    background-color: #ffff;
    border-color: #52BD94;

}

</style>