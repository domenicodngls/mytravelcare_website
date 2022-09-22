export type SectionType = {
    id: string
    title:string
    images:ImageType[]
    description:string
    detail:string
    color:"primary" | "secondary"
}

export type ImageType ={
    label:string,
    imgPath: string
}