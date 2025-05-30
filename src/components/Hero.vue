<template>
  <section id="home" class="customize-background">
    <div class="container mt-5 pt-5">
      <div class="row align-items-center">
        <div class="col-md-8 col-sm-12 col-lg-8 h-100 px-4">
          <div class="hero-caption px-5">
            <span class="subheading"> Hello, My name is </span>
            <h1 class="fw-bold">Angel Charca Bl.</h1>
            <div class="text"> I am  {{ displayedText }}</div>
            <p>
              Innovations and inspiration are the two powerfull tools that
              permit to construct full movil and web desing
            </p>
            <div class="row">
              <div class="col col-xs-12 col-sm-12 col-lg-5 col-xl-3">
                <Button
                  class="radius-btn"
                  :color="'secondary'"
                  :size="'md'"
                  :fullWidht="true"
                  @click="downloadFile"
                  >Download CV</Button
                >
              </div>
              <div class="col col-xs-12 col-sm-12 col-lg-5 col-xl-3 mt-2 mt-sm-2 mt-lg-0">
                <Button
                  class="radius-btn"
                  :color="'danger'"
                  :variant="'outline'"
                  :size="'sm'"
                  :fullWidht="true"
                  @click= "scrollToContact"
                  >Contact me</Button
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
          <img :src="require('@/assets/developer.png')" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Button from "@/components/buttons/MaterialButton.vue";

export default {
  name: "Hero",
  components: {
    Button,
  },
  data(){
    return {
        phrases:[
            "a Software Engineer",
            "a Full Stack Developer",  
            "a Mobile developer",
            "a UI/UX Designer",
        ],
        currentPhraseIndex: 0,
        displayedText: "",
        typingSpeed: 100,
        deletingSpeed: 50,
        pauseTime: 2000,    
    };

  },
  mounted(){
    this.startTypingAnimation();
  },
  beforeUnmount(){
    clearTimeout(this.typingTimeout);
  },
  methods: {
    startTypingAnimation(){
        let charIndex = 0;
        let isDeleting = false;
        const type = () =>{
        const currentPhrase = this.phrases[this.currentPhraseIndex];
            if (!isDeleting && charIndex < currentPhrase.length) {
          // Typing characters
          this.displayedText = currentPhrase.substring(0, charIndex + 1);
          charIndex++;
          this.typingTimeout = setTimeout(type, this.typingSpeed);
        } else if (isDeleting && charIndex > 0) {
          // Deleting characters
          this.displayedText = currentPhrase.substring(0, charIndex - 1);
          charIndex--;
          this.typingTimeout = setTimeout(type, this.deletingSpeed);
        } else if (!isDeleting && charIndex === currentPhrase.length) {
          // Pause before deleting
          isDeleting = true;
          this.typingTimeout = setTimeout(type, this.pauseTime);
        } else if (isDeleting && charIndex === 0) {
          // Move to the next phrase
          isDeleting = false;
          this.currentPhraseIndex =
            (this.currentPhraseIndex + 1) % this.phrases.length;
          this.typingTimeout = setTimeout(type, this.typingSpeed);
        }
        };
        type();
    },
    downloadFile(){
        const link = document.createElement("a");
        link.href = "/cv.pdf"; // Path to your CV file  
        link.download = "cv.pdf";
        link.click();
    },
    scrollToContact(){
      const section = document.getElementById('contact');
      if(section){
        section.scrollIntoView({behavior: 'smooth'});
      }
    }
  }

};
</script>
<style scoped>
.customize-background {
  background: #f9f9ff;
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

.subheading {
  font-size: 20px;
  font-weight: 700;
  color: #738aa7;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.text {
  margin-bottom: 10px;
  font-size: 25px;
  color: #e45451;
}
</style>
