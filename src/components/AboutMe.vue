<template>
  <section>
    <div class="container p-5   ">
      <div class="row aling-items-center">
        <div class="img-container col-lg-5 col-md-6 my-auto">
          <img src="../assets/photo.png" alt="profile" />
        </div>
        <div class="col-lg-7 col-md-6 my-auto p-4 content">
          <h3>About Me</h3>

          <p>
            I graduated from Chonnam National University three months ago with a
            bachelor's in Computer Engineering. My experiences in school gave me
            strong communication and networking skills, which are crucial for
            event planning. I create successful responsive websites that are
            fast, easy to use, and built with best practices.
          </p>
          <ul class="py-3">
            <li>Name: Angel Charca</li>
            <li>Date of Birthday: 29/06/1998</li>
            <li>Email: ablanco837@gmail.com</li>
            <li>Phone: +59160817070</li>
          </ul>
          <div class="row">
            <Button
              class="radius-btn"
              :color="'danger'"
              :size="'md'"
              :fullWidht="false"
              :variant="'outline'"
              @click="downloadFile"
              >Download CV</Button
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Button from "@/components/buttons/MaterialButton.vue";
export default {
  name: "AboutMe",
  components: {
    Button,
  },

  methods: {
    downloadFile() {
      const link = document.createElement("a");
      link.href = "/assets/CV.pdf";
      link.download = "CV.pdf";
      link.click();
    },
  },
};
</script>
<style scoped>
* {
  background: #F9F9FF;
  color: #3a4554;
}
.img-container {
  text-align: center;
  padding: 0%;
}
.img-container img {
  background: #a6bdda;
  max-width: 100%;
  height: auto;
}

.content h3 {
  margin-bottom: 30px;
  font-size: 2.5rem;
  font-weight: 700;
  position: relative;
  display: inline-block;
}
.content h3::after {
  content: "";
  position: absolute;
  width: 190px;
  height: 2px;
  background: #e45451;
  left: 0;
  bottom: 0px;
}
.radius-btn {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 1px;
}
</style>
