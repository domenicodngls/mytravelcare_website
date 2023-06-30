import {SectionType} from "../common/customType";
import regioneLombardia from "../icons/regioneLombardia.png";
import logoFerb from "../icons/logoFerb.svg";
import logoUnibg from "../icons/logoUnibg.svg";
import logoEasytech from "../icons/logoEasytech.svg";
import rollup from "../images/rollup_en.png";
import home from "../images/home_en.svg";
import symptoms from "../images/symptoms_en.svg";
import profile from "../images/profile_en.svg";
import {Typography} from "@mui/material";

export const sectionListEn: SectionType[] = [
    {
        id: "whereToUse",
        title: "Where Can I Use MyTravelCare?",
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
                        The service can be accessed via</Typography>
                    <Typography sx={{
                        letterSpacing: '.1rem',
                        textDecoration: 'none',
                        fontSize: '2.5vmin', display: 'contents', fontWeight: 'bold',
                        justifyContent: 'center'
                    }}> MyTravelCare Kiosks</Typography>
                    <Typography sx={{
                        letterSpacing: '.1rem',
                        textDecoration: 'none',
                        fontSize: '2.5vmin', display: 'contents',
                        justifyContent: 'center'
                    }}>, located in waiting rooms of
                        Emergency Departments.</Typography>
                    <Typography sx={{
                        letterSpacing: '.1rem',
                        textDecoration: 'none',
                        fontSize: '2.5vmin',
                        mt: 1,
                        justifyContent: 'center'
                    }}>
                        Service is now active in:
                    </Typography>
                    <ul>
                        <li key={"garda"}>
                            <Typography sx={{
                                letterSpacing: '.1rem',
                                textDecoration: 'none',
                                fontSize: '2.5vmin', fontWeight: 'bold',
                                justifyContent: 'center'
                            }}>
                                ASST Garda - Emergency Department of Desenzano del Garda Hospital
                            </Typography>
                        </li>
                        <li key={"bergamoEst"}>
                            <Typography sx={{
                                letterSpacing: '.1rem',
                                textDecoration: 'none',
                                fontSize: '2.5vmin', fontWeight: 'bold',
                                justifyContent: 'center'
                            }}>
                                ASST Bergamo Est - Emergency Department of Seriate Hospital
                            </Typography>
                        </li>
                        <li key={"como"}>
                            <Typography sx={{
                                letterSpacing: '.1rem',
                                textDecoration: 'none',
                                fontSize: '2.5vmin', fontWeight: 'bold',
                                justifyContent: 'center'
                            }}>
                                ASST Lariana - Emergency Department of Sant’Anna Hospital of Como
                            </Typography>
                        </li>
                        <li key={"livigno"}>
                            <Typography sx={{
                                letterSpacing: '.1rem',
                                textDecoration: 'none',
                                fontSize: '2.5vmin', fontWeight: 'bold',
                                justifyContent: 'center'
                            }}>
                                ASST Valtellina e Alto Lario – First Aid Point of Livigno
                            </Typography>
                        </li>
                        <li key={"lecco"}>
                            <Typography sx={{
                                letterSpacing: '.1rem',
                                textDecoration: 'none',
                                fontSize: '2.5vmin',  fontWeight: 'bold',
                                justifyContent: 'center'
                            }}>
                                ASST Lecco - Emergency Department of Lecco Hospital
                            </Typography>
                        </li>
                        <li key={"vizzolo"}>
                            <Typography sx={{
                                letterSpacing: '.1rem',
                                textDecoration: 'none',
                                fontSize: '2.5vmin',  fontWeight: 'bold',
                                justifyContent: 'center'
                            }}>
                                ASST Melegnano Martesana - Emergency Department of Vizzolo Predabissi
                                Hospital
                            </Typography>
                        </li>
                    </ul>
                    <Typography sx={{
                        letterSpacing: '.1rem',
                        textDecoration: 'none',
                        fontSize: '2.5vmin',
                        justifyContent: 'center'
                    }}>
                        MyTravelCare will be soon available in the following regional Emergency
                        Departments:
                    </Typography>
                    <ul>
                        <li key={"paoloECarlo"}>
                            <Typography sx={{
                                letterSpacing: '.1rem',
                                textDecoration: 'none',
                                fontSize: '2.5vmin',
                                justifyContent: 'center'
                            }}>
                                ASST Santi Paolo e Carlo –Emergency Department of San Paolo Hospital
                            </Typography>
                        </li>
                        <li key={"sondalo"}>
                            <Typography sx={{
                                letterSpacing: '.1rem',
                                textDecoration: 'none',
                                fontSize: '2.5vmin',
                                justifyContent: 'center'
                            }}>
                                ASST Valtellina e Alto Lario – Emergency Department of Sondalo Hospital
                            </Typography>
                        </li>
                        <li key={"varese"}>
                            <Typography sx={{
                                letterSpacing: '.1rem',
                                textDecoration: 'none',
                                fontSize: '2.5vmin'
                            }}>
                                ASST Sette Laghi – Emergency Department of Varese Hospital
                            </Typography>
                        </li>
                    </ul>
                </>,
        }],
        color: "secondary"
    },
    {
        id: "functionality",
        title: "How Does MyTravelCare Work?",
        description: "If during the triage you are assigned either a white or a green code, you can access the Kiosk located in " +
            "the waiting room of the Emergency Department by using your bracelet (or assigned code). If you need " +
            "any assistance for using the digital device, you can ask to the dedicated personnel.",
        descriptionComponent:
            <Typography variant='h3' sx={{
                display: 'flex',
                letterSpacing: '.1rem',
                textDecoration: 'none',
                fontSize: '4vmin', ml: 5, mt: 5,
                justifyContent: 'center'

            }}>
                Use of MyTravelCare Kiosk
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
                        Select your language and scan the wristband bar code. </Typography>
                    <Typography sx={{
                        letterSpacing: '.1rem',
                        textDecoration: 'none',
                        fontSize: '2.5vmin', display: 'contents',
                        justifyContent: 'center'
                    }}>
                        After this,
                    </Typography>
                    <Typography sx={{
                        letterSpacing: '.1rem',
                        textDecoration: 'none',
                        fontSize: '2.5vmin', display: 'contents', fontWeight: 'bold',
                        justifyContent: 'center'
                    }}> access the Profile section </Typography>
                    <Typography sx={{
                        letterSpacing: '.1rem',
                        textDecoration: 'none',
                        fontSize: '2.5vmin', display: 'contents',
                        justifyContent: 'center'
                    }}>
                        to fill in your medical history.
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
                            Fill in your
                        </Typography>
                        <Typography sx={{
                            letterSpacing: '.1rem',
                            textDecoration: 'none',
                            fontSize: '2.5vmin', display: 'contents', fontWeight: 'bold',
                            justifyContent: 'center'
                        }}> personal data </Typography>
                        <Typography sx={{
                            letterSpacing: '.1rem',
                            textDecoration: 'none',
                            fontSize: '2.5vmin', display: 'contents',
                            justifyContent: 'center'
                        }}>
                            (name, weight, date of birth, pregnancy status, smoker
                            status) and your most
                        </Typography>
                        <Typography sx={{
                            letterSpacing: '.1rem',
                            textDecoration: 'none',
                            fontSize: '2.5vmin', display: 'contents', fontWeight: 'bold',
                            justifyContent: 'center'
                        }}> recent travels </Typography>
                        <Typography sx={{
                            letterSpacing: '.1rem',
                            textDecoration: 'none',
                            fontSize: '2.5vmin', display: 'contents',
                            justifyContent: 'center'
                        }}> (destination and date).
                        </Typography>
                        <Typography sx={{
                            letterSpacing: '.1rem',
                            textDecoration: 'none',
                            fontSize: '2.5vmin'
                        }}> Then, if any, select:
                        </Typography>
                        <ul>
                            <li key={"allergie"}>
                                <Typography sx={{
                                    letterSpacing: '.1rem',
                                    textDecoration: 'none',
                                    fontSize: '2.5vmin', display: 'contents', fontWeight: 'bold'
                                }}>allergies</Typography>
                                <Typography sx={{
                                    letterSpacing: '.1rem',
                                    textDecoration: 'none',
                                    fontSize: '2.5vmin', display: 'contents'
                                }}> (you can select allergies to animals, foods, plants and trees, dust,
                                    medications, chemicals, and materials);
                                </Typography>
                            </li>
                            <li key={"patologie"}>
                                <Typography sx={{
                                    letterSpacing: '.1rem',
                                    textDecoration: 'none',
                                    fontSize: '2.5vmin', display: 'contents', fontWeight: 'bold'
                                }}>pathologies</Typography>
                                <Typography sx={{
                                    letterSpacing: '.1rem',
                                    textDecoration: 'none',
                                    fontSize: '2.5vmin', display: 'contents'
                                }}> (pathologies can be identified either by name or by selecting body
                                    parts, apparatuses or organs involved);
                                </Typography>
                            </li>
                            <li key={"interventi"}>
                                <Typography sx={{
                                    letterSpacing: '.1rem',
                                    textDecoration: 'none',
                                    fontSize: '2.5vmin', display: 'contents', fontWeight: 'bold'
                                }}>surgeries</Typography>
                                <Typography sx={{
                                    letterSpacing: '.1rem',
                                    textDecoration: 'none',
                                    fontSize: '2.5vmin', display: 'contents'
                                }}> (surgeries can be identified either by name or by selecting body
                                    parts, apparatuses or organs involved);
                                </Typography>
                            </li>
                            <li key={"farmaci in uso"}>
                                <Typography sx={{
                                    letterSpacing: '.1rem',
                                    textDecoration: 'none',
                                    fontSize: '2.5vmin', display: 'contents', fontWeight: 'bold'
                                }}>drugs in use</Typography>
                                <Typography sx={{
                                    letterSpacing: '.1rem',
                                    textDecoration: 'none',
                                    fontSize: '2.5vmin', display: 'contents'
                                }}> (drugs can be identified either by name or by active ingredient. Dose, frequency,
                                    and
                                    route of administration can be specified.).
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
                            Insert your
                        </Typography>
                        <Typography sx={{
                            letterSpacing: '.1rem',
                            textDecoration: 'none',
                            fontSize: '2.5vmin', display: 'contents', fontWeight: 'bold'
                        }}> symptoms </Typography>
                        <Typography sx={{
                            letterSpacing: '.1rem',
                            textDecoration: 'none',
                            fontSize: '2.5vmin', display: 'contents'
                        }}>
                            and their intensity directly by interacting with the avatar.
                            By clicking on a specific body part, either in the front or back, you will be able to
                            select common symptoms like itching, swelling, pain, and fever or even more
                            specific symptoms.
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
                    In partnership with
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