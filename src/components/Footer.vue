<template>
    <div class="footer">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="flex-column">
                        <div class="footer-logo text-center">
                            <a href="">
                                <img :src="require('@/assets/logo.png')" alt="logo" height="50px" >
                            </a>
                            <h4>Follow Me</h4>
                        </div>
                        <div class="footer-social text-center">
                            <a href="#">
                                <i class="fa fa-facebook transition"></i>
                            </a>
                        </div>
                    </div>
                </div>
 
            </div>
            <div class="row footer-bottom text-center justify-content-center">
                <p class="col-lg-8 col-sm-12 footer-text">
                    Copyright All rights reserved | Lgna
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default{
 
}
</script>
<style scope>
.footer{
    background-color: #F9F9FF;
}
</style>