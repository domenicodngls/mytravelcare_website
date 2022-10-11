import {SectionType} from "../common/customType";
import regioneLombardia from "../icons/regioneLombardia.png";
import logoFerb from "../icons/logoFerb.svg";
import logoAria from "../icons/logoAria.png";
import logoUnibg from "../icons/logoUnibg.svg";
import logoEasytech from "../icons/logoEasytech.svg";
import report from "../images/report.png";
import home from "../images/homePage.svg";
import symptoms from "../images/symptoms.jpg";
import profile from "../images/profile.jpg";
import application from "../images/application.png";

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
                label: "profile",
                imgPath: profile,
                title: "Dati Sanitari",
                description: 'La compilazione della sezione profilo permette al paziente di inserire:',
                descriptions:[
                    '- I propri dati personali (nome, peso, data di nascita, stato di gravidanza, fumatore), gli ultimi viaggi effettuati (destinazione e date);',
                    '- le proprie allergie (con possibilità di selezionare per esempio allergie a animali, cibi, piante, polvere, farmaci, materiali);',
                    '- le patologie da cui è affetto (identificabili per nome, così come per parte del corpo, apparato o organo interessati);',
                    '- interventi a cui è stato sottoposto (anch’essi identificabili per nome, così come per parte del corpo, apparato o organo interessati);',
                    '- i farmaci in uso (identificabili tramite nome o principio attivo, per cui è possibile specificare anche dosaggio, frequenza e modalità di assunzione).']

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
                description: 'Il report presenta una sintesi delle informazioni fornite dal paziente. Nel caso in cui il paziente non abbia compilato alcune voci quali allergie, patologie e interventi, l’app verifica che la mancanza di dati sia intenzionale tramite l’opzione “Non sono stati inseriti allergie/patologie/interventi”.' +
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
                label: "application",
                imgPath: application,
                title: "",
                customDescriptions: [
                    {
                        title: "Il Progetto",
                        description: "L’obiettivo della sperimentazione è valutare le potenzialità di digitalizzazione degli accessi al pronto soccorso tramite l’installazione di totem e l’utilizzo di applicazione mobile collegata.",
                        color: "secondary"
                    },
                    {
                        title: "La sperimentazione",
                        description: "I totem saranno posizionati nelle zone accessi dei pronto soccorso e i codici minori (bianco/verde) ne faranno uso anche con il supporto di una figura specializzata e formata.",
                        color: "secondary"
                    },
                    {
                        title: "",
                        description: "",
                        anchor: {
                            href: " https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.uneba.org/wp-content/uploads/2022/05/dgr-6387-16_5_2022-1.pdf&ved=2ahUKEwigqv_6t9P6AhWFPewKHSINAtAQFnoECBEQAQ&usg=AOvVaw07RjgJuwCxOqLu5-MXSxh_",
                            name: "Leggi qui la Delibera Regionale XI/6387 del 16/05/2022"
                        },
                        color: "primary"
                    }
                ]
            }],
        color: "secondary"
    },
    {
        id: "about",
        title: "Attori Coinvolti",
        images: [
            {
                path: regioneLombardia,
                ref: "https://www.regione.lombardia.it/wps/portal/istituzionale/"
            },
            {
                path: logoFerb,
                ref: "https://www.ferbonlus.com/"
            },
            {
                path: logoUnibg,
                ref: "https://www.unibg.it/"
            },
            {
                path: logoAria,
                ref: "https://www.ariaspa.it/"
            }
        ],
        color: "secondary"
    }
]


//ferb, unibg, regione,   Aria spa