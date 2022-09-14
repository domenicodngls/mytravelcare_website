import * as React from 'react';
import {sectionList} from "../content/section";
import CustomCard from "./CustomCard";


const SectionList = () => {
    return (
        <>
            {sectionList.map(section => (
                <CustomCard
                    key={section.title}
                    title={section.title}
                    description={section.description}
                    image={section.image}
                    detail={section.detail}
                ></CustomCard>
            ))}
        </>
    );
}

export default SectionList