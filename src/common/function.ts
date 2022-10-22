
import {sectionListIt} from "../content_it/section";
import {sectionListEn} from "../content_en/section";

export const getSectionByLanguage = (language: string) => {
    return language === "it" ? sectionListIt : sectionListEn;
}