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
import useModal from 'components/hooks/useModal'
import ThemeHowtoModal from 'components/molecules/theme/ThemeHowtoModal'
import makeOgp, { exportBlob } from 'assets/utils/makeOgp'

const FUKKO_DESIGN_UID = 'UeR6nHmPLKZPyIuR1yrA9d0be9t1'

const Register = (): JSX.Element => {
    const db = firebaseApp.firestore()
    const storage = firebaseApp.storage(STRAGE_BACKET)
    const storageRef = storage.ref()

    const { register, handleSubmit, errors, reset } = useForm()
    const [currentFormData, setCurrentFormData] = React.useState<Record<string, any> | null>(null)
    const [time, setTime] = React.useState<string | null>(null)
    const [currentImgSrc, setCurrentImgSrc] = React.useState<string | null>(null)
    const [postUrl, setPostUrl] = React.useState('')
    const [isConsent, setIsConsent] = React.useState<boolean | null>()

    const { side } = useSelector((state: rootState) => state.rootReducer.tab)

    const user = useLogin()
    const { isShowing, toggle } = useModal()

    const isFukkoDesign = React.useMemo(() => {
        if (user) {
            return user.uid === FUKKO_DESIGN_UID
        }
        return false
    }, [user])

    const imageRequired = React.useMemo(() => {
        return isFukkoDesign === false
    }, [isFukkoDesign])

    const onChangeFileInput = React.useCallback((event: React.FormEvent<HTMLInputElement>) => {
        const { files } = event.target as HTMLInputElement
        const file = files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (e: any) => setCurrentImgSrc(e.target.result)
            reader.readAsDataURL(file)
        }
    }, [])

    const onRegister = (data: Record<string, any>): void => {
        setCurrentFormData(data)
        const now = DateTime.local().toString()
        setTime(now)
    }

    React.useEffect(() => {
        setIsConsent(localStorage.getItem('isConsent') === 'true')
    }, [])

    React.useEffect(() => {
        if (!currentFormData) return
        const fileList: FileList = currentFormData.image
        const file = fileList[0]
        if (file) {
            if (!['image/jpeg', 'image/png'].includes(file.type)) throw new Error('画像形式がサポートされていません')
            const reader = new FileReader()
            reader.onload = (e: any) => setCurrentImgSrc(e.target.result)
            reader.readAsDataURL(file)
        }
    }, [currentFormData])

    const onSubmit = React.useCallback(async () => {
        if (!(currentFormData && time && user)) return
        const fileList: FileList = currentFormData.image
        const file = fileList[0]
        if (file) {
            if (!['image/jpeg', 'image/png'].includes(file.type)) throw new Error('画像形式がサポートされていません')
        }
        const now = Date.now()
        const postType = isFukkoDesign ? 'organization' : side

        const imageUrl = await (async () => {
            if (file) {
                const imageRef = storageRef.child(`images/${file.name.split('.')[0]}_${now}.jpg`)
                await imageRef.put(file)
                return await imageRef.getDownloadURL() as Promise<string>
            }
            return null
        })()

        const ogpImageUrl = await (async () => {
            if (file) {
                const ogpImageRef = storageRef.child(`images/${file.name.split('.')[0]}_${now}_ogp.jpg`)
                if (!currentImgSrc) return
                const ogpCanvas = await makeOgp({
                    imageData: currentImgSrc,
                    postType: postType,
                    text: currentFormData.title,
                })
                const blob = await exportBlob(ogpCanvas)
                if (!blob) return
                await ogpImageRef.put(blob)
                return await ogpImageRef.getDownloadURL()
            }
            return null
        })()

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
            ogpImageUrl,
            side: postType,
            timestamp: Date.now(),
            applicants: [],
            isEnd: false,
            isDeleted: false,
        }

        await uniqDocRef.set(postData).catch(error => {
            console.error(error)
        })
        setPostUrl(uniqUrl)
    }, [currentFormData, currentImgSrc, db, side, storageRef, time, user])

    const onBack = React.useCallback(() => {
        reset()
        setCurrentFormData(null)
        setTime(null)
        setCurrentImgSrc(null)
    }, [reset])

    const innerElement = React.useMemo(() => {
        return (
            <Wrapper>
                {user && isConsent ? (
                    !postUrl ? (
                        !(currentFormData && (imageRequired ? currentImgSrc : true) && time) ? (
                            <form onSubmit={handleSubmit(onRegister)}>
                                <FormBox>
                                    <Title>{side === 'help' ? '募集を作る' : '支援者になる'}</Title>
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
                                        {currentImgSrc && (
                                            <ImagePreview>
                                                <Preview src={currentImgSrc} alt="" />
                                            </ImagePreview>
                                        )}
                                        <ImageLabelBox htmlFor="image">ファイルを選択</ImageLabelBox>
                                        <InputImage
                                            type="file"
                                            id="image"
                                            name="image"
                                            accept="image/jpeg, image/png"
                                            ref={register({ required: imageRequired })}
                                            onChange={onChangeFileInput}
                                        />
                                    </FormImage>
                                </FormBox>
                                <Howto onClick={toggle}>使いかた</Howto>
                                <ThemeHowtoModal isShowing={isShowing} toggle={toggle} />
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
                    <RegisterLogin
                        title={side === 'help' ? '募集を作る' : '支援者になる'}
                        onConsent={() => {
                            setIsConsent(true)
                        }}
                        hasUser={!!user}
                        user={user}
                    />
                )}
            </Wrapper>
        )
    }, [
        currentFormData,
        currentImgSrc,
        errors.title,
        handleSubmit,
        isConsent,
        isShowing,
        onBack,
        onSubmit,
        postUrl,
        register,
        side,
        time,
        toggle,
        user,
    ])

    return (
        <Main>
            <Tab tabSide={side} helpContents={innerElement} supportContents={innerElement} />
        </Main>
    )
}

export default Register

const Wrapper = styled.div`
    padding-bottom: 100px;
`

const FormBox = styled.div`
    width: 600px;
    min-height: 950px;
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
    font-size: 20px;
    background-color: #efefef;
    text-indent: 1em;
    font-family: 'Noto Sans JP', sans-serif;
`

const TextArea = styled.textarea`
    width: 520px;
    min-height: 320px;
    font-size: 20px;
    background-color: #efefef;
    padding: 17px 22px;
    box-sizing: border-box;
    font-family: 'Noto Sans JP', sans-serif;
`

const ImagePreview = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
`

const Preview = styled.img`
    max-width: 100%;
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
