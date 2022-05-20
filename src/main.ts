import {createApp} from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import axios from 'axios';

axios.defaults.validateStatus = (): boolean => true;

createApp(App).use(Antd).mount('#app');