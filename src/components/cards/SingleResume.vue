<template >
    <div class="container bg-light p-3 my-3 rounded-3 shadow-sm">
        <div class="row">
            <div class="col-2">
                <div class="d-flex justify-content-center align-items-center mt-2">
                    <font-awesome-icon class="icon" :icon="icon" />
                </div>
            </div>
            <div class="col-10">
                <p> {{ date }} </p>
                <h5 class="fw-bold"> {{ title }}</h5>
                <small> {{ place }}</small>
                <p>{{ description }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: "SingleResume",
    props: {
        icon: {
            type: String,
            required: true,
        },
        date:{
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        place:{
            type: String,
            required: true,
        },
        description:{
            type:String,
            required: true,
        }
    },
    data(){
        
    }
}
</script>
<style scoped>
.icon {
  font-size: 30px;
  background: rgba(144, 172, 209, 0.2);
  width: 40px;
  height: 40px;
  text-align: center;
  padding: 16px;
  border-radius: 50px;
  display: inline-block;
  color: #222222;
}
</style>