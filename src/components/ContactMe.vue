<template>
  <section class="sky-blue">
    <div class="container">
      <div class="row">
        <div class="section-title p-2 m-2">
          <h2 class="about-heading">Contact Me</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-5">
          <ContactCard
            url_image="https://via.placeholder.com/50"
            via="Email"
            data="ablanco837@gmail.com"
          >
          </ContactCard>
          <ContactCard
            url_image="https://via.placeholder.com/50"
            via="Phone"
            data="60817070"
          >
          </ContactCard>
          <ContactCard
            url_image="https://via.placeholder.com/50"
            via="Whatsapp"
            data="https://wa.me/60817070"
          >
          </ContactCard>
        </div>
        <div class="col-7">
          <form
            id="contact-form"
            class="row contact-form"
            action="#"
            method="POST"
          >
            <div class="col-xs-12 col-sm-6">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div class="col-xs-12 col-sm-6">
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder="Your email address"
                />
              </div>
            </div>
            <div class="col-xs-12 col-sm-12">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  placeholder="Enter the discussion title"
                />
              </div>
            </div>
            <div class="col-xs-12 col-sm-12">
              <div class="form-group">
                <textarea
                  name="message"
                  id="message"
                  class="form-control"
                  placeholder="Write your message"
                ></textarea>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12">
              <div class="button-field">
                <button type="submit" class=" button-download radius-btn">
                  Send Message now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ContactCard from "./cards/ContactCard.vue";
export default {
  components: {
    ContactCard,
  },
};
</script>
<style scoped>
.sky-blue {
  background: #f9f9ff;
  text-align: left;
  margin: 100px 0;
}
.section-title {
  font-weight: 700;
  font-size: 45px;
}
.contact-form div{
    margin-bottom: 10px;
}
.button-download{
    background-color: #EE6C4D;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    margin-top: 20px;
    border: none;
}
</style>
