import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import MyButton from 'primevue/button';
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import TableColumn from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
import TableRow from 'primevue/row';  
import DiviDer from 'primevue/divider';

import 'primevue/resources/themes/md-dark-deeppurple/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const app = createApp(App);

app.use(PrimeVue);
app.use(router);

app.component('MyButton', MyButton);
app.component('InputText', InputText);
app.component('DataTable', DataTable);
app.component('TableColumn', TableColumn);
app.component('ColumnGroup', ColumnGroup);
app.component('TableRow', TableRow);
app.component('DiviDer', DiviDer);

app.mount('#app');