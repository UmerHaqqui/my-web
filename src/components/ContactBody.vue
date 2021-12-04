<template>
<div class="body">
    <div class="main">
        <div class="Text">
            <h1>Got A Question?</h1>
            <p>We’re here to help and answer any question you<br /> might have. We look forward to hearing from you</p>
        </div>
        <div class="form">
            <input type="text" placeholder="Enter Your Name"><br />
            <input type="text" placeholder="Enter Your Email"><br />
            <input type="number" placeholder="Enter Ypur Number"><br />
            <textarea cols="40" rows="6" placeholder="Leave Your Message Here"></textarea>
        </div>
        <div class="btn">Submit Your Message</div>
    </div>
</div>
    <div class="info">
        <h2>Contact Information</h2>
        <p>Sleeknote ApS<br />
            Jens Baggesens Vej 90A, 8200 Aarhus
        </p>
        <p>+45 71 99 77 07</p>
        <p>mail@sleeknote.com</p>
    </div>

</template>

<script>
export default {
    name: 'ContactBody'
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
    text-align: center;
    font-weight: 700;
    margin-top: 50px;
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
}

/* info */
 .info {
    position: absolute;
    top: 200px;
    right: 20%;
    width: 27%;
    height: 350px;
    background: #9c0db8;
}

 h2 {
    color: #fff;
    padding: 80px 0 50px;
    text-align: center;
    font-weight: 700;
}

.info p {
    color: #fff;
    padding: 0px 0 0 60px;
    font-weight: 400;
}
</style>
