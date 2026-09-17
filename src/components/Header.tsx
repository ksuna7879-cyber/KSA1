import React, { useState } from "react";
import {
  Search,
  User,
  Menu,
  X,
  Tv,
  Layers,
  GitMerge,
  BookOpen,
  Sparkles,
  Brain,
  HelpCircle,
  ExternalLink,
} from "lucide-react";

export type ActiveTab =
  | "matrix"
  | "archive"
  | "causal"
  | "compare"
  | "simulator"
  | "thinkers"
  | "quiz";

interface HeaderProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  aiAvailable: boolean;
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  aiAvailable,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems: {
    id: ActiveTab;
    label: string;
    sublabel: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    {
      id: "matrix",
      label: "인문콘텐츠",
      sublabel: "문명사 통섭 매트릭스",
      icon: Layers,
    },
    {
      id: "archive",
      label: "영상 아카이브",
      sublabel: "최재천 석학 특강",
      icon: Tv,
    },
    {
      id: "causal",
      label: "인문정보",
      sublabel: "통섭 인과망 심층도",
      icon: GitMerge,
    },
    {
      id: "compare",
      label: "인문지도",
      sublabel: "교차 기술 비교",
      icon: BookOpen,
    },
    {
      id: "simulator",
      label: "고객참여",
      sublabel: "대체역사 사유실험실",
      icon: Sparkles,
    },
    {
      id: "thinkers",
      label: "사업소개",
      sublabel: "통섭 사상가 렌즈",
      icon: Brain,
    },
    {
      id: "quiz",
      label: "공지사항",
      sublabel: "지적 성찰 퀴즈",
      icon: HelpCircle,
    },
  ];

  return (
    <header className="w-full bg-white border-b border-stone-200 sticky top-0 z-50">
      {/* Top Main Navigation Bar (GNB) Matching Attached Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 sm:h-20 flex items-center justify-between">
          {/* Left Brand: Circular 360° Compass Logo */}
          <button
            onClick={() => onSelectTab("matrix")}
            className="flex items-center gap-2.5 text-stone-900 group cursor-pointer"
          >
            {/* Minimalist 360° Compass Icon directly replicating screenshot */}
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
              <svg
                viewBox="0 0 40 40"
                className="w-full h-full text-stone-900 group-hover:text-[#252f6f] transition"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
              >
                {/* Outer circle */}
                <circle cx="20" cy="20" r="16" />
                {/* Degree tick marks */}
                <line x1="20" y1="4" x2="20" y2="8" />
                <line x1="20" y1="32" x2="20" y2="36" />
                <line x1="4" y1="20" x2="8" y2="20" />
                <line x1="32" y1="20" x2="36" y2="20" />
                {/* Central numbers '360°' representation */}
                <text
                  x="20"
                  y="24"
                  fontSize="12"
                  fontWeight="bold"
                  fill="currentColor"
                  textAnchor="middle"
                  stroke="none"
                >
                  360°
                </text>
              </svg>
            </div>

            <div className="flex flex-col text-left">
              <span className="font-bold text-sm sm:text-base text-stone-900 tracking-tight leading-none">
                인문360°
              </span>
              <span className="text-[10px] text-stone-500 font-medium tracking-tight mt-0.5">
                기술과 문화의 통섭 아카이브
              </span>
            </div>
          </button>

          {/* Center Navigation Links (Matching: 인문콘텐츠, 영상 아카이브, 인문정보, 인문지도, 고객참여, 사업소개, 공지사항) */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`text-sm sm:text-[15px] font-medium tracking-tight transition-all relative py-2 cursor-pointer ${
                    isActive
                      ? "text-[#202c6b] font-bold"
                      : "text-stone-800 hover:text-[#202c6b]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#202c6b] rounded-full animate-in fade-in" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Utility Icons (Search, User, Menu Hamburger) */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-stone-800 hover:text-[#202c6b] hover:bg-stone-100 rounded-full transition cursor-pointer"
              title="검색"
            >
              <Search className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
            </button>

            {/* User Icon */}
            <button
              onClick={() => onSelectTab("quiz")}
              className="p-2 text-stone-800 hover:text-[#202c6b] hover:bg-stone-100 rounded-full transition cursor-pointer"
              title="마이페이지 / 성찰 기록"
            >
              <User className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
            </button>

            {/* Hamburger Menu Icon */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-stone-800 hover:text-[#202c6b] hover:bg-stone-100 rounded-full transition cursor-pointer"
              title="전체 메뉴"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Search Bar */}
      {isSearchOpen && (
        <div className="border-t border-stone-200 bg-stone-50/90 backdrop-blur-md px-4 py-3 animate-in slide-in-from-top-2">
          <div className="max-w-2xl mx-auto flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="통섭 키워드 검색 (예: 불의 조리, 인쇄술, 최재천, 에드워드 윌슨...)"
                className="w-full bg-white border border-stone-300 rounded-full pl-10 pr-4 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#202c6b]"
                autoFocus
              />
            </div>
            <button
              onClick={() => setIsSearchOpen(false)}
              className="text-xs text-stone-500 hover:text-stone-800 px-2 py-1 cursor-pointer"
            >
              닫기
            </button>
          </div>
        </div>
      )}

      {/* Mobile & Full Site Navigation Drawer */}
      {isMenuOpen && (
        <div className="border-t border-stone-200 bg-white shadow-xl animate-in slide-in-from-top-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSelectTab(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`p-3.5 rounded-xl border text-left transition flex flex-col justify-between cursor-pointer ${
                      isActive
                        ? "bg-violet-50 border-[#202c6b] text-[#202c6b]"
                        : "bg-stone-50 border-stone-200 hover:bg-stone-100 text-stone-800"
                    }`}
                  >
                    <Icon className="w-5 h-5 mb-2 text-[#202c6b]" />
                    <div>
                      <div className="text-sm font-bold">{item.label}</div>
                      <div className="text-[11px] text-stone-500 mt-0.5 line-clamp-1">
                        {item.sublabel}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
