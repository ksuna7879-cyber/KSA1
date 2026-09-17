import React, { useState, useEffect, useRef } from "react";
import { EPOCHS } from "../data/epochs";
import { BREAKTHROUGHS } from "../data/breakthroughs";
import { TechBreakthrough, PillarKey, Epoch } from "../types";
import { PILLAR_MAP } from "./PillarBadge";
import {
  Sparkles,
  Flame,
  FileText,
  Compass,
  BookOpen,
  Clock,
  Smartphone,
  Cpu,
  ArrowRight,
  Shuffle,
  Eye,
  Filter,
  Layers,
  RotateCcw,
  Lightbulb,
  Zap,
  Globe,
  Compass as CompassIcon,
} from "lucide-react";

export interface ThematicRoute {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Clock;
  breakthroughIds: string[];
  accentColor: string;
}

export const THEMATIC_ROUTES: ThematicRoute[] = [
  {
    id: "time-body",
    title: "시간과 신체의 기계화",
    subtitle: "생체 리듬에서 초단위 분절과 디지털 도파민으로",
    description: "불의 조리로 인한 뇌 진화부터, 시계에 의한 노동 시간 규율, 스마트폰의 주의력 분절까지의 신체적 변용사",
    icon: Clock,
    breakthroughIds: ["fire-cooking", "steam-clock-factory", "silicon-internet-smartphone"],
    accentColor: "border-orange-300 text-orange-950 bg-orange-50/90 ring-1 ring-orange-400/40",
  },
  {
    id: "knowledge-power",
    title: "지식과 권력의 민주화",
    subtitle: "신관의 점토판에서 활자 공론장, 초연결 네트워크로",
    description: "쐐기문자의 관료제 독점에서 인쇄술의 종교개혁과 대중 매체, AI 시대의 알고리즘 권력까지의 지식 분배사",
    icon: BookOpen,
    breakthroughIds: ["neolithic-writing", "printing-press-navigation", "ai-crispr-synthetic"],
    accentColor: "border-sky-300 text-sky-950 bg-sky-50/90 ring-1 ring-sky-400/40",
  },
  {
    id: "space-globalization",
    title: "시공간 압축과 전 지구화",
    subtitle: "부족적 국지성 탈피에서 대항해와 글로벌 빌리지로",
    description: "철기 전차와 바퀴의 영토 확장, 나침반과 카라벨선의 신대륙 연결, 반도체 인터넷의 실시간 초연결",
    icon: Globe,
    breakthroughIds: ["iron-wheel-axial", "printing-press-navigation", "silicon-internet-smartphone"],
    accentColor: "border-amber-300 text-amber-950 bg-amber-50/90 ring-1 ring-amber-400/40",
  },
];

interface ConsilienceSpark {
  id: string;
  title: string;
  question: string;
  insight: string;
  tag: string;
  targetBreakthroughId: string;
  pillarKey: PillarKey;
}

const CONSILIENCE_SPARKS: ConsilienceSpark[] = [
  {
    id: "spark-1",
    title: "시간의 상품화와 신체 규율",
    question: "기계식 시계의 분침은 어떻게 수도원의 기도 시간을 노동자의 시급 단위로 치환했을까?",
    insight: "자연의 일출·일몰 리듬이 파괴되고 시계의 탈진기가 인간의 신경과 근육을 공장의 부품으로 동기화했습니다.",
    tag: "인류신체 & 사회정치",
    targetBreakthroughId: "steam-clock-factory",
    pillarKey: "anthropologyLife",
  },
  {
    id: "spark-2",
    title: "묵독(默讀)과 근대적 개인의 탄생",
    question: "인쇄술의 보급은 어떻게 '소리 내어 읽기'를 끝내고 침묵 속 내면적 자아를 창조했는가?",
    insight: "책을 혼자 조용히 읽는 묵독 문화가 확산되며 타인의 시선에서 분리된 독립된 사유 주체와 개인주의가 싹텄습니다.",
    tag: "철학세계관 & 예술상징",
    targetBreakthroughId: "printing-press-navigation",
    pillarKey: "philosophyWorldview",
  },
  {
    id: "spark-3",
    title: "모닥불과 넷플릭스 스크린의 연속성",
    question: "40만 년 전 모닥불 가의 신화 구연은 오늘날 숏폼과 OTT 몰아보기와 어떻게 연결되는가?",
    insight: "어둠 속에서 빛나는 광원(모닥불-스크린) 주위에 둘러앉아 타인의 서사를 흡수하려는 인류 뇌의 원초적 애착입니다.",
    tag: "파생문화 & 자연과학",
    targetBreakthroughId: "fire-cooking",
    pillarKey: "derivedCulture",
  },
  {
    id: "spark-4",
    title: "철기 전쟁의 참화와 축의 시대 영성",
    question: "왜 기원전 5세기, 공자·붓다·소크라테스는 거의 같은 시기에 보편 윤리를 외쳤을까?",
    insight: "철제 쟁기와 무기의 대량 생산이 초래한 유례없는 살육 전쟁 속에서 인간성을 지키기 위한 정신적 반작용이었습니다.",
    tag: "철학세계관 & 사회정치",
    targetBreakthroughId: "iron-wheel-axial",
    pillarKey: "philosophyWorldview",
  },
  {
    id: "spark-5",
    title: "외장 뇌(External Brain)로서의 쐐기문자",
    question: "관개 수로의 곡물 장부는 어떻게 인간 생물학적 뇌의 기억 용량을 영구히 외주화했는가?",
    insight: "점토판에 새겨진 기호는 두뇌 신경망 밖에서 지속되는 최초의 인공 기억 장치였으며, 법전과 영구적 제국을 탄생시켰습니다.",
    tag: "자연과학 & 사회정치",
    targetBreakthroughId: "neolithic-writing",
    pillarKey: "socioPolitics",
  },
  {
    id: "spark-6",
    title: "엄지손가락 스크롤과 주의력 경제",
    question: "스마트폰의 세로 스크롤 제스처는 왜 고대 두루마리의 촉각 기억을 소환하며 뇌를 중독시키는가?",
    insight: "무한히 당겨지는 슬롯머신 피드 인터랙션이 가변적 보상(Variable Reward)을 자극하여 인간의 주의력을 분절합니다.",
    tag: "인류신체 & 파생문화",
    targetBreakthroughId: "silicon-internet-smartphone",
    pillarKey: "anthropologyLife",
  },
  {
    id: "spark-7",
    title: "나침반과 콜럼버스의 식탁 혁명",
    question: "자석 바늘 하나가 어떻게 한국의 김치와 이탈리아의 파스타를 완전히 바꾸어 놓았는가?",
    insight: "나침반 항해가 신대륙의 고추와 토마토를 구대륙으로 건네며, 전 인류의 미각과 식생 지도를 재작성했습니다.",
    tag: "자연과학 & 파생문화",
    targetBreakthroughId: "printing-press-navigation",
    pillarKey: "derivedCulture",
  },
  {
    id: "spark-8",
    title: "자연과 인공의 경계 소멸",
    question: "생성형 AI와 유전자 편집은 인간이 수십만 년간 지켜온 '인간 조건(Human Condition)'을 어떻게 재정의하는가?",
    insight: "생물학적 진화의 우연성을 인간의 공학적 설계로 대체하며, 사유와 육체 모두를 프로그래밍 가능한 영역으로 편입시킵니다.",
    tag: "자연과학 & 철학세계관",
    targetBreakthroughId: "ai-crispr-synthetic",
    pillarKey: "philosophyWorldview",
  },
];

interface HeroSectionProps {
  selectedEpochId: string;
  onSelectEpoch: (epochId: string) => void;
  highlightPillar: PillarKey | null;
  onSelectPillar: (pillar: PillarKey | null) => void;
  activeThematicRoute: string | null;
  onSelectThematicRoute: (routeId: string | null) => void;
  onOpenBreakthrough: (breakthrough: TechBreakthrough) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  selectedEpochId,
  onSelectEpoch,
  highlightPillar,
  onSelectPillar,
  activeThematicRoute,
  onSelectThematicRoute,
  onOpenBreakthrough,
}) => {
  // Spark state
  const [sparkIndex, setSparkIndex] = useState(0);
  const [isSparkFlipping, setIsSparkFlipping] = useState(false);

  // Epoch hover / preview state (defaults to selected or first)
  const [hoveredEpochId, setHoveredEpochId] = useState<string | null>(null);

  // Active preview epoch: either hovered or selected (fallback to first epoch)
  const activeEpochPreviewId =
    hoveredEpochId || (selectedEpochId !== "all" ? selectedEpochId : "paleolithic");
  const activeEpochData =
    EPOCHS.find((e) => e.id === activeEpochPreviewId) || EPOCHS[0];

  // Interactive Particle Canvas
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [particlesEnabled, setParticlesEnabled] = useState(true);

  // Next Spark handler
  const handleNextSpark = () => {
    setIsSparkFlipping(true);
    setTimeout(() => {
      setSparkIndex((prev) => (prev + 1) % CONSILIENCE_SPARKS.length);
      setIsSparkFlipping(false);
    }, 200);
  };

  const currentSpark = CONSILIENCE_SPARKS[sparkIndex];

  // Particle constellation effect
  useEffect(() => {
    if (!particlesEnabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", resize);

    // Particle nodes
    const particleCount = Math.min(Math.floor(width / 24), 45);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 0.8,
      alpha: Math.random() * 0.4 + 0.2,
    }));

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.parentElement?.addEventListener("mousemove", handleMouseMove);
    canvas.parentElement?.addEventListener("mouseleave", handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move
        p1.x += p1.vx;
        p1.y += p1.vy;
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(217, 119, 6, ${p1.alpha * 0.45})`;
        ctx.fill();

        // Connect near particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 80) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(180, 83, 9, ${(1 - dist / 80) * 0.12})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // Connect to mouse
        const mdx = p1.x - mouseX;
        const mdy = p1.y - mouseY;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 120) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(217, 119, 6, ${(1 - mDist / 120) * 0.28})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      canvas.parentElement?.removeEventListener("mousemove", handleMouseMove);
      canvas.parentElement?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [particlesEnabled]);

  const renderEpochIcon = (name: string) => {
    switch (name) {
      case "Flame":
        return <Flame className="w-4 h-4 text-amber-600" />;
      case "FileText":
        return <FileText className="w-4 h-4 text-emerald-600" />;
      case "Compass":
        return <Compass className="w-4 h-4 text-amber-600" />;
      case "BookOpen":
        return <BookOpen className="w-4 h-4 text-sky-600" />;
      case "Clock":
        return <Clock className="w-4 h-4 text-orange-600" />;
      case "Smartphone":
        return <Smartphone className="w-4 h-4 text-blue-600" />;
      case "Cpu":
        return <Cpu className="w-4 h-4 text-purple-600" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-600" />;
    }
  };

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white via-[#fcfbf9] to-[#f7f5f0] border border-stone-200/90 shadow-sm p-6 sm:p-8 lg:p-10 transition-all">
      {/* Background Interactive Particle Canvas */}
      {particlesEnabled && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none z-0 opacity-60"
        />
      )}

      {/* Decorative Radial Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-orange-200/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hero Header & Meta Bar */}
      <div className="relative z-10 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="space-y-2.5 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
              <span>인류사 7대 문명 전환기 & 6대 통섭 차원 지적 탐구</span>
              <span className="w-1 h-1 rounded-full bg-amber-400"></span>
              <span className="text-[11px] text-amber-800 font-normal">
                인터랙티브 파라다임 맵
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-stone-900 tracking-tight leading-tight">
              도구의 발명에서 영혼의 변이까지
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans max-w-2xl">
              자연과학적 발견은 기계를 낳고, 기계는 인간의 시간 감각과 신체 지각을 개조하며,
              권력 구조와 사상, 그리고 현대의 일상 관습을 조형해왔습니다.
              아래의 <strong className="text-amber-800 font-semibold">시대 궤적</strong>과{" "}
              <strong className="text-amber-800 font-semibold">사유 실험</strong>을 클릭하여
              기술과 문화의 깊은 인과망을 탐색해보세요.
            </p>
          </div>

          {/* Quick Stats & Ambient Toggle */}
          <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2.5 shrink-0">
            <div className="flex items-center gap-2 bg-white border border-stone-200 px-3 py-1.5 rounded-xl text-xs font-mono text-stone-700 shadow-xs">
              <span className="text-amber-700 font-bold">7</span> 문명 전환기
              <span className="text-stone-300">·</span>
              <span className="text-amber-700 font-bold">14</span> 핵심 기술
              <span className="text-stone-300">·</span>
              <span className="text-amber-700 font-bold">6</span> 통섭 차원
            </div>

            <button
              onClick={() => setParticlesEnabled(!particlesEnabled)}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-white hover:bg-stone-50 border border-stone-200 text-stone-600 hover:text-stone-900 transition cursor-pointer flex items-center gap-1.5 shadow-xs"
              title="지식 성운 파티클 캔버스 켜기/끄기"
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  particlesEnabled ? "bg-amber-500 animate-pulse" : "bg-stone-400"
                }`}
              />
              <span>성운 효과 {particlesEnabled ? "On" : "Off"}</span>
            </button>
          </div>
        </div>

        {/* 1. INTERACTIVE CIVILIZATION ARC / EPOCH CHRONO-DIAL */}
        <div className="pt-4 border-t border-stone-200/90 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CompassIcon className="w-4 h-4 text-amber-600" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-800 font-mono">
                문명사 7대 전환기 궤적 (Civilization Arc)
              </h3>
            </div>
            <span className="text-[11px] text-stone-500">
              시대 노드를 클릭하거나 올려보세요
            </span>
          </div>

          {/* Epoch Node Track */}
          <div className="relative">
            {/* Connecting Guide Line */}
            <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 h-0.5 bg-stone-200 -z-0 hidden md:block" />

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 relative z-10">
              {EPOCHS.map((epoch) => {
                const isSelected = selectedEpochId === epoch.id;
                const isHovered = hoveredEpochId === epoch.id;

                return (
                  <button
                    key={epoch.id}
                    onMouseEnter={() => setHoveredEpochId(epoch.id)}
                    onMouseLeave={() => setHoveredEpochId(null)}
                    onClick={() => {
                      if (selectedEpochId === epoch.id) {
                        onSelectEpoch("all");
                      } else {
                        onSelectEpoch(epoch.id);
                      }
                    }}
                    className={`relative p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between group ${
                      isSelected
                        ? "bg-amber-50 border-amber-500 shadow-md ring-2 ring-amber-400/40"
                        : isHovered
                        ? "bg-stone-50 border-stone-300 shadow-sm"
                        : "bg-white border-stone-200/90 hover:border-amber-300 hover:bg-amber-50/30 shadow-xs"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                          isSelected
                            ? "bg-amber-600 text-white"
                            : "bg-stone-100 text-stone-600 group-hover:text-amber-800 group-hover:bg-amber-100"
                        }`}
                      >
                        0{epoch.order}
                      </span>
                      <span
                        className={`text-[11px] transition-transform group-hover:scale-110 ${
                          isSelected ? "text-amber-600" : "text-stone-500"
                        }`}
                      >
                        {epoch.order === 1 && "🔥"}
                        {epoch.order === 2 && "📜"}
                        {epoch.order === 3 && "⚔️"}
                        {epoch.order === 4 && "🧭"}
                        {epoch.order === 5 && "⚙️"}
                        {epoch.order === 6 && "📱"}
                        {epoch.order === 7 && "🧬"}
                      </span>
                    </div>

                    <div>
                      <h4
                        className={`text-xs font-bold font-serif leading-snug line-clamp-1 ${
                          isSelected
                            ? "text-amber-950"
                            : "text-stone-800 group-hover:text-stone-950"
                        }`}
                      >
                        {epoch.name.split(" ")[0]}
                      </h4>
                      <p className="text-[10px] text-stone-500 truncate mt-0.5">
                        {epoch.timeframe.split("~")[0].trim()}
                      </p>
                    </div>

                    {/* Active Indicator Pip */}
                    {isSelected && (
                      <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-500 border-2 border-white shadow-xs animate-ping" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Epoch Quick Briefing Card */}
          <div className="mt-3 p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
                  제 0{activeEpochData.order}기 문명 패러다임
                </span>
                <h4 className="text-sm sm:text-base font-bold text-stone-900 font-serif">
                  {activeEpochData.name}
                </h4>
                <span className="text-xs text-stone-500 font-mono">
                  ({activeEpochData.timeframe})
                </span>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed">
                {activeEpochData.summary}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px]">
                <span className="text-amber-900 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200 font-medium">
                  ⚡ <strong>핵심 단절:</strong> {activeEpochData.coreDisruption}
                </span>
                <span className="text-stone-700 bg-stone-100 px-2.5 py-0.5 rounded-md border border-stone-200 font-medium">
                  🧠 <strong>인지 전환:</strong> {activeEpochData.dominantCognitiveShift}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
              {selectedEpochId !== activeEpochData.id ? (
                <button
                  onClick={() => onSelectEpoch(activeEpochData.id)}
                  className="px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs transition cursor-pointer flex items-center gap-1.5 shadow-sm shadow-amber-600/20"
                >
                  <span>이 시대로 타임라인 필터링</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  onClick={() => onSelectEpoch("all")}
                  className="px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs transition cursor-pointer flex items-center gap-1.5 border border-stone-200"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>전체 시대 보기로 복원</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 2-COLUMN INTERACTIVE MODULE: FLASH EPIPHANY & THEMATIC PATHWAYS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-4 border-t border-stone-200/90">
          {/* Flash Epiphany Card (Consilience Thought Sparks) */}
          <div className="lg:col-span-7 bg-white border border-stone-200/90 shadow-xs rounded-2xl p-5 space-y-3.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-amber-100 text-amber-700 border border-amber-200">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-stone-800 font-mono tracking-wide uppercase">
                      통섭의 불꽃: 오늘의 사유 실험
                    </h3>
                    <p className="text-[10px] text-stone-500">
                      고대 기술과 현대 문화의 숨겨진 연속성을 묻는 지적 질문
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono text-stone-500">
                    {sparkIndex + 1} / {CONSILIENCE_SPARKS.length}
                  </span>
                  <button
                    onClick={handleNextSpark}
                    className="p-1.5 rounded-lg bg-stone-50 hover:bg-stone-100 text-amber-800 border border-stone-200 transition cursor-pointer flex items-center gap-1 text-[11px] font-medium"
                    title="다른 사유 실험 뽑기"
                  >
                    <Shuffle className="w-3.5 h-3.5" />
                    <span>새 질문</span>
                  </button>
                </div>
              </div>

              {/* Question Body with Transition */}
              <div
                className={`p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-2.5 transition-all duration-200 ${
                  isSparkFlipping ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 font-semibold">
                    {currentSpark.tag}
                  </span>
                  <h4 className="text-xs font-bold text-stone-800">
                    {currentSpark.title}
                  </h4>
                </div>

                <p className="text-xs sm:text-sm font-serif font-bold text-stone-900 leading-relaxed">
                  "{currentSpark.question}"
                </p>

                <p className="text-xs text-stone-700 leading-relaxed font-sans">
                  💡 {currentSpark.insight}
                </p>
              </div>
            </div>

            {/* Spark Action */}
            <div className="flex items-center justify-between pt-1">
              <button
                onClick={() => onSelectPillar(currentSpark.pillarKey)}
                className="text-[11px] text-stone-600 hover:text-amber-800 transition cursor-pointer flex items-center gap-1 font-medium"
              >
                <Filter className="w-3 h-3" />
                <span>
                  [{PILLAR_MAP[currentSpark.pillarKey]?.label}] 관점 하이라이트
                </span>
              </button>

              {(() => {
                const target = BREAKTHROUGHS.find(
                  (b) => b.id === currentSpark.targetBreakthroughId
                );
                if (!target) return null;
                return (
                  <button
                    onClick={() => onOpenBreakthrough(target)}
                    className="text-xs font-semibold text-amber-700 hover:text-amber-800 transition cursor-pointer flex items-center gap-1.5"
                  >
                    <span>관련 기술 심층 탐구 ({target.name.split(" ")[0]})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                );
              })()}
            </div>
          </div>

          {/* Curated Thematic Pathways */}
          <div className="lg:col-span-5 bg-white border border-stone-200/90 shadow-xs rounded-2xl p-5 space-y-3.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-orange-100 text-orange-700 border border-orange-200">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-stone-800 font-mono tracking-wide uppercase">
                      3대 문명 통섭 여정 (Thematic Paths)
                    </h3>
                    <p className="text-[10px] text-stone-500">
                      수천 년을 관통하는 3대 핵심 궤적 프리셋
                    </p>
                  </div>
                </div>

                {activeThematicRoute && (
                  <button
                    onClick={() => onSelectThematicRoute(null)}
                    className="text-[10px] text-amber-700 hover:underline cursor-pointer font-medium"
                  >
                    경로 해제
                  </button>
                )}
              </div>

              <div className="space-y-2">
                {THEMATIC_ROUTES.map((route) => {
                  const isActive = activeThematicRoute === route.id;
                  const Icon = route.icon;
                  return (
                    <button
                      key={route.id}
                      onClick={() =>
                        onSelectThematicRoute(isActive ? null : route.id)
                      }
                      className={`w-full p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-2.5 ${
                        isActive
                          ? `${route.accentColor} shadow-sm`
                          : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                      }`}
                    >
                      <div
                        className={`p-1.5 rounded-lg mt-0.5 ${
                          isActive
                            ? "bg-amber-100 text-amber-800"
                            : "bg-white text-stone-500 border border-stone-200"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <h4
                            className={`text-xs font-bold truncate ${
                              isActive ? "text-stone-900" : "text-stone-800"
                            }`}
                          >
                            {route.title}
                          </h4>
                          <span className="text-[10px] font-mono text-stone-500 shrink-0">
                            {route.breakthroughIds.length}개 연계
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                          {route.subtitle}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <p className="text-[11px] text-stone-500">
              * 경로를 선택하면 해당 주제와 연결된 기술 카드만 부각됩니다.
            </p>
          </div>
        </div>

        {/* 3. CONSILIENCE DIMENSION LENS SELECTOR (PILLAR HIGHLIGHT BAR) */}
        <div className="pt-4 border-t border-stone-200/90">
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-stone-500" />
              <span className="text-xs font-bold text-stone-800">
                6대 통섭 차원 렌즈 (특정 관점 집중 분석):
              </span>
            </div>

            {highlightPillar && (
              <button
                onClick={() => onSelectPillar(null)}
                className="text-[11px] text-amber-700 hover:underline cursor-pointer flex items-center gap-1 font-medium"
              >
                <RotateCcw className="w-3 h-3" />
                <span>렌즈 초기화</span>
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {(Object.keys(PILLAR_MAP) as PillarKey[]).map((key) => {
              const meta = PILLAR_MAP[key];
              const isSelected = highlightPillar === key;
              return (
                <button
                  key={key}
                  onClick={() => onSelectPillar(isSelected ? null : key)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? `${meta.bgColor} ${meta.color} ${meta.borderColor} font-bold ring-2 ring-amber-400/40 shadow-xs`
                      : "bg-white border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                  <span>{meta.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Explanation Banner */}
          {highlightPillar && (
            <div className="mt-3 p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700 flex items-start gap-2.5">
              <Eye className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className={PILLAR_MAP[highlightPillar].color}>
                  {PILLAR_MAP[highlightPillar].label} 렌즈 활성화:
                </strong>{" "}
                {highlightPillar === "scienceTech" &&
                  "열역학, 전자기학, 나노기술 등 자연을 길들이고 에너지와 물질을 가공하는 공학적 메커니즘을 추적합니다."}
                {highlightPillar === "socioPolitics" &&
                  "법전, 관료제, 제국, 공장 노동, 플랫폼 독점 등 기술이 재편한 권력 구조와 사회적 제도를 분석합니다."}
                {highlightPillar === "anthropologyLife" &&
                  "신체 지각, 일상 리듬, 수면 패턴, 식문화 등 인간 신체와 감각이 기술에 의해 길들여진 궤적을 밝힙니다."}
                {highlightPillar === "philosophyWorldview" &&
                  "애니미즘, 축의 시대 윤리, 과학적 합리주의, 포스트모더니즘 등 기술 환경이 잉태한 사상과 인간관을 탐구합니다."}
                {highlightPillar === "artSymbolism" &&
                  "동굴벽화, 원근법, 낭만주의, 픽셀 아트 등 새로운 매체와 기술이 탄생시킨 미학적 양식과 상징 체계를 읽어냅니다."}
                {highlightPillar === "derivedCulture" &&
                  "캠핑 불멍, 영수증 신뢰, 9-to-5 퇴근 문화, 인터넷 밈 등 기술이 남긴 현대 일상의 하위문화를 해독합니다."}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
