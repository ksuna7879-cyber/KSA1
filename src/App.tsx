/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Header, ActiveTab } from "./components/Header";
import { InmunHeroBanner } from "./components/InmunHeroBanner";
import { EpochTimeline } from "./components/EpochTimeline";
import { VideoArchiveView } from "./components/VideoArchiveView";
import { CausalFlowDiagram } from "./components/CausalFlowDiagram";
import { ComparativeLab } from "./components/ComparativeLab";
import { ThoughtExperimentLab } from "./components/ThoughtExperimentLab";
import { ThinkersExplorer } from "./components/ThinkersExplorer";
import { ConsilienceQuiz } from "./components/ConsilienceQuiz";
import { BreakthroughDetailModal } from "./components/BreakthroughDetailModal";
import { TechBreakthrough } from "./types";

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("matrix");
  const [selectedBreakthrough, setSelectedBreakthrough] =
    useState<TechBreakthrough | null>(null);
  const [aiAvailable, setAiAvailable] = useState<boolean>(false);

  useEffect(() => {
    // Check server health and Gemini API availability
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => {
        if (data.aiAvailable) {
          setAiAvailable(true);
        }
      })
      .catch((err) => {
        console.warn("API health check:", err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-stone-900 flex flex-col font-sans selection:bg-[#e2e8fd] selection:text-[#202c6b]">
      {/* Top Header & Navigation matching attached screenshot */}
      <Header
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        aiAvailable={aiAvailable}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* Exact Dual Hero Banner (인문, 질문과 현장 사이에 서는 법 & 인문인사이트) */}
        <InmunHeroBanner
          onNavigateToArchive={() => setActiveTab("archive")}
          onNavigateToMatrix={() => setActiveTab("matrix")}
        />

        {/* Tab 1: 인문콘텐츠 (문명사 통섭 매트릭스) */}
        {activeTab === "matrix" && (
          <EpochTimeline
            onSelectBreakthrough={(item) => setSelectedBreakthrough(item)}
          />
        )}

        {/* Tab 2: 영상 아카이브 (최재천 석학 특강 & 인문영상) */}
        {activeTab === "archive" && <VideoArchiveView />}

        {/* Tab 3: 인문정보 (통섭 인과망 심층도) */}
        {activeTab === "causal" && (
          <CausalFlowDiagram
            onOpenBreakthrough={(item) => setSelectedBreakthrough(item)}
          />
        )}

        {/* Tab 4: 인문지도 (교차 기술 비교실) */}
        {activeTab === "compare" && <ComparativeLab />}

        {/* Tab 5: 고객참여 (대체역사 사유실험실) */}
        {activeTab === "simulator" && <ThoughtExperimentLab />}

        {/* Tab 6: 사업소개 (통섭 사상가 렌즈) */}
        {activeTab === "thinkers" && <ThinkersExplorer />}

        {/* Tab 7: 공지사항 (지적 성찰 퀴즈 & 공지) */}
        {activeTab === "quiz" && <ConsilienceQuiz />}
      </main>

      {/* Modal for Deep-Dive */}
      <BreakthroughDetailModal
        breakthrough={selectedBreakthrough}
        onClose={() => setSelectedBreakthrough(null)}
        aiAvailable={aiAvailable}
      />

      {/* Modern Korean Humanities Portal Footer (인문360 / 문화체육관광부 스타일) */}
      <footer className="border-t border-stone-200 bg-white mt-16 py-10 text-stone-600 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-stone-100 pb-6">
            <div className="flex items-center gap-3">
              {/* 360 Logo Mark */}
              <div className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center font-bold text-stone-900 text-xs">
                360°
              </div>
              <div>
                <span className="font-bold text-sm text-stone-900 block">
                  인문360° · 통섭(Consilience) 지식 아카이브
                </span>
                <span className="text-[11px] text-stone-500">
                  기술과 문화의 공진화로 읽는 인류 문명사 탐구 플랫폼
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-stone-500 text-xs flex-wrap">
              <span className="hover:text-stone-900 cursor-pointer">이용약관</span>
              <span>·</span>
              <span className="font-semibold text-stone-800 hover:text-stone-900 cursor-pointer">
                개인정보처리방침
              </span>
              <span>·</span>
              <span className="hover:text-stone-900 cursor-pointer">저작권 정책</span>
              <span>·</span>
              <span className="hover:text-stone-900 cursor-pointer">사업소개</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-stone-400">
            <p>
              (우 03086) 서울특별시 종로구 대학로 10길 17 한국문화예술위원회 인문360 사업추진단
              <br className="hidden sm:inline" />
              후원: 문화체육관광부 · 한국문화예술교육진흥원 · 에코과학부
            </p>
            <p className="font-mono text-stone-400">
              © 2026 INMUN360 & CONSILIENCE ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
