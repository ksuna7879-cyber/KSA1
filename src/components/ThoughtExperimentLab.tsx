import React, { useState } from "react";
import { Sparkles, Loader2, Compass, AlertTriangle, Palette, BookOpen, Clock } from "lucide-react";
import { SimulationResult } from "../types";

export const ThoughtExperimentLab: React.FC = () => {
  const PRESET_SCENARIOS = [
    {
      title: "만약 고대 로마에 증기기관이 대량 양산되었다면?",
      technology: "증기기관 및 철도",
      targetEra: "기원전 1세기 ~ 서기 1세기 로마 제국",
      alternativeCondition: "헤론의 증기구(Aeolipile)가 장난감이 아닌 광산과 군수공장 동력으로 조기 채택됨",
      presetResult: {
        scenario: "증기기관 로마 제국 (Steam-powered Pax Romana)",
        socioCulturalMutation:
          "노예 노동에 의존하던 귀족 경제가 붕괴하고, 증기 기관차를 독점한 군벌과 공장주 계급이 원로원을 장악함. 로마 가도(Road)를 따라 유라시아를 관통하는 증기 철도망이 깔려 전 지구적 식민 제국으로 급성장.",
        divergentArts:
          "대리석 고전 조각과 검투사 경기 대신 기계의 연기와 금속 피스톤을 찬양하는 '고대 스팀펑크 퓨처리즘' 사조 탄생. 기관차의 웅장함을 기리는 기계 찬가 오페라 유행.",
        philosophicalCrisis:
          "스토아 학파의 자연 순응 사상이 '인간에 의한 자연 정복' 교리로 조기 변질되고, 기계를 성스러운 불의 화신으로 숭배하는 '불칸 기계교(Cult of Vulcan)'가 국교화됨.",
        historicalEcho:
          "화석연료로 인한 기후 온난화와 환경 파괴가 서기 500년경에 이미 도래하여 인류 문명이 1500년 앞서 생태학적 한계에 부딪혔을 가능성.",
      },
    },
    {
      title: "만약 르네상스 피렌체에 스마트폰과 SNS가 있었다면?",
      technology: "스마트폰과 알고리즘 소셜미디어",
      targetEra: "15세기 르네상스 이탈리아 (피렌체 메디치 가문)",
      alternativeCondition: "유리 공예 기술과 마법 거울 신드롬이 실시간 양방향 정보 기기로 비약적 발전",
      presetResult: {
        scenario: "알고리즘 르네상스 (Algorithmic Medici Network)",
        socioCulturalMutation:
          "메디치 가문이 피렌체 시민들의 타임라인 피드를 알고리즘으로 큐레이션하여 여론을 완벽 통제함. 광장의 열린 토론 대신 익명 피렌체 계정들의 흑색선전과 '좋아요' 취소 전쟁 격화.",
        divergentArts:
          "시스티나 성당 천장화 같은 대작 대신, 15초 안에 시선을 사로잡는 세로형 프레스코 숏폼과 디지털 필터를 씌운 자화상이 범람함. 레오나르도 다빈치는 유튜브 100만 테크 유튜버로 활동.",
        philosophicalCrisis:
          "인간의 이성과 존엄성을 찬양하던 르네상스 휴머니즘이 스크린 속 나르시시즘과 관심 중독으로 조기 퇴색하고, '타인의 시선에 종속된 인간'에 대한 허무주의 철학 팽배.",
        historicalEcho:
          "인쇄술의 묵독(고독한 사유)을 거치지 않고 곧바로 하이퍼-커넥티드 사회로 직행하여, 근대 계몽주의와 민주주의의 기초가 형성되지 못한 채 디지털 봉건제가 고착화됨.",
      },
    },
    {
      title: "만약 중세 유럽에서 활판인쇄술이 전면 금지되었다면?",
      technology: "금속활자 인쇄기 금지령",
      targetEra: "15세기 중세 후기 유럽",
      alternativeCondition: "교황청이 구텐베르크의 기계를 '악마의 복제 마법'으로 규정하고 전 유럽적 화형 및 파괴 명령",
      presetResult: {
        scenario: "침묵의 필사본 밀수 시대 (The Underground Scriptorium)",
        socioCulturalMutation:
          "인쇄술 대신 비밀 지하 필사 길드가 형성되고, 금서(Forbidden Books)가 마약보다 비싸게 암시장에서 거래됨. 지식의 양극화가 극단으로 치달아 성직자 계급의 철권통치가 수백 년 연장됨.",
        divergentArts:
          "책을 인쇄할 수 없으므로 시각 회화와 성당의 스테인드글라스, 음유시인의 구비 서사시(Oral Epic)가 기형적으로 고도화되어 시청각적 상징 예술이 극대화됨.",
        philosophicalCrisis:
          "종교개혁과 과학혁명이 300년 이상 지연되고, 개인의 합리적 이성보다는 신비주의와 주술적 밀교(Gnosticism)가 지식인들의 유일한 도피처로 정착.",
        historicalEcho:
          "근대 국민국가와 대중 교육 제도가 탄생하지 못하여 오늘날까지 군주제와 종교 과두제가 세계의 절반을 통치하는 중세적 다원 세계 지속.",
      },
    },
  ];

  const [selectedPresetIdx, setSelectedPresetIdx] = useState<number>(0);
  const [customTech, setCustomTech] = useState("");
  const [customEra, setCustomEra] = useState("");
  const [customCondition, setCustomCondition] = useState("");
  const [isSimulating, setIsSimulating] = useState(false);
  const [customResult, setCustomResult] = useState<SimulationResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const activeResult = customResult || PRESET_SCENARIOS[selectedPresetIdx].presetResult;

  const handleRunSimulation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customTech.trim() || !customEra.trim()) return;

    setIsSimulating(true);
    setErrorMsg(null);
    setCustomResult(null);

    try {
      const res = await fetch("/api/gemini/what-if", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          technology: customTech,
          targetEra: customEra,
          alternativeCondition: customCondition || "기술의 조기 또는 비정형적 출현",
        }),
      });

      const data = await res.json();
      if (data.simulation) {
        setCustomResult(data.simulation);
      } else {
        setErrorMsg(data.error || "시뮬레이션 생성에 실패했습니다.");
      }
    } catch (err: any) {
      setErrorMsg(err.message || "서버 통신 실패");
    } finally {
      setIsSimulating(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Intro Header */}
      <div className="bg-gradient-to-br from-white via-[#fcfbf9] to-[#f7f5f0] border border-stone-200/90 p-6 sm:p-8 rounded-3xl shadow-xs">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            통섭적 반사실적 사고실험실 (Counterfactual Simulator)
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 tracking-tight">
            만약 기술의 시계바늘이 다르게 돌았다면?
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
            기술은 특정 시대의 물질적·사상적 토양 위에서 피어납니다.
            만약 어떤 기술이 수백 년 일찍 등장했거나 특정 조건에서 억압되었다면,
            인류의 신체 지각, 종교, 예술 사조, 그리고 현대 문화는 어떤 기괴하고 새로운 형태로 분기했을까요?
            Gemini AI와 함께 가상의 문명사를 시뮬레이션해 보세요.
          </p>
        </div>
      </div>

      {/* Preset Scenarios */}
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-stone-700 font-mono">
          엄선된 통섭적 대체역사 시나리오:
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {PRESET_SCENARIOS.map((preset, idx) => {
            const isSelected = !customResult && selectedPresetIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => {
                  setCustomResult(null);
                  setSelectedPresetIdx(idx);
                }}
                className={`p-5 rounded-2xl border text-left transition cursor-pointer flex flex-col justify-between shadow-xs ${
                  isSelected
                    ? "bg-amber-50 border-amber-500 shadow-sm ring-2 ring-amber-400/40 text-stone-900"
                    : "bg-white border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-50 hover:border-stone-300"
                }`}
              >
                <span className="text-[10px] font-mono text-amber-800 font-bold mb-1">
                  SCENARIO 0{idx + 1}
                </span>
                <h4 className="text-xs font-bold text-stone-900 font-serif mb-2 leading-snug">
                  {preset.title}
                </h4>
                <div className="text-[11px] text-stone-500 line-clamp-2 leading-relaxed">
                  {preset.alternativeCondition}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Custom Scenario Generator Form */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 flex items-center gap-2">
            <Compass className="w-4 h-4 text-amber-600" />
            사용자 맞춤형 대체역사 생성기 (Custom Simulator with Gemini AI)
          </h3>
          <span className="text-[11px] text-stone-500">
            임의의 기술과 시대를 결합하여 새로운 파생 문화를 예측합니다
          </span>
        </div>

        <form onSubmit={handleRunSimulation} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-[11px] text-stone-600 block mb-1 font-medium">
                도입할 기술 / 발명:
              </label>
              <input
                type="text"
                value={customTech}
                onChange={(e) => setCustomTech(e.target.value)}
                placeholder="예: 생성형 AI, 핵융합 발전, 항생제..."
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="text-[11px] text-stone-600 block mb-1 font-medium">
                목표 시대 / 환경:
              </label>
              <input
                type="text"
                value={customEra}
                onChange={(e) => setCustomEra(e.target.value)}
                placeholder="예: 18세기 조선 정조 시대, 기원전 아테네..."
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="text-[11px] text-stone-600 block mb-1 font-medium">
                특수 조건 / 가설 (선택):
              </label>
              <input
                type="text"
                value={customCondition}
                onChange={(e) => setCustomCondition(e.target.value)}
                placeholder="예: 왕실 비밀 연구소에서만 독점 사용됨"
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSimulating || !customTech.trim() || !customEra.trim()}
              className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white font-bold text-xs transition flex items-center gap-2 cursor-pointer shadow-xs"
            >
              {isSimulating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  문명 변이 시뮬레이션 중...
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  가상 문명사 시뮬레이션 실행
                </>
              )}
            </button>
          </div>
        </form>

        {errorMsg && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs">
            {errorMsg}
          </div>
        )}
      </div>

      {/* Simulation Result Viewer */}
      <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="border-b border-stone-200 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 font-bold">
              통섭적 사고실험 시뮬레이션 보고서
            </span>
            {customResult && (
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 font-medium">
                Gemini AI 연산
              </span>
            )}
          </div>
          <h3 className="text-2xl font-bold font-serif text-stone-900 mt-2">
            {activeResult.scenario}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. Socio-Cultural Mutation */}
          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2 shadow-xs">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-xs">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>사회 권력 구조 및 일상생활의 파괴적 변이</span>
            </div>
            <p className="text-xs text-stone-700 leading-relaxed font-sans pt-1">
              {activeResult.socioCulturalMutation}
            </p>
          </div>

          {/* 2. Divergent Arts */}
          <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200/80 space-y-2 shadow-xs">
            <div className="flex items-center gap-2 text-rose-900 font-bold text-xs">
              <Palette className="w-4 h-4 text-rose-600" />
              <span>새롭게 탄생했을 대안 예술 사조와 기호체계</span>
            </div>
            <p className="text-xs text-stone-700 leading-relaxed font-sans pt-1">
              {activeResult.divergentArts}
            </p>
          </div>

          {/* 3. Philosophical Crisis */}
          <div className="p-5 rounded-2xl bg-violet-50/60 border border-violet-200/80 space-y-2 shadow-xs">
            <div className="flex items-center gap-2 text-violet-900 font-bold text-xs">
              <AlertTriangle className="w-4 h-4 text-violet-600" />
              <span>당시 종교와 철학이 겪었을 형이상학적 위기</span>
            </div>
            <p className="text-xs text-stone-700 leading-relaxed font-sans pt-1">
              {activeResult.philosophicalCrisis}
            </p>
          </div>

          {/* 4. Historical Echo */}
          <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-2 shadow-xs">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>현대 인류 문명에 남겼을 가상 유산과 나비효과</span>
            </div>
            <p className="text-xs text-stone-700 leading-relaxed font-sans pt-1">
              {activeResult.historicalEcho}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
