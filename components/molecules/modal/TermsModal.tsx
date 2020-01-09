import * as React from 'react'
import Modal from 'components/atoms/Modal'

type Props = {
    isShowing: boolean
    toggle: () => void
}

const TermsModal = (props: Props): JSX.Element => {
    const { isShowing, toggle } = props
    return (
        <Modal styleType="default" isShowing={isShowing} onClose={toggle} width={'600px'} height={'60%'}>
            <React.Fragment>
                <p>スケット利用規約</p>

                <p>
                    一般社団法人FUKKO
                    DESIGN（以下「FD」という。）は、FDが運営する「スケット」（以下「本サービス」といいます。）に関し、以下のとおり「スケット利用規約」（以下「本規約」といます。）を定めます。
                </p>

                <p>
                    第1条 （定義）
                    <br />
                    本規約では、以下の各号に定める各用語を、それぞれ以下に定める意味で用いるものとします。
                    <br />
                    (1)
                    「『声』」とは、ログインユーザー（第8号において定義します。以下同じ。）が本サービスを利用して投稿したコンテンツ（文章、画像、動画を含みます。）をいいます。「声」は、現地ユーザー（第4号において定義します。）が投稿する「『現地の声』」と支援ユーザー（第6号において定義します。以下同じ。）が投稿する「『支援の声』」に区別されます。
                    <br />
                    (2) 「現地」とは、被災地、被災者の現住地、現在地その他の災害に関係する場所を総称していいます。
                    <br />
                    (3) 「現地ニーズ」とは、現地で存在する支援活動（第5号において定義します。）の需要をいいます。
                    <br />
                    (4)
                    「現地ユーザー」とは、ログインユーザーのうち、現地ニーズの解決を目的として、本サービスを利用して「現地の声」を投稿し、支援ユーザーとのマッチングを実現することを希望する者をいいます。
                    <br />
                    (5) 「支援活動」とは、発災後の応急対応、復旧、復興に係る活動をいいます。
                    <br />
                    (6)
                    「支援ユーザー」とは、ログインユーザーのうち、現地で支援活動を行うことを目的として、本サービスを利用して「支援の声」を投稿し、現地ユーザーとのマッチングを実現することを希望する者をいいます。
                    <br />
                    (7) 「ユーザー」とは、本サービスを利用する者をいいます。
                    <br />
                    (8)
                    「ログインユーザー」とは、ユーザーのうち、本規約の定めに従い本サービスにログインした者をいいます。
                </p>

                <p>
                    第2条 （適用）
                    <br />
                    1. 本規約は、FDとユーザーとの間の本サービスの利用に関する権利義務関係を定めることを目的とします。
                    <br />
                    2.
                    FDがFDのウェブサイト又は本サービス上で記載する本サービスの利用に関するルール、ガイドラインその他の事項は、本規約の一部を構成するものとします。
                    <br />
                    3.
                    本規約の内容と前項に定めるルール等が矛盾又は抵触する場合、本規約の内容が優先して適用されるものとします。
                    <br />
                    4.
                    ユーザーは、本規約の内容に同意した上で本サービスを利用するものとします。本規約の内容は、FDとユーザーとの間の本サービスの利用に関する契約（以下「本契約」といいます。）の内容を構成するものとします。
                    <br />
                    5.
                    FDは、いつでも、任意の理由で、本規約を変更することができるものとします。FDが本規約を変更する場合、本サービス上に記載する方法その他の合理的な方法で変更後の内容を公表するものとします。
                    <br />
                    6.
                    前項の定めに従い本規約が変更された後にユーザーが本サービスを利用した場合、ユーザーは変更後の本規約の内容に合意したものとみなされ、本契約の内容も、本規約の変更に従い変更されるものとします。
                </p>

                <p>
                    第3条 （本サービスの目的）
                    <br />
                    本サービスは、現地ニーズに適合した支援活動を促進し、もって、発災後の応急対応、復旧、復興を推進するため、支援活動の契機となりうる支援ユーザーと現地ユーザーのマッチングを実現することを目的としたサービスです。
                </p>

                <p>
                    第4条 （ログイン）
                    <br />
                    1.
                    ユーザーは、Facebookアカウント又はTwitterアカウントに係る認証情報をFD所定の方法で本サービスに連携する方法により、本サービスにログインすることができます。
                    <br />
                    2.
                    ユーザーは、前項に定める方法以外の方法で本サービスにログインすることはできません。なお、ユーザーによるFacebook又はTwitter上のアカウント登録は、その責任及び費用負担の下で行われるものとし、FDはかかるアカウント登録に一切関知せず、何らの責任を負うものではありません。
                </p>

                <p>
                    第5条 （「声」の投稿）
                    <br />
                    1.
                    現地ユーザー又は支援ユーザーは、FD所定の方法により、本サービス上で「声」を投稿することができるものとします。なお、本サービス上、現地ユーザーの「声」は「現地の声」として、支援ユーザーの「声」は「支援の声」として取り扱われます。
                    <br />
                    2.
                    現地ユーザー又は支援ユーザーは、その投稿する「声」の内容について、(i)虚偽又は誇大であること、(ii)不明確であるなど誤解を招く内容であること、(iii)現地ニーズ又は支援活動の重要な事実又は前提条件などが記載されていないことなど不適切な点が存在する場合、現地ユーザーと支援ユーザーとの間の認識齟齬やトラブル等を招く可能性があることを理解し、不適切な内容の「声」を投稿しないものとします。
                    <br />
                    3.
                    現地ユーザーは、「現地の声」の内容として、支援活動に係る対価又は費用負担の有無（金額の上限を設定する場合はその上限）を明示するものとします。
                    <br />
                    4.
                    支援ユーザーは、「支援の声」の内容として、支援活動に係る対価又は費用負担の要否（金額の下限を設定する場合はその下限）を明示するものとします。
                    <br />
                    5.
                    現地ユーザー又は支援ユーザーは、自らが投稿した「声」について、以下の事項を表明し、保証するものとします。
                    <br />
                    (1) 「声」の内容が虚偽又は誇大にわたるものでないこと。
                    <br />
                    (2)
                    「声」の内容が第三者の権利又は利益（肖像権、プライバシー権、名誉、信用その他の人格権、著作権その他の知的財産権を含みます。）を侵害するものでないこと。
                    <br />
                    6.
                    [現地ユーザー又は支援ユーザーは、「声」を投稿した後であっても、FD所定の方法により自らが投稿した「声」の掲載をキャンセル
                    [し、または「声」の内容を変更]することができるものとします。]
                    <br />
                    7.
                    現地ユーザー又は支援ユーザーは、(i)現地ニーズが解決した場合、(ii)支援活動を行うことが著しく困難になった場合、(iii)その他の自らが投稿した「声」の内容に係る重要な事実又は前提条件が変更となった場合、速やかに「声」の掲載をキャンセル[し、または「声」の内容を変更]するものとします。
                    <br />
                    8.
                    FDは、「声」が本規約の定めに違反し、または違反するおそれがあると判断した場合、いつでも、「声」の掲載を中断又は中止することができるものとします（ただし、FDはかかる義務を負うものではありません）。なお、FDは、「声」の掲載を中断又は中止した理由の開示を求められた場合であっても、これを開示することを要しないものとします。
                </p>

                <p>
                    第6条 （マッチングの申込み）
                    <br />
                    1.
                    現地ユーザーは「支援の声」に対し、支援ユーザーは「現地の声」に対し、FD所定の方法により、マッチングの申込みを行うことができるものとします。[なお、支援ユーザーは、自己の経験、知見及び技量に照らし、現地ニーズの解決に貢献できると合理的に判断する場合に限り、「現地の声」に対するマッチングの申込みを行うものとします。]
                    <br />
                    2.
                    現地ユーザー及び支援ユーザーは、前項の定めに従いマッチングの申込みを行った後であっても、当該申込みに係る諾否の判断がなされる前に限り、FD所定の方法により、当該申込みをキャンセルすることができるものとします。
                    <br />
                    3.
                    現地ユーザー又は支援ユーザーは、第1項の定めに従いマッチングの申込みを行った後、(i)現地ニーズが解決した場合、(ii)支援活動を行うことが著しく困難になった場合、(iii)その他の当該申込みに係る重要な事実又は前提条件が変更となった場合、前項の定めに従い、速やかに当該申込みをキャンセルするものとします。
                </p>

                <p>
                    第7条 （申込みに対する諾否）
                    <br />
                    1.
                    マッチングの申込みを受けた現地ユーザー又は支援ユーザーは、自己の判断及び責任の下で、当該申込みに対して応諾するか否かを判断した上で、FD所定の方法により、当該申込みに対して応諾し、又は拒否することができるものとします。
                    <br />
                    2.
                    FDは、「[現地の]声」に関してマッチングが成立した場合（マッチングの申込みが応諾された場合をいいます。以下同じ。）、(i)当該「声」に関して募集が終了した旨を表示すること、(ii)募集中の「声」の一覧から消去すること、(iii)その他の措置をとることができるものとします。
                    <br />
                    3.
                    現地ユーザー又は支援ユーザーは、「声」に関してマッチングが成立した場合であっても、第[5]条第[6]項の定めに従い「声」の掲載をキャンセルしない限り、自らが投稿した「声」が本サービス上で掲載され続けることに同意するものとします。
                    <br />
                    4.
                    ユーザーは、「声」に関してマッチングが成立した場合であっても、現地ユーザー及び支援ユーザーとの間で契約の成立その他の権利義務が何ら発生するものではないことを確認するものとします。
                </p>

                <p>
                    第8条 （自己責任の原則）
                    <br />
                    1.
                    ユーザーは、自らの判断及び責任の下で、マッチング成立後の他のユーザーとの連絡、現地における支援活動又はその受入れ、取引等を行うものとし、FDはこれらの事項について一切関知するものではなく、何らの責任を負うものではありません。
                    <br />
                    2.
                    ユーザーは、マッチングの成立に起因又は関連し、ユーザー間でクレーム、紛争等が発生した場合であっても、当事者間で、かつ、自らの責任及び費用負担の下でこれを解決するものとし、FDに一切の迷惑又は損害等を及ぼさないものとします。
                </p>

                <p>
                    第9条 （禁止行為）
                    <br />
                    1. ユーザーは、第3条の定める本サービスの目的以外の目的で本サービスを利用してはならないものとします。
                    <br />
                    2.
                    ユーザーは、本サービスの利用にあたり、以下の各号のいずれかに該当する行為をしてはならないものとします。
                    <br />
                    (1) 発災後の応急対応、復旧、復興に無関係な行為（以下に定める行為を含みます。）
                    <br />
                    1 面識のない異性との出会いや交際を目的とする行為
                    <br />
                    2 性行為やわいせつな行為を目的とする行為
                    <br />
                    3 宗教活動又は宗教団体への勧誘を目的とした行為
                    <br />
                    4 政治活動、選挙活動又は政治団体への勧誘を目的とした行為
                    <br />
                    5 情報商材、金融商品等の営業、宣伝、広告、勧誘その他の営利行為（支援活動に該当する行為を除きます。）
                    <br />
                    6 第三者に対する嫌がらせや誹謗中傷を目的とする行為
                    <br />
                    (2) 不適切な表現（以下に定める行為を含みます。）を用いた行為
                    <br />
                    1 わいせつな表現又は青少年に有害な表現
                    <br />
                    2 残虐な表現又は暴力的な表現
                    <br />
                    3 民族、国籍、宗教、人種、性別、年齢等に関する差別を誘発、助長する表現
                    <br />
                    4 犯罪、自殺、薬物使用等の勧誘、誘発、助長にあたる表現
                    <br />
                    5 その他第三者に不快感を及ぼすおそれがあるとFDが判断する表現
                    <br />
                    (3) 他のユーザーに関する個人情報等を収集し、又は蓄積する行為
                    <br />
                    (4) 他者になりすます行為
                    <br />
                    (5) 本サービスの運営を妨害するおそれのある行為（以下に定める行為を含みます。）
                    <br />
                    1 コンピューター・ウィルスその他の有害なコンピューター・プログラムを含む情報を送信する行為
                    <br />
                    2 本サービスに関するサーバー又はネットワークを破壊し、又は妨害する行為
                    <br />
                    3 本サービスに関する情報を破壊し、又は改ざんする行為
                    <br />
                    4 FDが定める一定のデータ容量以上のデータを送信する行為
                    <br />
                    (6)
                    FD又はFDにライセンスを許諾している者の知的財産権を侵害するおそれのある行為（逆アセンブル、逆コンパイル、リバースエンジニアリングを含みます。）
                    <br />
                    (7) 本契約（本規約の内容を含みます。）に違反する行為
                    <br />
                    (8) 法令に違反し、犯罪行為に関連し、又は公序良俗に反する行為
                    <br />
                    (9)
                    第三者の権利又は利益（肖像権、プライバシー権、名誉、信用その他の人格権、著作権その他の知的財産権を含みます。）を侵害する行為
                    <br />
                    (10) その他FDが不適切と判断する行為
                    <br />
                    3.
                    FDは、前二条に定める行為に該当し、又は該当するおそれがあると判断した場合、ユーザーに事前に通知することなく、(i)当該ユーザーによる本サービスの利用停止、(ii)本サービス上に送信又は投稿された情報の全部又は一部の削除、(iii)その他の措置を講じることができるものとします。本項に基づきFDが行った措置によりユーザーに損害が生じた場合でも、FDはこれを賠償する責任を一切負わないものとします。
                </p>

                <p>
                    第10条 （本サービスの停止等）
                    <br />
                    1.
                    FDは、以下のいずれかに該当する場合には、ユーザーに事前に通知することなく、本サービスの利用の全部又は一部を停止又は中断することができるものとします。
                    <br />
                    (1) 本サービスにかかるコンピューター・システムの点検又は保守作業を行う場合
                    <br />
                    (2) コンピューター、通信回線等が事故により停止した場合
                    <br />
                    (3) 火災、停電、天災地変などの不可抗力により本サービスの運営ができなくなった場合
                    <br />
                    (4)
                    本サービスと連携している外部サービスに関し、トラブル、サービス提供の中断若しくは停止、本サービスとの連携の停止又は仕様変更等が生じた場合
                    <br />
                    (5) その他FDが本サービスの利用の停止又は中断を必要と判断した場合
                    <br />
                    2.
                    FDは、いつでも、FDの都合により、本サービスの提供を終了することができるものとします。この場合、FDは本サービス上で公表する方法その他の方法により、ユーザーに事前に通知するものとします。
                    <br />
                    3.
                    本条に基づきFDが行った措置によりユーザーに損害が生じた場合でも、FDはこれを賠償する責任を一切負わないものとします。
                </p>

                <p>
                    第11条 （設備の負担等）
                    <br />
                    1.
                    ユーザーは、その責任及び費用負担の下で、本サービスを利用するために必要なコンピューター、ソフトウェア、通信機器、通信回線その他の通信環境等の準備及び維持を行うものとします。
                    <br />
                    2.
                    ユーザーは、その責任及び費用負担の下で、コンピューター・ウィルスの感染、不正アクセス、情報漏洩の防止等のセキュリティ対策を自らの講じるものとします。
                </p>

                <p>
                    第12条 （権利帰属）
                    <br />
                    1.
                    ユーザーは、(i)本サービスに関する所有権及び知的財産権はすべてFD又はFDにライセンスを許諾している者に帰属していること、及び
                    (ii)本契約において明示されているものを除き、FDがユーザーに対して本サービスに関する知的財産権を譲渡し、又はその使用を許諾するものではないことに同意するものとします。
                    <br />
                    2.
                    前項の定めにかかわらず、ユーザーが投稿又は送信を行った文章、画像、動画その他のデータ（「声」を含みます。）の知的財産権はユーザーに帰属するものとします。ただし、ユーザーは、FDに対し、(i)本サービスの提供、(ii)FD又は本サービスの広告又は宣伝を目的として当該データを無償で利用することを許諾するものとし、他のユーザーに対し、本サービスを利用して当該データをSNS等で周知することを許諾するものとします。また、ユーザーはFD及び他のユーザーに対して当該データに関する著作人格権を行使しないものとします。
                </p>

                <p>
                    第13条 （情報解析等）
                    <br />
                    FDは、本サービスの改善等を目的として、ユーザーに関する情報及び本サービスの利用に関する情報を取得し、統計的な解析を行い、かかる解析結果を個人が判別できない態様で統計情報として利用することができるものとします。
                </p>

                <p>
                    第14条 （保証の否認）
                    <br />
                    1.
                    FDは、本サービスについて、特定の目的への適合性、有用性、完全性、継続性等を含め、一切保証をしないものとする。
                    <br />
                    2.
                    FDは、本サービス上のコンテンツ（「声」を含みます。）について、正確性、完全性及びコンピューター・ウィルス等有害なものを含まないこと等を含め、一切保証しないものとする。
                    <br />
                    3.
                    FDは、本サービスに対する不正アクセス・ハッキング等のサイバー攻撃が行われず、また、本サービスに関するソフトウェア又はハードウェアにバグを含む障害等が生じないことについて、一切保証しないものとする。
                    <br />
                    4.
                    本サービスは、外部サービスとの連携の完全性、継続性等について何ら保証するものではなく、本サービスが外部サービスとの連携を中止又は中断した場合でも、FDは一切の責任を負わないものとする。
                </p>

                <p>
                    第15条 （免責）
                    <br />
                    1.
                    FDは、本サービスに起因又は関連してユーザーが被った損害について、一切の責任を負わないものとします。ただし、FDの故意又は重過失に基づく場合又は本契約が消費者契約法に定める消費者契約にあたる場合はこの限りではありません。
                    <br />
                    2.
                    前項ただし書に定める場合であっても、FDは、FDの故意又は過失により直接かつ通常生じたユーザーの損害に限って責任を負うものとし、特別損害、間接損害、逸失利益等については責任を負わないものとします。また、FDがユーザーに対して負う賠償責任は、[10,000]円を上限とします。
                </p>

                <p>
                    第16条 （本契約上の地位の譲渡等）
                    <br />
                    ユーザーは、FDの書面による事前の承諾なく、本契約上の地位又は本規約に基づく権利若しくは義務を第三者に譲渡し、又は担保に供することはできないものとします。
                </p>

                <p>
                    第17条 （反社会的勢力の排除について）
                    <br />
                    1.
                    ユーザーは、現在、暴力団、暴力団員、暴力団員でなくなった時から5年を経過しない者、暴力団準構成員、暴力団関係企業、総会屋等、社会運動等標ぼうゴロ又は特殊知能暴力集団等、その他これらに準ずる者（以下、これらを「暴力団員等」といいます。）に該当しないこと、及び、次の各号のいずれにも該当しないことを表明し、かつ将来にわたっても該当しないことを確約します。
                    <br />
                    (1) 暴力団員等が経営を支配していると認められる関係を有すること。
                    <br />
                    (2) 暴力団員等が経営に実質的に関与していると認められる関係を有すること。
                    <br />
                    (3)
                    自己、自社若しくは第三者の不正の利益を図る目的又は第三者に損害を加える目的をもってするなど、不当に暴力団員等を利用していると認められる関係を有すること。
                    <br />
                    (4)
                    暴力団員等に対して資金等を提供し、又は便宜を供与するなどの関与をしていると認められる関係を有すること。
                    <br />
                    (5) 役員又は経営に実質的に関与している者が暴力団員等と社会的に非難されるべき関係を有すること。
                    <br />
                    2.
                    ユーザーは、自ら又は第三者を利用して次の各号のいずれにも該当する行為を行わないことを確約するものとします。
                    <br />
                    (1) 暴力的な要求行為
                    <br />
                    (2) 法的な責任を超えた不当な要求行為
                    <br />
                    (3) 取引に関して、脅迫的な言動をし、又は暴力を用いる行為
                    <br />
                    (4) 風説を流布し、偽計を用い又は威力を用いてFDの信用を毀損し、又はFDの業務を妨害する行為
                    <br />
                    (5) その他前各号に準ずる行為
                    <br />
                    3.
                    ユーザーが、暴力団員等若しくは第１項各号のいずれかに該当するとFDが判断し、若しくは前項各号のいずれかに該当する行為をし、又は第１項の規定に基づく表明・確約に関して虚偽の申告をしたことが判明した場合、FDは、ユーザーに対して何らの催告をすることなく本契約を解除することができるものとします。
                    <br />
                    4.
                    FDが前項の定めに従い本契約を解除したことでユーザーに損害が生じたとしても、FDはこれを賠償する責任を一切負わないものとします。
                </p>

                <p>
                    第18条 （準拠法及び管轄裁判所）
                    <br />
                    1.
                    本契約（本規約の定めを含みます。）の準拠法は日本法とし、本契約の内容は日本法に従い解釈されるものとします。
                    <br />
                    2.
                    本契約に起因又は関連する一切の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
                    <br />
                    以上
                </p>
            </React.Fragment>
        </Modal>
    )
}

export default TermsModal
