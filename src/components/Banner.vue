<template>
<div class="Banner">
    <div class="content">
        <p class="main">Welcome to Geeks UI<br /> Learning Application</p>
        <p class="last">Hand-picked Instructor and expertly crafted<br /> courses, designed for the modern students and<br /> entrepreneur.</p>
        <img src="../assets/tem.jpg" alt="">
    </div>
    <a href="#" class="btn">Browse Course</a>
</div>
<!-- achivement -->
<div class="achivement">
    <div class="list">
        <!-- <img src="../assets/tem.jpg"> -->
        <div class="listOne">
            <!-- <div class="box"></div> -->
            <p class="main">30,000 online courses</p>
            <p class="last">Enjoy a variety of fresh topics</p>
        </div>
        <div class="listTwo">
            <!-- <div class="box"></div> -->
            <p class="main">Expert instruction</p>
            <p class="last">Find the right instructor for you</p>
        </div>
        <div class="listThree">
            <!-- <div class="box"></div> -->
            <p class="main">Lifetime access</p>
            <p class="last">Learn on your schedule</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Banner'
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.achivement {
    background: #9c0db8;
}

.achivement .list {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    width: 80%;
    height: 80px;
    /* border: 1px dashed black; */
    margin: auto;
}

.achivement .list .listOne {
    width: 20%;
}

.achivement .list .listOne .main {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
}

.achivement .list .listOne .last {
    color: #fff;
    font-size: 14px;
}

.achivement .list .listTwo .main {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
}

.achivement .list .listTwo .last {
    color: #fff;
    font-size: 14px;
}

.achivement .list .listThree .main {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
}

.achivement .list .listThree .last {
    color: #fff;
    font-size: 14px;
}

/* banner starts */
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
    padding: 25px 0 0 2px;
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
    margin: -240px 0 0 640px;
    border: 2px solid #9c0db8;
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
