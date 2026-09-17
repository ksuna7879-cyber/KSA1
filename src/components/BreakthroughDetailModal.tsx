import React, { useState } from "react";
import { TechBreakthrough, PillarKey } from "../types";
import { PILLAR_MAP } from "./PillarBadge";
import {
  X,
  Flame,
  FileText,
  Compass,
  BookOpen,
  Clock,
  Smartphone,
  Cpu,
  Sparkles,
  ArrowRight,
  Quote,
  Send,
  Loader2,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";

interface BreakthroughDetailModalProps {
  breakthrough: TechBreakthrough | null;
  onClose: () => void;
  aiAvailable: boolean;
}

export const BreakthroughDetailModal: React.FC<BreakthroughDetailModalProps> = ({
  breakthrough,
  onClose,
  aiAvailable,
}) => {
  const [selectedPillar, setSelectedPillar] = useState<PillarKey | "all">("all");
  const [customQuestion, setCustomQuestion] = useState("");
  const [isAskingAi, setIsAskingAi] = useState(false);
  const [aiAnswer, setAiAnswer] = useState<any | null>(null);
  const [aiError, setAiError] = useState<string | null>(null);

  if (!breakthrough) return null;

  const renderIcon = (name: string) => {
    switch (name) {
      case "Flame":
        return <Flame className="w-6 h-6 text-amber-500" />;
      case "FileText":
        return <FileText className="w-6 h-6 text-emerald-500" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-amber-400" />;
      case "BookOpen":
        return <BookOpen className="w-6 h-6 text-cyan-400" />;
      case "Clock":
        return <Clock className="w-6 h-6 text-orange-400" />;
      case "Smartphone":
        return <Smartphone className="w-6 h-6 text-blue-400" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-purple-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  const handleAskAi = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!customQuestion.trim() || isAskingAi) return;

    setIsAskingAi(true);
    setAiError(null);
    setAiAnswer(null);

    try {
      const res = await fetch("/api/gemini/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: `${breakthrough.name} (${breakthrough.nameEn})`,
          era: breakthrough.yearApprox,
          context: customQuestion,
        }),
      });

      const data = await res.json();
      if (data.analysis) {
        setAiAnswer(data.analysis);
      } else {
        setAiError(data.error || "분석을 가져오지 못했습니다.");
      }
    } catch (err: any) {
      setAiError(err.message || "서버 통신 오류가 발생했습니다.");
    } finally {
      setIsAskingAi(false);
    }
  };

  const suggestedQuestions = [
    `이 기술이 인간의 '시간관'과 '신체 리듬'을 어떻게 변형시켰는가?`,
    `이 기술로 인해 가장 강력하게 번성한 현대의 하위문화(Subculture)는?`,
    `동양과 서양 문명에서 이 기술의 문화적 수용 양상은 어떻게 달랐는가?`,
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/40 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-5xl bg-white border border-stone-200 rounded-3xl shadow-2xl overflow-hidden text-stone-800 my-8 max-h-[90vh] flex flex-col">
        {/* Header Bar */}
        <div className="p-6 border-b border-stone-200 bg-[#fcfbf9] flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center shrink-0 shadow-xs">
              {renderIcon(breakthrough.iconName)}
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 font-bold">
                  {breakthrough.yearApprox}
                </span>
                <span className="text-xs text-stone-500 font-mono">
                  {breakthrough.nameEn}
                </span>
              </div>
              <h2 className="text-2xl font-bold font-serif text-stone-900 mt-1">
                {breakthrough.name}
              </h2>
              <p className="text-xs text-amber-800 font-semibold mt-0.5">
                {breakthrough.tagline}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-800 p-2 rounded-xl hover:bg-stone-100 transition cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-8 divide-y divide-stone-100">
          {/* Overview & Dialectic Tension */}
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
              {breakthrough.overview}
            </p>

            <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                  문명사의 변증법적 긴장 (Dialectic Tension)
                </span>
                <p className="text-xs text-stone-700 mt-1 leading-relaxed">
                  {breakthrough.dialecticTension}
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Causal Chain Cascade */}
          <div className="pt-6 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-800 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                기술에서 문화로의 6단계 인과적 파급 연쇄 (Causal Cascade)
              </h3>
              <span className="text-[11px] text-stone-500">자연법칙 → 사회구조 → 일상감각 → 예술 → 현대문화</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {breakthrough.causalChain.map((node) => (
                <div
                  key={node.step}
                  className="bg-stone-50/80 border border-stone-200 rounded-xl p-3.5 relative hover:border-amber-300 transition-all flex flex-col justify-between shadow-xs"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                      단계 0{node.step}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white border border-stone-200 text-stone-600 font-medium">
                      {node.domain}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-stone-900 font-serif mb-1">
                    {node.title}
                  </h4>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    {node.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 6 Consilience Pillars Deep-Dive */}
          <div className="pt-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-800 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                6대 통섭 차원 다층 분석 (The 6 Consilience Pillars)
              </h3>

              {/* Pillar Selector Filter */}
              <div className="flex flex-wrap gap-1">
                <button
                  onClick={() => setSelectedPillar("all")}
                  className={`text-[11px] px-2.5 py-1 rounded-lg transition cursor-pointer font-medium ${
                    selectedPillar === "all"
                      ? "bg-amber-600 text-white shadow-xs"
                      : "bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200 border border-stone-200"
                  }`}
                >
                  전체 보기
                </button>
                {(Object.keys(PILLAR_MAP) as PillarKey[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedPillar(key)}
                    className={`text-[11px] px-2 py-1 rounded-lg transition cursor-pointer font-medium ${
                      selectedPillar === key
                        ? "bg-amber-600 text-white shadow-xs"
                        : "bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200 border border-stone-200"
                    }`}
                  >
                    {PILLAR_MAP[key].label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(Object.keys(PILLAR_MAP) as PillarKey[])
                .filter((key) => selectedPillar === "all" || selectedPillar === key)
                .map((key) => {
                  const meta = PILLAR_MAP[key];
                  const Icon = meta.icon;
                  const content = breakthrough.consiliencePillars[key];

                  return (
                    <div
                      key={key}
                      className={`rounded-2xl p-4 border transition-all ${meta.bgColor} ${meta.borderColor} space-y-2 shadow-xs`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`p-1.5 rounded-xl bg-white border ${meta.borderColor} shadow-xs`}>
                          <Icon className={`w-4 h-4 ${meta.color}`} />
                        </div>
                        <div>
                          <h4 className={`text-xs font-bold ${meta.color}`}>
                            {meta.label}
                          </h4>
                          <span className="text-[10px] text-stone-500">
                            {meta.sublabel}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-stone-700 leading-relaxed pt-1">
                        {content}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Theoretical Quote & Modern Echoes */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Quote */}
            <div className="bg-[#faf8f5] border border-stone-200 rounded-2xl p-5 flex flex-col justify-between shadow-xs">
              <div className="flex items-start gap-2.5">
                <Quote className="w-5 h-5 text-amber-600/80 shrink-0 mt-0.5" />
                <p className="text-xs text-stone-700 italic font-serif leading-relaxed">
                  "{breakthrough.quote.text}"
                </p>
              </div>
              <div className="text-right mt-3">
                <span className="text-xs font-bold text-stone-800">
                  — {breakthrough.quote.author}
                </span>
                {breakthrough.quote.work && (
                  <span className="text-[10px] text-stone-500 block font-mono">
                    《{breakthrough.quote.work}》
                  </span>
                )}
              </div>
            </div>

            {/* Modern Echoes */}
            <div className="bg-[#faf8f5] border border-stone-200 rounded-2xl p-5 space-y-2.5 shadow-xs">
              <h4 className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                현대 문화에 남겨진 생생한 유산 (Modern Echoes)
              </h4>
              <ul className="space-y-1.5">
                {breakthrough.modernEchoes.map((echo, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-stone-700 flex items-start gap-2"
                  >
                    <span className="text-amber-600 font-bold shrink-0">•</span>
                    <span>{echo}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Consilient AI Inquiries */}
          <div className="pt-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                통섭적 AI 심층 탐구 (Consilient Inquiry)
              </h3>
              <span className="text-[11px] text-stone-500">
                이 기술의 숨겨진 문화적 파동을 실시간으로 분석합니다
              </span>
            </div>

            {/* Suggested prompt chips */}
            <div className="flex flex-wrap gap-1.5">
              {suggestedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCustomQuestion(q);
                  }}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-stone-100 hover:bg-amber-50 text-stone-700 hover:text-amber-900 border border-stone-200 transition cursor-pointer text-left font-medium"
                >
                  💡 {q}
                </button>
              ))}
            </div>

            {/* Ask input form */}
            <form onSubmit={handleAskAi} className="flex gap-2">
              <input
                type="text"
                value={customQuestion}
                onChange={(e) => setCustomQuestion(e.target.value)}
                placeholder="예: 이 기술이 근대 문학 서사 구조에 어떤 영향을 주었나요?"
                className="flex-1 bg-white border border-stone-300 rounded-xl px-4 py-2.5 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-amber-500 shadow-xs"
              />
              <button
                type="submit"
                disabled={isAskingAi || !customQuestion.trim()}
                className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs transition flex items-center gap-2 disabled:opacity-50 cursor-pointer shrink-0 shadow-xs"
              >
                {isAskingAi ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    분석 중...
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    통섭 분석
                  </>
                )}
              </button>
            </form>

            {aiError && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs">
                {aiError}
              </div>
            )}

            {aiAnswer && (
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3 shadow-xs">
                <div className="flex items-center justify-between border-b border-amber-200 pb-2">
                  <span className="text-xs font-bold text-amber-950">
                    💡 통섭적 심층 분석 결과: {aiAnswer.title}
                  </span>
                  <span className="text-[10px] text-stone-500 font-mono">
                    Gemini 3.8 Flash 엔진
                  </span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed font-serif">
                  {aiAnswer.overview}
                </p>
                {aiAnswer.pillars && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
                    {aiAnswer.pillars.scienceTech && (
                      <div className="bg-white p-2.5 rounded-xl border border-stone-200 shadow-xs">
                        <span className="font-bold text-sky-800 block mb-0.5">공학·과학 원리:</span>
                        <span className="text-stone-700">{aiAnswer.pillars.scienceTech}</span>
                      </div>
                    )}
                    {aiAnswer.pillars.socioPolitics && (
                      <div className="bg-white p-2.5 rounded-xl border border-stone-200 shadow-xs">
                        <span className="font-bold text-amber-800 block mb-0.5">사회·정치 권력:</span>
                        <span className="text-stone-700">{aiAnswer.pillars.socioPolitics}</span>
                      </div>
                    )}
                    {aiAnswer.pillars.anthropologyLife && (
                      <div className="bg-white p-2.5 rounded-xl border border-stone-200 shadow-xs">
                        <span className="font-bold text-emerald-800 block mb-0.5">신체·일상 양식:</span>
                        <span className="text-stone-700">{aiAnswer.pillars.anthropologyLife}</span>
                      </div>
                    )}
                    {aiAnswer.pillars.derivedCulture && (
                      <div className="bg-white p-2.5 rounded-xl border border-stone-200 shadow-xs">
                        <span className="font-bold text-rose-800 block mb-0.5">파생 하위문화:</span>
                        <span className="text-stone-700">{aiAnswer.pillars.derivedCulture}</span>
                      </div>
                    )}
                  </div>
                )}
                {aiAnswer.dialecticInsight && (
                  <div className="text-xs text-amber-900 font-medium italic border-t border-amber-200/80 pt-2">
                    통섭적 결론: "{aiAnswer.dialecticInsight}"
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-stone-200 bg-[#fcfbf9] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium transition cursor-pointer border border-stone-200"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
