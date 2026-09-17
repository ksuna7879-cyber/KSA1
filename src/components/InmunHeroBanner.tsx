import React, { useState, useEffect } from "react";
import {
  Play,
  Pause,
  ExternalLink,
  ChevronRight,
  MoreHorizontal,
  ArrowRight,
  Sparkles,
  BookOpen,
  Calendar,
  MapPin,
  Tv,
} from "lucide-react";

interface InmunHeroBannerProps {
  onNavigateToArchive?: () => void;
  onNavigateToMatrix?: () => void;
}

export const InmunHeroBanner: React.FC<InmunHeroBannerProps> = ({
  onNavigateToArchive,
  onNavigateToMatrix,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [insightModalOpen, setInsightModalOpen] = useState(false);

  const slides = [
    {
      id: "slide-1",
      mainTitleFirst: "인문,",
      mainTitleSecond: "질문과 현장",
      mainTitleThird: "사이에 서는 법",
      programTag: "2026 인문 아카데미",
      programSubtitle: "인문 매개인력 역량강화 연수",
      locations: "서울 · 경기 · 전주 · 부산",
      dateYearMonth: "2026. 9",
      dateRange: "Sep — 10 Oct",
      actionText: "아카데미 연수 개요",
      target: "matrix",
    },
    {
      id: "slide-2",
      mainTitleFirst: "통섭,",
      mainTitleSecond: "과학과 인문학",
      mainTitleThird: "사이에 서는 법",
      programTag: "2026 문명사 통섭 기획전",
      programSubtitle: "기술과 문화의 대통합 지식 아카이브",
      locations: "온라인 기획관 · 에코과학부 · 카이스트",
      dateYearMonth: "2026. 9",
      dateRange: "Sep — 12 Dec",
      actionText: "문명사 매트릭스 탐색",
      target: "matrix",
    },
    {
      id: "slide-3",
      mainTitleFirst: "지혜,",
      mainTitleSecond: "앎과 사랑",
      mainTitleThird: "사이에 서는 법",
      programTag: "석학 특강 아카이브",
      programSubtitle: "최재천 교수의 [지식향연] 통섭의 시대",
      locations: "신세계 지식향연 · 이화여대",
      dateYearMonth: "2026",
      dateRange: "상시 시청 (36분)",
      actionText: "특강 영상 바로보기",
      target: "archive",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, slides.length]);

  const slide = slides[currentSlide];

  const handleSlideAction = () => {
    if (slide.target === "archive" && onNavigateToArchive) {
      onNavigateToArchive();
    } else if (onNavigateToMatrix) {
      onNavigateToMatrix();
    }
  };

  return (
    <div className="w-full space-y-4">
      {/* 2-Column Banner Matching Attached Screenshot */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
        {/* Left Column: Wide Panoramic Banner (approx 74%) */}
        <div className="lg:col-span-8 xl:col-span-9 relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#ece7ff] via-[#dff1fd] to-[#d9f9f2] p-6 sm:p-9 flex flex-col justify-between min-h-[340px] sm:min-h-[380px] shadow-xs border border-violet-100/60 select-none">
          {/* Abstract 3D Organic Wave / Ring Illustration (SVG Art) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-85">
            <svg
              className="absolute -right-12 -top-16 sm:right-6 sm:-top-8 w-[420px] sm:w-[560px] h-[380px] sm:h-[460px] text-violet-300"
              viewBox="0 0 500 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer soft torus curve */}
              <path
                d="M 140 180 C 140 90, 240 50, 320 80 C 400 110, 460 190, 430 270 C 400 350, 290 380, 220 350 C 160 320, 140 240, 140 180 Z"
                stroke="url(#paint0_linear)"
                strokeWidth="48"
                strokeLinecap="round"
                opacity="0.55"
              />
              {/* Inner mint/turquoise ribbon */}
              <path
                d="M 180 230 C 220 270, 320 280, 380 220 C 440 160, 420 80, 340 70 C 260 60, 200 120, 190 190"
                stroke="url(#paint1_linear)"
                strokeWidth="32"
                strokeLinecap="round"
                opacity="0.45"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="120"
                  y1="60"
                  x2="450"
                  y2="360"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#a78bfa" />
                  <stop offset="0.5" stopColor="#93c5fd" />
                  <stop offset="1" stopColor="#5eead4" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="160"
                  y1="80"
                  x2="420"
                  y2="280"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#c4b5fd" />
                  <stop offset="0.5" stopColor="#67e8f9" />
                  <stop offset="1" stopColor="#34d399" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Top Bar inside Left Banner */}
          <div className="relative z-10 flex items-center justify-between">
            {/* Left Controls: Play/Pause & Pagination Dots */}
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/60 shadow-xs">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-stone-700 hover:text-stone-900 transition cursor-pointer p-0.5"
                title={isAutoPlaying ? "일시정지" : "자동재생"}
              >
                {isAutoPlaying ? (
                  <Pause className="w-3.5 h-3.5 fill-current" />
                ) : (
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                )}
              </button>

              <div className="flex items-center gap-1.5 ml-1">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`transition-all rounded-full cursor-pointer ${
                      currentSlide === idx
                        ? "w-4 h-2 bg-[#252f6f]"
                        : "w-2 h-2 bg-stone-300 hover:bg-stone-400"
                    }`}
                    title={`${idx + 1}번 슬라이드`}
                  />
                ))}
              </div>
            </div>

            {/* Top Right: Institutional Badges & More Menu */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex flex-col items-end text-[11px] text-stone-700">
                <div className="flex items-center gap-1.5 font-medium">
                  {/* Ministry of Culture, Sports and Tourism Emblem */}
                  <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-600/10 border border-red-500/30 text-red-700 text-[9px] font-bold">
                    문
                  </span>
                  <span>문화체육관광부</span>
                </div>
                <div className="flex items-center gap-1.5 text-stone-500 text-[10px] mt-0.5">
                  <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-blue-600/10 text-blue-700 text-[8px] font-bold">
                    예
                  </span>
                  <span>한국문화예술교육진흥원 · 인문360</span>
                </div>
              </div>

              <button
                onClick={() =>
                  setCurrentSlide((prev) => (prev + 1) % slides.length)
                }
                className="p-1.5 rounded-full bg-white/60 hover:bg-white/90 text-stone-600 hover:text-stone-900 transition shadow-xs cursor-pointer"
                title="다음 배너 보기"
              >
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Central Hero Typography */}
          <div className="relative z-10 my-4 sm:my-6 max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-[#202c6b] tracking-tight leading-[1.25]">
              <span className="block">{slide.mainTitleFirst}</span>
              <span className="block mt-0.5">{slide.mainTitleSecond}</span>
              <span className="block mt-0.5">{slide.mainTitleThird}</span>
            </h2>
          </div>

          {/* Bottom Info Bar inside Left Banner */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-2 border-t border-violet-200/50">
            {/* Program Name & Description */}
            <div className="space-y-0.5">
              <div className="text-sm sm:text-base font-bold text-[#202c6b] flex items-center gap-2">
                <span>{slide.programTag}</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 font-medium">
                {slide.programSubtitle}
              </p>
            </div>

            {/* Location & Date Badge */}
            <div className="flex flex-col sm:items-end text-left sm:text-right">
              <div className="text-xs text-stone-600 font-medium flex items-center sm:justify-end gap-1">
                <MapPin className="w-3 h-3 text-[#202c6b]" />
                <span>{slide.locations}</span>
              </div>
              <div className="mt-1 flex items-baseline sm:justify-end gap-1.5">
                <span className="text-xl sm:text-2xl font-black text-[#202c6b] tracking-tight">
                  {slide.dateYearMonth}
                </span>
                <span className="text-xs sm:text-sm font-bold text-stone-700">
                  {slide.dateRange}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: "인문인사이트" Dedicated Card (approx 26%) */}
        <div className="lg:col-span-4 xl:col-span-3 relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#ebe6ff] via-[#dce4fc] to-[#d4dcf7] p-6 sm:p-7 flex flex-col justify-between min-h-[340px] sm:min-h-[380px] shadow-xs border border-violet-100/70">
          {/* Subtle Background Watermark Graphic */}
          <div className="absolute right-0 bottom-0 pointer-events-none opacity-20 select-none">
            <span className="text-8xl font-black tracking-tighter text-[#4854b4] leading-none">
              360
            </span>
          </div>

          {/* Top Label */}
          <div className="relative z-10 text-center">
            <span className="text-[11px] font-semibold text-[#5a65b8] tracking-wider block">
              · 인문, 오늘의 사회를 비추다. ·
            </span>
          </div>

          {/* Middle Content */}
          <div className="relative z-10 text-center space-y-2 my-auto py-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202c6b] tracking-tight">
              인문인사이트
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-medium max-w-[210px] mx-auto leading-relaxed">
              매달 만나는 인문가치 정책 소식지와 석학 아카이브
            </p>

            {/* Quick Feature Badge */}
            <div className="pt-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/70 text-[11px] font-semibold text-[#252f6f] border border-white shadow-2xs">
                <Sparkles className="w-3 h-3 text-amber-500" />
                9월호: 최재천 석학 특강 수록
              </span>
            </div>
          </div>

          {/* CTA Button: Exactly "바로가기 >" */}
          <div className="relative z-10 flex justify-center pt-2">
            <button
              onClick={() => {
                if (onNavigateToArchive) {
                  onNavigateToArchive();
                } else {
                  setInsightModalOpen(true);
                }
              }}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#4854b4] hover:bg-[#38439e] text-white text-xs sm:text-sm font-bold shadow-sm transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>바로가기</span>
              <ChevronRight className="w-4 h-4 ml-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Insight Modal (When user clicks 바로가기) */}
      {insightModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#4854b4] bg-violet-50 px-2.5 py-1 rounded-full border border-violet-200">
                  인문인사이트 제2026-09호
                </span>
              </div>
              <button
                onClick={() => setInsightModalOpen(false)}
                className="text-stone-400 hover:text-stone-700 text-sm font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <h4 className="text-xl font-bold text-stone-900">
                인문과 기술의 교차점에서 묻다: 통섭의 시대
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                본 기획은 문화체육관광부와 한국문화예술위원회의 인문 가치 확산 사업의 일환으로,
                기술 문명의 파고 속에서 인간 본연의 질문을 회복하고자 기획된 지식 통합 아카이브입니다.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
              <div className="font-bold text-stone-800">이달의 추천 콘텐츠:</div>
              <div className="flex items-center gap-2 text-[#252f6f] font-semibold">
                <Tv className="w-4 h-4 text-red-600" />
                <span>[지식향연] 최재천 교수의 '통섭(지식통합)의 시대' 영상 특강</span>
              </div>
              <p className="text-stone-500 text-[11px]">
                에드워드 윌슨의 통섭을 한국에 소개한 최재천 교수의 명강연을 지금 아카이브에서 확인하세요.
              </p>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => {
                  setInsightModalOpen(false);
                  if (onNavigateToArchive) onNavigateToArchive();
                }}
                className="px-4 py-2 rounded-xl bg-[#4854b4] text-white text-xs font-bold hover:bg-[#38439e] transition cursor-pointer"
              >
                특강 영상 보러가기
              </button>
              <button
                onClick={() => setInsightModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-stone-100 text-stone-700 text-xs font-semibold hover:bg-stone-200 transition cursor-pointer"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
