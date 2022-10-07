export type SectionType = {
    id: string
    title:string
    details?:DetailType[]
    description?:string
    color:"primary" | "secondary"
    images?: ImageRefType[]
    component?: () => JSX.Element

}

export type DetailType ={
    label:string,
    imgPath: string
    title:string
    description:string
}

export type ImageRefType={
    path: string
    ref: string
}