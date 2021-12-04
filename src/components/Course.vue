<template> 
    <div>
        <CourseBanner />
     <CourseBody />
    </div>
</template>

<script> 
import CourseBanner from './CourseBanner'
import CourseBody from './CourseBody' 
export default {
    name: 'Course',
    components: { 
        CourseBanner,
        CourseBody 
    }
}
</script>