import { createI18n } from "vue-i18n";
import Projects from "./components/Projects.vue";

const messages = {
    en: {
        navbar:{
            home: "Home",
            about: "About",
            services: "Services",
            projects: "Projects",
            resume: 'resume',
            contact: "Contact",
        },
        banner: {
            presentation: "Hello"
        },
    },
    es:{
        navbar:{
            home: "Inicio",
            about: "Acerca de",
            services: "Servicios",
            projects: "Proyectos",
            resume: 'Resumen',
            contact: "Contacto",
        },
        banner: {
            presentation: "Hola!"
        },
    }
};

const i18n = createI18n({
    locale: navigator.language.startsWith('es') ? 'es': 'en',
    fallbackLocale: 'en',
    messages,
});

export default i18n;