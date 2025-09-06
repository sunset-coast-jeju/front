"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { RESERVE_URL } from "@/lib/constants";
import { ChevronRight, Fish, Tent, Waves } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      aria-label="선셋코스트 히어로"
      className="relative isolate h-screen min-h-[640px] w-full overflow-hidden"
    >
      <video
        src="https://d2eyh5ov7r8see.cloudfront.net/sunsetcoast-hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/12 via-black/11 to-black/10" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_45%_at_50%_0%,rgba(255,255,255,0.10),rgba(255,255,255,0)_70%)]" />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center gap-7 px-6 py-16 md:gap-8 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.35 }}
          className="inline-flex w-fit items-center gap-2 rounded-full bg-white/8 px-3 py-1 text-[11px] text-white/80 backdrop-blur-md ring-1 ring-white/15"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300/50 opacity-70"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300/80"></span>
          </span>
          <span className="font-medium">SBS · JTBC 방영</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.4 }}
          className="max-w-3xl text-[clamp(28px,6vw,42px)] font-medium leading-tight tracking-tight text-white/80 md:text-[44px]"
        >
          바다와 가장 가까운 캠핑,
          <span className="block bg-gradient-to-r from-amber-100 via-yellow-100 to-amber-200 bg-clip-text text-transparent opacity-90">
            선셋코스트
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.4 }}
          className="max-w-2xl text-[15px] leading-relaxed text-zinc-100/75 md:text-base"
        >
          제주의 노을과 바다, 그리고 한적한 밤의 불멍이 오래도록 기억되는 순간을 선물합니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.4 }}
          className="flex flex-wrap items-center gap-3"
        >
          <Button asChild size="lg" className="h-11 px-5 text-[15px]">
            <Link href={RESERVE_URL} aria-label="지금 예약하기">
              지금 예약하기
              <ChevronRight className="ml-1.5 h-5 w-5" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="secondary"
            className="h-11 px-5 text-[15px] bg-white/12 text-white/80 backdrop-blur-md hover:bg-white/20 hover:text-white"
          >
            <Link href="#reviews" aria-label="후기 보기">
              후기 보기
            </Link>
          </Button>
        </motion.div>

        <div className="pointer-events-none mt-3 text-[11px] text-white/60">
          스크롤해서 더 알아보기
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
    </section>
  );
}
