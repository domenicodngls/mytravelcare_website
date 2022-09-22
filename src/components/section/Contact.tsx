import React from 'react'
import {sectionList} from "../../content/section";
import {SectionType} from "../../common/customType";
import SectionTitle from "./SectionTitle";

const Contact = () => {

    const data: SectionType | null
        = sectionList.find(s => s.id === "contact") || null;

    return (
        <>
            <SectionTitle data={data}/>
        </>)
}

export default Contact