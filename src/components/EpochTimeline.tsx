import React, { useState } from "react";
import { EPOCHS } from "../data/epochs";
import { BREAKTHROUGHS } from "../data/breakthroughs";
import { TechBreakthrough, PillarKey } from "../types";
import { PILLAR_MAP } from "./PillarBadge";
import { HeroSection, THEMATIC_ROUTES } from "./HeroSection";
import { ConsilienceLectureVideo } from "./ConsilienceLectureVideo";
import {
  Flame,
  FileText,
  Compass,
  BookOpen,
  Clock,
  Smartphone,
  Cpu,
  Sparkles,
  ArrowUpRight,
  Search,
  Filter,
  CheckCircle2,
  Zap,
  Play,
  Tv,
} from "lucide-react";

interface EpochTimelineProps {
  onSelectBreakthrough: (item: TechBreakthrough) => void;
}

export const EpochTimeline: React.FC<EpochTimelineProps> = ({
  onSelectBreakthrough,
}) => {
  const [selectedEpochId, setSelectedEpochId] = useState<string>("all");
  const [highlightPillar, setHighlightPillar] = useState<PillarKey | null>(null);
  const [activeThematicRoute, setActiveThematicRoute] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showLectureVideo, setShowLectureVideo] = useState<boolean>(false);

  const renderIcon = (name: string) => {
    switch (name) {
      case "Flame":
        return <Flame className="w-5 h-5 text-amber-500" />;
      case "FileText":
        return <FileText className="w-5 h-5 text-emerald-500" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-amber-400" />;
      case "BookOpen":
        return <BookOpen className="w-5 h-5 text-cyan-400" />;
      case "Clock":
        return <Clock className="w-5 h-5 text-orange-400" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-blue-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-purple-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  const filteredBreakthroughs = BREAKTHROUGHS.filter((b) => {
    const matchesEpoch =
      selectedEpochId === "all" || b.epochId === selectedEpochId;
    const matchesSearch =
      searchQuery.trim() === "" ||
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.modernEchoes.some((echo) =>
        echo.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const thematicRoute = THEMATIC_ROUTES.find((r) => r.id === activeThematicRoute);
    const matchesThematic =
      !activeThematicRoute ||
      (thematicRoute ? thematicRoute.breakthroughIds.includes(b.id) : true);

    return matchesEpoch && matchesSearch && matchesThematic;
  });

  return (
    <div className="space-y-8">
      {/* Interactive Hero Section */}
      <HeroSection
        selectedEpochId={selectedEpochId}
        onSelectEpoch={(id) => {
          setSelectedEpochId(id);
          // If a specific epoch is selected, clear thematic filter to avoid empty state confusion
          if (id !== "all") {
            setActiveThematicRoute(null);
          }
        }}
        highlightPillar={highlightPillar}
        onSelectPillar={setHighlightPillar}
        activeThematicRoute={activeThematicRoute}
        onSelectThematicRoute={(routeId) => {
          setActiveThematicRoute(routeId);
          if (routeId) {
            setSelectedEpochId("all");
          }
        }}
        onOpenBreakthrough={onSelectBreakthrough}
      />

      {/* Featured Masterclass Lecture Spotlight */}
      <div className="bg-[#fcfaf5] border border-[#ded5c5] rounded-sm p-5 sm:p-6 shadow-[0_1px_3px_rgba(40,30,20,0.04)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-serif">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xs bg-[#f4eee2] border border-[#d8cdbc] text-[#8c281e] flex items-center justify-center shrink-0 shadow-xs">
            <Play className="w-4 h-4 fill-current ml-0.5 text-[#8c281e]" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-latin-display uppercase bg-[#f2ebd9] text-[#702b21] border border-[#d8cdbc] px-2 py-0.5 rounded-xs font-bold tracking-wider">
                인문학 아카이브 특강
              </span>
              <span className="text-sm font-bold text-[#1c1713] font-serif">
                [지식향연] 통섭(지식통합)의 시대 — 최재천 교수
              </span>
            </div>
            <p className="text-xs text-[#5c5043] mt-1 font-serif">
              《통섭: 지식의 대통합》 역자 최재천 교수가 전하는 학문 간의 벽을 허무는 21세기 문명사적 통찰
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowLectureVideo(!showLectureVideo)}
          className="px-4 py-2 rounded-xs bg-[#8c281e] hover:bg-[#742119] text-[#fff8f5] text-xs font-serif font-medium transition cursor-pointer flex items-center gap-2 self-start sm:self-auto shrink-0 shadow-xs"
        >
          <Tv className="w-3.5 h-3.5" />
          <span>{showLectureVideo ? "특강 영상 닫기" : "특강 영상 시청하기"}</span>
        </button>
      </div>

      {/* Expanded Video Lecture */}
      {showLectureVideo && <ConsilienceLectureVideo />}

      {/* Epoch Stepper Bar */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700 font-mono">
            시대별 타임라인 탐색 (Chronological Epochs)
          </h3>
          {/* Search Box */}
          <div className="relative w-64 max-w-full">
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="기술명, 키워드 검색..."
              className="w-full bg-white border border-stone-200 rounded-lg pl-8 pr-3 py-1.5 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-amber-500 shadow-xs"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => {
              setSelectedEpochId("all");
              setActiveThematicRoute(null);
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition cursor-pointer ${
              selectedEpochId === "all" && !activeThematicRoute
                ? "bg-amber-600 text-white font-semibold shadow-xs"
                : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200 hover:bg-stone-50"
            }`}
          >
            전체 시대 통섭 보기
          </button>
          {EPOCHS.map((epoch) => {
            const isSelected = selectedEpochId === epoch.id;
            return (
              <button
                key={epoch.id}
                onClick={() => {
                  setSelectedEpochId(epoch.id);
                  setActiveThematicRoute(null);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs whitespace-nowrap transition cursor-pointer border ${
                  isSelected
                    ? "bg-amber-100 text-amber-950 border-amber-300 font-semibold shadow-xs"
                    : "bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-50 border-stone-200"
                }`}
              >
                <span className="font-mono text-[10px] text-stone-400 mr-1.5">
                  0{epoch.order}
                </span>
                <span>{epoch.name.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Thematic Route Active Notice */}
      {activeThematicRoute && (
        <div className="p-3.5 rounded-2xl bg-amber-50/90 border border-amber-200 flex items-center justify-between gap-3 text-xs text-amber-950 shadow-xs">
          <div className="flex items-center gap-2.5">
            <Zap className="w-4 h-4 text-amber-600 shrink-0" />
            <div>
              <span>
                테마 궤적 필터 활성:{" "}
                <strong className="font-bold text-amber-900">
                  {THEMATIC_ROUTES.find((r) => r.id === activeThematicRoute)?.title}
                </strong>
              </span>
              <span className="text-stone-500 ml-2 hidden sm:inline">
                ({filteredBreakthroughs.length}개 연계 기술 표시 중)
              </span>
            </div>
          </div>
          <button
            onClick={() => setActiveThematicRoute(null)}
            className="text-amber-800 hover:underline cursor-pointer shrink-0 font-semibold"
          >
            전체 보기로 복원
          </button>
        </div>
      )}

      {/* Epoch Detail Banner (If single epoch selected) */}
      {selectedEpochId !== "all" && (
        <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs space-y-2">
          {(() => {
            const currentEpoch = EPOCHS.find((e) => e.id === selectedEpochId);
            if (!currentEpoch) return null;
            return (
              <>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded border border-amber-200">
                      제 {currentEpoch.order} 기
                    </span>
                    <h3 className="text-base font-bold text-stone-900 font-serif">
                      {currentEpoch.name}
                    </h3>
                  </div>
                  <span className="text-xs text-stone-500 font-mono">
                    {currentEpoch.timeframe}
                  </span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {currentEpoch.summary}
                </p>
                <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
                  <span className="px-2 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-amber-900 font-medium">
                    핵심 변혁: {currentEpoch.coreDisruption}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-stone-100 border border-stone-200 text-stone-700 font-medium">
                    인지적 전환: {currentEpoch.dominantCognitiveShift}
                  </span>
                </div>
              </>
            );
          })()}
        </div>
      )}

      {/* Breakthroughs List Grid */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredBreakthroughs.map((item) => {
            const epoch = EPOCHS.find((e) => e.id === item.epochId);
            return (
              <div
                key={item.id}
                className="group relative bg-white border border-stone-200/90 hover:border-amber-400 rounded-2xl p-6 transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200/80">
                        {renderIcon(item.iconName)}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-wider block">
                          {epoch?.name} ({item.yearApprox})
                        </span>
                        <h4 className="text-lg font-bold text-stone-900 font-serif group-hover:text-amber-800 transition">
                          {item.name}
                        </h4>
                      </div>
                    </div>
                    <button
                      onClick={() => onSelectBreakthrough(item)}
                      className="p-2 rounded-lg bg-stone-100 hover:bg-amber-600 text-stone-600 hover:text-white transition cursor-pointer"
                      title="통섭 심층 분석 열기"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs text-amber-800 font-semibold mb-2.5">
                    {item.tagline}
                  </p>

                  <p className="text-xs text-stone-600 leading-relaxed font-sans line-clamp-3 mb-4">
                    {item.overview}
                  </p>

                  {/* Highlighted Pillar preview if selected */}
                  {highlightPillar ? (
                    <div
                      className={`p-3 rounded-xl border text-xs leading-relaxed mb-4 ${
                        PILLAR_MAP[highlightPillar].bgColor
                      } ${PILLAR_MAP[highlightPillar].borderColor}`}
                    >
                      <div className="flex items-center gap-1.5 font-bold mb-1 text-[11px]">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 ${PILLAR_MAP[highlightPillar].color}`}
                        />
                        <span className={PILLAR_MAP[highlightPillar].color}>
                          {PILLAR_MAP[highlightPillar].label} 관점:
                        </span>
                      </div>
                      <p className="text-stone-800">
                        {item.consiliencePillars[highlightPillar]}
                      </p>
                    </div>
                  ) : (
                    /* Mini 6-Pillar Indicator Bar */
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-1 mb-4">
                      {(Object.keys(PILLAR_MAP) as PillarKey[]).map((key) => {
                        const meta = PILLAR_MAP[key];
                        return (
                          <div
                            key={key}
                            className="text-center p-1 rounded bg-stone-50 border border-stone-200"
                            title={`${meta.label}: ${item.consiliencePillars[key]}`}
                          >
                            <span className="text-[10px] text-stone-600 block truncate">
                              {meta.label.split("·")[0]}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Causal cascade quick snippet */}
                  <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 text-[11px] text-stone-600 flex items-center justify-between mb-4">
                    <span>
                      인과 1단계:{" "}
                      <strong className="text-stone-800 font-medium">
                        {item.causalChain[0]?.title}
                      </strong>
                    </span>
                    <span className="text-amber-600 font-mono font-bold">→</span>
                    <span>
                      파생 문화:{" "}
                      <strong className="text-amber-800 font-semibold">
                        {item.causalChain[5]?.title}
                      </strong>
                    </span>
                  </div>
                </div>

                {/* Bottom Action bar */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {item.modernEchoes.slice(0, 1).map((echo, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-200 line-clamp-1"
                      >
                        현대 유산: {echo}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectBreakthrough(item)}
                    className="text-xs text-amber-700 hover:text-amber-800 font-semibold flex items-center gap-1 cursor-pointer shrink-0"
                  >
                    통섭 전모 보기
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredBreakthroughs.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-white border border-stone-200 text-stone-600 space-y-2 shadow-xs">
            <p className="text-sm">검색 조건에 일치하는 기술 변혁이 없습니다.</p>
            <button
              onClick={() => {
                setSelectedEpochId("all");
                setSearchQuery("");
              }}
              className="text-xs text-amber-700 underline cursor-pointer font-semibold"
            >
              전체 보기로 복원
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
