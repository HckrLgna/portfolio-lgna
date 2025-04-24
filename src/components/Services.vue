<template>
  <section id="services">
    <div class="container mt-5 mb-5">
      <div class="row align-items-center">
        <div class="col-lg-5 px-5">
          <div class="row ">
            <div class="col-lg-12 mt-5 mb-lg-0 ">
              <h3>MY SERVICES</h3>
              <h2 class="service-title mb-4 mt-3">
                I can make this <br />
                awesome things
              </h2>
              <p>
                I understand what your bussiness means to you, your requirements
                consedireng <br />
                trends.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-md-12">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="service-block text-center mb-4 mb-lg-0">
                <font-awesome-icon class="icon" :icon="['fas', 'lightbulb']" />
                <h4 class="mt-2 mb-3 fw-150 fs-18">Frontend Development</h4>
                <p>A complete web app solution for bussiness</p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="service-block text-center mt-4 mb-lg-0">
                <font-awesome-icon class="icon" :icon="['fas', 'mobile']" />
                <h4 class="mt-2 mb-3 fw-150 fs-18">Mobile Development</h4>
                <p>A complete mobile app solution for bussiness</p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="service-block text-center">
                <font-awesome-icon class="icon" :icon="['fas', 'computer']" />
                <h4 class="mt-2 mb-3 fw-150 fs-18">Backend Development</h4>
                <p>A complete solution for bussiness</p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 mt-4 mb-lg-0">
              <div class="service-block text-center">
                <font-awesome-icon class="icon" :icon="['fas', 'cloud']" />
                <h4 class="mt-2 mb-3 fw-150 fs-18">Deploy</h4>
                <p>A complete solution for bussiness</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script></script>
<style scope>
.service-block {
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 40px;
  padding-right: 40px;
  background: #ffff;
  border-radius: 10px;
  box-shadow: 0px 0px 40px 0px rgba(85, 128, 255, 0.2);
}
.icon {
  font-size: 35px;
  background: rgba(144, 172, 209, 0.2);
  width: 50px;
  height: 50px;
  text-align: center;
  padding: 16px;
  border-radius: 10px;
  display: inline-block;
  color: #222222;
}
.service-title{
    font-size: 44px;
    font-weight: 700;
}
</style>
