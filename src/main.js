import { createApp } from 'vue'

import App from './App'
import components from '@/components/componentList';
import router from '@/router/router';
import store from '@/store/globalStore';

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(router)
    .use(store)
    .mount('#app')
