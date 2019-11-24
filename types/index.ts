export type UserType = {
    displayName: string
    email: string
    url: string
    uid: string
}

export type PostType = {
    id?: string
    userId: number
    title: string
    description: string
    isOpen: boolean
    createDate: string
    updateDate: string
    url: string
    imageUrl: string
    side: 'help' | 'support'
}
