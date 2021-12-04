<template>
<div class="body">
    <h2>Exclusive For You</h2>

    <div class="inner">
        <div class="card" style="width: 18rem;">
            <img src="../assets/mern.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">Mern Stack Course</h5>
                <p class="card-text">Full Course.</p>
                <a href="#" class="btn">View Course</a>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <img src="../assets/front.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">Front-End Course</h5>
                <p class="card-text">Full Course.</p>
                <a href="#" class="btn">View Course</a>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <img src="../assets/frame.png" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">JS FrameWorks Course</h5>
                <p class="card-text">Intermediate.</p>
                <a href="#" class="btn">View Course</a>
            </div>
        </div>
    </div>

    <h2>New Upload</h2>
    <div class="inner">
        <div class="card" style="width: 18rem;">
            <img src="../assets/studio.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">Android Studio Course</h5>
                <p class="card-text">Advance.</p>
                <a href="#" class="btn">View Course</a>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <img src="../assets/flutter.png" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">Flutter Course</h5>
                <p class="card-text">Begginer.</p>
                <a href="#" class="btn">View Course</a>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <img src="../assets/back.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">Back-End Course</h5>
                <p class="card-text">Intermediate.</p>
                <a href="#" class="btn">View Course</a>
            </div>
        </div>
    </div>

    <h2>Regular Courses</h2>
    <div class="inner">
        <div class="card" style="width: 18rem;">
            <img src="../assets/word.png" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">Wordpress Course</h5>
                <p class="card-text">Begginer.</p>
                <a href="#" class="btn">View Course</a>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <img src="../assets/boot.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">Bootstrap Course</h5>
                <p class="card-text">Complete.</p>
                <a href="#" class="btn">View Course</a>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <img src="../assets/html.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">HTML Course</h5>
                <p class="card-text">Complete.</p>
                <a href="#" class="btn">View Course</a>
            </div>
        </div>
    </div>

    <div class="inner">
        <div class="card" style="width: 18rem;">
            <img src="../assets/js.png" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">Javascript Course</h5>
                <p class="card-text">Advance.</p>
                <a href="#" class="btn">View Course</a>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <img src="../assets/j.png" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">Jquery Course</h5>
                <p class="card-text">Advance.</p>
                <a href="#" class="btn">View Course</a>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <img src="../assets/node.png" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">Node Js Course</h5>
                <p class="card-text">Intermediate.</p>
                <a href="#" class="btn">View Course</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'CourseBody',
}
</script>

<style scoped>
.body {
    background: #f0efef;
    margin-top: 100px;
}

.body h2 {
    margin: 0px 0 20px 10%;
    padding-top: 80px;
    color: rgb(76 76 76);
}

.body .inner {
    width: 80%;
    margin: auto;
    padding-bottom: 80px;
    display: flex;
    justify-content: space-between;
}

.body .inner .card img {
    height: 200px;
    background-size: cover;
}

.body .inner .card .card-body .btn {
    height: 50px;
    padding: 12px 20px 0 20px;
    background: #9c0db8;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    margin: 20px 0 10px 20px;
}

.body .inner .card .card-body h5 {
    margin: 20px 10px 0 20px;
    color: rgb(76 76 76);
    font-weight: 700;
}

.body .inner .card .card-body p {
    margin: 0px 10px 0 20px;
    color: rgb(76 76 76);
    font-weight: 400;
}
</style>
