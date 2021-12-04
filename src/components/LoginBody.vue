<template>
<div class="body">
    <div class="main">
        <div class="Text">
            <h1>Create Account</h1>
        </div>
        <div class="form">
            <input type="text" placeholder="Enter Your Name"><br />
            <input type="text" placeholder="Enter Your Email"><br />
            <input type="password" placeholder="Enter Your Password"><br />
            <input type="password" placeholder="Confirm Your Password"><br />
            <input type="number" placeholder="Enter Ypur Number"><br />
        </div>
        <div class="btn">Sign Up</div>
    </div>
</div>

<div class="info">
    <h2>Account Login</h2>
    <input type="email" placeholder="Enter Your Email">
    <input type="password" placeholder="Enter Your Password"><br/>
    <div class="btn">Sign Up</div>

</div>
</template>

<script>
export default {
    name: 'LoginBody'
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.body {
    width: 60%;
    height: 800px;
    margin: auto;
    overflow: hidden;
    /* border: 1px dashed black; */
}

.body .main {
    /* float: left; */
    margin-top: 150px;
    width: 50%;
    /* border: 1px solid black; */
}

.body .main h1 {
    text-align: left;
    font-weight: 700;
    margin: 50px 0 0 33px;
    color: rgb(76 76 76);
}

.body .main p {
    text-align: center;
    font-size: 16px;
    color: #727272;
}

.body .main .form {
    margin-top: 50px;

}

.body .main .form input {
    width: 80%;
    height: 50px;
    margin-left: 9%;
    margin-bottom: 10px;
    padding-left: 20px;
    border: none;
    border-radius: 8px;
    box-shadow: 3px 0px 20px inset rgb(228, 228, 228);
}

.body .main .form textarea {
    margin-left: 9%;
    margin-top: 10px;
    padding: 20px;
    width: 80%;
    border: none;
    border-radius: 8px;
    box-shadow: 3px 0px 20px inset rgb(228, 228, 228);
}

.body .main .btn {
    margin: 40px 0 40px 9%;
    height: 50px;
    padding: 12px 20px 0 20px;
    background: #9c0db8;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
}
.body .main .btn:hover{
    background: #cf70e2;
}

/* info */
.info {
    position: absolute;
    top: 200px;
    right: 20%;
    width: 27%;
    height: 400px;
    background: #9c0db8;
}

h2 {
    color: #fff;
    padding: 80px 0 50px;
    margin: 0 0 0 30px;
    text-align: left;
    font-weight: 700;
}

.info input {
    color: #fff;
    width: 80%;
    margin: 0 0 10px 30px;
    height: 40px;
    background: #9c0db8;
    border:2px solid  #fff;
    border-radius: 8px;
}
.info ::placeholder{
    color: #fff;
    padding: 15px;
}
.info .btn{
    /* height: 50px; */
    border: 3px solid #fff;
    margin: 20px 0 0 32px;
    padding: 10px 50px 10px 50px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
}
.info .btn:hover{
    background: #cf70e2;
}
</style>
