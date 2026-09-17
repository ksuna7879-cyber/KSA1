export type PillarKey =
  | "scienceTech"
  | "socioPolitics"
  | "anthropologyLife"
  | "philosophyWorldview"
  | "artSymbolism"
  | "derivedCulture";

export interface ConsiliencePillars {
  scienceTech: string; // 자연과학 및 공학적 원리
  socioPolitics: string; // 사회·정치·경제 구조의 변화
  anthropologyLife: string; // 인류의 신체 지각, 일상생활, 관계 양식
  philosophyWorldview: string; // 철학, 세계관, 종교 및 인간관
  artSymbolism: string; // 예술 양식, 미학 사조, 상징 체계
  derivedCulture: string; // 파생된 현대 하위문화, 관습 및 생활 양식
}

export interface CausalNode {
  step: number;
  domain: string; // 공학, 제도, 신체, 사상, 예술, 문화
  title: string;
  description: string;
}

export interface TechBreakthrough {
  id: string;
  name: string;
  nameEn: string;
  epochId: string;
  yearApprox: string;
  tagline: string;
  overview: string;
  iconName: string;
  consiliencePillars: ConsiliencePillars;
  causalChain: CausalNode[];
  quote: {
    text: string;
    author: string;
    work?: string;
  };
  modernEchoes: string[];
  dialecticTension: string; // 기술 발전과 인간 조건 사이의 긴장/역설
}

export interface Epoch {
  id: string;
  order: number;
  name: string;
  nameEn: string;
  timeframe: string;
  summary: string;
  coreDisruption: string;
  dominantCognitiveShift: string;
  accentColor: string;
}

export interface ThinkerLens {
  id: string;
  name: string;
  nameEn: string;
  title: string;
  coreThesis: string;
  keyWork: string;
  description: string;
  analyticalQuote: string;
  techExample: string;
}

export interface ComparisonResult {
  title: string;
  techA: string;
  techB: string;
  structuralParallels: string[];
  divergences: string[];
  cognitiveMutation: string;
  contemporaryLegacy: string;
}

export interface SimulationResult {
  scenario: string;
  socioCulturalMutation: string;
  divergentArts: string;
  philosophicalCrisis: string;
  historicalEcho: string;
}
