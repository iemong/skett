export type UserType = {
    displayName: string | null
    email: string | null
    uid: string
    photoURL: string | null
    providerId: string
    userName: string
}

export type PostType = {
    id: string
    user: UserType
    title: string
    description: string
    isOpen: boolean
    createDate: string
    updateDate: string
    url: string
    imageUrl: string
    ogpImageUrl: string
    side: 'help' | 'support'
    timestamp: number
    applicants?: UserType[]
    isEnd: boolean
}
