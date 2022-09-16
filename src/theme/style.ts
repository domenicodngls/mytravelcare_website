import {theme} from "./themeProvider";
import {sectionList} from "../content/section";

export const style = {
    body: {
        containerFlexColumn: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: {lg: 'flex-end', md: 'center'}
        },
        containerFlex: {
            display: 'flex',
            alignItems: 'center'
        },
        description: {
            mt: 5,
            mr: 5,
            ml: 5,
            display: 'flex',
            letterSpacing: '.1rem',
            textDecoration: 'none',
            fontSize: '2.5vmin'
        }
        ,
        logo: {
            display: 'flex',
            height: '45vmin',
        },
        logoContainer: {
            display: {
                xs: 'none',
                sm: 'none',
                lg: 'flex'
            },
            flexBasis: 'fit-content'
        },
        subtitle: {
            mr: 2,
            display: 'flex',
            letterSpacing: '.3rem',
            textDecoration: 'none',
            fontSize: '2.5vmin'
        },
        title: {
            mr: 2,
            display: 'flex',
            fontWeight: 700,
            letterSpacing: '.3rem',
            textDecoration: 'none',
            fontSize: '10vmin',
        }
    },
    card: {
        card: {
            ml: 5,
            mr: 5,
            mb: 5,
            mt: 5
        },
        content: {
            fontSize: '2.2vmin',
            color: theme.palette.secondary.main
        },
        detail: {
            fontSize: '10vmin'
        },
        header: {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText
        }
    },
    header: {
        logo: {
            height: '15vmin',
        },
        reverseColorTitle: {
            backgroundColor: theme.palette.primary.contrastText,
            color: theme.palette.primary.main,
        },
        title: {
            mr: 2,
            display: 'flex',
            fontWeight: 700,
            letterSpacing: '.3rem',
            textDecoration: 'none',
            fontSize: '3.2vmin'

        }
    },
    navigationBar: {
        button: {
                mr: 1,
                ml: 1,
                width: `${90 / sectionList.length}%`,
                fontWeight: 600,
                fontSize: '3vmin',
                borderColor: theme.palette.primary.contrastText
            }
        ,
        buttonGroup: {
            mt: 5,
            mb: 5,
            height: 'fit-content',
            width: '100%',
            justifyContent: 'center'
        }
    }
}