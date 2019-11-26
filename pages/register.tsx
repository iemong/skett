import * as React from 'react'
import styled from '@emotion/styled'
import useForm from 'react-hook-form'
import { DateTime } from 'luxon'
import Main from 'components/templates/layouts/Main'
import firebaseApp from 'assets/utils/firebaseApp'
import { COLLECTIONS, STRAGE_BACKET } from 'assets/constant'
import { PostType } from 'types/index'
import Tab from 'components/organisms/tab'

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
        if (!['image/jpeg', 'image/png'].includes(file.type)) throw new Error('画像形式がサポートされていません')
        const imageRef = storageRef.child(`images/${file.name.split('.')[0]}_${Date.now()}.jpg`)
        const snapshot = await imageRef.put(file)
        const postData: PostType = {
            userId: 1,
            title: data.title,
            description: data.description ?? '',
            isOpen: true,
            createDate: now,
            updateDate: now,
            url: 'google.com',
            imageUrl: `${snapshot.metadata.fullPath}`,
            side: 'help',
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

    return (
        <Main>
            <Tab
                leftContent={
                    <Wrapper>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormBox>
                                <Title>募集を作る</Title>
                                <FormTitle>
                                    <TitleLabel htmlFor="title">題名</TitleLabel>
                                    <InputText
                                        type="text"
                                        id="title"
                                        name="title"
                                        placeholder="募集したいことを書いてください"
                                        ref={register({ required: true })}
                                    />
                                    {errors.title && <span>This field is required</span>}
                                </FormTitle>
                                <FormDescription>
                                    <TitleLabel htmlFor="description">内容</TitleLabel>
                                    <TextArea
                                        id="description"
                                        name="description"
                                        placeholder="詳細内容を書いてください"
                                        ref={register}
                                    />
                                </FormDescription>
                                <FormImage>
                                    <TitleLabel htmlFor="image">写真アップロード</TitleLabel>
                                    <ImageLabelBox htmlFor="image">ファイルを選択</ImageLabelBox>
                                    <InputImage
                                        type="file"
                                        id="image"
                                        name="image"
                                        ref={register({ required: true })}
                                    />
                                </FormImage>
                            </FormBox>
                            <Howto>使いかた</Howto>
                            <ConfirmButton type="submit">送信</ConfirmButton>
                            <BackButton>戻る</BackButton>
                        </form>
                    </Wrapper>
                }
            />
        </Main>
    )
}

export default Register

const Wrapper = styled.div`
    padding-bottom: 100px;
`

const FormBox = styled.div`
    width: 600px;
    height: 950px;
    margin: 60px auto 0;
    padding: 75px 40px 102px;
    background-color: #fff;
    border-radius: 16px;
    box-sizing: border-box;
    overflow: hidden;
`

const Title = styled.h1`
    position: relative;
    margin-bottom: 45px;
    padding-bottom: 33px;
    font-size: 38px;
    text-align: center;
    color: #000;
    &::before {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 100px;
        height: 5px;
        background-image: linear-gradient(to left, #00b4ed, #0091db);
        transform: translateX(-50%);
    }
`

const FormTitle = styled.div`
    margin-bottom: 50px;
`

const FormDescription = styled.div`
    margin-bottom: 50px;
`

const FormImage = styled.div``

const TitleLabel = styled.label`
    display: block;
    margin-bottom: 0.5em;
    font-size: 22px;
`

const InputText = styled.input`
    width: 520px;
    height: 56px;
    font-size: 18px;
    background-color: #efefef;
    text-indent: 1em;
`

const TextArea = styled.textarea`
    width: 520px;
    min-height: 320px;
    font-size: 18px;
    background-color: #efefef;
    padding: 17px 22px;
    box-sizing: border-box;
`

const ImageLabelBox = styled.label`
    display: block;
    width: 520px;
    height: 56px;
    text-align: center;
    line-height: 56px;
    background-color: #efefef;
    font-size: 18px;
    color: #9fa0a0;
`

const InputImage = styled.input`
    display: none;
`

const Howto = styled.p`
    width: 4em;
    margin: 80px auto;
    text-decoration: underline;
    font-size: 24px;
`

const ConfirmButton = styled.button`
    display: block;
    margin: 0 auto 50px;
    width: 400px;
    height: 80px;
    background-image: url(/img/btn_confirm_help.png);
    color: transparent;
`

const BackButton = styled.button`
    display: block;
    width: 400px;
    height: 80px;
    margin: 0 auto;
    background-image: url(/img/btn_back.png);
    color: transparent;
`
