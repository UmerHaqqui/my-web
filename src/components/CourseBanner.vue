<template>
<div class="Banner">
    <div class="content">
        <p class="main">We Offer Best Easy to Learn  <br />and Affordable Courses</p>
        <p class="last">Hand-picked Instructor and expertly crafted<br /> courses, designed for the modern students and<br /> entrepreneur.</p>
        <img src="../assets/idea.jpg" alt="">
    </div>
    <a href="#" class="btn">Create Your Accout</a>
</div>

</template>

<script>
export default {
    name: "CourseBanner",
};
</script>

<style scoped>
.Banner {
    width: 100%;
    height: 500px;
}

.Banner .content {
    width: 80%;
    height: 500px;
    margin: auto;
}

.Banner .content .main {
    padding: 150px 0 0 0;
    font-size: 34px;
    font-weight: 800;
    color: rgb(76 76 76);
}

.Banner .content .last {
    padding: 10px 0 0 2px;
    font-size: 18px;
    font-weight: 500;
    color: #727272;
}

.Banner .btn {
    height: 50px;
    padding: 12px 20px 0 20px;
    background: #9c0db8;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    margin: -200px 0 0 138px;
}

.Banner .btn:hover {
    background: #bd45d4;
}


.Banner .content img {
    width: 450px;
    height: 400px;
    margin: -260px 0 0 640px;
    /* border: 2px solid #9c0db8; */
    border-radius: 10px;
    transform: skewY(10deg);
}

.Banner .content img:hover {
    transform: scaleY(0.8);
    transition-duration: 0.4s;
    transition-timing-function: ease-in-out;
    width: 600px;
    margin: -300px 0 0 490px;
    border: none;
}
</style>
