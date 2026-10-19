const { createApp, ref } = Vue;

const app = createApp({
    template: `
                <h1>Contactos</h1>
                <input type="text" placeholder="Nombre del contacto..." v-model="contact">
                <input type="submit" value="Añadir" id="contact" @click="addContact"/>
                <p v-if="isContactsEmpty">No hay contactos en la lista</p>
                <ul v-if="!isContactsEmpty">
                    <li v-for="contact of contacts">{{contact}}</li>
                </ul>
                <p v-if="!isContactsEmpty">Total de registros: {{contacts.length}}</p>
                `,
    setup() {
        const contacts = ref([]);
        const contact = ref('');
        const isContactsEmpty = ref(true);
        const addContact = () => {
            contacts.value.push(contact.value);
            isContactsEmpty.value = false;
            contact.value = '';
        };

        return {
            contacts,
            contact,
            isContactsEmpty,
            addContact,
        };
    },
});

app.mount('#vueApp');
