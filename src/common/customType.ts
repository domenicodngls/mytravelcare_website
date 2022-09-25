export type SectionType = {
    id: string
    title:string
    details?:DetailType[]
    description?:string
    color:"primary" | "secondary"
    images?: ImageRefType[]
}

export type DetailType ={
    label:string,
    imgPath: string
    title:string
    shortDescription:string
    description:string
}

export type ImageRefType={
    path: string
    ref: string
}