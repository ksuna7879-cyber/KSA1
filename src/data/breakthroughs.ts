import { TechBreakthrough } from "../types";

export const BREAKTHROUGHS: TechBreakthrough[] = [
  // 1. Paleolithic
  {
    id: "fire-cooking",
    name: "불의 통제와 화덕 요리",
    nameEn: "Control of Fire & Culinary Hypothesis",
    epochId: "paleolithic",
    yearApprox: "약 40만 년 전",
    tagline: "에너지의 인공적 전유와 화덕 주위의 서사(Storytelling)의 탄생",
    overview:
      "불의 통제는 단순한 열원 확보를 넘어 인간 신체와 집단 심성을 바꾼 최초의 통섭적 혁명이었습니다. 익힌 음식은 소화 흡수율을 높여 인류의 뇌 용량을 비약적으로 팽창시켰으며, 어둠을 몰아낸 모닥불 주위에서 신화와 구비 전승이 탄생했습니다.",
    iconName: "Flame",
    consiliencePillars: {
      scienceTech:
        "화학적 산화 반응을 지속시키는 연료 제어 기술. 열역학적 에너지를 외부 도구로서 사용한 최초의 사례로, 단백질과 전분의 변성을 통한 생체 소화 효율 80% 이상 증대.",
      socioPolitics:
        "불씨를 지키고 분배하는 과정에서 원초적 역할 분담과 위계 발생. 포식자로부터 안전한 야영지 경계선(안전 구역)을 형성하여 최초의 사유 공간 관념 형성.",
      anthropologyLife:
        "소화기관 길이 단축과 치아 크기 감소, 뇌 부피 급증. 해가 진 뒤에도 활동 시간이 4~5시간 연장되면서 야간 수면 패턴의 분절화 및 불 주위 집단 결속 강화.",
      philosophyWorldview:
        "자연(맹수와 밤)에 대한 인간의 우위감 획득. 불을 신성한 정화의 힘이자 조상신과 소통하는 제의적 매개체로 숭배하는 애니미즘·프로메테우스 신화의 기원.",
      artSymbolism:
        "숯과 재를 안료로 사용한 최초의 동굴 채색 예술. 모닥불의 명멸하는 그림자 아래에서 춤과 몸짓, 주술적 노래를 결합한 종합적 퍼포먼스 제의 탄생.",
      derivedCulture:
        "캠핑 파이어 토크, 바비큐 의례, 모닥불 멍때리기(불멍), '따뜻한 온기'를 가족적 연대감의 상징으로 인식하는 현대인의 무의식적 정서.",
    },
    causalChain: [
      {
        step: 1,
        domain: "자연과학·열역학",
        title: "화학 반응의 인위적 지속",
        description: "마찰열과 불씨 보존으로 외부 열원 통제 성공",
      },
      {
        step: 2,
        domain: "생물·인류학",
        title: "조리(Cooking)와 뇌 용량 팽창",
        description: "소화 에너지 절약분이 뇌 신경세포 발달에 집중 투입",
      },
      {
        step: 3,
        domain: "사회·생활",
        title: "원형 야영지와 야간 활동",
        description: "일몰 후 4시간 연장된 대화 시간을 공유하는 불 주위 집단화",
      },
      {
        step: 4,
        domain: "인지·언어",
        title: "구비 설화와 상상의 공유",
        description: "물리적 현실 너머 신화, 영웅담, 사후세계를 언어로 구축",
      },
      {
        step: 5,
        domain: "예술·상징",
        title: "동굴 벽화와 그림자 제의",
        description: "목탄 안료와 횃불 빛을 이용한 라스코 동굴의 주술적 시각 예술",
      },
      {
        step: 6,
        domain: "현대 문화",
        title: "모닥불 정서와 미식 문화",
        description: "캠프파이어 연대감, '불맛'을 향한 본능적 미각 애착",
      },
    ],
    quote: {
      text: "요리는 인간을 인간으로 만든 결정적 기술이다. 우리는 불 주위에 둘러앉아 이야기를 나누며 비로소 '우리'가 되었다.",
      author: "리처드 랭엄 (Richard Wrangham)",
      work: "요리 본능 (Catching Fire)",
    },
    modernEchoes: [
      "모닥불이나 난롯가에 모여 유대를 다지는 캠핑 및 '불멍' 트렌드",
      "가열 조리 방식의 다양화가 만들어낸 전 세계 퀴진(Cuisine)의 미식 문화",
      "어둠 속 스크린(스마트폰/극장) 주위로 모여드는 현대인의 '신형 모닥불' 심리",
    ],
    dialecticTension:
      "자연계에서 유일하게 외생적 에너지를 통제하여 문명을 세웠으나, 오늘날 화석연료 연소로 인한 기후 위기라는 역설적 부메랑으로 되돌아옴.",
  },

  // 2. Neolithic
  {
    id: "neolithic-writing",
    name: "관개 농경과 쐐기 문자의 발명",
    nameEn: "Irrigation Agriculture & Cuneiform Writing",
    epochId: "neolithic",
    yearApprox: "기원전 3500년경",
    tagline: "잉여 곡물의 계량에서 법전과 관료제, 역사적 기억의 축적으로",
    overview:
      "메소포타미아와 나일강 유역의 관개 농업은 잉여 수확물을 낳았고, 이를 저장·배분하기 위해 점토판 위에 새긴 기호가 문자가 되었습니다. 문자는 인간 두뇌의 생물학적 기억 한계를 초월하여 법전, 회계, 제국적 관료 조직을 탄생시켰습니다.",
    iconName: "FileText",
    consiliencePillars: {
      scienceTech:
        "수로 토목공학 및 수위 제어 기술과 점토·갈대 첨필을 이용한 영구적 기호 각인 기술. 소리 언어를 시각적 2차원 평면으로 부호화하는 정보 압축 혁신.",
      socioPolitics:
        "물길과 곡물 창고를 독점한 신관 및 국왕 계급의 출현. 최초의 성문법(함무라비 법전), 징세 관료제, 채무 노예제 및 사유재산 소유권 개념의 법제화.",
      anthropologyLife:
        "유목적 이동 생활에서 벽돌 가옥에 갇힌 정주 생활로 이동. 파종과 수확 주기에 맞춘 노동 일과 고착 및 가부장적 상속 제도 형성.",
      philosophyWorldview:
        "기억의 불멸화: '죽은 자의 말'이 기록을 통해 살아있는 자를 지배함. 신들의 뜻을 문자로 해독하고 기록하는 신정일치적 우주관 및 운명론 고착.",
      artSymbolism:
        "구술 언어의 리듬감에서 벗어나 선형적이고 정형화된 기록 예술 태동. 길가메시 서사시와 같은 최초의 영웅 서사 문학 및 기념비적 비석 조각.",
      derivedCulture:
        "영수증, 공증 문서, 계약서, 장부 정리, 학위증서 등 '문서화되지 않은 것은 존재하지 않는다'는 현대 관료제적 문서 신뢰 문화의 원형.",
    },
    causalChain: [
      {
        step: 1,
        domain: "토목·농업",
        title: "티그리스·유프라테스 관개 공사",
        description: "강물의 범람 통제와 대규모 잉여 밀·보리 수확",
      },
      {
        step: 2,
        domain: "경제·회계",
        title: "신전 창고의 물품 계량",
        description: "맥주, 곡물, 가축 두수를 기록하기 위한 물꼬표 점토 토큰 고안",
      },
      {
        step: 3,
        domain: "정보·문자",
        title: "설형문자(쐐기문자)의 추상화",
        description: "사물의 그림에서 음절과 추상적 개념을 표기하는 문자 체계로 진화",
      },
      {
        step: 4,
        domain: "정치·법률",
        title: "함무라비 법전과 성문법",
        description: "자의적 지배 대신 돌기둥에 새겨진 문자로 통치하는 제국 법률 확립",
      },
      {
        step: 5,
        domain: "문학·철학",
        title: "길가메시 서사시와 불멸의 추구",
        description: "생물학적 죽음을 문자의 기록으로 극복하려는 인간의 실존적 고뇌",
      },
      {
        step: 6,
        domain: "현대 제도",
        title: "공공 행정 및 법적 서명",
        description: "계약서 서명, 재무제표, 토지등기부 등 현대 사회의 신뢰 인프라",
      },
    ],
    quote: {
      text: "역사는 문자 기록과 함께 시작된다. 문자는 인간의 두뇌를 생물학적 한계로부터 해방시킨 인공 신경망이었다.",
      author: "새뮤얼 노아 크레이머 (Samuel Noah Kramer)",
      work: "역사는 수메르에서 시작되었다",
    },
    modernEchoes: [
      "인감증명, 공증, 전자서명 등 '기록된 합의'에 의존하는 현대 법치 체계",
      "스프레드시트(Excel)와 회계 장부에 기반한 주식회사 경영 문화",
      "문자 텍스트 중심의 교육과 지식 평가(수능, 자격증 시험) 시스템",
    ],
    dialecticTension:
      "인간의 지식을 시공간 너머로 축적시켰으나, 문해력(Literacy)의 유무가 권력과 신분의 영구적 불평등을 낳는 도구로 작동함.",
  },

  // 3. Bronze/Iron Age
  {
    id: "iron-wheel-axial",
    name: "철기 야금술과 바퀴·축의 시대",
    nameEn: "Iron Metallurgy, Chariot & Axial Age",
    epochId: "metallurgy",
    yearApprox: "기원전 1200년 ~ 기원전 500년",
    tagline: "무기의 대중화와 제국의 팽창, 전 지구적 철학 사상의 동시 폭발",
    overview:
      "고가의 청동과 달리 흔한 철광석을 제련하는 철기 기술은 농업 생산성을 비약시키고 무기를 대중화했습니다. 철제 무기를 든 보병과 바퀴 달린 전차가 일으킨 유례없는 유혈 정복의 충격 속에서, 공자, 붓다, 소크라테스, 이사야가 거의 같은 시기에 인간 윤리와 구원을 묻는 '축의 시대(Axial Age)'를 열었습니다.",
    iconName: "Compass",
    consiliencePillars: {
      scienceTech:
        "1,500℃ 이상의 고온을 내는 송풍 풀무 제련술과 탄소 함량을 조절하는 단조 기술. 바퀴살을 가진 경량 전차와 차축 마찰 저감 기계역학.",
      socioPolitics:
        "소수 귀족의 전차전에서 다수 평민 농민 보병군(호플리테스)으로 군사력 이동. 그리스 민주정치의 맹아 및 춘추전국시대·아케메네스 페르시아 등 광역 제국 팽창.",
      anthropologyLife:
        "산림 벌채를 통한 대규모 개간과 철제 쟁기를 통한 심경(깊이 갈기). 가혹해진 전쟁의 공포와 유민(디아스포라) 발생으로 실존적 불안 급증.",
      philosophyWorldview:
        "축의 시대(Axial Age)의 동시 개화: 기계적 무력의 참화에 맞서 인(仁), 자비, 이성(Logos), 초월적 유일신 신앙 등 보편적 도덕률과 자기 성찰 사상 대두.",
      artSymbolism:
        "비극(Tragedy) 문학과 장대한 영웅 서사시(일리아스, 마하바라타). 철제 정(Chisel)으로 빚어낸 사실적인 대리석 인체 조각(그리스 고전 조각)의 만개.",
      derivedCulture:
        "동양의 유교적 예의범절, 서양의 논증적 토론 문화, 인도의 카르마/윤회 사상 등 2,500년이 지난 오늘날 인류의 윤리적 기틀 지속.",
    },
    causalChain: [
      {
        step: 1,
        domain: "재료·열공학",
        title: "히타이트의 철 제련술 확산",
        description: "목탄 고로와 풀무를 이용해 연철과 강철 대량 생산 성공",
      },
      {
        step: 2,
        domain: "농업·인구",
        title: "철제 쟁기와 식량 폭증",
        description: "단단한 황무지 개간으로 인구 폭발 및 도시 국가 형성",
      },
      {
        step: 3,
        domain: "군사·정치",
        title: "철제 무기와 총력전",
        description: "보병 대량 무장화, 춘추전국시대 및 펠로폰네소스 전쟁 발발",
      },
      {
        step: 4,
        domain: "실존적 충격",
        title: "전쟁의 참상과 전통 규범 붕괴",
        description: "기존의 주술적 의례로 설명할 수 없는 극심한 살육과 혼란",
      },
      {
        step: 5,
        domain: "철학·사상",
        title: "축의 시대(Axial Age) 영성 혁명",
        description: "공자의 인(仁), 석가모니의 연기설, 소크라테스의 문답법 출현",
      },
      {
        step: 6,
        domain: "현대 윤리",
        title: "세계 주요 종교 및 철학적 근간",
        description: "황금률(남에게 대접받고자 하는 대로 대접하라)의 전 인류적 합의",
      },
    ],
    quote: {
      text: "인간은 물질적 폭력의 극단(철기 전쟁)에 직면해서야 비로소 자기를 돌아보고 보편적 자비와 이성의 빛을 찾았다. 그것이 축의 시대였다.",
      author: "카를 야스퍼스 (Karl Jaspers)",
      work: "역사의 기원과 목표 (The Origin and Goal of History)",
    },
    modernEchoes: [
      "2,500년 전 형성된 동서양 철학 사조가 현대인의 인생관과 도덕적 나침반으로 기능",
      "금속 가공 기술이 닦아놓은 볼트·너트·기어 기계 문명의 인프라",
      "군사 기술의 고도화가 역설적으로 평화주의 윤리와 국제법을 태동시키는 메커니즘",
    ],
    dialecticTension:
      "철기는 쟁기가 되어 인류를 부양함과 동시에 칼이 되어 유례없는 학살을 자행하는 이중적 파괴력을 드러냄.",
  },

  // 4. Renaissance & Early Modern
  {
    id: "printing-press-navigation",
    name: "금속활자 인쇄술과 나침반 항해",
    nameEn: "Movable Type Press & Compass Navigation",
    epochId: "renaissance",
    yearApprox: "1450년 ~ 1500년",
    tagline: "지식의 대량 복제와 지구적 지리 발견, 근대 공론장의 폭발",
    overview:
      "구텐베르크의 납 활자 주조와 압착 인쇄기는 라틴어 필사본을 독점하던 교회의 권위를 해체하고 루터의 종교개혁과 과학혁명을 촉발했습니다. 동시에 자석 나침반과 카라벨선은 유라시아 대륙을 벗어나 신대륙을 연결하는 '콜럼버스의 교환'을 일으켜 지구를 하나의 시장과 식문화권으로 묶었습니다.",
    iconName: "BookOpen",
    consiliencePillars: {
      scienceTech:
        "납-주석-안티몬 합금 정밀 주조 활자, 유성 잉크 및 포도주 압착기 응용 기계 장치. 지자기 편각을 활용한 나침반과 천문 역학 항법술.",
      socioPolitics:
        "교황권의 급격한 실추와 세속 민족국가(Nation-State)의 대두. 대중 인쇄 팸플릿에 의한 민중 여론 형성, 저작권(Copyright) 개념 및 특허 제도의 태동.",
      anthropologyLife:
        "묵독(속으로 책 읽기) 문화 보급으로 내면적 고독과 개인주의 확립. 고추·감자·토마토·담배·커피의 전 지구적 전파로 인류 식생활의 전면적 개조.",
      philosophyWorldview:
        "인문주의(르네상스 휴머니즘)와 베이컨·데카르트의 과학적 방법론. 교회의 권위 대신 경험적 관측 데이터(티코 브라헤, 케플러)를 신뢰하는 인식론적 대전환.",
      artSymbolism:
        "선원근법(Perspective)의 기하학적 정립과 판화(알브레히트 뒤러)의 대량 유통. 대중 문해력 상승에 따른 근대 장편 소설(돈키호테) 양식의 탄생.",
      derivedCulture:
        "신문·잡지 미디어, 카페에서의 정치 토론, 출판 출간 기념회, 학술 저널 피어리뷰, 김치에 고추가 들어가고 이탈리아 요리에 토마토가 쓰이게 된 전 지구적 식문화.",
    },
    causalChain: [
      {
        step: 1,
        domain: "정밀 기계공학",
        title: "구텐베르크의 합금 활자와 압착기",
        description: "수작업 필사본 3년 분량을 며칠 만에 복제하는 활판 인쇄술",
      },
      {
        step: 2,
        domain: "언어·종교",
        title: "독일어 성경과 종교개혁",
        description: "마르틴 루터의 95개조 반박문이 2주 만에 전 유럽으로 인쇄 유포",
      },
      {
        step: 3,
        domain: "사회·제도",
        title: "공론장(Public Sphere)과 저작권",
        description: "하버마스가 규정한 시민 대화 공간 및 저자의 지적재산권 확립",
      },
      {
        step: 4,
        domain: "항해·생태",
        title: "카라벨선과 콜럼버스의 교환",
        description: "아메리카 대륙의 감자·옥수수·고추가 구대륙으로 건너가 기근 해결",
      },
      {
        step: 5,
        domain: "인식·심리",
        title: "침묵 속의 독서와 개인주의",
        description: "소리 내어 읽던 낭독에서 혼자 책을 읽으며 자아를 성찰하는 내면성 구축",
      },
      {
        step: 6,
        domain: "현대 문화",
        title: "출판 미디어와 글로벌 퓨전 식문화",
        description: "신문·저널리즘 인프라와 매운 고추 김치, 토마토 파스타의 일상화",
      },
    ],
    quote: {
      text: "인쇄술은 개혁의 가장 큰 선물이자 하나님의 마지막 자비이다. 인쇄기는 인간의 지식을 빛의 속도로 퍼뜨렸다.",
      author: "마르틴 루터 (Martin Luther)",
      work: "탁상담화 (Tischreden)",
    },
    modernEchoes: [
      "인쇄 텍스트가 확립한 '활자적 정신'이 오늘날 웹 브라우저와 전자책으로 계승",
      "유럽 카페에서 시작된 공론장 문화가 트위터/X와 온라인 포럼의 댓글 문화로 진화",
      "고추(조선 후기), 감자(아일랜드/독일), 토마토(이탈리아)에 기댄 현대 각국 대표 요리",
    ],
    dialecticTension:
      "지식의 민주화를 선물했으나, 동시에 가짜 뉴스와 마녀사냥 팸플릿을 대량 복제하고 신대륙 원주민 정복과 노예무역의 참극을 정당화하는 도구로 오용됨.",
  },

  // 5. Industrial Revolution
  {
    id: "steam-clock-factory",
    name: "증기기관과 기계식 시계·표준시",
    nameEn: "Steam Engine, Mechanical Clock & Railway Time",
    epochId: "industrial",
    yearApprox: "1769년 ~ 1884년",
    tagline: "열역학적 동력과 시간의 분초 단위 규율, 대도시와 근대 노동의 형성",
    overview:
      "제임스 와트의 증기기관은 인류를 풍력과 수력, 가축의 한계에서 해방시켰습니다. 기차 시간표를 맞추기 위해 도입된 그리니치 표준시와 공장의 출퇴근 종소리는 자연의 해돋이-해넘이 리듬을 파괴하고, 시간을 '돈'이자 엄격한 규율로 환산했습니다. 이에 반발한 낭만주의, 노동운동, 그리고 인상파 회화가 쏟아져 나왔습니다.",
    iconName: "Clock",
    consiliencePillars: {
      scienceTech:
        "석탄 연소를 통한 고압 증기 팽창 피스톤 기관 및 열역학(카르노 순환) 법칙 정립. 철도 충돌 방지를 위한 전기 전신망과 정밀 기계식 진자/탈진기 시계.",
      socioPolitics:
        "공장제 대량생산 시스템과 자본가(부르주아)-임금 노동자(프롤레타리아)의 계급 대립. 마르크스의 자본론, 노동조합 합법화 및 8시간 노동제 투쟁.",
      anthropologyLife:
        "시간의 공간화: 시계가 인간의 신체를 지배함. '지각', '근태관리', '칼퇴' 개념 형성. 주말(Weekend)과 교외 통근, 아파트 밀집 거주 문화 탄생.",
      philosophyWorldview:
        "생산성과 효율성을 최고선으로 삼는 공리주의 및 테일러리즘(과학적 관리법). 기계에 소외된 인간성을 회복하려는 낭만주의(루소, 워즈워스) 대두.",
      artSymbolism:
        "매연과 기차의 속도감을 포착한 윌리엄 터너와 인상주의(모네의 생 라자르 기차역). 기계화된 디스토피아를 고발한 찰리 채플린의 '모던 타임즈'.",
      derivedCulture:
        "월요병, 9-to-5 근무제, 퇴근 후의 호프집 맥주 한 잔, 일요일의 휴식, 기차 여행 로망, 시티팝과 사이버펑크의 거대 공업도시 미학.",
    },
    causalChain: [
      {
        step: 1,
        domain: "열역학·기계",
        title: "와트의 복수식 증기기관",
        description: "탄광 배수 펌프에서 방적 공장과 기관차를 움직이는 만능 동력원으로 진화",
      },
      {
        step: 2,
        domain: "수송·통신",
        title: "철도망과 그리니치 표준시",
        description: "지역마다 달랐던 해시계 시간을 철도 시간표에 맞춰 분초 단위로 통일",
      },
      {
        step: 3,
        domain: "사회·노동",
        title: "공장제 규율과 임금 노동자",
        description: "농부들이 도시 공장으로 몰려들어 시계의 초침에 맞춰 교대 근무 수행",
      },
      {
        step: 4,
        domain: "정치·이념",
        title: "노동운동과 주말의 발명",
        description: "하루 16시간 노동에 맞선 8시간 노동·8시간 휴식·8시간 수면 투쟁과 '일요일' 공휴일화",
      },
      {
        step: 5,
        domain: "예술·문학",
        title: "낭만주의와 인상파 예술",
        description: "차가운 기계 문명에 반발한 자연 예찬 및 기차 연기 속 빛을 화폭에 담은 인상주의",
      },
      {
        step: 6,
        domain: "현대 생활",
        title: "출퇴근 러시아워와 주말 레저",
        description: "출근 지하철의 긴장감, '불금' 문화, 시계를 확인하는 현대인의 강박적 일상",
      },
    ],
    quote: {
      text: "근대 산업혁명의 핵심 기계는 증기기관이 아니라 바로 '시계'였다. 시계는 시간의 흐름을 분해하여 인간의 신체를 기계의 부품으로 동기화했다.",
      author: "루이스 멈퍼드 (Lewis Mumford)",
      work: "기술과 문명 (Technics and Civilization)",
    },
    modernEchoes: [
      "스마트워치와 캘린더 알람에 묶여 분 단위로 미팅을 쪼개어 사는 캘린더 문화",
      "주 5일 근무제와 금요일 밤의 해방감(TGIF)이라는 현대적 휴식 주기",
      "철도와 지하철 노선도를 중심으로 형성된 현대 메트로폴리스 대도시권",
    ],
    dialecticTension:
      "물질적 풍요와 초단위 문명의 연결을 가져왔으나, 인간의 자연적 생체 시계를 파괴하고 극심한 산업재해와 지구 온난화의 뇌관을 당김.",
  },

  // 6. Electronic & Digital
  {
    id: "silicon-internet-smartphone",
    name: "반도체·인터넷과 스마트폰",
    nameEn: "Silicon Semiconductor, Internet & Smartphone",
    epochId: "digital",
    yearApprox: "1971년 ~ 2007년",
    tagline: "시공간의 실시간 압축, 초연결 네트워크와 주의력 경제의 폭발",
    overview:
      "마이크로프로세서와 패킷 교환 인터넷(TCP/IP), 그리고 터치스크린 스마트폰은 인류의 주머니 속에 전 세계 지식과 소통망을 집어넣었습니다. 지리적 국경은 무력화되었고, 마셜 맥루한이 예견한 '글로벌 빌리지'가 현실화되었으나, 알고리즘 피드와 숏폼 콘텐츠는 인류의 주의력을 분절시키고 사회적 에코체임버를 구축했습니다.",
    iconName: "Smartphone",
    consiliencePillars: {
      scienceTech:
        "무어의 법칙에 따른 나노미터급 실리콘 집적회로, 광통신 해저 케이블, 정전식 멀티터치 센서 및 클라우드 분산 컴퓨팅 아키텍처.",
      socioPolitics:
        "플랫폼 자본주의(빅테크 기업의 독점)와 긱 이코노미(배달·우버 노동). 소셜미디어를 통한 아랍의 봄 등 시민혁명과 정치적 양극화의 동시 가속.",
      anthropologyLife:
        "Always-on(항상 접속 상태): 침대, 화장실, 식탁에서도 손에서 기기를 떼지 못하는 신체-기술 결합(Cyborg). 수면 부족과 거북목, 엄지손가락 스크롤 제스처.",
      philosophyWorldview:
        "포스트모더니즘과 시뮬라크르(장 보드리야르): 가상이 현실보다 더 실재 같은 하이퍼리얼리티. '좋아요' 숫자로 환산되는 자기 가치와 관심의 물신화.",
      artSymbolism:
        "인터넷 밈(Meme), 틱톡 챌린지, 픽셀 아트, 버추얼 아이돌. 정제된 서사 대신 15초 안에 도파민을 자극하는 스낵 컬처와 세로형 비디오 미학.",
      derivedCulture:
        "이모지(Emoji) 언어, 짤방 소통, 인스타그래머블 맛집 투어, 포모(FOMO) 증후군, 디지털 노마드, 메신저 '1' 사라짐에 집착하는 현대인의 관계 피로.",
    },
    causalChain: [
      {
        step: 1,
        domain: "물리·전자공학",
        title: "실리콘 트랜지스터의 극소화",
        description: "방 하나 크기 진공관 컴퓨터가 손톱 크기 칩으로 압축",
      },
      {
        step: 2,
        domain: "네트워크·통신",
        title: "월드와이드웹(WWW)과 모바일망",
        description: "전 세계 문서를 하이퍼링크로 연결하고 LTE/5G 무선망 구축",
      },
      {
        step: 3,
        domain: "신체·인터페이스",
        title: "아이폰과 정전식 터치스크린",
        description: "마우스와 키보드 없이 손가락 직관적 터치로 가상 세계 조작",
      },
      {
        step: 4,
        domain: "경제·알고리즘",
        title: "주의력 경제(Attention Economy)",
        description: "체류 시간을 늘리기 위해 뇌의 도파민 회로를 공략하는 무한 스크롤",
      },
      {
        step: 5,
        domain: "사회·심리",
        title: "에코체임버와 디지털 나르시시즘",
        description: "자신과 비슷한 의견만 소비하는 양극화와 인스타그램 필터 속 가공된 자아",
      },
      {
        step: 6,
        domain: "현대 문화",
        title: "밈(Meme) 문화와 숏폼 콘텐츠",
        description: "릴스·쇼츠를 통한 즉각적 유희와 이모티콘 기반의 전 지구적 감정 교류",
      },
    ],
    quote: {
      text: "우리는 도구를 만들고, 그 후에는 도구가 우리를 만든다. 스마트폰은 단순한 전화기가 아니라 인간 신경계의 외생적 확장이다.",
      author: "마셜 맥루한 학파 (Marshall McLuhan School)",
      work: "미디어의 이해 (Understanding Media)",
    },
    modernEchoes: [
      "대면 대화보다 카카오톡이나 DM이 편안해진 Z세대의 텍스트 선호 문화",
      "식사 전 사진을 찍어 소셜미디어에 인증해야 식사가 완성되는 '인증샷 의례'",
      "노트북 하나 들고 발리나 치앙마이에서 원격 근무하는 디지털 노마드 라이프스타일",
    ],
    dialecticTension:
      "인류 역사상 가장 광대한 정보와 사람들을 연결해주었으나, 정작 개별 인간의 고독감과 우울증, 주의력 결핍 장애(ADHD)를 전례 없이 심화시킴.",
  },

  // 7. Frontier AI & Biotech
  {
    id: "generative-ai-biotech",
    name: "생성형 AI와 유전자 가위(CRISPR)",
    nameEn: "Generative AI & Synthetic Biology",
    epochId: "frontier",
    yearApprox: "2020년 ~ 현재 및 미래",
    tagline: "인지와 창의성의 외주화, 생명 암호 편집과 포스트휴먼의 새벽",
    overview:
      "인간의 전유물로 여겨지던 언어, 예술, 사유의 영역에 거대 언어 모델(LLM)과 확산 모델(Diffusion)이 진입했습니다. 동시에 유전자 가위(CRISPR)는 자연 선택에 맡겨졌던 생명 진화의 운전대를 인간에게 넘겼습니다. 인간이란 무엇인가라는 근원적 존재론이 흔들리는 통섭의 최종 프런티어입니다.",
    iconName: "Cpu",
    consiliencePillars: {
      scienceTech:
        "수천억 개 파라미터의 트랜스포머 심층신경망, 강화학습(RLHF), 유전자 편집 엔도뉴클레아제(Cas9) 효소 정밀 가위 기술.",
      socioPolitics:
        "지식 노동(코딩, 번역, 법률, 디자인)의 급격한 자동화와 보편적 기본소득(UBI) 논쟁. 유전자 맞춤형 인간 출현에 따른 신(新)유전 카스트 계급화 우려.",
      anthropologyLife:
        "인간과 AI 에이전트의 정서적 교감(AI 반려자, 챗봇 애인). 생체 칩 삽입(뉴럴링크)을 통한 뇌-컴퓨터 인터페이스(BCI) 및 증강된 감각 체험.",
      philosophyWorldview:
        "포스트휴머니즘: 인간 중심주의의 종말. 의식(Consciousness)과 지능(Intelligence)의 분리, 창작 주체의 탈인간화 및 생명 조작의 윤리적 경계.",
      artSymbolism:
        "프롬프트 엔지니어링 미학: 붓과 렌즈 대신 텍스트 명령어로 이미지를 생성하는 신형 창의성. 딥페이크, 가상 인플루언서, 알고리즘 큐레이션.",
      derivedCulture:
        "AI 프로필 사진, ChatGPT에게 연애 상담 받기, AI 보컬 커버곡 열풍, 맞춤형 영양제와 유전자 검사 키트 소비, 'AI 슬롭'과 '인간 창작물' 라벨 구분 문화.",
    },
    causalChain: [
      {
        step: 1,
        domain: "컴퓨터과학·통계",
        title: "트랜스포머 모델과 GPU 연산",
        description: "인류가 기록한 모든 디지털 텍스트와 이미지를 벡터 공간에서 통계적으로 학습",
      },
      {
        step: 2,
        domain: "인지·창의",
        title: "창작의 마찰 제로화",
        description: "프롬프트 입력 수 초 만에 작문, 코딩, 그림, 작곡을 완결하는 생성 지능",
      },
      {
        step: 3,
        domain: "생명과학",
        title: "CRISPR-Cas9 유전자 편집",
        description: "질병 유전자 교정 및 유전체 맞춤 설계의 산업화",
      },
      {
        step: 4,
        domain: "노동·사회",
        title: "화이트칼라 지식 노동의 재편",
        description: "단순 육체 노동이 아닌 고학력 지식 노동자가 직무 대체 압박에 직면",
      },
      {
        step: 5,
        domain: "철학·존재론",
        title: "'인간의 고유성'에 대한 의문",
        description: "사유와 예술이 더 이상 호모 사피엔스만의 특권이 아니라는 실존적 당혹감",
      },
      {
        step: 6,
        domain: "현대 문화",
        title: "합성 문화(Synthetic Culture)의 만개",
        description: "AI 챗봇과의 일상적 잡담, 가상 아이돌 팬덤, 유전자 맞춤형 웰빙 라이프",
      },
    ],
    quote: {
      text: "인공지능과 생명공학은 인류에게 신(神)의 힘을 주었지만, 우리는 아직 자신이 무엇을 원하는지조차 알지 못하는 무책임한 신이다.",
      author: "유발 노아 하라리 (Yuval Noah Harari)",
      work: "호모 데우스 (Homo Deus)",
    },
    modernEchoes: [
      "과제와 보고서를 쓸 때 ChatGPT나 클로드에게 초안을 맡기는 일상적 학업/업무 패턴",
      "실제 가수의 목소리를 AI로 학습시켜 다른 노래를 부르게 하는 유튜브 AI 커버 문화",
      "유전자 분석 키트로 자신의 조상 혈통과 탈모 유전자를 검사하는 바이오 해킹 트렌드",
    ],
    dialecticTension:
      "모든 질병의 정복과 지적 풍요를 약속하지만, 인간 자신의 존재 이유(목적성)를 상실시키고 기술 권력의 극단적 독점을 야기할 실존적 위험.",
  },
];
