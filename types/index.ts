export type UserType = {
    displayName: string
    email: string
    url: string
    uid: string
}

export type PostType = {
    id?: number
    userId: number
    title: string
    description: string
    isOpen: boolean
    createDate: string
    updateDate: string
    url: string
    imageUrl: string
}
