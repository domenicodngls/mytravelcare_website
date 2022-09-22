import React from 'react'
import {sectionList} from "../../content/section";
import {SectionType} from "../../common/customType";
import SectionTitle from "./SectionTitle";

const Digitalization = () => {

    const data: SectionType | null
        = sectionList.find(s => s.id === "digitalization") || null

    return (
        <>
            <SectionTitle data={data}/>
        </>)
}

export default Digitalization