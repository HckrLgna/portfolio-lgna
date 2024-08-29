<template>
    <div class="footer">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="flex-column">
                        <div class="footer-logo text-center my-4 p-4">
                            <a href="">
                                <img :src="require('@/assets/logo.png')" alt="logo" height="50px" >
                            </a>
                            <h4 class="pt-4">Follow Me</h4>
                        </div>
                        <div class="footer-social text-center mb-3">
                            <a href="#">
                                <i class="fab fa-facebook transition"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-twitter transition"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-instagram transition"></i>
                            </a>

                        </div>
                    </div>
                </div>
 
            </div>
            <div class="row footer-bottom text-center justify-content-center p-4">
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
.footer-social a{
    font-size: 40px;
    color: #ccc;
    padding: 0 10px;
}
</style>