<script>
import HomePage from "./Homepage.vue"
import Events from "./Events.vue"
import Courses from "./Courses.vue"
import AboutUs from "./AboutUs.vue"
import Alumini from "./Alumini.vue"
import Library from "./Library.vue"
import ContactUs from "./ContactUs.vue"
import Partnerships from "./Partnerships.vue"

</script>

<template> 
     <v-app-bar color='blue'>
            <v-btn to="/" color="white" dark >Home</v-btn>
        <div>
        <div>
        <v-btn to="/events" color="white" dark >Events</v-btn>
        </div>
   </div>  
   <div>
        <v-btn to="/contactus" color="white" dark >ContactUs</v-btn>
        </div>  
        <div>
        <v-btn to="/aboutus" color="white" dark >AboutUs</v-btn>
        </div> 
        <div>
        <v-btn to="/courses" color="white" dark >Courses</v-btn>
        </div>
        <div>
        <v-btn to="/library" color="white" dark >Library</v-btn>
        </div>
        <div>
        <v-btn to="/patnerships" color="white" dark >Partnerships</v-btn>
        </div>
        <div>
        <v-btn to="/alumini" color="white" dark >Alumini</v-btn>
        </div>
        </v-app-bar>
</template>