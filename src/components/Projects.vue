<template>
    <section id="projects" class="sky-blue">
        <div class="container">
            <div class="row ">
                <div class="col-12 d-flex justify-content-center section-title">
                    <h3>My Project</h3>   
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="filters">
                        <ul>
                            <li>
                                <a 
                                    href="#!" 
                                    :class="{active: activeCategory === 'all' }"  
                                    @click="setActiveCategory('all')"
                                >
                                    All
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#!" 
                                    :class="{active: activeCategory === 'web'}"
                                    @click="setActiveCategory('web')"
                                >
                                    Web
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#!"
                                    :class="{active: activeCategory === 'mobile'}"
                                    @click="setActiveCategory('mobile')" 
                                >
                                    Mobile
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#!" 
                                    :class="{active: activeCategory === 'design'}"
                                    @click="setActiveCategory('design')"
                                >
                                    Design
                                </a>
                            </li>
                        </ul>
                    </div>
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
            projects: Data.projects,
            activeCategory: 'all',  
        }
    },
    methods: {
        setActiveCategory(category){
            this.activeCategory = category;
            this.getProjects(category);
        },
        getProjects(category){
            if(category === 'all'){
                this.projects = Data.projects;
            }else{
                this.projects = Data.projects.filter(project => project.category === category);
            }
        }
    },
    created(){
        this.getProjects(this.activeCategory);  
    }

}
    
</script>
<style scoped>
.sky-blue{
    background: #f9f9ff;
    padding-bottom: 50px;
}

.section-title h3{
  margin-bottom: 30px;
  font-size: 2.5rem;
  font-weight: 700;
  position: relative;
  display: inline-block;
}
.section-title h3::after {
  content: "";
  position: absolute;
  width: 200px;
  height: 2px;
  background: #e45451;
  left: 0;
  bottom: -2px;
}
.section-title h2{
    position: relative;
    font-weight: 700;
    color: #222;
    margin-bottom: 70px;
    font-size: 45px;
    line-height: 44px;
}
.filters ul{
    margin-bottom: 30px;
}
.filters ul li {
    display: inline-block;
    margin-right: 20px;
}
.filters ul li a {
    text-decoration: none;
    color: #222;
}
.filters ul li a.active {
    color: #e45451;
    font-weight: 700;
}
.filters ul li a:hover {
    font-weight: 700;
}


</style>