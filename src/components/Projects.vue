<template>
    <section class="sky-blue">
        <div class="container" >
            <div class="row align-items-center">
                <div class="section-title mb-50">
                    <h2 class="about-heading">Projects</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-project">
                        <img src="https://via.placeholder.com/350" alt="project" />
                        <div class="project-content">
                            <h3>Project Title</h3>
                            <p>Project Description</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-project">
                        <img src="https://via.placeholder.com/350" alt="project" />
                        <div class="project-content">
                            <h3>Project Title</h3>
                            <p>Project Description</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-project">
                        <img src="https://via.placeholder.com/350" alt="project" />
                        <div class="project-content">
                            <h3>Project Title</h3>
                            <p>Project Description</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scope>
.sky-blue{
    background: #f9f9ff;
    text-align: left;
    margin: 50px 0;
}
.about-heading {
    position: relative;
    font-size: 2em;
    font-weight: 700;
    color: #222;
    margin-bottom: 70px;
    font-size: 45px;
    line-height: 44px;
}

.about-heading::before {
    content: '';
    position: absolute;
    bottom: -30px; /* Adjust as necessary */
    left: 0;
    width: 70px; /* Adjust the length of the line */
    height: 2px;
    background-color: #ff6347; /* Adjust color as necessary */
}
.single-project {
    margin-bottom: 30px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 40px 0px rgba(85, 128, 255, 0.2);
}

</style>