import {SectionType} from "../common/customType";
import regioneLombardia from "../icons/regioneLombardia.png";
import logoFerb from "../icons/logoFerb.svg";
import report from "../images/report.jpeg";
import Contact from "../components/section/Contact";

export const sectionList: SectionType[] = [
    {
        id: "functionality",
        title: "Funzionalità",
        description: "Carica foto e profilo dei tuoi farmaci per comunicare più facilmente.",
        details: [
            {
            label: "farmacia.jpeg",
            imgPath: report,
            title: "Lorem Ipsum",
            shortDescription: "Lorem Ipsum",
            description: "\n" +
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet sollicitudin dolor. " +
                "Maecenas turpis dolor, porta sit amet odio id, fermentum vestibulum neque. Nam nec ante at arcu dictum blandit." +
                " Donec efficitur viverra pretium. Curabitur lobortis fringilla massa, sed accumsan tellus lacinia ut. " +
                "Donec venenatis nec dui bibendum feugiat. Suspendisse id vulputate tortor. Sed ac consequat erat. " +
                "Mauris maximus ac lacus ac fringilla. Aenean lorem enim, posuere ac aliquet a, gravida a libero. " +
                "Cras nibh ipsum, dictum ac gravida ut, venenatis sed magna."
        },
            {
                label: "farmacia.jpeg4",
                imgPath: report,
                title: "Lorem Ipsum",
                shortDescription: "Lorem Ipsum",
                description: "Integer velit nisl, vulputate sit amet dolor non, maximus porta elit. Vestibulum convallis justo nec tempor blandit. " +
                    "In scelerisque eu orci eu placerat. Cras posuere laoreet vehicula. Sed condimentum sem felis, non venenatis turpis ullamcorper id. " +
                    "Donec hendrerit libero arcu, non molestie massa eleifend ut. Aliquam viverra elit arcu, ut congue tortor facilisis at. " +
                    "Aenean eget ipsum a tellus viverra sagittis sit amet ac libero. Nulla ut eleifend tortor. " +
                    "Etiam eget ante quis elit bibendum porta vel sed lorem. Quisque facilisis metus ut lectus porta pretium. " +
                    "Donec maximus mattis libero lacinia interdum. Nulla at egestas tellus, ac egestas sem."
            },
            {
                label: "farmacia.jpeg2",
                imgPath: report,
                title: "Lorem Ipsum",
                shortDescription: "Lorem Ipsum",
                description: "Sed sed ultricies leo. Fusce gravida accumsan varius. Proin sollicitudin odio condimentum, efficitur leo et, gravida sem. " +
                    "Maecenas sodales neque eget faucibus viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. " +
                    "Etiam imperdiet, eros vitae consequat vestibulum, justo arcu sodales lectus, non pretium lectus lorem a velit. " +
                    "Nunc lacinia auctor facilisis. Aliquam placerat blandit velit, ac mattis dui mollis quis. " +
                    "Vivamus ullamcorper vitae odio accumsan placerat. Aliquam quis tempor massa. Praesent quis ex viverra, pharetra quam nec, mollis enim. " +
                    "Proin vel leo eu quam tristique porttitor in vel erat. " +
                    "Duis ultrices, massa at tristique hendrerit, nulla lacus ultricies dolor, non vulputate eros turpis sed ante."
            },
            {
                label: "farmacia.jpeg3",
                imgPath: report,
                title: "Lorem Ipsum",
                shortDescription: "Lorem Ipsum",
                description: "Quisque tempus tellus vel mi pretium congue vel non odio. Morbi in quam id tortor rhoncus feugiat. " +
                    "Phasellus vehicula lectus ac ex sollicitudin tincidunt. Curabitur blandit ligula fringilla ante tincidunt, sit amet blandit nisi auctor. " +
                    "Donec condimentum pulvinar posuere. Integer et consequat nibh, nec fringilla ipsum. " +
                    "Mauris luctus vehicula lorem. Morbi iaculis orci at lectus tristique, a laoreet mauris sollicitudin. " +
                    "In elementum in lorem ut ullamcorper. Duis ultricies ligula egestas turpis ullamcorper auctor."
            }],
        color: "primary"
    },
    {
        id: "digitalization",
        title: "Digitalizazione",
        description: "Memorizza i tuoi dati personali, le tue patologie, gli interventi eseguiti, le vaccinazioni e i farmaci in uso.",
        details: [
            {
                label: "profilo.jpeg",
                imgPath: report,
                title: "L'Applicativo",
                shortDescription: "XXXXXX",
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
        color: "primary"
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