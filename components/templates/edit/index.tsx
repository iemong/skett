import * as React from 'react'
import styled from '@emotion/styled'
import useForm from 'react-hook-form'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import Main from 'components/templates/layouts/Main'
import firebaseApp from 'assets/utils/firebaseApp'
import { COLLECTIONS } from 'assets/constant'
import { PostType } from 'types/index'
import Tab from 'components/organisms/tab'
import Confirm from 'components/organisms/register/confirm'
import Result from 'components/organisms/register/result'
import useLogin from 'components/hooks/useLogin'
import { State as rootState } from 'reducers'
import Button from 'components/atoms/Button'
import ThemeButton from 'components/molecules/theme/ThemeButton'
import ThemeTitle from 'components/molecules/theme/ThemeTitle'
import useModal from 'components/hooks/useModal'
import ThemeHowtoModal from 'components/molecules/theme/ThemeHowtoModal'

type Props = {
    data: PostType
}

const Edit = (props: Props): JSX.Element => {
    const { data } = props

    const db = firebaseApp.firestore()

    const { register, handleSubmit, errors, reset } = useForm()
    const [currentFormData, setCurrentFormData] = React.useState<Record<string, any> | null>(null)
    const [isConfirmed, setIsConfirmed] = React.useState<boolean>(false)

    const { side } = useSelector((state: rootState) => state.rootReducer.tab)

    const user = useLogin()
    const { isShowing, toggle } = useModal()

    const onRegister = (data: Record<string, any>): void => {
        console.log('send', data)
        setCurrentFormData(data)
    }

    const onSubmit = React.useCallback(async () => {
        if (!(currentFormData && user)) return
        const uniqDocRef = db.collection(COLLECTIONS.POSTS).doc(data.id)
        await uniqDocRef
            .update({
                title: currentFormData.title,
                description: currentFormData.description ?? '',
            })
            .catch(error => {
                console.error(error)
            })
        setIsConfirmed(true)
    }, [currentFormData, data, db, user])

    const onBack = React.useCallback(() => {
        reset()
        setCurrentFormData(null)
    }, [reset])

    const innerElement = React.useMemo(() => {
        if (!data) return <>Loading</>
        return (
            <Wrapper>
                {user ? (
                    !isConfirmed ? (
                        !currentFormData ? (
                            <form onSubmit={handleSubmit(onRegister)}>
                                <FormBox>
                                    <Title>{side === 'help' ? '募集を作る' : '支援者になる'}</Title>
                                    <FormTitle>
                                        <TitleLabel htmlFor="title">題名</TitleLabel>
                                        <InputText
                                            type="text"
                                            id="title"
                                            name="title"
                                            defaultValue={data.title}
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
                                            defaultValue={data.description}
                                            placeholder="詳細内容を書いてください"
                                            ref={register}
                                        />
                                    </FormDescription>
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
                                imgUrl={data ? data.imageUrl : ''}
                                updateDate={data.updateDate}
                                onSubmit={onSubmit}
                                onBack={onBack}
                                user={user}
                                side={side}
                                confirmText="変更を確定する"
                            />
                        )
                    ) : (
                        <Result url={data.url} title="編集完了" />
                    )
                ) : (
                    <></>
                )}
            </Wrapper>
        )
    }, [
        currentFormData,
        data,
        errors.title,
        handleSubmit,
        isConfirmed,
        isShowing,
        onBack,
        onSubmit,
        register,
        side,
        toggle,
        user,
    ])

    return (
        <Main>
            {side === 'help' ? (
                <Tab helpContents={innerElement} tabSide={'help'} />
            ) : (
                <Tab supportContents={innerElement} tabSide={'support'} />
            )}
        </Main>
    )
}

export default Edit

const Wrapper = styled.div`
    padding-bottom: 100px;
`

const FormBox = styled.div`
    width: 600px;
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
