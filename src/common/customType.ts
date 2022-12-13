import {jsx} from "@emotion/react";
import JSX = jsx.JSX;

export type SectionType = {
    id: string
    title: string
    details?: DetailType[]
    description?: string
    descriptionComponent? :  JSX.Element
    color: "primary" | "secondary"
    images?: ImageRefType[]
    component?: () => JSX.Element
    hideTitle?: boolean
}

export type DetailType = {
    label: string,
    imgPath?: string
    title: string
    description?: string
    descriptionComponent? :  JSX.Element
    descriptions?: string[]
    customDescriptions?: CustomDescription[]
}

export type ImageRefType = {
    path: string
    ref: string
}

export type CustomDescription = {
    color: "primary" | "secondary"
    title: string
    description?: string
    anchor?: {
        href: string,
        name: string
    }
}