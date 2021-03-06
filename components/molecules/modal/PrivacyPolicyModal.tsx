import * as React from 'react'
import styled from '@emotion/styled'
import Modal from 'components/atoms/Modal'

type Props = {
    isShowing: boolean
    toggle: () => void
}

const PrivacyPolicyModal = (props: Props): JSX.Element => {
    const { isShowing, toggle } = props
    return (
        <Modal styleType="default" isShowing={isShowing} onClose={toggle} width={'600px'} height={'60%'}>
            <Inner>
                <Title>プライバシーポリシー</Title>

                <p>
                    一般社団法人FUKKO
                    DESIGN（以下「当団体」といいます。）は、当団体が運営する「スケット」（以下「本サービス」といいます。）における個人情報の取扱いに関し、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
                    <br />
                    なお、本ポリシーにおける用語は、別途定める場合を除き、「 スケット利用規約
                    」及び個人情報の保護に関する法律（平成15年法律第57号）において定義される意味によるものとします。
                </p>

                <p>
                    １．基本方針
                    <br />
                    当団体は、個人情報の保護が社会的責務であることを認識し、個人情報に関する法令及び社内規程等を遵守し、当団体で取り扱う個人情報の取得、利用、管理を適正に行います。
                </p>

                <p>
                    ２．当団体が取得する個人情報について
                    <br />
                    ユーザーが本サービスにログインする場合、Facebookアカウント又はTwitterアカウントに係る認証情報を当団体所定の方法で本サービスに連携する必要があります。当団体は、ユーザーが本サービスにログインした場合、ユーザーがFacebook又はTwitterに登録した氏名・名称、プロフィール画像を取得する場合があります。
                    <br />
                    また、当団体は、ユーザーが本サービス上で「声」を投稿した場合、当該「声」に含まれる個人情報を取得するほか、当該投稿に係る端末情報、位置情報等を収集する場合があります。
                    <br />
                    その他、当団体は、上記のほか、ユーザーから個人情報を含む通知を受領することその他適正な手段により個人情報を取得する場合があります。
                </p>

                <p>
                    ３．利用目的
                    <br />
                    当団体は、本サービスにおいて取得した個人情報を以下に定める目的で利用します。
                    <br />
                    ・ 本サービスの提供、実施
                    <br />
                    ・ 本サービスの改善、機能拡張その他の変更に向けた分析・検討
                    <br />
                    ・ 統計データの作成、分析
                    <br />
                    ・ 新規サービスの検討・開発
                    <br />・ 当団体又は本サービスの宣伝、広告、マーケティング
                </p>

                <p>
                    ４．個人データの取扱いの委託
                    <br />
                    当団体が本サービスに関して個人データの取扱いを第三者に委託した場合、当該個人データの安全管理が図られるよう、当該第三者に対して必要かつ適切な監督を行います。
                </p>

                <p>
                    ５．個人データの第三者提供
                    <br />
                    当団体は、公的機関と連携して発災後の応急対応、復旧、復興を推進するため、本サービスの利用状況を国の機関、地方公共団体、社会福祉協議会その他の公的機関に提供する場合があります。
                    <br />
                    その他、当団体は、あらかじめ本人の同意を得ない限り、第三者に対して個人データを提供しません。ただし、個人情報の保護に関する法律が定める場合（以下に定める場合を含みます。）は、この限りではありません。
                    <br />
                    ・ 法令に基づく場合
                    <br />
                    ・ 人の生命、身体又は財産の保護のために必要がある場合であって、本人の同意を得ることが困難である場合
                    <br />
                    ・
                    公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難である場合
                    <br />
                    ・
                    国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合
                    <br />
                    ・
                    利用目的の達成に必要な範囲内において個人データの取扱いの全部又は一部を委託することに伴い当該個人データを提供する場合
                    <br />・ 合併その他の事由による事業の承継に伴って個人データが提供される場合
                </p>

                <p>
                    ６．個人データの共同利用
                    <br />
                    当団体は、本サービスにおいて取得した個人データの共同利用を行いません。今後、共同利用を行うこととした場合、本ポリシーの中で公表します。
                </p>

                <p>
                    ７．個人データの安全管理等
                    <br />
                    当団体は、第3項において定める利用目的の達成に必要な範囲内において、個人データを正確かつ最新の内容に保つとともに、利用する必要がなくなったときは、当該個人データを遅滞なく消去するよう努めます。
                    <br />
                    また、当団体は、個人データへの不正アクセス、個人情報の紛失、滅失、毀損、改ざん、漏えいなどを防止するため、セキュリティシステムの維持・管理体制の整備・従業員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行います。
                </p>

                <p>
                    ８．保有個人データの開示・訂正等
                    <br />
                    当団体は、保有個人データについて、法令に従い、本人又はその代理人からの利用目的の通知、開示、変更等（内容の訂正、追加又は削除）、利用停止等（利用の停止又は消去）、第三者への提供の停止の求めに対応いたします。これらを希望される場合、末尾のお問合せ先までご連絡下さい。
                </p>

                <p>
                    ９．統計的な解析等
                    <br />
                    当団体は、本サービスの改善、発災後の応急対応、復旧、復興の推進等を目的として、本サービスにおいて取得した個人情報について統計的な解析を行い、かかる解析結果を個人が判別できない態様で統計情報として利用し、または第三者に提供する場合があります。
                </p>

                <p>
                    10．本ポリシーの変更
                    <br />
                    当団体は、個人情報の取扱いに関する運用を適宜見直し、継続的な改善に努め、必要に応じて本ポリシーを変更いたします。
                    <br />
                    当団体が本ポリシーを変更した場合、変更後の内容を公表します。
                </p>

                <p>
                    11．お問い合わせ窓口
                    <br />
                    個人情報の取扱いに関するご意見、ご質問、苦情のお申出その他お問合せは、下記の窓口までお願いいたします。
                    <br />
                    一般社団法人FUKKO DESIGN
                    <br />
                    住所：〒150-0042　東京都渋谷区宇田川町16-8　渋谷センタービル３F
                    <br />
                    E-mail： fukko-skett@fukko-design.jp
                </p>

                <p>以上</p>
            </Inner>
        </Modal>
    )
}

export default PrivacyPolicyModal

const Inner = styled.section`
    padding: 0 40px;
    & > p {
        font-size: 20px;
        margin-bottom: 32px;
        line-height: 1.5;
    }
`

const Title = styled.h2`
    margin-bottom: 32px;
    text-align: center;
    font-size: 24px;
`
