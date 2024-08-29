<template>
    <section class="sky-blue">
        <div class="container" >
            <div class="row ">
                <div class="section-title p-2 m-2">
                    <h2 class="about-heading">Projects</h2>
                </div>
            </div>
            <div class="row">
                <template v-for="(item, index) in projects" :key="index">
                    <Card 
                        :title="item.title"
                        :description="item.description"
                        :url_image="item.url_image"
                        :url_live="item.url_live"
                        :url_github="item.url_github"
                        :technologies="item.technologies"
                    ></Card>
                </template>
               
                
            </div>
        </div>
    </section>
</template>
<script>
import Card from './cards/Card.vue';
import Data from '@/assets/data.json';
export default {
    components: {
        Card
    },
    data(){
        return {
            projects: Data.projects
        }
    },
    methods: {
        getProjects(){
            console.log(this.projects);
            return this.projects;
        }
    },
    created(){
        this.getProjects();
    }

}
    
</script>
<style scoped>
.sky-blue{
    background: #f9f9ff;
    text-align: left;
    margin: 100px 0;
}

.section-title{
    margin-top: 20px;
    padding-top:20px;
    text-align: center;
}
.section-title h2{
    position: relative;
    font-weight: 700;
    color: #222;
    margin-bottom: 70px;
    font-size: 45px;
    line-height: 44px;
}
.section-title h2::before {
    content: '';
    position: absolute;
    bottom: -30px; /* Adjust as necessary */
    left: 0;
    width: 70px; /* Adjust the length of the line */
    height: 2px;
    background-color: #ff6347; /* Adjust color as necessary */
     
}

</style>