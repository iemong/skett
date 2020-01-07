export type UserType = {
    displayName: string | null
    email: string | null
    uid: string
    photoURL: string | null
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
    side: 'help' | 'support'
    timestamp: number
    applicants?: string[]
}
