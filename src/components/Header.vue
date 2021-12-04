<template>
<nav class="navbar fixed-top0 navbar-expand-lg navbar-dark ">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"><b>Geeks</b></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page">
                        <router-link to="/">Home</router-link>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">
                        <router-link to="/course">Courses</router-link>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">
                        <router-link to="/contact">Contact Us</router-link>
                    </a>
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link">
                        <router-link to="/payment">Payment</router-link>
                    </a>
                </li> -->
                <li class="nav-item">
                    <a class="nav-link">
                        <router-link to="/login">Accout</router-link>
                    </a>
                </li>
            </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-light" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.navbar {
    background: #9c0db8;
}

.navbar .navbar-brand {
    font-size: 28px;
    font-weight: 500;
    /* margin-left: 20px; */
}

.navbar ul {
    margin-left: 2px;
    margin-top: 6px;
}

.navbar ul li a {
    text-decoration: none;
    color: #fff;
    margin-left: 8px;
}

.navbar ul li:hover {
    font-weight: 600;
}
</style>
