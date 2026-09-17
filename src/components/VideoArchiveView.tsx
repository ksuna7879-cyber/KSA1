import React, { useState } from "react";
import { ConsilienceLectureVideo } from "./ConsilienceLectureVideo";
import {
  Tv,
  ExternalLink,
  BookOpen,
  Sparkles,
  Play,
  Bookmark,
  Calendar,
  Clock,
  GraduationCap,
} from "lucide-react";

export const VideoArchiveView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const relatedLectures = [
    {
      id: "choi-consilience",
      title: "[지식향연] 통섭(지식통합)의 시대",
      speaker: "최재천 교수",
      affiliation: "이화여대 에코과학부 석좌교수",
      duration: "36분",
      views: "신세계 지식향연 아카이브",
      videoId: "fx3j7jgR_tg",
      category: "consilience",
      badge: "대표 추천 특강",
      description:
        "에드워드 윌슨의 제자이자 한국에 통섭을 뿌리내린 최재천 교수의 문·이과 지식 대통합 기념비적 강연.",
    },
    {
      id: "mcluhan-medium",
      title: "마셜 맥루한: 미디어는 메시지다와 글로벌 빌리지",
      speaker: "미디어 생태학 연구팀",
      affiliation: "인문360 지식 아카이브",
      duration: "24분",
      views: "디지털 문명비평",
      videoId: "fx3j7jgR_tg",
      category: "media",
      badge: "문명비평",
      description:
        "인쇄술에서 인터넷, AI로 이어지는 미디어 혁명이 인간의 감각 비율과 의식을 어떻게 재편했는가.",
    },
    {
      id: "wilson-unity",
      title: "에드워드 O. 윌슨: 유전자와 문화의 공진화",
      speaker: "생물철학 콜로키움",
      affiliation: "통섭 학술포럼",
      duration: "28분",
      views: "학술 아카이브",
      videoId: "fx3j7jgR_tg",
      category: "biology",
      badge: "자연과학-인문학 융합",
      description:
        "인간 본성의 생물학적 기원과 문화적 다양성이 어떻게 하나의 질서로 수렴하는지에 대한 탐구.",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in">
      {/* Archive Header */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-[#252f6f] text-xs font-bold">
            <Tv className="w-3.5 h-3.5" />
            <span>인문 영상 아카이브 · 석학 특강 컬렉션</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202c6b] tracking-tight">
            통섭(統攝)과 문명사 영상 아카이브
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 max-w-2xl leading-relaxed">
            문화체육관광부와 한국문화예술진흥원의 인문 가치 확산 기획을 토대로,
            자연과학과 인문학의 경계를 허무는 국내외 석학들의 핵심 강연과 문명사 해제를 제공합니다.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          <a
            href="https://www.youtube.com/watch?v=fx3j7jgR_tg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#202c6b] hover:bg-[#182353] text-white text-xs font-bold transition shadow-xs cursor-pointer"
          >
            <span>YouTube 전체 강연 보기</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Primary Video Section: Choi Jae-cheon Masterclass */}
      <ConsilienceLectureVideo />

      {/* Additional Curated Lectures Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-stone-200 pb-2">
          <h3 className="text-base sm:text-lg font-bold text-stone-900 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#202c6b]" />
            <span>추천 인문학 · 통섭 콜로키움 시리즈</span>
          </h3>
          <span className="text-xs text-stone-500 font-medium">총 3편 아카이브</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {relatedLectures.map((lec) => (
            <div
              key={lec.id}
              className="bg-white border border-stone-200 hover:border-violet-300 rounded-2xl p-5 space-y-3.5 shadow-xs transition hover:shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-violet-50 text-[#252f6f] border border-violet-200">
                    {lec.badge}
                  </span>
                  <span className="text-[11px] text-stone-400 flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3" />
                    {lec.duration}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-stone-900 line-clamp-2 leading-snug">
                  {lec.title}
                </h4>

                <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
                  {lec.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-stone-700">{lec.speaker}</span>
                <span className="text-stone-400 text-[11px]">{lec.affiliation}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
