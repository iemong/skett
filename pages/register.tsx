import * as React from 'react'
import styled from '@emotion/styled'
import useForm from 'react-hook-form'
import { DateTime } from 'luxon'
import Main from 'components/templates/layouts/Main'
import firebaseApp from 'assets/utils/firebaseApp'
import { COLLECTIONS, STRAGE_BACKET } from 'assets/constant'

type PostType = {
    userId: number
    title: string
    description: string
    isOpen: boolean
    createDate: string
    updateDate: string
    url: string
    imageUrl: string
}

const Register = () => {
    const db = firebaseApp.firestore()
    const storage = firebaseApp.storage(STRAGE_BACKET)
    const storageRef = storage.ref()

    const { register, handleSubmit, watch, errors } = useForm()

    const onSubmit = async (data: Record<string, any>) => {
        console.log('send', data)
        const now = DateTime.local().toString()
        const fileList: FileList = data.image
        const file = fileList[0]
        const imageRef = storageRef.child(`images/${file.name}_${Date.now()}.jpg`)
        const snapshot = await imageRef.put(file)
        console.log(snapshot)
        const postData: PostType = {
            userId: 1,
            title: data.title,
            description: data.description ?? '',
            isOpen: true,
            createDate: now,
            updateDate: now,
            url: 'google.com',
            imageUrl: `${snapshot.metadata.fullPath}`,
        }

        db.collection(COLLECTIONS.POSTS)
            .add(postData)
            .then(docRef => {
                console.log('Document written with ID: ', docRef.id)
            })
            .catch(error => {
                console.error(error)
            })
    }

    console.log(watch('title'))

    return (
        <Main>
            <React.Fragment>
                <Title>This is Register Page</Title>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        タイトル :{' '}
                        <input type="text" name="title" placeholder="タイトル" ref={register({ required: true })} />
                    </label>
                    {errors.title && <span>This field is required</span>}
                    <label>
                        本文 : <input type="text" name="description" placeholder="本文" ref={register} />
                    </label>
                    <label>
                        画像 : <input type="file" name="image" ref={register({ required: true })} />
                    </label>
                    <button type="submit">送信</button>
                </form>
            </React.Fragment>
        </Main>
    )
}

export default Register

const Title = styled.h1`
    font-size: 20px;
    color: red;
`
