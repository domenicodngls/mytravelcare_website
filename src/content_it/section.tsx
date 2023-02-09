import {SectionType} from "../common/customType";
import regioneLombardia from "../icons/regioneLombardia.png";
import logoFerb from "../icons/logoFerb.svg";
import logoUnibg from "../icons/logoUnibg.svg";
import home from "../images/home_it.svg";
import symptoms from "../images/symptoms_it.svg";
import profile from "../images/profile_it.svg";
import rollup from "../images/rollup_en.png";
import {Typography} from "@mui/material";
import logoEasytech from "../icons/logoEasytech.svg";

export const sectionListIt: SectionType[] = [
    {
        id: "whereToUse",
        title: "Dove Posso Utilizzare MyTravelCare?",
        details: [{
            title: "",
            label: "homePage",
            imgPath: rollup,
            descriptionComponent:
                <>
                    <Typography sx={{
                        letterSpacing: '.1rem',
                        textDecoration: 'none',
                        fontSize: '2.5vmin', display: 'contents',
                        justifyContent: 'center'
                    }}>
                        Puoi accedere al servizio attraverso i</Typography>
                    <Typography sx={{
                        letterSpacing: '.1rem',
                        textDecoration: 'none',
                        fontSize: '2.5vmin', display: 'contents', fontWeight: 'bold',
                        justifyContent: 'center'
                    }}> Totem
                        MyTravelCare </Typography>
                    <Typography sx={{
                        letterSpacing: '.1rem',
                        textDecoration: 'none',
                        fontSize: '2.5vmin', display: 'contents',
                        justifyContent: 'center'
                    }}>collocati nelle sale di
                        attesa del Pronto soccorso.</Typography>
                    <Typography sx={{
                        letterSpacing: '.1rem',
                        textDecoration: 'none',
                        fontSize: '2.5vmin',
                        mt: 1,
                        justifyContent: 'center'
                    }}>
                        Il Servizio è oggi attivo presso:
                    </Typography>
                    <ul>
                        <li key={"garda"}>
                            <Typography sx={{
                                letterSpacing: '.1rem',
                                textDecoration: 'none',
                                fontSize: '2.5vmin', fontWeight: 'bold',
                                justifyContent: 'center'
                            }}>
                                ASST Garda - Pronto Soccorso di Desenzano del Garda
                            </Typography>
                        </li>
                        <li key={"bergamoEst"}>
                            <Typography sx={{
                                letterSpacing: '.1rem',
                                textDecoration: 'none',
                                fontSize: '2.5vmin', fontWeight: 'bold',
                                justifyContent: 'center'
                            }}>
                                ASST Bergamo Est - Pronto Soccorso di Seriate
                            </Typography>
                        </li>
                        <li key={"como"}>
                            <Typography sx={{
                                letterSpacing: '.1rem',
                                textDecoration: 'none',
                                fontSize: '2.5vmin', fontWeight: 'bold',
                                justifyContent: 'center'
                            }}>
                                ASST Lariana - Pronto Soccorso Sant’Anna di Como
                            </Typography>
                        </li>
                    </ul>
                    <Typography sx={{
                        letterSpacing: '.1rem',
                        textDecoration: 'none',
                        fontSize: '2.5vmin',
                        justifyContent: 'center'
                    }}>
                        MyTravelCare sarà progressivamente diffuso sul territorio regionale ai seguenti
                        Pronto Soccorso:
                    </Typography>
                    <ul>
                        <li key={"paoloECarlo"}>
                            <Typography sx={{
                                letterSpacing: '.1rem',
                                textDecoration: 'none',
                                fontSize: '2.5vmin',
                                justifyContent: 'center'
                            }}>
                                ASST Santi Paolo e Carlo – Pronto Soccorso Ospedale San Paolo
                            </Typography>
                        </li>
                        <li key={"sondalo"}>
                            <Typography sx={{
                                letterSpacing: '.1rem',
                                textDecoration: 'none',
                                fontSize: '2.5vmin',
                                justifyContent: 'center'
                            }}>
                                ASST Valtellina e Alto Lario – Pronto Soccorso Ospedale di Sondalo
                            </Typography>
                        </li>
                        <li key={"livigno"}>
                            <Typography sx={{
                                letterSpacing: '.1rem',
                                textDecoration: 'none',
                                fontSize: '2.5vmin'
                            }}>
                                ASST Valtellina e Alto Lario – Punto di Primo Intervento Livigno
                            </Typography>
                        </li>
                        <li key={"varese"}>
                            <Typography sx={{
                                letterSpacing: '.1rem',
                                textDecoration: 'none',
                                fontSize: '2.5vmin'
                            }}>
                                ASST Sette Laghi - Pronto Soccorso di Varese
                            </Typography>
                        </li>
                        <li key={"vizzolo"}>
                            <Typography sx={{
                                letterSpacing: '.1rem',
                                textDecoration: 'none',
                                fontSize: '2.5vmin',
                                justifyContent: 'center'
                            }}>
                                ASST Melegnano Martesana - Pronto Soccorso Vizzolo Predabissi
                            </Typography>
                        </li>
                        <li key={"lecco"}>
                            <Typography sx={{
                                letterSpacing: '.1rem',
                                textDecoration: 'none',
                                fontSize: '2.5vmin',
                                justifyContent: 'center'
                            }}>
                                ASST Lecco - Pronto Soccorso di Lecco
                            </Typography>
                        </li>
                    </ul>
                </>,
        }],
        color: "secondary"
    },
    {
        id: "functionality",
        title: "Come funziona MyTravelCare?",
        description: "Se hai effettuato il triage e hai un codice bianco o verde, puoi recarti al Totem collocato presso la sala di\n" +
            "attesa del pronto soccorso. Se hai bisogno di aiuto, rivolgiti allo staff dedicato presente in sala.",
        descriptionComponent:
            <Typography variant='h3' sx={{
                display: 'flex',
                letterSpacing: '.1rem',
                textDecoration: 'none',
                fontSize: '4vmin', ml: 5, mt: 5,
                justifyContent: 'center'

            }}>
                Utilizzo del Totem MyTravelCare
            </Typography>,
        details: [
            {
                label: "homePage",
                imgPath: home,
                title: "",
                descriptionComponent: <>
                    <Typography sx={{
                        letterSpacing: '.1rem',
                        textDecoration: 'none',
                        fontSize: '2.5vmin', display: 'contents', fontWeight: 'bold',
                        justifyContent: 'center'
                    }}>
                        Seleziona la tua lingua, scannerizza il braccialetto </Typography>
                    <Typography sx={{
                        letterSpacing: '.1rem',
                        textDecoration: 'none',
                        fontSize: '2.5vmin', display: 'contents',
                        justifyContent: 'center'
                    }}>
                        che hai ricevuto dal personale sanitario durante la procedura di triage e
                    </Typography>
                    <Typography sx={{
                        letterSpacing: '.1rem',
                        textDecoration: 'none',
                        fontSize: '2.5vmin', display: 'contents', fontWeight: 'bold',
                        justifyContent: 'center'
                    }}> accedi alla sezione Dati sanitari </Typography>
                    <Typography sx={{
                        letterSpacing: '.1rem',
                        textDecoration: 'none',
                        fontSize: '2.5vmin', display: 'contents',
                        justifyContent: 'center'
                    }}>
                        per compilare la tua storia clinica.
                    </Typography>
                </>,
            },
            {
                label: "profile",
                imgPath: profile,
                title: "",
                descriptionComponent:
                    <>
                        <Typography sx={{
                            letterSpacing: '.1rem',
                            textDecoration: 'none',
                            fontSize: '2.5vmin', display: 'contents',
                            justifyContent: 'center'
                        }}>
                            Inserisci con precisione i tuoi
                        </Typography>
                        <Typography sx={{
                            letterSpacing: '.1rem',
                            textDecoration: 'none',
                            fontSize: '2.5vmin', display: 'contents', fontWeight: 'bold',
                            justifyContent: 'center'
                        }}> dati personali </Typography>
                        <Typography sx={{
                            letterSpacing: '.1rem',
                            textDecoration: 'none',
                            fontSize: '2.5vmin', display: 'contents',
                            justifyContent: 'center'
                        }}>
                            (altezza, peso, data di nascita, stato
                            di gravidanza, fumatore) e gli
                        </Typography>
                        <Typography sx={{
                            letterSpacing: '.1rem',
                            textDecoration: 'none',
                            fontSize: '2.5vmin', display: 'contents', fontWeight: 'bold',
                            justifyContent: 'center'
                        }}> ultimi viaggi effettuati </Typography>
                        <Typography sx={{
                            letterSpacing: '.1rem',
                            textDecoration: 'none',
                            fontSize: '2.5vmin', display: 'contents',
                            justifyContent: 'center'
                        }}> (destinazione e date).
                        </Typography>
                        <Typography sx={{
                            letterSpacing: '.1rem',
                            textDecoration: 'none',
                            fontSize: '2.5vmin'
                        }}> Seleziona quindi eventuali:
                        </Typography>
                        <ul>
                            <li key={"allergie"}>
                                <Typography sx={{
                                    letterSpacing: '.1rem',
                                    textDecoration: 'none',
                                    fontSize: '2.5vmin', display: 'contents', fontWeight: 'bold'
                                }}>allergie</Typography>
                                <Typography sx={{
                                    letterSpacing: '.1rem',
                                    textDecoration: 'none',
                                    fontSize: '2.5vmin', display: 'contents'
                                }}> (con possibilità di selezionare per esempio allergie a animali, cibi,
                                    piante, polvere, farmaci, materiali);
                                </Typography>
                            </li>
                            <li key={"patologie"}>
                                <Typography sx={{
                                    letterSpacing: '.1rem',
                                    textDecoration: 'none',
                                    fontSize: '2.5vmin', display: 'contents', fontWeight: 'bold'
                                }}>patologie</Typography>
                                <Typography sx={{
                                    letterSpacing: '.1rem',
                                    textDecoration: 'none',
                                    fontSize: '2.5vmin', display: 'contents'
                                }}> da cui sei affetto (identificabili per nome, così come per parte del
                                    corpo, apparato o organo interessati);
                                </Typography>
                            </li>
                            <li key={"interventi"}>
                                <Typography sx={{
                                    letterSpacing: '.1rem',
                                    textDecoration: 'none',
                                    fontSize: '2.5vmin', display: 'contents', fontWeight: 'bold'
                                }}>interventi</Typography>
                                <Typography sx={{
                                    letterSpacing: '.1rem',
                                    textDecoration: 'none',
                                    fontSize: '2.5vmin', display: 'contents'
                                }}> a cui sei stato sottoposto (anch’essi identificabili per nome, così
                                    come per parte del corpo, apparato o organo interessati);
                                </Typography>
                            </li>
                            <li key={"farmaci in uso"}>
                                <Typography sx={{
                                    letterSpacing: '.1rem',
                                    textDecoration: 'none',
                                    fontSize: '2.5vmin', display: 'contents', fontWeight: 'bold'
                                }}>farmaci in uso</Typography>
                                <Typography sx={{
                                    letterSpacing: '.1rem',
                                    textDecoration: 'none',
                                    fontSize: '2.5vmin', display: 'contents'
                                }}> (identificabili tramite nome o principio attivo, per cui è possibile specificare
                                    anche
                                    dosaggio, frequenza e modalità di assunzione).
                                </Typography>
                            </li>
                        </ul>
                    </>
            },
            {
                label: "symptoms",
                imgPath: symptoms,
                title: "",
                descriptionComponent:
                    <>
                        <Typography sx={{
                            letterSpacing: '.1rem',
                            textDecoration: 'none',
                            fontSize: '2.5vmin', display: 'contents'
                        }}>
                            Inserisci i tuoi
                        </Typography>
                        <Typography sx={{
                            letterSpacing: '.1rem',
                            textDecoration: 'none',
                            fontSize: '2.5vmin', display: 'contents', fontWeight: 'bold'
                        }}> sintomi </Typography>
                        <Typography sx={{
                            letterSpacing: '.1rem',
                            textDecoration: 'none',
                            fontSize: '2.5vmin', display: 'contents'
                        }}>
                            e la loro intensità interagendo direttamente con l’avatar.
                            Cliccando su una specifica parte del corpo, anteriore o posteriore, potrai
                            selezionare sia sintomi molto comuni come prurito, gonfiore, dolore, febbre, sia
                            sintomi più specifici.
                        </Typography>
                    </>
            }],
        color: "secondary"
    },
    {
        id: "about",
        title: "",
        descriptionComponent:
        <div style={{marginLeft: 40}}>
            <Typography sx={{
                letterSpacing: '.1rem',
                textDecoration: 'none',
                fontSize: '2.5vmin',
                display: 'contents',
            }}>
                In partnership con
            </Typography>
        </div>,
        images: [
            {
                path: logoFerb,
                ref: "https://www.ferbonlus.com/"
            },
            {
                path: logoUnibg,
                ref: "https://www.unibg.it/"
            },
            {
                path: "",
                ref: ""
            },
            {
                path: regioneLombardia,
                ref: "https://www.regione.lombardia.it/wps/portal/istituzionale/"
            },
        ],
        color: "secondary"
    },
    {
        id: "techparter",
        title: "",
        descriptionComponent:
            <div style={{marginLeft: 40}}>
                <Typography sx={{
                    letterSpacing: '.1rem',
                    textDecoration: 'none',
                    fontSize: '2.5vmin',
                    display: 'contents',
                }}>
                    Technology Partner
                </Typography>
            </div>,
        images: [
            {
                path: logoEasytech,
                ref: "https://www.webeasytech.com/"
            },
            {
                path: "",
                ref: ""
            },
            {
                path: "",
                ref: ""
            },
            {
                path: "",
                ref: ""
            },
        ],
        color: "primary",
        hideTitle: true
    }
]


//ferb, unibg, regione,   Aria spa