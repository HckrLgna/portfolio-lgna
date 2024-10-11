<template>
  <div class="col-lg-4 col-md-6 col-sm-6 mt-5 mb-3">
    <div class="single-project">
        <div class="img-container">
            <img :src=url_image alt="project" />
        </div>
      <div class="px-3">
        <h3 style="color: #16805E;">{{title}}</h3>
        <p >{{ description }}</p>
      </div>
      <div class="technologies ">
        <template v-for="(item, index) in technologies" :key="index">
          <span  :style="getStyle(item.color)">{{ item.name }}</span>
        </template>
        
      </div>
      <div class="px-2 py-2">
        <a :href=url_live class="btn">View</a>
        <a :href=url_github class="btn">Github</a>
      </div>
    </div>
  </div>
   
</template>
<script>
  export default{
    name:'Card',
    props:{
        title: {
          type: String,
          default: 'Project Title',
          required: true

        },
        description:{
          type: String,
          default: 'Project Description',
        },
        url_image:{
          type: String,
          default: 'https://via.placeholder.com/50',
        },
        url_live:{
          type: String,
          default: '#',
        },
        url_github:{
          type: String,
          default: '#',
        },
        technologies:{
          type: Array,
          required: true,
        }
        
    },
    methods:{
      getStyle(color){
        return `font-size:11px; background-color: ${color}; border-radius: 5px; padding: 2px 12px 2px 12px; color: white; margin: 0 10px 0 10px;`
      }
    }

  }
</script>

<style scoped>
.img-container {  
    background: #1212ca;
    width: 280px;
    height: 100%;
     margin-inline: auto;
     position: relative;
     top: -40px;
}
.img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.single-project {
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 0px 40px 0px rgba(85, 128, 255, 0.2);
}
.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.technologies span {
  display: inline-block;
  padding: 5px 10px;
  margin: 2px;
  border-radius: 5px;
  background-color: #f0f0f0;
}
</style>
