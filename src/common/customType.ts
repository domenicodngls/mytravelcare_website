export type SectionType = {
    id: string
    title: string
    details?: DetailType[]
    description?: string
    color: "primary" | "secondary"
    images?: ImageRefType[]
    component?: () => JSX.Element

}

export type DetailType = {
    label: string,
    imgPath: string
    title: string
    description?: string
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