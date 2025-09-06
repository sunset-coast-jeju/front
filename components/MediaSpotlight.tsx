"use client";

import * as React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { Tv, Play, Link as LinkIcon, MessageSquareQuote, Film } from "lucide-react";
import { MEDIA_HIGHLIGHTS, MEDIA_ITEMS, RESERVE_URL } from "@/lib/constants";
import { MediaItem } from "@/typs";

const cx = (...cls: (string | false | null | undefined)[]) =>
  cls.filter(Boolean).join(" ");

const useAutoPlay = (enabled: boolean, cb: () => void, ms = 5000) => {
  React.useEffect(() => {
    if (!enabled) return;
    const t = setInterval(cb, ms);
    return () => clearInterval(t);
  }, [enabled, cb, ms]);
};

const SectionHeader = React.memo(function SectionHeader() {
  return (
    <>
      <div className="mb-3 flex items-center gap-2">
        <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 ring-1 ring-amber-100">
          <Tv className="h-4 w-4 text-amber-600" aria-hidden />
        </div>
        <p className="text-sm font-medium tracking-wide text-gray-500">
          MEDIA FEATURED
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
        제주 노을과 바다, 그리고 이야기가 머무는 곳
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-gray-700">
        선셋코스트는 JTBC &lt;끝사랑&gt;, SBS Biz &lt;고수열전&gt; 등 다양한 방송에서 소개되며, <br />
        노을이 붉게 물드는 바다와 돌고래가 지나는 순간 그리고 카라반 속 아늑한 휴식까지 <br />
        이곳만의 특별한 하루를 전해드리고 있습니다.
      </p>
    </>
  );
});

const KeyPoints = React.memo(function KeyPoints() {
  const POINTS = [
    { k: "붉게 물드는 제주 노을", d: "저녁 하늘을 물들이는 낭만적인 풍경" },
    { k: "바다 위를 헤엄치는 돌고래", d: "가까이에서 돌고래를 만나는 특별한 순간" },
    { k: "아늑한 프리미엄 카라반", d: "고급 침구류와 편안한 휴식 공간" },
  ];
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {POINTS.map((p) => (
        <div
          key={p.k}
          className="inline-flex items-center gap-2 rounded-full border border-amber-100 bg-amber-50 px-3 py-1.5"
          title={p.d}
        >
          <span className="text-[13px] font-medium text-amber-700">{p.k}</span>
          <span className="hidden text-[11px] text-amber-600 sm:inline">{p.d}</span>
        </div>
      ))}
    </div>
  );
});

const TestimonialTeaser = React.memo(function TestimonialTeaser() {
  const quotes = [
    "방송에서 본 노을이 현장에서 더 압도적이었어요.",
    "아이들이 돌고래를 직접 보고 잊지 못할 추억이 됐습니다.",
  ];
  return (
    <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 px-4 py-4">
      <div className="mb-2 flex items-center gap-2 text-gray-800">
        <MessageSquareQuote className="h-4 w-4 text-amber-600" aria-hidden />
        <span className="text-sm font-semibold">실제 이용 후기</span>
      </div>
      <ul className="space-y-2">
        {quotes.map((q, i) => (
          <li key={i} className="text-sm text-gray-700">“{q}”</li>
        ))}
      </ul>
      <div className="mt-3">
        <NextLink
          href="https://map.naver.com/p/entry/place/1203944529?lng=126.2048939&lat=33.2460762&placePath=/review?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202509070231&locale=ko&svcName=map_pcv5&businessCategory=camping&entry=plt&searchType=place&c=15.00,0,0,0,dh"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-700 hover:text-amber-800"
          target="_blank"
          aria-label="후기 더 보기"
        >
          후기 더 보기
          <LinkIcon className="h-4 w-4" aria-hidden />
        </NextLink>
      </div>
    </div>
  );
});

const Highlights = React.memo(function Highlights() {
  return (
    <ul
      aria-label="방송 및 이용 지표"
      className="mx-auto mt-8 grid w-full max-w-3xl grid-cols-3 gap-4"
    >
      {MEDIA_HIGHLIGHTS.map((h) => (
        <li
          key={h.label}
          className="rounded-xl border border-amber-100 bg-amber-50 px-3 py-4 text-center shadow-sm"
        >
          <div className="text-lg font-bold text-amber-700">{h.value}</div>
          <div className="mt-1 text-sm font-medium text-amber-600">{h.label}</div>
        </li>
      ))}
    </ul>
  );
});

const ActionCTA = () => (
  <div className="mt-8 flex justify-center">
    <NextLink
      href={RESERVE_URL}
      className="inline-flex items-center gap-1.5 rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
      aria-label="지금 예약하기"
      target="_blank"
    >
      <LinkIcon className="h-4 w-4" aria-hidden />
      방송에서 확인된 공간을 직접 경험해 보세요
    </NextLink>
  </div>
);

const Dots = React.memo(function Dots({
  length,
  index,
  onSelect,
  labelPrefix,
}: {
  length: number;
  index: number;
  onSelect: (i: number) => void;
  labelPrefix: string;
}) {
  return (
    <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2">
      <div className="flex items-center gap-1.5 rounded-full bg-black/40 px-2 py-1 ring-1 ring-white/15 backdrop-blur">
        {Array.from({ length }).map((_, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            aria-label={`${labelPrefix} 이미지 ${i + 1} 보기`}
            className={cx(
              "h-1.5 w-1.5 rounded-full transition",
              i === index ? "bg-white/90" : "bg-white/40"
            )}
          />
        ))}
      </div>
    </div>
  );
});

const MediaCard = React.memo(function MediaCard({
  item,
  priority,
}: {
  item: MediaItem;
  priority?: boolean;
}) {
  const [index, setIndex] = React.useState(0);
  const { coverSrcs } = item;
  const length = coverSrcs.length;

  const next = React.useCallback(() => setIndex((i) => (i + 1) % length), [length]);
  const prev = React.useCallback(() => setIndex((i) => (i - 1 + length) % length), [length]);
  const select = React.useCallback((i: number) => setIndex(i), []);
  useAutoPlay(length > 1, next, 5000);

  const touchStartX = React.useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 40) prev();
    if (dx < -40) next();
    touchStartX.current = null;
  };

  const title = React.useMemo(
    () => `${item.broadcaster} · ${item.program}${item.episode ? ` ${item.episode}` : ""}`,
    [item.broadcaster, item.program, item.episode]
  );

  return (
    <motion.article
      id={item.anchorId}
      itemScope
      itemType="https://schema.org/TVEpisode"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={cx(
        "group relative overflow-hidden rounded-2xl",
        "bg-white/[0.06] ring-1 ring-white/10",
        "before:pointer-events-none before:absolute before:inset-0 before:-z-10",
        "before:bg-[radial-gradient(1200px_300px_at_20%_-20%,rgba(255,255,255,0.08),transparent),radial-gradient(1200px_300px_at_80%_-20%,rgba(255,200,150,0.08),transparent)]"
      )}
    >
      <div className="absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-black/45 px-2 py-1 text-[11px] font-medium text-white/85 ring-1 ring-white/15 backdrop-blur">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400/90" />
        {item.broadcaster}
      </div>

      {/* 메인 슬라이더 */}
      <div className="relative aspect-[16/9] w-full select-none" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {coverSrcs.map((src, i) => (
          <motion.div key={src} className="absolute inset-0" initial={false} animate={{ opacity: i === index ? 1 : 0 }} transition={{ duration: 0.4, ease: "easeOut" }} aria-hidden={i !== index}>
            <Image
              src={src}
              alt={`${title} — ${item.subtitle}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority={priority && i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
            <div aria-hidden className="pointer-events-none absolute -inset-x-10 -top-40 h-40 rotate-12 bg-gradient-to-r from-white/0 via-white/12 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </motion.div>
        ))}

        {length > 1 && <Dots length={length} index={index} onSelect={select} labelPrefix={item.program} />}
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
        <h3 className="text-lg font-semibold text-white md:text-xl" itemProp="name">{title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-white/85" itemProp="description">{item.subtitle}</p>
        {item.href ? (
          <a href={item.href} target="_blank" rel="noreferrer" className="mt-3 inline-flex w-max items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-sm text-white/90 ring-1 ring-white/15 backdrop-blur transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300" aria-label={`${item.program} 방송 다시보기`}>
            <Play className="h-4 w-4" aria-hidden />
            방송 보기
          </a>
        ) : (
          <span className="mt-3 inline-flex w-max items-center rounded-lg bg-white/10 px-3 py-1.5 text-xs text-white/70 ring-1 ring-white/15 backdrop-blur">방송 소개</span>
        )}
      </div>

      {item.episode && <meta itemProp="episodeNumber" content={item.episode.replace(/\D/g, "")} />}
      <meta itemProp="partOfSeries" content={item.program} />
      <meta itemProp="countryOfOrigin" content="KR" />
      <meta itemProp="inLanguage" content="ko" />
    </motion.article>
  );
});

export default function MediaSpotlight() {
  return (
    <section id="media" aria-label="제주 캠핑장 방송 소개" className="relative mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16 bg-white">
      {/* 헤더 + 보강 컨텐츠 */}
      <SectionHeader />
      <KeyPoints />

      {/* 카드 그리드 */}
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {MEDIA_ITEMS.map((item, idx) => (
          <MediaCard key={item.id} item={item} priority={idx === 0} />
        ))}
      </div>

      {/* 신뢰 지표, 후기 티저, 비하인드, 영상, CTA */}
      <Highlights />
      <TestimonialTeaser />
      <ActionCTA />
    </section>
  );
}