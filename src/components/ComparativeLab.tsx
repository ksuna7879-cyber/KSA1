import React, { useState } from "react";
import { CURATED_COMPARISONS } from "../data/comparisons";
import { BREAKTHROUGHS } from "../data/breakthroughs";
import { ComparisonResult } from "../types";
import {
  BookOpen,
  ArrowRightLeft,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Brain,
  Coffee,
  Loader2,
} from "lucide-react";

export const ComparativeLab: React.FC = () => {
  const [selectedComparisonIdx, setSelectedComparisonIdx] = useState<number>(0);
  const [customTechA, setCustomTechA] = useState<string>(BREAKTHROUGHS[0].id);
  const [customTechB, setCustomTechB] = useState<string>(BREAKTHROUGHS[6].id);
  const [isAiComparing, setIsAiComparing] = useState<boolean>(false);
  const [aiComparisonResult, setAiComparisonResult] =
    useState<ComparisonResult | null>(null);

  const activeComparison =
    aiComparisonResult || CURATED_COMPARISONS[selectedComparisonIdx];

  const handleRunAiComparison = async () => {
    const techAObj = BREAKTHROUGHS.find((b) => b.id === customTechA);
    const techBObj = BREAKTHROUGHS.find((b) => b.id === customTechB);
    if (!techAObj || !techBObj) return;

    setIsAiComparing(true);
    setAiComparisonResult(null);

    try {
      const res = await fetch("/api/gemini/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: `[${techAObj.name}]와 [${techBObj.name}]의 통섭적 교차 비교`,
          era: `${techAObj.yearApprox} vs ${techBObj.yearApprox}`,
          context: `두 기술이 인간의 신체 지각, 사회적 권력, 그리고 파생 문화에 미친 구조적 유사점(Parallels)과 결정적 분기점(Divergences)을 비교 분석해줘`,
        }),
      });

      const data = await res.json();
      if (data.analysis) {
        setAiComparisonResult({
          title: `${techAObj.name} vs ${techBObj.name}`,
          techA: `${techAObj.name} (${techAObj.yearApprox})`,
          techB: `${techBObj.name} (${techBObj.yearApprox})`,
          structuralParallels: [
            data.analysis.pillars?.socioPolitics ||
              "기존 지식과 권력의 독점 체계를 재편성하고 대중의 의식 구조를 변화시킴.",
            data.analysis.pillars?.scienceTech ||
              "물리적 한계를 외주화하여 새로운 정보/에너지 교환 방식을 확립함.",
            "새로운 도구적 환경에 적응하기 위해 인간의 신경계와 인지 습관이 재조정됨.",
          ],
          divergences: [
            data.analysis.pillars?.anthropologyLife ||
              "시간과 공간을 점유하는 양식에서 차이가 발생함.",
            data.analysis.pillars?.artSymbolism ||
              "표현 양식과 상징 체계의 복제 속도 및 감각적 몰입도에서 본질적 차이를 보임.",
          ],
          cognitiveMutation:
            data.analysis.dialecticInsight ||
            "사유의 깊이와 정보 연결의 폭 사이에서 인류의 지적 체계가 질적으로 재편됨.",
          contemporaryLegacy:
            data.analysis.pillars?.derivedCulture ||
            "현대인의 일상적 소통 양식과 문화적 규범 속에 두 기술의 유산이 혼재되어 작동함.",
        });
      }
    } catch (err) {
      console.error("Comparison AI error:", err);
    } finally {
      setIsAiComparing(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Intro Header */}
      <div className="bg-gradient-to-br from-white via-[#fcfbf9] to-[#f7f5f0] border border-stone-200/90 p-6 sm:p-8 rounded-3xl shadow-xs">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold shadow-xs">
            <ArrowRightLeft className="w-3.5 h-3.5 text-amber-600" />
            시대를 초월한 통섭적 교차 비교 (Cross-Epoch Comparison)
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 tracking-tight">
            서로 다른 시대의 기술이 빚어낸 문화적 데칼코마니
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
            구텐베르크의 인쇄기가 16세기 유럽을 뒤흔든 방식과 스마트폰이 21세기를 재편한 방식은
            놀라울 정도로 닮아 있으면서도 결정적으로 분기합니다.
            역사적 시대를 가로질러 두 기술의 인지적 변이와 파생 문화를 교차 분석해 보세요.
          </p>
        </div>
      </div>

      {/* Preset Comparisons */}
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-stone-700 font-mono">
          큐레이션된 통섭 비교 세트:
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {CURATED_COMPARISONS.map((comp, idx) => {
            const isSelected =
              !aiComparisonResult && selectedComparisonIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => {
                  setAiComparisonResult(null);
                  setSelectedComparisonIdx(idx);
                }}
                className={`p-5 rounded-2xl border text-left transition cursor-pointer flex flex-col justify-between shadow-xs ${
                  isSelected
                    ? "bg-amber-50 border-amber-500 shadow-sm ring-2 ring-amber-400/40 text-stone-900"
                    : "bg-white border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-50 hover:border-stone-300"
                }`}
              >
                <div className="text-[10px] font-mono text-amber-800 font-bold mb-1">
                  CASE 0{idx + 1}
                </div>
                <h4 className="text-xs font-bold text-stone-900 font-serif mb-2 leading-snug">
                  {comp.title}
                </h4>
                <div className="text-[11px] text-stone-500 line-clamp-2 leading-relaxed">
                  {comp.cognitiveMutation}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Custom Cross-Comparison Generator with Gemini AI */}
      <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold uppercase text-stone-900 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            자유 조합 교차 비교 (Custom Comparison with Gemini AI)
          </h4>
          <span className="text-[11px] text-stone-500">
            원하는 두 기술을 골라 통섭적 상관관계를 분석합니다
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 items-center">
          <div>
            <label className="text-[11px] text-stone-600 font-medium block mb-1">기술 A 선택:</label>
            <select
              value={customTechA}
              onChange={(e) => setCustomTechA(e.target.value)}
              className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-800 focus:outline-none focus:border-amber-500"
            >
              {BREAKTHROUGHS.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name} ({b.yearApprox})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-[11px] text-stone-600 font-medium block mb-1">기술 B 선택:</label>
            <select
              value={customTechB}
              onChange={(e) => setCustomTechB(e.target.value)}
              className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-800 focus:outline-none focus:border-amber-500"
            >
              {BREAKTHROUGHS.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name} ({b.yearApprox})
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2 md:col-span-1 pt-4 sm:pt-0">
            <button
              onClick={handleRunAiComparison}
              disabled={isAiComparing || customTechA === customTechB}
              className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white font-bold text-xs transition flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              {isAiComparing ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  비교 분석 중...
                </>
              ) : (
                <>
                  <ArrowRightLeft className="w-3.5 h-3.5" />
                  통섭 교차 비교 실행
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Comparison Result Display Card */}
      <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="border-b border-stone-200 pb-5">
          <div className="flex items-center gap-2">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 font-bold">
              통섭 비교 보고서
            </span>
            {aiComparisonResult && (
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 font-medium">
                Gemini AI 실시간 분석
              </span>
            )}
          </div>
          <h3 className="text-2xl font-bold font-serif text-stone-900 mt-2">
            {activeComparison.title}
          </h3>
          <div className="flex items-center gap-3 text-xs text-stone-500 mt-1 font-mono">
            <span>[기술 A] {activeComparison.techA}</span>
            <span>⇄</span>
            <span>[기술 B] {activeComparison.techB}</span>
          </div>
        </div>

        {/* Structural Parallels & Divergences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Structural Parallels */}
          <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-5 space-y-3 shadow-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              구조적 유사점 (Structural Parallels)
            </h4>
            <p className="text-[11px] text-stone-500">
              서로 다른 시공간에도 불구하고 동일하게 반복된 문명적 메커니즘
            </p>
            <ul className="space-y-2.5 pt-1">
              {activeComparison.structuralParallels.map((para, i) => (
                <li
                  key={i}
                  className="text-xs text-stone-700 leading-relaxed flex items-start gap-2"
                >
                  <span className="text-emerald-700 font-bold shrink-0">
                    0{i + 1}.
                  </span>
                  <span>{para}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Divergences */}
          <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-5 space-y-3 shadow-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              결정적 분기점 (Crucial Divergences)
            </h4>
            <p className="text-[11px] text-stone-500">
              기술의 속성과 매체 조건이 갈라놓은 인간 조건의 차이
            </p>
            <ul className="space-y-2.5 pt-1">
              {activeComparison.divergences.map((div, i) => (
                <li
                  key={i}
                  className="text-xs text-stone-700 leading-relaxed flex items-start gap-2"
                >
                  <span className="text-amber-700 font-bold shrink-0">
                    0{i + 1}.
                  </span>
                  <span>{div}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cognitive Shift & Modern Echo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-5 rounded-2xl bg-violet-50/60 border border-violet-200/80 space-y-2 shadow-xs">
            <h4 className="text-xs font-bold text-violet-900 flex items-center gap-1.5">
              <Brain className="w-4 h-4 text-violet-600" />
              인간 인지 및 신체 감각의 변이
            </h4>
            <p className="text-xs text-stone-700 leading-relaxed">
              {activeComparison.cognitiveMutation}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#faf8f5] border border-stone-200 space-y-2 shadow-xs">
            <h4 className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <Coffee className="w-4 h-4 text-amber-600" />
              오늘날 우리 삶에 남겨진 문화적 유산
            </h4>
            <p className="text-xs text-stone-700 leading-relaxed">
              {activeComparison.contemporaryLegacy}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
