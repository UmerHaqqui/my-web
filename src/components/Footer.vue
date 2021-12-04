<template>
<div>
    <div class="inner">
        <p class="main">© 2021 Geeks. All Rights Reserved.</p>
        <p class="last">Created By Umer Hqqqui</p>
    </div>
</div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

div {
    background: #9c0db8;
    color: #fff;
    
}

div .inner{
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width: 96%;
    font-weight: 500;
}
</style>
