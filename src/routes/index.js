import {createRouter, createWebHistory} from 'vue-router'

import HomePage from "./../components/Homepage.vue"
import Events from "./../components/Events.vue"
import Courses from "./../components/Courses.vue"
import ContactUs from "./../components/ContactUs.vue"
import Partnerships from "./../components/Partnerships.vue"
import AboutUs from "./../components/AboutUs.vue"
import Alumini from "./../components/Alumini.vue"
import Library from "./../components/Library.vue"

const routes = [
    { 
    path:'/',
    name: 'homepage',
    component: HomePage,
     }, 
     { 
     path:'/events',
     name: 'events',
    component: Events,
    }, 
                
    { 
    path:'/aboutUs',
    name: 'aboutUs',
    component: AboutUs,
    }, 
            
    { 
    path:'/alumini',
    name: 'alumini',
    component: Alumini,
    },
            
    { 
    path:'/contactUs',
    name: 'contactUs',
    component: ContactUs,
    },  
            
    { 
    path:'/partnerships',
    name: 'partnerships',
    component: Partnerships,
    }, 

    { 
    path:'/courses',
    name: 'courses',
    component: Courses,
    },
                
    { 
    path:'/library',
    name: 'library',
    component: Library,
    }
                      
    ]     
       
    const router = createRouter ({
        history: createWebHistory(),
        routes,
    })

    export default router 
    
    
