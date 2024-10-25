import { createApp } from 'vue'
import App from './App.vue'
//import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './router'
import '@mdi/font/css/materialdesignicons.css';


import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
      iconfont: 'mdi', // default - only for display purposes
    }
  })

createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')