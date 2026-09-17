import React from "react";
import {
  ExternalLink,
  GraduationCap,
  Quote,
  Tv,
  Scroll,
  BookMarked,
  Sparkles,
} from "lucide-react";

interface ConsilienceLectureVideoProps {
  compact?: boolean;
}

export const ConsilienceLectureVideo: React.FC<ConsilienceLectureVideoProps> = ({
  compact = false,
}) => {
  return (
    <div
      id="consilience-lecture-section"
      className="bg-[#fdfbf7] border border-[#ded7ca] rounded-sm p-6 sm:p-9 space-y-6 shadow-[0_1px_4px_rgba(40,30,20,0.04)] font-serif"
    >
      {/* Header & Badges */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#e8e2d6] pb-5">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-xs bg-[#f4ede0] border border-[#dcd2c1] text-[#705e4d] text-xs font-serif">
            <Tv className="w-3.5 h-3.5 text-[#8c281e]" />
            <span className="font-semibold text-[#8c281e]">석학 아카이브 특강</span>
            <span className="text-[#b5a794]">·</span>
            <span className="font-latin-display text-[10px]">CONSILIENCE MASTERCLASS</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#1c1713] tracking-tight mt-1">
            [지식향연] 통섭(지식통합)의 시대
          </h3>
          <p className="text-xs text-[#635547] font-serif">
            강연: <strong>최재천 교수</strong> (이화여자대학교 에코과학부 석좌교수 · 《통섭: 지식의 대통합》 역자)
          </p>
        </div>

        <a
          href="https://www.youtube.com/watch?v=fx3j7jgR_tg"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xs bg-[#ffffff] hover:bg-[#f6f1e6] text-[#3d3227] hover:text-[#1c1713] border border-[#d6cdbd] hover:border-[#8c281e] text-xs font-serif transition-all cursor-pointer self-start sm:self-auto shadow-xs"
        >
          <span className="font-medium">YouTube 원본 보기</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#8c281e]" />
        </a>
      </div>

      {/* Main Grid: Video Player + Scholarly Seminar Notes */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
        {/* Video Player Container */}
        <div className="lg:col-span-7 space-y-3">
          <div className="relative w-full aspect-video rounded-xs overflow-hidden border border-[#cfc4b0] shadow-md bg-[#1a1815]">
            <iframe
              src="https://www.youtube-nocookie.com/embed/fx3j7jgR_tg?rel=0"
              title="[지식향연] 통섭(지식통합)의 시대_최재천 교수"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="flex items-center justify-between text-[11px] text-[#736555] font-serif px-1">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#8c281e] inline-block"></span>
              신세계 지식향연 인문학 아카이브
            </span>
            <span className="font-latin-display text-[10px]">DURATION: 36 MIN</span>
          </div>
        </div>

        {/* Seminar Notes & Key Deductions */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-xs bg-[#f6f1e6] border border-[#ded5c4] space-y-2">
            <div className="flex items-center gap-2 text-[#702b21] font-bold text-xs font-serif">
              <GraduationCap className="w-4 h-4 text-[#8c281e]" />
              <span>강연 해제 및 문명사적 명제</span>
            </div>
            <p className="text-xs text-[#40362c] leading-relaxed font-serif">
              에드워드 O. 윌슨의 제자이자 한국 지성계에 <strong>'통섭(Consilience)'</strong>이란 개념을 소개한 최재천 교수가 학문 간의 인위적 장벽을 허물고 21세기 문명 위기를 돌파할 지적 나침반을 제시하는 강연입니다.
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-[#8c281e] tracking-wider font-latin-display uppercase flex items-center gap-1.5">
              <BookMarked className="w-3.5 h-3.5 text-[#8c281e]" />
              강연의 3대 통섭적 지적 열쇠 (Core Takeaways)
            </h4>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xs bg-[#ffffff] border border-[#e5ded2] flex items-start gap-2.5">
                <span className="font-latin-display text-[10px] font-bold text-[#8c281e] bg-[#f7efe3] px-1.5 py-0.5 rounded-xs shrink-0 border border-[#ded5c5]">
                  I
                </span>
                <div>
                  <strong className="text-[#1c1713] block font-medium font-serif">통섭(統攝)의 어원과 본질:</strong>
                  <p className="text-[#594d40] text-[11.5px] mt-0.5 leading-relaxed font-serif">
                    원효의 화쟁(和諍) 사상에서 유래한 '큰 줄기를 잡다'라는 뜻으로, 개별 학문의 분과를 넘어 사물의 근원적 인과관계를 하나로 꿰뚫는 통합적 사유입니다.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xs bg-[#ffffff] border border-[#e5ded2] flex items-start gap-2.5">
                <span className="font-latin-display text-[10px] font-bold text-[#8c281e] bg-[#f7efe3] px-1.5 py-0.5 rounded-xs shrink-0 border border-[#ded5c5]">
                  II
                </span>
                <div>
                  <strong className="text-[#1c1713] block font-medium font-serif">우물 파기와 우물 잇기:</strong>
                  <p className="text-[#594d40] text-[11.5px] mt-0.5 leading-relaxed font-serif">
                    20세기가 자기 분야의 우물만 깊게 파는 극단적 전문화의 시대였다면, 21세기는 서로 다른 지식의 우물을 가로질러 잇는 통섭형 인재가 문명을 견인합니다.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xs bg-[#ffffff] border border-[#e5ded2] flex items-start gap-2.5">
                <span className="font-latin-display text-[10px] font-bold text-[#8c281e] bg-[#f7efe3] px-1.5 py-0.5 rounded-xs shrink-0 border border-[#ded5c5]">
                  III
                </span>
                <div>
                  <strong className="text-[#1c1713] block font-medium font-serif">정보에서 지혜로의 도약:</strong>
                  <p className="text-[#594d40] text-[11.5px] mt-0.5 leading-relaxed font-serif">
                    단편적인 데이터와 기술 지식만으로는 인류의 미래를 담보할 수 없으며, 인문학적 성찰과 생태학적 통찰이 하나로 맞물려야 지혜로 승화됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Famous Quote */}
          <div className="p-3.5 rounded-xs bg-[#f9f6ef] border border-[#e2d8c6] text-[#332b23] flex items-start gap-2.5">
            <Quote className="w-4 h-4 text-[#8c281e] shrink-0 mt-0.5" />
            <p className="text-xs font-serif italic text-[#3f3429] leading-relaxed">
              "알면 사랑한다. 앎이 깊어지면 사랑하지 않을 수 없고, 통섭적 시야로 세상을 볼 때 비로소 타인과 자연을 온전히 포용할 수 있습니다."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
