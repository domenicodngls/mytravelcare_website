import {SectionType} from "../common/customType";
import {theme} from "../theme/themeProvider";

export const sectionList: SectionType[] = [
    {
        id: "functionality",
        title: "Funzionalità",
        description: "Carica foto e profilo dei tuoi farmaci per comunicare più facilmente.",
        images: [{
            label: "farmacia.jpeg",
            imgPath: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
        }],
        detail: "Le tipologie di farmaci possono variare da paese a paese e questo potrebbe rendere difficile trovare il farmaco quivalente più adatto. Ti permettiamo di caricare immagini e dati dei farmaci che usi così da evitare incomprensioni quando sei in farmacia.",
        color: "primary"
    },
    {
        id: "digitalization",
        title: "Digitalizazione",
        description: "Memorizza i tuoi dati personali, le tue patologie, gli interventi eseguiti, le vaccinazioni e i farmaci in uso.",
        images: [
            {
                label: "profilo.jpeg",
                imgPath: "profilo.jpeg"
            }],
        detail: "Non è facile ricordarsi la propria storia clinica e questo è il motivo per cui diamo l’opportunità di memorizzarla. Una volta completato il profilo sarai in grado di portare la tua storia in viaggio o dovunque tu voglia. È essenziale per ogni dottore sapere le tue patologie, i tuoi interventi, le tue vaccinazioni ed i farmaci o i principi attivi che usi. Con questa sezione non hai bisogno di parlare, basta mostrare i dati salvati.",
        color: "primary"
    },
    {
        id: "about",
        title: "Chi Siamo",
        description: "Traduci istantaneamente tutte le tue informazioni in 8 lingue e genera una scheda di sintesi per il medico o il farmacista",
        images: [
            {
                label: "report.jpeg",
                imgPath: "report.jpeg"
            }],
        detail: "Una lingua straniera può far diventare tutto più complicato: dal comunicare un sintomo a spiegare le nostre allergie. Ti lasciamo immaginare la tua intera storia clinica, i tuoi sintomi ed il profilo dei tuoi farmaci tradotti subito in maniera sicura in diverse lingue, con l’opportunità di trovare il farmaco equivalente nel paese di riferimento. La sezione REPORT genera una scheda di sintesi del paziente, leggibile in 8 lingue ed anche condivisibile come PDF a tua discrezione. Inglese, Francese, Tedesco, Cinese, Russo, Arabo, Spagnolo ed Italiano sono ora disponibili ma nuove lingue arriveranno presto.",
        color: "secondary"
    },
    {
        id: "contact",
        title: "Contatti",
        description: "Definisci i tuoi sintomi",
        images: [
            {
                label: "sintomi.jpeg",
                imgPath: "sintomi.jpeg"
            }],
        detail: "A volte i sintomi sono difficili da descrivere anche se siamo madrelingua. Abbiamo creato un avatar dove puoi individuare i tuoi vari sintomi, classificarli per durata edintensità e mostrarli al dottore. La comunicazione sarà immediata e più facile, indipendentemente dalla lingua.",
        color: "secondary"
    }
]