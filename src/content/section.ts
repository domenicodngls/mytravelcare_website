import {SectionType} from "../common/customType";
import regioneLombardia from "../icons/regioneLombardia.png";
import logoFerb from "../icons/logoFerb.svg";
import report from "../images/report.png";
import home from "../images/homePage.svg";
import symptoms from "../images/symptoms.jpg";
import Contact from "../components/section/Contact";

export const sectionList: SectionType[] = [
    {
        id: "functionality",
        title: "Funzionalità Applicativo",
        description: "Carica foto e profilo dei tuoi farmaci per comunicare più facilmente.",
        details: [
            {
            label: "homePage",
            imgPath: home,
            title: "Home Page MTC",
            description: "Il paziente ha la possibilità di selezionare la propria lingua. Il paziente, tramite la sezione profilo, ha modo di compilare la propria intera storia clinica direttamente durante la procedura di triage così come di indicare con precisione i propri sintomi nella sezione apposita. E il medico la avrà a disposizione prima della visita. \n" +
                "Al termine della compilazione verrà generato un report, un documento di sintesi di quanto comunicato dal paziente, disponibile nella lingua selezionata dal paziente e in italiano a vantaggio del medico che lo processerà. Questo report verrà inviato direttamente al sistema informatico dell’ospedale.\n",
        },
            {
                label: "report",
                imgPath: report,
                title: "Dati Sanitari",
                description: 'La compilazione della sezione profilo permette al paziente di inserire: '+
                   ' -	i propri dati personali (nome, peso, data di nascita, stato di gravidanza, fumatore), gli ultimi viaggi effettuati (destinazione e date);'+
'-	le proprie allergie (con possibilità di selezionare per esempio allergie a animali, cibi, piante, polvere, farmaci, materiali);'+
'-	le patologie da cui è affetto (identificabili per nome, così come per parte del corpo, apparato o organo interessati);'+
'-	interventi a cui è stato sottoposto (anch’essi identificabili per nome, così come per parte del corpo, apparato o organo interessati);'+
'-	i farmaci in uso (identificabili tramite nome o principio attivo, per cui è possibile specificare anche dosaggio, frequenza e modalità di assunzione).'

            },
            {
                label: "symptoms",
                imgPath: symptoms,
                title: "Sintomi",
                description: "Il paziente può indicare i propri sintomi e la loro intensità interagendo direttamente con l’avatar. Cliccando su una specifica parte del corpo, anteriore o posteriore, il paziente potrà selezionare sia sintomi molto comuni come prurito, gonfiore, dolore, febbre che sintomi più specifici. \n" +
                    "La sezione patologie e interventi presenta un’interfaccia molto simile. Rispettivamente le patologie di cui si soffre e gli interventi a cui si è stati sottoposti possono essere selezionati tramite avatar, da una lista completa di voci oppure da una lista che comprende patologie e interventi più comuni. \n"
            },
            {
                label: "report",
                imgPath: report,
                title: "Report",
                description: 'Il report presenta una sintesi delle informazioni fornite dal paziente. Nel caso in cui il paziente non abbia compilato alcune voci quali allergie, patologie e interventi, l’app verifica che la mancanza di dati sia intenzionale tramite l’opzione “Non sono stati inseriti allergie/patologie/interventi”.'+
                'Si genera dunque in automatico un file che il paziente deve validare e che solo allora verrà trasferito al medico. Tale documento si presenta divido in due colonne con la lingua selezionata dal paziente e la traduzione in italiano.'
            }],
        color: "secondary"
    },
    {
        id: "digitalization",
        title: "Sperimentazione Regionale",
        description: "Memorizza i tuoi dati personali, le tue patologie, gli interventi eseguiti, le vaccinazioni e i farmaci in uso.",
        details: [
            {
                label: "profilo.jpeg",
                imgPath: report,
                title: "L'Applicativo",
                description:
                    "MyTravelCare è un progetto sperimentale per digitalizzare i percorsi di accesso al pronto soccorso.\n" +
                    "Attraverso il totem, che parla 8 lingue, si raccolgono informazioni sui sintomi, sui farmaci in\n" +
                    "assunzione, sulle eventuali allergie, sullo storico delle proprie malattie, sugli ultimi viaggi effettuati,\n" +
                    "permettendo di facilitare l&#39;interazione anche con pazienti stranieri.\n\n" +

                    "Per un pronto soccorso più smart, agile e orientato al futuro.\n" +
                    "L&#39;obiettivo è valutare le potenzialità di digitalizzazione degli accessi al pronto soccorso tramite\n" +
                    "l&#39;installazione del totem e l&#39;utilizzo di un&#39;applicazione mobile collegata.\n" +
                    "Scaricala QUI e inserisci le informazioni richieste.\n\n" +
                    "Come si attua la sperimentazione?\n" +
                    "I totem sono posizionati nelle zone di accesso del pronto soccorso dei codici minori (bianco/verde)\n" +
                    "di otto ASST Lombarde e gli utenti ne faranno uso con il supporto di una figura specializzata e\n" +
                    "formata, presente in alcune ore della giornata.\n\n"
            }],
        color: "secondary"
    },
    {
        id: "about",
        title: "Chi Siamo",
        images: [
            {path: regioneLombardia, ref: "https://www.regione.lombardia.it/wps/portal/istituzionale/"}, {path:logoFerb, ref: "https://www.ferbonlus.com/"}
        ],
        color: "secondary"
    },
    {
        id: "contact",
        title: "Contatti",
        color: "secondary",
        component: Contact
    }
]


//ferb, unibg, regione,   Aria spa