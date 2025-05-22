<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="progress-wrap">
          <h5>{{titleSkill}}</h5>
          <div class="progress">
            <div class="progress-bar" style="width: 90%"><span>{{percentageSkill}}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script> 
    export default{
        name: 'SkillsResume',
        props:{
            titleSkill:{
                type: String,
                required: true
            },
            percentageSkill:{
                type: Number,
                required: true
            }
        }
    }
</script>
<style scoped>

.progress-wrap {
    width: 100%;
    margin-bottom: 30px;
}
.progress {
    height: 6px;
    background: #e6e6e6;
    overflow: visible;
}
.progress-bar {
    background: #90acd1;
    position: relative;
    font-size: 12px;
    line-height: 1.2;
    color: #000000;
    font-weight: 600;
    position: relative;
    overflow: visible;
    border-radius: 2px;
}

</style>