import React, { useState } from "react";
import { THINKERS } from "../data/thinkers";
import { ThinkerLens } from "../types";
import {
  Brain,
  Quote,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Bookmark,
  Scroll,
  Feather,
  GraduationCap,
} from "lucide-react";
import { ConsilienceLectureVideo } from "./ConsilienceLectureVideo";

const THINKER_META: Record<
  string,
  { roman: string; discipline: string; keyword: string }
> = {
  wilson: {
    roman: "I",
    discipline: "진화생물학 · 사회생물학",
    keyword: "유전자-문화 공진화",
  },
  mcluhan: {
    roman: "II",
    discipline: "미디어 생태학 · 문화비평",
    keyword: "미디어는 메시지다",
  },
  mumford: {
    roman: "III",
    discipline: "기술사 · 문명철학",
    keyword: "시계와 거대기계 비판",
  },
  benjamin: {
    roman: "IV",
    discipline: "문화철학 · 비판이론",
    keyword: "아우라의 붕괴와 대중예술",
  },
  harari: {
    roman: "V",
    discipline: "거시인류사 · 역사학",
    keyword: "상상의 질서와 데이터교",
  },
};

export const ThinkersExplorer: React.FC = () => {
  const [selectedThinkerId, setSelectedThinkerId] = useState<string>(THINKERS[0].id);

  const currentThinker =
    THINKERS.find((t) => t.id === selectedThinkerId) || THINKERS[0];
  const currentMeta = THINKER_META[currentThinker.id] || {
    roman: "I",
    discipline: "통섭 철학",
    keyword: "문명사적 사유",
  };

  return (
    <div className="space-y-8 font-serif">
      {/* Intro Header: Scholarly Prolegomenon (학술 서문) */}
      <div className="bg-[#fdfbf7] border border-[#e4ddd2] p-6 sm:p-9 rounded-sm shadow-[0_1px_3px_rgba(40,30,20,0.04)] relative overflow-hidden">
        {/* Subtle decorative background rule */}
        <div className="absolute top-0 left-0 w-1.5 h-full bg-[#8c281e]"></div>
        
        <div className="max-w-4xl space-y-3.5 pl-2 sm:pl-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-xs bg-[#f4eee2] border border-[#dcd3c3] text-[#635445] text-xs font-serif font-medium">
              <Scroll className="w-3.5 h-3.5 text-[#8c281e]" />
              인문학적 사유의 지평 · Theoretical Lenses
            </span>
            <span className="text-[11px] font-latin-display text-[#8c281e] font-semibold tracking-wider">
              PARADIGMA SCIENTIAE
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#1e1915] tracking-tight">
            문명사를 꿰뚫어본 다섯 거장의 사유 틀
          </h2>

          <div className="border-l-2 border-[#d9cebe] pl-4 my-2">
            <p className="text-xs sm:text-sm text-[#4d4235] leading-relaxed italic">
              "기술은 결코 가치중립적인 외재적 기계가 아니다. 그것은 인간의 지각 비율을 재배치하고, 존재론적 세계관을 직조하며, 문화라는 생태계 전체를 뒤흔드는 영혼의 외생적 확장이다."
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#594d40] leading-relaxed font-sans">
            에드워드 윌슨의 <strong>'통섭(Consilience)'</strong>부터 마셜 맥루한의 <strong>'미디어는 메시지다'</strong>, 루이스 멈퍼드의 <strong>'시계와 기계 문명 비판'</strong>, 발터 벤야민의 <strong>'아우라의 붕괴'</strong>, 유발 하라리의 <strong>'상상의 질서'</strong>에 이르기까지—인류 지성사를 뒤흔든 고전적 텍스트를 통해 기술과 문화의 공진화를 입체적으로 해독합니다.
          </p>
        </div>
      </div>

      {/* Thinker Selector Tabs: Classical Monograph Card Index */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-[#6b5d4e] px-1 font-serif">
          <span className="flex items-center gap-1.5">
            <Bookmark className="w-3.5 h-3.5 text-[#8c281e]" />
            <strong>통섭 사상가 열전 (Index of Thinkers)</strong>
          </span>
          <span className="text-[11px] font-latin-display text-[#8c281e]">
            SELECT A SCHOLAR TO READ
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {THINKERS.map((thinker) => {
            const isSelected = thinker.id === selectedThinkerId;
            const meta = THINKER_META[thinker.id];

            return (
              <button
                key={thinker.id}
                onClick={() => setSelectedThinkerId(thinker.id)}
                className={`p-4 rounded-sm border text-left transition-all cursor-pointer flex flex-col justify-between relative ${
                  isSelected
                    ? "bg-[#f7f2e8] border-[#8c281e] shadow-[0_2px_6px_rgba(140,40,30,0.08)] ring-1 ring-[#8c281e]/30"
                    : "bg-[#ffffff] border-[#e5dfd5] hover:bg-[#fbf8f2] hover:border-[#cfc5b3] text-[#54483a]"
                }`}
              >
                {/* Top Roman Tag & Discipline */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-latin-display font-bold text-[#8c281e]">
                      {meta?.roman}.
                    </span>
                    <span className="text-[10px] text-[#7a6d5f] font-serif">
                      {meta?.keyword}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-[#1f1a16] font-serif mt-2 tracking-tight">
                    {thinker.name}
                  </h4>
                  <div className="text-[10.5px] font-serif italic text-[#786b5d] mt-0.5">
                    {thinker.nameEn}
                  </div>
                </div>

                <div className="mt-4 pt-2.5 border-t border-[#ece5d8]">
                  <p className="text-[11px] text-[#8c281e] font-serif leading-snug font-medium line-clamp-2">
                    {thinker.title}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Thinker Deep-Dive Monograph (정본 학술 해제) */}
      <div className="bg-[#ffffff] border border-[#ded7ca] rounded-sm p-6 sm:p-9 space-y-7 shadow-[0_2px_8px_rgba(40,30,20,0.04)]">
        {/* Monograph Header */}
        <div className="border-b border-[#e8e2d6] pb-6 space-y-4">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-xs bg-[#f4ede0] border border-[#ded5c5] text-[#705e4d] text-xs font-serif">
                <GraduationCap className="w-3.5 h-3.5 text-[#8c281e]" />
                <span>{currentMeta.discipline}</span>
                <span className="text-[#b5a794]">|</span>
                <span className="font-latin-display text-[#8c281e] font-semibold">{currentMeta.roman}권</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#1c1713] tracking-tight">
                {currentThinker.name}
                <span className="text-lg sm:text-xl font-normal text-[#695d4e] font-serif ml-2 italic">
                  ({currentThinker.nameEn})
                </span>
              </h3>

              <p className="text-xs sm:text-sm text-[#7a4837] font-serif font-medium">
                {currentThinker.title}
              </p>
            </div>

            {/* Bibliographical Citation Box */}
            <div className="bg-[#faf7f0] border border-[#e2d9cb] rounded-xs p-3.5 max-w-md self-start">
              <div className="flex items-center gap-1.5 text-[10.5px] uppercase tracking-wider text-[#8c281e] font-latin-display font-bold">
                <BookOpen className="w-3.5 h-3.5 text-[#8c281e]" />
                <span>정본(定本) 서지 정보 · Key Work</span>
              </div>
              <p className="text-xs font-serif text-[#29221b] mt-1 font-medium leading-relaxed">
                《{currentThinker.keyWork}》
              </p>
            </div>
          </div>

          {/* Core Thesis: Dignified Epigraph (제사, 題詞) */}
          <div className="bg-[#fbf9f4] border-y border-[#e2d8c7] py-4 px-5 my-3 relative">
            <span className="absolute -top-3 left-6 px-2 bg-[#fbf9f4] text-[10px] font-latin-display font-bold text-[#8c281e] tracking-widest uppercase">
              핵심 명제 (The Core Thesis)
            </span>
            <p className="text-sm sm:text-base font-serif text-[#2e261f] leading-relaxed italic text-center sm:text-left">
              “{currentThinker.coreThesis}”
            </p>
          </div>
        </div>

        {/* Detailed Philosophical Essay: 통섭적 사유의 지평 */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#8c281e] font-latin-display flex items-center gap-2">
            <Feather className="w-3.5 h-3.5" />
            <span>통섭적 사유의 지평 (Philosophical & Consilient Horizon)</span>
          </h4>
          
          <div className="p-5 rounded-xs bg-[#faf7f0]/60 border border-[#e8e1d4]">
            <p className="text-sm sm:text-base text-[#332b24] font-serif leading-loose text-justify">
              {currentThinker.description}
            </p>
          </div>
        </div>

        {/* Two Scholarly Columns: 원전 인용 & 문명사적 실증 분석 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Column 1: Scholarly Quotation */}
          <div className="bg-[#fcfaf5] border border-[#e4dcce] rounded-xs p-5 flex flex-col justify-between shadow-[0_1px_3px_rgba(40,30,20,0.03)] relative">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#8c281e] font-serif pb-2 border-b border-[#ede6d9]">
                <Quote className="w-4 h-4 text-[#8c281e]" />
                <span>원전 인용과 지적 성찰 (Scholarly Axiom)</span>
              </div>
              <p className="text-xs sm:text-sm text-[#40362c] italic font-serif leading-relaxed pl-2 border-l-2 border-[#8c281e]/40">
                “{currentThinker.analyticalQuote}”
              </p>
            </div>
            <div className="text-[11px] text-[#8c281e] font-serif font-medium text-right mt-4 pt-2 border-t border-[#ede6d9]">
              — {currentThinker.name}의 통섭적 통찰 (Consilient Insight)
            </div>
          </div>

          {/* Column 2: Historical Empirical Evidence */}
          <div className="bg-[#f7f5ee] border border-[#ded5c5] rounded-xs p-5 space-y-3 shadow-[0_1px_3px_rgba(40,30,20,0.03)]">
            <div className="flex items-center gap-2 text-xs font-bold text-[#3d5a45] font-serif pb-2 border-b border-[#e2dacb]">
              <CheckCircle2 className="w-4 h-4 text-[#3d5a45]" />
              <span>문명사적 실증 분석 (Historical Empirical Case)</span>
            </div>
            <p className="text-xs sm:text-sm text-[#383027] font-serif leading-relaxed">
              {currentThinker.techExample}
            </p>
            <div className="text-[10.5px] text-[#695d4e] font-serif pt-2 border-t border-[#e2dacb] italic">
              * 기술 결정론과 문화적 구성주의의 교차 지점을 실증하는 대표적 사례
            </div>
          </div>
        </div>
      </div>

      {/* Special Scholar Lecture Archive: Choi Jae-cheon on Consilience */}
      <ConsilienceLectureVideo />
    </div>
  );
};
