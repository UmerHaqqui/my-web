<template>
<div class="body">
    <h2>Recommanded For You</h2>
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
            <img src="../assets/node.png" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">Node Js Course</h5>
                <p class="card-text">Intermediate.</p>
                <a href="#" class="btn">View Course</a>
            </div>
        </div>
    </div>
</div>

<!-- second -->
<div class="bodyTwo">
    <h2>Most Popular</h2>
    <div class="inner">
        <div class="card" style="width: 18rem;">
            <img src="../assets/angular.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">Angular Course</h5>
                <p class="card-text">Begginer.</p>
                <a href="#" class="btn">View Course</a>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <img src="../assets/React.png" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">React Course</h5>
                <p class="card-text">Begginer.</p>
                <a href="#" class="btn">View Course</a>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <img src="../assets/boot.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">Bootstrap Course</h5>
                <p class="card-text">Intermediate.</p>
                <a href="#" class="btn">View Course</a>
            </div>
        </div>
    </div>
</div>

<!-- third -->
<div class="bodyThree">
    <h2>Trending</h2>
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
            <img src="../assets/word.png" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">Wordpress Course</h5>
                <p class="card-text">Begginer.</p>
                <a href="#" class="btn">View Course</a>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <img src="../assets/php.png" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">PHP Course</h5>
                <p class="card-text">Intermediate.</p>
                <a href="#" class="btn">View Course</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Body'
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.body {
    background: #fafafa;
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

/* bodyTwo */
.bodyThree {
    background: #fafafa;
}

.bodyThree h2 {
    margin: 0px 0 20px 10%;
    padding-top: 80px;
    color: rgb(76 76 76);
}

.bodyThree .inner {
    width: 80%;
    margin: auto;
    padding-bottom: 80px;
    display: flex;
    justify-content: space-between;
}

.bodyThree .inner .card img {
    height: 200px;
    background-size: cover;
}

.bodyThree .inner .card .card-body .btn {
    height: 50px;
    padding: 12px 20px 0 20px;
    background: #9c0db8;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    margin: 20px 0 10px 20px;
}

.bodyThree .inner .card .card-body h5 {
    margin: 20px 10px 0 20px;
    color: rgb(76 76 76);
    font-weight: 700;
}

.bodyThree .inner .card .card-body p {
    margin: 0px 10px 0 20px;
    color: rgb(76 76 76);
    font-weight: 400;
}

/* body third */
.bodyTwo {
    background: #f0efef;
}

.bodyTwo h2 {
    margin: 0px 0 20px 10%;
    padding-top: 80px;
    color: rgb(76 76 76);
}

.bodyTwo .inner {
    width: 80%;
    margin: auto;
    padding-bottom: 80px;
    display: flex;
    justify-content: space-between;
}

.bodyTwo .inner .card img {
    height: 200px;
    background-size: cover;
}

.bodyTwo .inner .card .card-body .btn {
    height: 50px;
    padding: 12px 20px 0 20px;
    background: #9c0db8;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    margin: 20px 0 10px 20px;
}

.bodyTwo .inner .card .card-body h5 {
    margin: 20px 10px 0 20px;
    color: rgb(76 76 76);
    font-weight: 700;
}

.bodyTwo .inner .card .card-body p {
    margin: 0px 10px 0 20px;
    color: rgb(76 76 76);
    font-weight: 400;
}
</style>
