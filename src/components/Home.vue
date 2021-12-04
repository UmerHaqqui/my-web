<template>
<div>

    post [Add New]

    <table border="1">
        <tr v-for="(p, index) in posts" :key="index">
            <td> {{p.id}} </td>
            <td> <span v-html="p.title.rendered"></span> </td>
            <td> <a :href="'/post/'+p.id"> View</a> | Edit | Delete </td>
        </tr>
    </table>

    <!-- <Banner />
   <Body />  -->

</div>
</template>

<script>
import axios from 'axios';
// import Banner from './Banner.vue'
// import Body from './Body.vue' 
export default {
    name: 'Home',
    components: {
        // Banner,
        // Body, 
    },
    data() {
        return {
            posts: []
        }
    },
    methods: {
        async getPostsData() {
            let resp = await axios.get('http://localhost/wordpress/wp-json/wp/v2/posts')

            this.posts = resp.data;

            console.log(this.posts)
        }
    },
    mounted() {
        this.getPostsData()
    }

}
</script>

<style >
table{
    margin-top: 50px;
    }
</style>