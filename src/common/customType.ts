export type SectionType = {
    id: string
    title:string
    details:DetailType[]
    description:string
    detail:string
    color:"primary" | "secondary"
}

export type DetailType ={
    label:string,
    imgPath: string
    title:string
    shortDescription:string
    description:string
}