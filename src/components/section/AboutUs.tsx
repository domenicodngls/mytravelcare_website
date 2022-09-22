import React from 'react'
import {sectionList} from "../../content/section";
import {SectionType} from "../../common/customType";
import SectionTitle from "./SectionTitle";

const AboutUs = () => {

    const data: SectionType | null
        = sectionList.find(s => s.id === "about") || null

    return (
        <>
            <SectionTitle data={data}/>
        </>)
}

export default AboutUs