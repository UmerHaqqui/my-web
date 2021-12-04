<template> 
    <div>
        single posts
        {{post.id}}
        <hr>
        <span v-html="post.date"></span> 
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'SinglePost',
    data() {
        return {
            post: {}
        }
    },
    created() {
        console.log( this.$route.params.id )
    },
    methods: {
        async getSinglPost( _id ) {
            console.log(_id)
            let resp = await axios.get('https://localhost/wordpress/wp-json/wp/v2/posts/'+ _id)
            this.post = resp.data
            console.log(resp)
        }
    },
    mounted() {
        this.getSinglPost( this.$route.params.id )
    }
}
</script>