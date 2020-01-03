import * as React from 'react'
import styled from '@emotion/styled'
import useForm from 'react-hook-form'
import { DateTime } from 'luxon'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import Main from 'components/templates/layouts/Main'
import firebaseApp from 'assets/utils/firebaseApp'
import { BASE_OGP_URL, COLLECTIONS, STRAGE_BACKET } from 'assets/constant'
import { PostType } from 'types/index'
import Tab from 'components/organisms/tab'
import Confirm from 'components/organisms/register/confirm'
import Result from 'components/organisms/register/result'
import RegisterLogin from 'components/organisms/register/login'
import useLogin from 'components/hooks/useLogin'
import { State as rootState } from 'reducers'
import Button from 'components/atoms/Button'
import ThemeButton from 'components/molecules/theme/ThemeButton'
import ThemeTitle from 'components/molecules/theme/ThemeTitle'

const Register = (): JSX.Element => {
    const db = firebaseApp.firestore()
    const storage = firebaseApp.storage(STRAGE_BACKET)
    const storageRef = storage.ref()

    const { register, handleSubmit, errors, reset } = useForm()
    const [currentFormData, setCurrentFormData] = React.useState<Record<string, any> | null>(null)
    const [time, setTime] = React.useState<string | null>(null)
    const [currentImgSrc, setCurrentImgSrc] = React.useState<string | null>(null)
    const [postUrl, setPostUrl] = React.useState('')

    const { side } = useSelector((state: rootState) => state.rootReducer.tab)

    const user = useLogin()

    const onRegister = (data: Record<string, any>): void => {
        console.log('send', data)
        setCurrentFormData(data)
        const now = DateTime.local().toString()
        setTime(now)
    }

    React.useEffect(() => {
        if (!currentFormData) return
        const fileList: FileList = currentFormData.image
        const file = fileList[0]
        if (!['image/jpeg', 'image/png'].includes(file.type)) throw new Error('画像形式がサポートされていません')
        const reader = new FileReader()
        reader.onload = (e: any) => setCurrentImgSrc(e.target.result)
        reader.readAsDataURL(file)
    }, [currentFormData])

    const onSubmit = React.useCallback(async () => {
        if (!(currentFormData && time && user)) return
        const fileList: FileList = currentFormData.image
        const file = fileList[0]
        if (!['image/jpeg', 'image/png'].includes(file.type)) throw new Error('画像形式がサポートされていません')
        const imageRef = storageRef.child(`images/${file.name.split('.')[0]}_${Date.now()}.jpg`)
        await imageRef.put(file)
        const imageUrl = await imageRef.getDownloadURL()

        const uniqDocRef = db.collection(COLLECTIONS.POSTS).doc()
        const uniqUrl = `${BASE_OGP_URL}${uniqDocRef.id}`
        const postData: PostType = {
            id: uniqDocRef.id,
            user: {
                uid: user.uid,
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
            },
            title: currentFormData.title,
            description: currentFormData.description ?? '',
            isOpen: true,
            createDate: time,
            updateDate: time,
            url: uniqUrl,
            imageUrl,
            side,
            timestamp: Date.now(),
        }

        await uniqDocRef.set(postData).catch(error => {
            console.error(error)
        })
        setPostUrl(uniqUrl)
    }, [currentFormData, db, side, storageRef, time, user])

    const onBack = React.useCallback(() => {
        reset()
        setCurrentFormData(null)
        setTime(null)
        setCurrentImgSrc(null)
    }, [reset])

    const innerElement = React.useMemo(() => {
        return (
            <Wrapper>
                {user ? (
                    !postUrl ? (
                        !(currentFormData && currentImgSrc && time) ? (
                            <form onSubmit={handleSubmit(onRegister)}>
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
                                <ConfirmButton width={'400px'} height={'80px'} onClick={handleSubmit(onRegister)}>
                                    内容確認
                                </ConfirmButton>
                                <Link href={'/'}>
                                    <BackButton width={'400px'} height={'80px'} styleType="cancel">
                                        戻る
                                    </BackButton>
                                </Link>
                            </form>
                        ) : (
                            <Confirm
                                title={currentFormData.title}
                                description={currentFormData.description}
                                imgUrl={currentImgSrc}
                                updateDate={time}
                                onSubmit={onSubmit}
                                onBack={onBack}
                                user={user}
                                side={side}
                            />
                        )
                    ) : (
                        <Result url={postUrl} />
                    )
                ) : (
                    <RegisterLogin />
                )}
            </Wrapper>
        )
    }, [
        currentFormData,
        currentImgSrc,
        errors.title,
        handleSubmit,
        onBack,
        onSubmit,
        postUrl,
        register,
        side,
        time,
        user,
    ])

    return (
        <Main>
            {side === 'help' ? (
                <Tab leftContent={innerElement} tabSide={'left'} />
            ) : (
                <Tab rightContent={innerElement} tabSide={'right'} />
            )}
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

const Title = styled(ThemeTitle)`
    margin-bottom: 45px;
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

const ConfirmButton = styled(ThemeButton)`
    margin: 0 auto 50px;
`

const BackButton = styled(Button)`
    margin: 0 auto;
`
