import React, { useState } from "react";
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Award, Lightbulb, BookOpen } from "lucide-react";

interface Question {
  id: number;
  epoch: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  consilienceNote: string;
}

const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    epoch: "산업혁명기",
    question:
      "기술사가 루이스 멈퍼드가 『기술과 문명』에서 '근대 산업혁명의 핵심 기계는 증기기관이 아니라 바로 이것이었다'라고 지목한 도구는 무엇일까요?",
    options: [
      "방적기 (방직 기계)",
      "기계식 시계 (Mechanical Clock)",
      "전신 (Telegraph)",
      "인쇄기 (Printing Press)",
    ],
    correctAnswer: 1,
    explanation:
      "정답은 '기계식 시계'입니다. 멈퍼드는 자연의 주야(낮과 밤)와 계절의 유기적 리듬을 분·초 단위로 쪼개고, 인간의 신체를 기계적 규율과 출퇴근 시간표에 동기화시킨 시계야말로 자본주의적 노동과 근대성을 낳은 진짜 핵심 기계라고 보았습니다.",
    consilienceNote:
      "공학(진자와 탈진기 메커니즘)이 인간의 신체 지각(근무 시간표, 월요병)과 사회 구조(임금 노동제)를 완벽하게 개조한 전형적인 통섭적 사례입니다.",
  },
  {
    id: 2,
    epoch: "르네상스 & 근대 초기",
    question:
      "구텐베르크의 금속활자 인쇄술이 보급되면서, 낭독(소리 내어 읽기)에서 '묵독(속으로 읽기)'으로 독서 방식이 변화했습니다. 이것이 빚어낸 결정적인 문화적 결과는 무엇일까요?",
    options: [
      "집단 종교의식의 획일화",
      "내면적 고독과 개인주의적 자아(Individual Self)의 확립",
      "구비 설화와 음유시인 전통의 폭발적 부흥",
      "시각 예술의 전면적 쇠퇴",
    ],
    correctAnswer: 1,
    explanation:
      "정답은 '내면적 고독과 개인주의적 자아의 확립'입니다. 과거에는 성당이나 광장에서 여럿이 소리 내어 함께 듣던 텍스트를 방 안에 혼자 틀어박혀 침묵 속에 읽게 되면서, 인간은 자신의 내면을 성찰하고 독립적으로 사유하는 근대적 개인(Individual)으로 거듭났습니다.",
    consilienceNote:
      "정보 복제 기술(인쇄)이 인간의 두뇌 인지 메커니즘을 바꾸고, 궁극적으로 르네상스 인문주의와 근대 민주주의의 기초가 되는 '개인'을 탄생시켰습니다.",
  },
  {
    id: 3,
    epoch: "원시 수렵채집",
    question:
      "리처드 랭엄의 '요리 가설(Cooking Hypothesis)'에 따르면, 인류가 불을 이용해 음식을 익혀 먹기 시작한 것이 낳은 진화생물학적 및 문화적 결과는 무엇일까요?",
    options: [
      "턱과 소화기관이 커지고 뇌 용량이 줄어들었다",
      "소화기관의 축소와 잉여 에너지의 뇌 집중 투입 및 모닥불 주위의 서사(Storytelling) 탄생",
      "야간 수면 시간이 12시간 이상으로 늘어났다",
      "신화와 주술적 예술이 사라지고 기술적 실용성만 남았다",
    ],
    correctAnswer: 1,
    explanation:
      "정답은 2번입니다. 불로 익힌 음식은 소화 흡수율을 비약적으로 높여 길고 무거운 소화기관을 줄여주었고, 절약된 막대한 신진대사 에너지가 뇌로 집중되어 지능이 폭발했습니다. 또한 해가 진 뒤에도 불 주위에 둘러앉아 대화하며 신화와 언어가 발달했습니다.",
    consilienceNote:
      "자연과학(열역학/화학)이 생물학(뇌 용량)을 바꾸고, 이것이 인문학(신화와 언어)으로 꽃피운 완벽한 에드워드 윌슨식 '유전자-문화 공진화' 모델입니다.",
  },
  {
    id: 4,
    epoch: "청동기 & 철기 시대",
    question:
      "철기 무기의 대중화와 전차의 보급으로 전례 없는 유혈 정복 전쟁이 벌어졌던 기원전 800~200년경, 인류 문명이 보편적 도덕률과 윤리적 자기 성찰로 응답한 이 시기를 무엇이라 부를까요?",
    options: [
      "헬레니즘 시대",
      "축의 시대 (Axial Age)",
      "계몽주의 시대",
      "황금의 르네상스",
    ],
    correctAnswer: 1,
    explanation:
      "정답은 '축의 시대 (Axial Age)'입니다. 카를 야스퍼스가 명명한 이 시기에는 철기 전쟁의 잔혹한 참상 속에서 공자, 맹자(중국), 석가모니(인도), 소크라테스(그리스), 구약 예언자(이스라엘)들이 거의 동시에 출현하여 보편적 인간애와 내면적 도덕률을 설파했습니다.",
    consilienceNote:
      "파괴적인 군사 기술의 극단적 충격이 역설적으로 인간에게 물질적 무력을 넘어서는 고도의 정신적·윤리적 도약을 강제한 역사적 변증법입니다.",
  },
  {
    id: 5,
    epoch: "전자 및 디지털 사회",
    question:
      "미디어학자 마셜 맥루한의 이론에 따를 때, 바퀴가 '발의 확장'이고 책이 '눈의 확장'이라면, 전자 컴퓨터와 인터넷·스마트폰은 인간 신체의 어느 부위의 확장으로 해석될까요?",
    options: [
      "손과 팔의 근력",
      "인간 중추신경계(Central Nervous System)의 외생적 확장",
      "성대와 목소리의 증폭",
      "심장과 혈관의 순환계",
    ],
    correctAnswer: 1,
    explanation:
      "정답은 '중추신경계의 외생적 확장'입니다. 맥루한은 컴퓨터와 전자기술이 인간의 신경망 전체를 지구 규모로 바깥에 펼쳐놓은 것과 같다고 보았습니다. 이로 인해 인류 전체가 하나의 거대한 부족처럼 실시간으로 연결된 '글로벌 빌리지(Global Village)'가 형성되었습니다.",
    consilienceNote:
      "도구는 외부의 객체가 아니라 인간 감각 기관의 연장선이며, 새로운 기술 환경은 인간의 감각 비율(Sensory Ratio) 전체를 재편합니다.",
  },
];

export const ConsilienceQuiz: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [personalNotes, setPersonalNotes] = useState<string>("");
  const [savedNotes, setSavedNotes] = useState<string[]>([]);

  const q = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === q.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  const handleSaveNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!personalNotes.trim()) return;
    setSavedNotes((prev) => [personalNotes.trim(), ...prev]);
    setPersonalNotes("");
  };

  return (
    <div className="space-y-8">
      {/* Intro Header */}
      <div className="bg-gradient-to-br from-white via-[#fcfbf9] to-[#f7f5f0] border border-stone-200/90 p-6 sm:p-8 rounded-3xl shadow-xs">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            통섭적 지적 성찰 퀴즈 (Consilience Inquiries)
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 tracking-tight">
            문명사의 숨은 인과율을 해독하라
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
            단편적인 연도 암기를 넘어, 기술의 물질적 원리가 어떻게 인간의 내면, 사상,
            그리고 현대 문화로 전이되었는지 통섭적 시야로 풀어보는 지적 탐구 퀴즈입니다.
          </p>
        </div>
      </div>

      {/* Main Quiz Area */}
      {!isFinished ? (
        <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
          {/* Progress Header */}
          <div className="flex items-center justify-between border-b border-stone-200 pb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900">
                문항 0{currentIdx + 1} / 0{QUIZ_QUESTIONS.length}
              </span>
              <span className="text-xs text-stone-500 font-medium">
                시대 배경: {q.epoch}
              </span>
            </div>
            <span className="text-xs text-amber-900 font-bold font-mono">
              현재 점수: {score}점
            </span>
          </div>

          {/* Question Text */}
          <h3 className="text-lg sm:text-xl font-bold font-serif text-stone-900 leading-snug">
            {q.question}
          </h3>

          {/* Options Grid */}
          <div className="space-y-2.5">
            {q.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === q.correctAnswer;

              let btnStyle =
                "bg-[#faf8f5] border-stone-200 text-stone-800 hover:bg-stone-100 hover:border-stone-300";

              if (isAnswered) {
                if (isCorrect) {
                  btnStyle =
                    "bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-400/50 font-semibold";
                } else if (isSelected) {
                  btnStyle =
                    "bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-400/50 font-semibold";
                } else {
                  btnStyle = "bg-stone-50 border-stone-200 text-stone-400 opacity-60";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm font-medium transition cursor-pointer flex items-center justify-between shadow-xs ${btnStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-white border border-stone-300 flex items-center justify-center font-mono text-xs text-stone-600 font-bold shrink-0 shadow-xs">
                      {idx + 1}
                    </span>
                    <span>{opt}</span>
                  </div>

                  {isAnswered && (
                    <div>
                      {isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      {isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box when Answered */}
          {isAnswered && (
            <div className="space-y-4 pt-2">
              <div
                className={`p-5 rounded-2xl border space-y-2 shadow-xs ${
                  selectedOption === q.correctAnswer
                    ? "bg-emerald-50/70 border-emerald-200 text-emerald-950"
                    : "bg-amber-50/70 border-amber-200 text-amber-950"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  <span className="text-xs font-bold text-stone-900">
                    {selectedOption === q.correctAnswer
                      ? "정답입니다! 통섭적 해설:"
                      : "오답입니다. 통섭적 해설:"}
                  </span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed font-sans">
                  {q.explanation}
                </p>

                <div className="mt-3 pt-3 border-t border-stone-200 text-[11px] text-stone-800 flex items-start gap-2">
                  <span className="font-bold text-amber-900 shrink-0">
                    통섭적 핵심:
                  </span>
                  <span className="leading-relaxed">{q.consilienceNote}</span>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs transition cursor-pointer shadow-xs"
                >
                  {currentIdx + 1 < QUIZ_QUESTIONS.length
                    ? "다음 문항으로"
                    : "최종 결과 확인하기"}
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Quiz Finished Summary */
        <div className="bg-white border border-stone-200 rounded-3xl p-8 text-center space-y-6 shadow-xs">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center mx-auto text-amber-700 shadow-xs">
            <Award className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs font-mono uppercase text-amber-800 font-bold tracking-wider">
              성찰 퀴즈 완주
            </span>
            <h3 className="text-2xl font-bold font-serif text-stone-900 mt-1">
              통섭적 지적 여정을 마쳤습니다
            </h3>
            <p className="text-sm text-stone-600 mt-2">
              총 {QUIZ_QUESTIONS.length}문항 중{" "}
              <strong className="text-amber-800 text-base font-bold">{score}문항</strong>을 맞히셨습니다.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#faf8f5] border border-stone-200 max-w-lg mx-auto text-xs text-stone-700 leading-relaxed font-serif shadow-xs">
            "기술을 단순히 사용하는 인간과, 기술이 빚어낸 문화의 무의식적 질서를 통섭적으로 꿰뚫어보는 인간은 세상을 완전히 다르게 경험합니다."
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={handleRestart}
              className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold transition cursor-pointer flex items-center gap-2 shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              다시 도전하기
            </button>
          </div>
        </div>
      )}

      {/* Personal Consilience Journal / Reflection Notes */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 space-y-4 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-600" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">
              나의 통섭적 성찰 노트 (Consilience Reflection Journal)
            </h3>
          </div>
          <span className="text-[11px] text-stone-500">
            오늘날 내가 쓰는 기술과 나의 문화적 습관을 연결해 메모하세요
          </span>
        </div>

        <form onSubmit={handleSaveNote} className="space-y-3">
          <textarea
            rows={3}
            value={personalNotes}
            onChange={(e) => setPersonalNotes(e.target.value)}
            placeholder="예: 오늘 스마트폰 알림 때문에 15분마다 집중이 끊겼다. 이것은 19세기 공장 시계가 인간의 몸을 묶었듯, 21세기 알고리즘이 나의 시선을 포획한 것이 아닐까..."
            className="w-full bg-stone-50 border border-stone-300 rounded-2xl p-3.5 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-amber-500"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!personalNotes.trim()}
              className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 disabled:opacity-50 text-white font-medium text-xs transition cursor-pointer shadow-xs"
            >
              성찰 기록 저장
            </button>
          </div>
        </form>

        {savedNotes.length > 0 && (
          <div className="space-y-2 pt-2">
            <span className="text-[11px] font-semibold text-stone-600 block">
              저장된 지적 성찰 기록 ({savedNotes.length}개):
            </span>
            <div className="space-y-2">
              {savedNotes.map((note, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-[#faf8f5] border border-stone-200 text-xs text-stone-700 leading-relaxed font-serif shadow-xs"
                >
                  {note}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
