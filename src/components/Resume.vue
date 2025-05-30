<template>
    <section id="resume" class="my-3 py-3">
        <div class="container">
            <di class="row" >
                <div class="col d-flex justify-content-center p-1 m-1 content">
                    <h3 class="fw-bold">Resume</h3>
                </div>
            </di>
            <div class="row">
                <div class="col-3 ">
                    <ul>
                        <li>
                            <a 
                                href="#"
                                :class="{active: activeSection === 'Education' }"
                                @click.prevent="setActiveSection('Education')"
                            >
                                Education
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#"
                                :class="{active: activeSection === 'Experience' }"
                                @click.prevent="setActiveSection('Experience')"
                                >
                                Experience
                            </a> 
                        </li>
                        <li>
                            <a 
                                href="#" 
                                :class="{active: activeSection === 'Skills'}" 
                                @click.prevent="setActiveSection('Skills')"
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#"
                                :class="{active: activeSection === 'Awards'}"
                                @click.prevent="setActiveSection('Awards')"
                            >
                                Awards
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-9">
                    <h5 class="mb-3 pb-3 fw-bold">{{ activeSection }}</h5>
                    
                    <div v-if="activeSection==='Skills'">
                        <SkillsResume
                            v-for="(data, index) in dataSkills"
                            :key="index"
                            :titleSkill="data.title"
                            :percentageSkill="data.percentageSkill"
                        ></SkillsResume>
                    </div>
                    <div v-else>
                        <SingleResume 
                            v-for="(data, index) in dataList" 
                            :key="index"
                            :icon="data.icon"
                            :date="data.date"
                            :title="data.title"
                            :place="data.place"
                            :description="data.description"
                        ></SingleResume>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
</template>
<script>
import SingleResume from "@/components/cards/SingleResume.vue";
import SkillsResume from "./cards/SkillsResume.vue";
import ResumeData from "@/assets/resume-data.json"
export default {
    name: "Resume",
    components: {
        SingleResume,
        SkillsResume,
    },
    data(){
        const icon = "graduation-cap";
        const date = new Date();
        const title = "";
        const place = "";
        const description = "";
        const activeSection = "Education";
        const dataList = [];
        const dataSkills = [];
        return{
            icon,
            date,
            title,
            place,
            description,
            activeSection,
            dataList,
            dataSkills,
            data: ResumeData, 
        }
        
    },
    methods: {
        setActiveSection(section) {
            this.activeSection = section;
            this.getData(section);
        },
        getData(section){
            if(section.toLowerCase() === 'skills'){
                this.dataSkills = this.data[section.toLowerCase()];
            }
            else{
                this.dataList = this.data[section.toLowerCase()];
            }
        }
    },
    created(){
        this.getData(this.activeSection);
    }
};
</script>
<style scoped>
.content h3 {
  color: #e45451;
  margin-bottom: 30px;
  font-size: 2.5rem;
  font-weight: 500;
  position: relative;
  display: inline-block;
}
.content h3::after {
  content: "";
  position: absolute;
  width: 170px;
  height: 2px;
  background: #e45451;
  left: 0;
  bottom: 0px;
}
ul {
  list-style: none; /* Remove bullets */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margin */
}

ul li {
  margin-bottom: 10px; /* Optional: Add spacing between list items */
}

a {
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit text color from parent */
  font-weight: 600; /* Optional: Make the text bold */
  position: relative;
}
a.active{
    color: rgb(144, 172, 209); /* Change color for active link */
    margin-left: 20px;
}

a:hover {
  text-decoration: none; /* Ensure no underline on hover */
  color: rgb(144, 172, 209);
}
a.active::before {
    position: absolute;
    top: 50%;
    left: -24px;
    width: 20px;
    height: 2px;
    content: "";
    transform: translateY(-50%);
    background: rgb(144, 172, 209);
}
</style>