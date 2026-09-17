import React from "react";
import { PillarKey } from "../types";
import { Wrench, Users, HeartPulse, Sparkles, Palette, Coffee } from "lucide-react";

export interface PillarMeta {
  key: PillarKey;
  label: string;
  sublabel: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  borderColor: string;
}

export const PILLAR_MAP: Record<PillarKey, PillarMeta> = {
  scienceTech: {
    key: "scienceTech",
    label: "자연과학·공학",
    sublabel: "물리/에너지 기제 및 기술적 원리",
    icon: Wrench,
    color: "text-[#2d4a60]",
    bgColor: "bg-[#eef3f7]",
    borderColor: "border-[#ccdbe5]",
  },
  socioPolitics: {
    key: "socioPolitics",
    label: "사회·정치·경제",
    sublabel: "권력 구조, 생산양식, 법과 제도",
    icon: Users,
    color: "text-[#7a4b26]",
    bgColor: "bg-[#f9f3ec]",
    borderColor: "border-[#e5d4c3]",
  },
  anthropologyLife: {
    key: "anthropologyLife",
    label: "인류·일상생활",
    sublabel: "신체 감각, 시간관, 주거 및 관계",
    icon: HeartPulse,
    color: "text-[#34533e]",
    bgColor: "bg-[#eff5f0]",
    borderColor: "border-[#cde0d1]",
  },
  philosophyWorldview: {
    key: "philosophyWorldview",
    label: "철학·세계관·종교",
    sublabel: "존재론, 윤리관, 우주관 및 형이상학",
    icon: Sparkles,
    color: "text-[#5e386a]",
    bgColor: "bg-[#f6eff9]",
    borderColor: "border-[#dfcde5]",
  },
  artSymbolism: {
    key: "artSymbolism",
    label: "예술·상징체계",
    sublabel: "미학 사조, 서사 형식, 매체 문법",
    icon: Palette,
    color: "text-[#8c281e]",
    bgColor: "bg-[#faeee9]",
    borderColor: "border-[#e8ceca]",
  },
  derivedCulture: {
    key: "derivedCulture",
    label: "파생문화·현대유산",
    sublabel: "현대 하위문화, 생활 관습, 무의식적 의례",
    icon: Coffee,
    color: "text-[#694825]",
    bgColor: "bg-[#f8f2ea]",
    borderColor: "border-[#e5d6c5]",
  },
};

interface PillarBadgeProps {
  pillar: PillarKey;
  isSelected?: boolean;
  onClick?: () => void;
  showSublabel?: boolean;
  compact?: boolean;
}

export const PillarBadge: React.FC<PillarBadgeProps> = ({
  pillar,
  isSelected,
  onClick,
  showSublabel = false,
  compact = false,
}) => {
  const meta = PILLAR_MAP[pillar];
  const Icon = meta.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!onClick}
      className={`inline-flex items-center gap-2 rounded-lg transition-all text-left ${
        compact ? "px-2.5 py-1 text-xs" : "px-3 py-1.5 text-xs"
      } ${
        isSelected
          ? `${meta.bgColor} ${meta.color} border ${meta.borderColor} ring-2 ring-amber-500/40 shadow-xs font-semibold`
          : onClick
          ? "bg-stone-50 text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-stone-200"
          : `${meta.bgColor} ${meta.color} border ${meta.borderColor}`
      } ${onClick ? "cursor-pointer" : "cursor-default"}`}
    >
      <Icon className={`${compact ? "w-3 h-3" : "w-3.5 h-3.5"} ${meta.color}`} />
      <div>
        <div className="font-semibold">{meta.label}</div>
        {showSublabel && (
          <div className="text-[10px] text-stone-500 line-clamp-1 mt-0.5 font-normal">
            {meta.sublabel}
          </div>
        )}
      </div>
    </button>
  );
};
