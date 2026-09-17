import React, { useState } from "react";
import { BREAKTHROUGHS } from "../data/breakthroughs";
import { TechBreakthrough } from "../types";
import {
  GitMerge,
  ArrowRight,
  Flame,
  FileText,
  Compass,
  BookOpen,
  Clock,
  Smartphone,
  Cpu,
  Sparkles,
  ChevronRight,
  CheckCircle,
  Lightbulb,
} from "lucide-react";

interface CausalFlowDiagramProps {
  onOpenBreakthrough: (item: TechBreakthrough) => void;
}

export const CausalFlowDiagram: React.FC<CausalFlowDiagramProps> = ({
  onOpenBreakthrough,
}) => {
  const [selectedTechId, setSelectedTechId] = useState<string>(
    BREAKTHROUGHS[4].id // Default to Steam & Clocks, or Fire
  );
  const [activeStep, setActiveStep] = useState<number>(1);

  const currentTech =
    BREAKTHROUGHS.find((b) => b.id === selectedTechId) || BREAKTHROUGHS[0];

  const renderIcon = (name: string) => {
    switch (name) {
      case "Flame":
        return <Flame className="w-4 h-4 text-amber-500" />;
      case "FileText":
        return <FileText className="w-4 h-4 text-emerald-500" />;
      case "Compass":
        return <Compass className="w-4 h-4 text-amber-400" />;
      case "BookOpen":
        return <BookOpen className="w-4 h-4 text-cyan-400" />;
      case "Clock":
        return <Clock className="w-4 h-4 text-orange-400" />;
      case "Smartphone":
        return <Smartphone className="w-4 h-4 text-blue-400" />;
      case "Cpu":
        return <Cpu className="w-4 h-4 text-purple-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-400" />;
    }
  };

  const domainColorMap: Record<string, string> = {
    "자연과학·열역학": "text-sky-400 border-sky-800/60 bg-sky-950/40",
    "생물·인류학": "text-emerald-400 border-emerald-800/60 bg-emerald-950/40",
    "사회·생활": "text-amber-400 border-amber-800/60 bg-amber-950/40",
    "인지·언어": "text-violet-400 border-violet-800/60 bg-violet-950/40",
    "예술·상징": "text-rose-400 border-rose-800/60 bg-rose-950/40",
    "현대 문화": "text-amber-300 border-amber-700/60 bg-amber-950/60",
  };

  return (
    <div className="space-y-8">
      {/* Intro Header */}
      <div className="bg-gradient-to-br from-white via-[#fcfbf9] to-[#f7f5f0] border border-stone-200/90 p-6 sm:p-8 rounded-3xl shadow-xs">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold shadow-xs">
            <GitMerge className="w-3.5 h-3.5 text-amber-600" />
            통섭적 인과망 시뮬레이션 (Dialectic Causal Web)
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 tracking-tight">
            어떻게 공학적 점화가 인류의 영혼과 하위문화를 빚어내는가
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
            모든 기술적 전환은 고립된 기계의 승리가 아닙니다.
            물리적 메커니즘에서 출발한 파동은 사회 권력 구조를 재배치하고, 인간 신체의 감각과 시간관을 개조하며,
            마침내 예술 사조와 현대인이 무의식적으로 누리는 일상 하위문화로 결정화됩니다.
          </p>
        </div>
      </div>

      {/* Tech Selection Tabs */}
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-stone-700 font-mono">
          인과망을 분석할 핵심 기술 선택:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {BREAKTHROUGHS.map((tech) => {
            const isSelected = tech.id === selectedTechId;
            return (
              <button
                key={tech.id}
                onClick={() => {
                  setSelectedTechId(tech.id);
                  setActiveStep(1);
                }}
                className={`p-3 rounded-2xl border text-left transition flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? "bg-amber-50 border-amber-500 shadow-sm ring-2 ring-amber-400/40"
                    : "bg-white border-stone-200/90 text-stone-600 hover:text-stone-900 hover:bg-stone-50 hover:border-stone-300"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-1.5 rounded-xl bg-amber-50/80 border border-amber-100">
                    {renderIcon(tech.iconName)}
                  </div>
                  <span className="text-[10px] font-mono text-stone-400">
                    {tech.yearApprox.split(" ")[0]}
                  </span>
                </div>
                <div className={`text-xs font-bold truncate ${isSelected ? "text-stone-900" : "text-stone-800"}`}>
                  {tech.name.split(" ")[0]}
                </div>
                <div className="text-[10px] text-stone-500 line-clamp-1 mt-0.5">
                  {tech.tagline}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Causal Cascade Stepper */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 font-bold">
                선택된 기술: {currentTech.yearApprox}
              </span>
              <span className="text-xs text-stone-500 font-mono">
                {currentTech.nameEn}
              </span>
            </div>
            <h3 className="text-xl font-bold font-serif text-stone-900 mt-1">
              {currentTech.name}의 문명 파생 인과망
            </h3>
          </div>

          <button
            onClick={() => onOpenBreakthrough(currentTech)}
            className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs transition cursor-pointer self-start sm:self-auto shadow-xs"
          >
            전체 6대 차원 분석서 열기
          </button>
        </div>

        {/* 6 Step Interactive Flow Map */}
        <div className="relative">
          {/* Horizontal Step Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-stone-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 relative z-10">
            {currentTech.causalChain.map((node) => {
              const isCurrent = activeStep === node.step;
              const isPassed = activeStep > node.step;

              return (
                <button
                  key={node.step}
                  onClick={() => setActiveStep(node.step)}
                  className={`text-left p-4 rounded-2xl border transition-all cursor-pointer relative flex flex-col justify-between min-h-[140px] shadow-xs ${
                    isCurrent
                      ? "bg-amber-50 border-amber-500 shadow-md ring-2 ring-amber-400/40 text-stone-900 scale-102"
                      : isPassed
                      ? "bg-stone-50 border-stone-300 text-stone-800"
                      : "bg-white border-stone-200 text-stone-600 hover:border-stone-300"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                          isCurrent
                            ? "bg-amber-600 text-white"
                            : "bg-stone-100 text-stone-600"
                        }`}
                      >
                        STEP 0{node.step}
                      </span>
                      <span className="text-[10px] font-medium text-stone-500">
                        {node.domain}
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-stone-900 font-serif leading-tight">
                      {node.title}
                    </h4>
                  </div>

                  <p className="text-[11px] text-stone-600 line-clamp-3 mt-2">
                    {node.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Step Spotlight Detail */}
        {(() => {
          const activeNode =
            currentTech.causalChain.find((n) => n.step === activeStep) ||
            currentTech.causalChain[0];

          return (
            <div className="p-6 rounded-2xl bg-[#faf8f5] border border-stone-200 space-y-4 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 border border-amber-300 flex items-center justify-center font-mono font-bold text-xs">
                    0{activeNode.step}
                  </span>
                  <div>
                    <span className="text-[11px] text-stone-500 uppercase font-mono">
                      {activeNode.domain} 영역의 파급
                    </span>
                    <h4 className="text-base font-bold font-serif text-stone-900">
                      {activeNode.title}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    disabled={activeStep <= 1}
                    onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                    className="px-3 py-1.5 rounded-lg bg-white hover:bg-stone-50 disabled:opacity-40 text-xs text-stone-700 transition cursor-pointer border border-stone-200"
                  >
                    이전 단계
                  </button>
                  <button
                    disabled={activeStep >= 6}
                    onClick={() => setActiveStep((prev) => Math.min(6, prev + 1))}
                    className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 disabled:opacity-40 text-xs font-semibold text-white transition cursor-pointer flex items-center gap-1 shadow-xs"
                  >
                    다음 단계
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <p className="text-sm text-stone-700 leading-relaxed font-sans">
                {activeNode.description}
              </p>

              {/* Dialectic Reflection note */}
              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-3">
                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs text-stone-700 leading-relaxed">
                  <strong className="text-amber-900 font-bold block mb-0.5">
                    통섭적 피드백 루프 (Feedback Loop):
                  </strong>
                  이 단계에서 발생한 변화는 멈추지 않고 인간의 또 다른 결핍과 욕망을 자극하여,
                  결국 다음 세대의 기술 발명(
                  {activeStep === 6 ? "다음 문명 전환기" : `0${activeStep + 1}단계`}
                  )을 추동하는 원동력이 됩니다.
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
};
