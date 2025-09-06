"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Waves } from "lucide-react";

const NAV_ITEMS = [
  { href: "/reserve", label: "예약" },
  { href: "#reviews", label: "후기" },
  { href: "#guide", label: "이용안내" },
  { href: "#location", label: "오시는길" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.4, ease: "easeOut" }}
      className={[
        "fixed inset-x-0 top-0 z-50",
        "transition-colors",
        scrolled
          ? "bg-black/45 backdrop-blur-xl supports-[backdrop-filter]:bg-black/35"
          : "bg-transparent",
      ].join(" ")}
      aria-label="사이트 내비게이션"
    >
      <nav
        className={[
          "mx-auto flex max-w-7xl items-center justify-between",
          "px-6 py-3 md:px-8",
          "border-b transition-colors",
          scrolled ? "border-white/10" : "border-transparent",
        ].join(" ")}
      >
        <Link
          href="/"
          aria-label="선셋코스트 홈으로 이동"
          className="group inline-flex items-center gap-2"
        >
          <Waves className="h-5 w-5 text-amber-100/80 group-hover:text-amber-100 transition-colors" />
          <span className="text-sm font-medium tracking-wide text-white/80 group-hover:text-white">
            SUNSET COAST
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <div className="ml-2 flex items-center gap-2">
            <Button
              asChild
              size="sm"
              variant="secondary"
              className="h-9 px-3 bg-white/10 text-white/85 hover:bg-white/20"
            >
              <Link href="/login" aria-label="로그인 페이지로 이동">
                로그인
              </Link>
            </Button>

            <Button asChild size="sm" className="h-9 px-4">
              <Link href="/reserve" aria-label="지금 예약하기">
                예약하기
              </Link>
            </Button>
          </div>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="h-9 w-9 bg-white/10 text-white/85 hover:bg-white/20"
                aria-label="모바일 메뉴 열기"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[80vw] border-white/10 bg-black/70 backdrop-blur-xl"
            >
              <div className="mt-8 flex flex-col gap-2">
                <Link
                  href="/"
                  className="mb-4 inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm text-white/80 hover:text-white"
                >
                  <Waves className="h-5 w-5 text-amber-100/80" />
                  <span className="font-medium tracking-wide">SUNSET COAST</span>
                </Link>

                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-2 py-3 text-base text-white/80 hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="mt-4 flex items-center gap-2">
                  <Button
                    asChild
                    variant="secondary"
                    className="flex-1 bg-white/10 text-white/85 hover:bg-white/20"
                  >
                    <a href="tel:+82-10-0000-0000" aria-label="전화 문의(모바일)">
                      <Phone className="mr-2 h-4 w-4" />
                      문의
                    </a>
                  </Button>
                  <Button asChild className="flex-1">
                    <Link href="/reserve" aria-label="지금 예약하기(모바일)">예약하기</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <div
        className={[
          "h-px w-full",
          scrolled ? "bg-gradient-to-r from-transparent via-white/15 to-transparent" : "bg-transparent",
        ].join(" ")}
      />
    </motion.header>
  );
}

function WavesIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M2 12c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}