import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

let geminiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!geminiClient && process.env.GEMINI_API_KEY) {
    geminiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return geminiClient;
}

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", aiAvailable: Boolean(process.env.GEMINI_API_KEY) });
});

// Consilient Analysis endpoint
app.post("/api/gemini/analyze", async (req, res) => {
  try {
    const { topic, context, era } = req.body;
    if (!topic) {
      return res.status(400).json({ error: "Topic is required" });
    }

    const ai = getGeminiClient();
    if (!ai) {
      return res.json({
        fallback: true,
        analysis: {
          title: topic,
          overview: `${topic}에 대한 통섭적(자연과학, 사회과학, 인문학, 예술) 분석입니다. 기술적 기제와 인간 조건의 상호 변증법적 피드백을 조명합니다.`,
          pillars: {
            scienceTech: "에너지 변환과 도구적 합리성의 팽창: 물리적 제약을 극복하고 인간의 생물학적 한계를 외주화함.",
            socioPolitics: "권력의 재편과 계급 분화: 잉여 생산 또는 통신 속도의 압축으로 새로운 지배 양식과 법 제도가 태동.",
            anthropologyLife: "신체 지각과 일상 감각의 전면적 개조: 수면, 식생, 이동, 관계의 리듬이 근본적으로 재배치됨.",
            philosophyWorldview: "존재론과 윤리적 지평의 이동: 세계를 인식하고 우주 내 인간의 위치를 규정하는 형이상학적 패러다임 전환.",
            artSymbolism: "미학적 양식과 서사의 변형: 새로운 재료와 매체를 통해 인간의 무의식과 집단 기억을 표현하는 문법 진화.",
            derivedCulture: "하위문화 및 현대 문명 속 파생 관습: 오늘의 일상적 의례, 어휘, 집단 규범 속에 여전히 잔존하는 문화적 유전자."
          },
          dialecticInsight: "기술은 단순한 수단이 아니라 인간의 지각과 사회적 현실을 규정하는 존재론적 환경(Medium)으로 기능합니다."
        }
      });
    }

    const prompt = `당신은 에드워드 윌슨(통섭), 마셜 맥루한, 루이스 멈퍼드, 발터 벤야민의 학문적 지평을 아우르는 '인류 문명사 및 기술-문화 통섭학자'입니다.
다음 주제(기술 또는 문화적 사건)에 대해 6대 통섭 차원(자연과학/공학, 사회/정치/경제, 인류/일상생활양식, 철학/세계관/종교, 예술/상징체계, 파생된 하위문화 및 현대적 유산)에서 심층 분석하여 JSON으로 응답해 주세요.

주제: ${topic}
시대/맥락: ${era || "인류사 전반"}
추가 요청: ${context || "기술의 등장이 인간 문화에 미친 다층적 파급 효과 분석"}

반드시 다음 JSON 규격으로만 응답하세요 (마크다운 백틱 없이 순수 JSON 또는 JSON 블록):
{
  "title": "${topic}",
  "overview": "이 기술/사건이 문명사에 던진 통섭적 의미를 압축한 2~3문장",
  "pillars": {
    "scienceTech": "자연과학 및 공학적 혁신 원리 (물리/에너지/도구적 기제)",
    "socioPolitics": "사회·경제·정치적 권력 구조 및 제도적 재편",
    "anthropologyLife": "인간의 신체 감각, 시간관, 일상생활 및 관계 양식의 변모",
    "philosophyWorldview": "철학, 세계관, 종교 및 인간관의 형이상학적 전환",
    "artSymbolism": "예술적 양식, 미학 사조, 상징 체계 및 매체 문법의 혁신",
    "derivedCulture": "현대까지 이어진 파생 문화, 하위문화(서브컬처), 일상의 무의식적 관습"
  },
  "dialecticInsight": "기술과 문화가 서로를 어떻게 빚어냈는지에 대한 날카로운 통섭적 통찰 (1~2문장)"
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        systemInstruction: "You are a master of consilience (통섭) analyzing human technological and cultural co-evolution with profound historical and interdisciplinary depth. Output valid JSON in Korean.",
      },
    });

    const text = response.text || "{}";
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      // Clean up possible markdown code block
      const cleanJson = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
      parsed = JSON.parse(cleanJson);
    }

    res.json({ analysis: parsed, fallback: false });
  } catch (error: any) {
    console.error("Gemini Analyze Error:", error);
    res.status(500).json({ error: error.message || "Failed to generate consilient analysis" });
  }
});

// Consilient Counterfactual / What-If Simulator endpoint
app.post("/api/gemini/what-if", async (req, res) => {
  try {
    const { technology, targetEra, alternativeCondition } = req.body;
    if (!technology || !targetEra) {
      return res.status(400).json({ error: "technology and targetEra are required" });
    }

    const ai = getGeminiClient();
    if (!ai) {
      return res.json({
        fallback: true,
        simulation: {
          scenario: `만약 [${technology}]가 [${targetEra}]에 조기 도입되었다면? (${alternativeCondition || "대체 역사 시나리오"})`,
          socioCulturalMutation: "문명 발전 속도의 가속과 기존 지배 엘리트의 권력 구조 해체",
          divergentArts: "기존 고전주의 예술 대신 기계적/대량 복제 기반의 조기 아방가르드 사조 등장",
          philosophicalCrisis: "인간의 지위와 자연의 신성성에 대한 조기 종교개혁 및 계몽사상 촉발",
          historicalEcho: "현대 문명의 기술적 모순과 환경 위기가 수백 년 앞당겨져 나타났을 가능성"
        }
      });
    }

    const prompt = `통섭적 사고 실험: '만약 역사 속 기술의 출현 시점이나 사회적 조건이 달랐다면 인간 문화는 어떻게 변이했을까?'
기술: ${technology}
도입될 대체 시대/환경: ${targetEra}
조건/가정: ${alternativeCondition || "역사적 시점의 비약적 조기 출현"}

기술 결정론과 문화적 구성주의의 균형을 유지하며, 다음 4가지 핵심 통섭적 파급 효과를 JSON으로 도출해주세요:
1. scenario: 시나리오 요약 제목
2. socioCulturalMutation: 사회계급, 권력, 일상생활의 파괴적 변이
3. divergentArts: 그 시대에 꽃피웠을 새로운 예술 사조 및 기호체계
4. philosophicalCrisis: 당시 종교 및 철학이 겪었을 형이상학적 충격
5. historicalEcho: 이것이 현대 인류 문명에 남겼을 가상 유산

반드시 순수 JSON 형식으로 응답하세요:
{
  "scenario": "...",
  "socioCulturalMutation": "...",
  "divergentArts": "...",
  "philosophicalCrisis": "...",
  "historicalEcho": "..."
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const text = response.text || "{}";
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      const cleanJson = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
      parsed = JSON.parse(cleanJson);
    }

    res.json({ simulation: parsed, fallback: false });
  } catch (error: any) {
    console.error("Gemini What-If Error:", error);
    res.status(500).json({ error: error.message || "Simulation generation failed" });
  }
});

// Vite Middleware or Production Static Serve
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Consilience Tech-Culture Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
