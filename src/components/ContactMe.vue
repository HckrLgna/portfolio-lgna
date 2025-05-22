<template>
  <section id="contact" class="py-5">
    <div class="container">
      <div class="row py-3 text-center">
        <h2 class="section-title">Contact Me</h2>
      </div>
      <div class="row">
        <!-- Contact Cards -->
        <div class="col-12 col-md-5 mb-4">
          <ContactCard
            :url_image="require('@/assets/mail.png')"
            via="Email"
            data="ablanco837@gmail.com"
          />
          <ContactCard
            :url_image="require('@/assets/phone-call.png')"
            via="Phone"
            data="60817070"
          />
          <ContactCard
            :url_image="require('@/assets/whatsapp.png')"
            via="Whatsapp"
            data="https://wa.me/60817070"
          />
        </div>
        <!-- Contact Form -->
        <div class="col-12 col-md-7">
          <form
            id="contact-form"
            class="row contact-form"
            action="#"
            method="POST"
          >
            <div class="col-12 col-sm-6">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div class="col-12 col-sm-6">
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder="Your email address"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  placeholder="Enter the discussion title"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <textarea
                  name="message"
                  id="message"
                  class="form-control"
                  placeholder="Write your message"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <div class="col-12">
              <div class="button-field text-center">
                <button type="submit" class="button-download radius-btn">
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
.section-title {
  font-weight: 700;
  font-size: 2.5rem;
}

.contact-form div {
  margin-bottom: 10px;
}

.button-download {
  background-color: #ee6c4d;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
  border: none;
  transition: background-color 0.3s ease;
}

.button-download:hover {
  background-color: #d55a3e;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .button-download {
    width: 100%; /* Make the button full-width on smaller screens */
  }

  .contact-form textarea {
    resize: none; /* Prevent resizing on smaller screens */
  }
}
</style>