import * as React from 'react';
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Collapse, IconButton,
    IconButtonProps, styled
} from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {SectionType} from "../common/customType";
import {style} from "../theme/style";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})

(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const CustomCard = (section: SectionType) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    let Scroll = require('react-scroll');
    let Element = Scroll.Element;

    return (
        <Card
            sx={style.card.card}
            id={section.title}>
            <Element name={section.title}/>
            <CardHeader
                title={section.title}
                sx={style.card.header}
            />
            <CardMedia
                component="img"
                height="194"
                image={require(`../images/${section.image}`)}
            />
            <CardContent>
                <Typography
                    variant="body1"
                    sx={style.card.content}
                >
                    {section.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography
                        paragraph
                        sx={style.card.detail}>
                        {section.detail}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default CustomCard
