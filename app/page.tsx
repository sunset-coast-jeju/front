import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Fish, Stars, Waves, Anchor } from "lucide-react";
import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import MediaSpotlight from "@/components/MediaSpotlight";
import { CONTACT_TEL, MEDIA_ITEMS, RESERVE_URL } from "@/lib/constants";
import Script from "next/script";

function episodesToJsonLd() {
  return MEDIA_ITEMS.map((m) => ({
    "@type": "TVEpisode",
    name: `${m.program}${m.episode ? ` ${m.episode}` : ""}`,
    partOfSeries: { "@type": "TVSeries", name: m.program },
    url: `https://your-domain.com/#${m.anchorId}`,
    inLanguage: "ko",
    image: `https://your-domain.com${m.coverSrc}`,
    description: m.subtitle,
  }));
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "선셋코스트 (Sunset Coast)",
  description: "제주 대정 바다 앞 감성 카라반 캠핑장. 제주 노을과 돌고래 명소로 유명한 숙소.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "제주특별자치도 서귀포시 대정읍",
  },
  url: "https://your-domain.com/",
  telephone: CONTACT_TEL,
  image: [
    "https://your-domain.com/media/hero1.jpg",
    ...MEDIA_ITEMS.map((m) => `https://your-domain.com${m.coverSrc}`),
  ],
  makesOffer: {
    "@type": "Offer",
    url: RESERVE_URL,
    availability: "https://schema.org/InStock",
  },
  areaServed: "Jeju, KR",
  hasPart: episodesToJsonLd(),
};

// --- About Section ---
function About() {
  const features = [
    { title: "오션뷰 카라반", desc: "침대에서 파도 소리와 일출을 즐겨요." },
    { title: "BBQ & 주방", desc: "그릴·간단 조리도구·식기 제공." },
    { title: "패밀리/커플", desc: "2~4인에 최적화된 구조와 수납." },
  ];
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">카라반 소개</h2>
          <p className="mt-3 text-muted-foreground">실내는 아늑함과 실용성을 모두 갖춘 구조로, 바다를 바라보는 파노라마 창과 포근한 침구가 준비되어 있습니다.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <Card key={f.title} className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg">{f.title}</CardTitle>
                  <CardDescription>{f.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
        <div className="aspect-video w-full overflow-hidden rounded-3xl bg-muted">
          {/* Replace with real image */}
          <img src="/about-caravan.jpg" alt="카라반 내부" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

// --- Experience Section ---
function Experience() {
  const exp = [
    { icon: Waves, title: "돌고래 관측", desc: "계절과 기상에 따라 출몰. 망원경 대여 가능 예정." },
    { icon: Fish, title: "바다 낚시", desc: "도보 포인트 소개 및 장비 대여(옵션)." },
    { icon: Stars, title: "별빛 캠핑", desc: "한적한 대정읍에서 즐기는 고요한 밤." },
    { icon: Anchor, title: "주변 관광", desc: "용머리해안, 송악산 등 차량 10~20분권." },
  ];
  return (
    <section id="experience" className="bg-muted/30 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold">체험 & 주변</h2>
        <p className="mt-3 text-muted-foreground">숙박 이상의 경험을 제공합니다. 바다를 즐기고 자연을 기록하세요.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {exp.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="rounded-2xl">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="rounded-2xl bg-primary/10 p-2"><Icon className="size-5" /></div>
                <div>
                  <CardTitle className="text-base">{title}</CardTitle>
                  <CardDescription>{desc}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Reviews Section (placeholder) ---
function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-4 py-16">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold">후기</h2>
          <p className="mt-3 text-muted-foreground">플랫폼 리뷰 하이라이트와 인스타 해시태그를 노출합니다.</p>
        </div>
        <Button asChild variant="secondary"><Link href="#contact">제휴/협업 문의</Link></Button>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[1,2,3].map((i) => (
          <Card key={i} className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-base">실제 방문자 후기 {i}</CardTitle>
              <CardDescription>“돌고래를 바로 앞에서 봤어요. 밤엔 별이 가득!”</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted">
                <img src={`/review-${i}.jpg`} alt="review" className="h-full w-full object-cover" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

// --- Gallery Section ---
function Gallery() {
  return (
    <section id="gallery" className="bg-muted/30 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold">갤러리</h2>
        <p className="mt-3 text-muted-foreground">드론 영상과 순간들을 모았어요.</p>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[...Array(8)].map((_, idx) => (
            <div key={idx} className="aspect-square overflow-hidden rounded-2xl bg-muted">
              <img src={`/gallery/${idx+1}.jpg`} alt="gallery" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Booking Section ---
function Booking() {
  return (
    <section id="booking" className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">예약하기</h2>
          <p className="mt-3 text-muted-foreground">현재는 플랫폼을 통해 예약을 받고 있어요. 공식 홈페이지 방문 고객을 위한 단골 혜택을 준비 중입니다.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg"><Link href="https://www.yanolja.com" target="_blank" rel="noopener">야놀자에서 보기</Link></Button>
            <Button asChild size="lg" variant="secondary"><Link href="https://www.goodchoice.kr" target="_blank" rel="noopener">여기어때에서 보기</Link></Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">* 향후 자체 예약 오픈 예정 — 조기예약·연박 할인 알림을 받아보세요.</p>
        </div>
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg">소식지 구독</CardTitle>
            <CardDescription>자체 예약 오픈·이벤트 소식 받아보기</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-3 md:grid-cols-[1fr_auto]">
              <Input type="email" placeholder="이메일 주소" className="md:col-start-1" />
              <Button type="submit" className="md:col-start-2">구독하기</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

// --- Location Section ---
function Location() {
  return (
    <section id="location" className="bg-muted/30 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold">오시는 길</h2>
        <p className="mt-3 text-muted-foreground">제주특별자치도 서귀포시 대정읍 ○○로 00 (예시)</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="aspect-video overflow-hidden rounded-2xl bg-muted">
            {/* Replace with Kakao/ Naver map embed */}
            <img src="/map-placeholder.jpg" alt="map" className="h-full w-full object-cover" />
          </div>
          <div className="grid gap-3 text-sm">
            <div className="flex items-center gap-2"><MapPin className="size-4"/> 차로: 제주공항 → 약 60~70분</div>
            <div className="flex items-center gap-2"><Anchor className="size-4"/> 근처: 용머리해안, 송악산, 모슬포항</div>
            <div className="flex items-center gap-2"><Phone className="size-4"/> 010-0000-0000</div>
            <div className="flex items-center gap-2"><Mail className="size-4"/> hello@jeju-caravan.com</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Contact Section ---
function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">문의</h2>
          <p className="mt-3 text-muted-foreground">카카오채널, 전화, 이메일로 문의해주세요. 협업/촬영 문의도 환영합니다.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="secondary">카카오 채널 열기</Button>
            <Button variant="outline">촬영/협업 제휴 문의</Button>
          </div>
        </div>
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg">빠른 문의</CardTitle>
            <CardDescription>연락처를 남겨주시면 연락드릴게요.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-3">
              <Input placeholder="이름" />
              <Input placeholder="전화번호" />
              <Textarea placeholder="문의 내용" rows={4} />
              <Button type="submit">보내기</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

// --- Footer ---
function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <div className="size-8 rounded-2xl bg-blue-600" />
            <span className="font-semibold">Sunset Coast</span>
          </div>
          <p className="text-sm text-muted-foreground">바다와 별빛이 가까운 곳, 제주 대정 카라반 캠핑장.</p>
        </div>
        <div className="text-sm">
          <div className="font-semibold">바로가기</div>
          <div className="mt-2 grid gap-1">
            <Link href="#booking" className="hover:underline">예약하기</Link>
            <Link href="#experience" className="hover:underline">체험 & 주변</Link>
            <Link href="#gallery" className="hover:underline">갤러리</Link>
          </div>
        </div>
        <div className="text-sm">
          <div className="font-semibold">연락처</div>
          <div className="mt-2 grid gap-1">
            <div className="flex items-center gap-2"><Phone className="size-4"/>010-0000-0000</div>
            <div className="flex items-center gap-2"><Mail className="size-4"/>hello@jeju-caravan.com</div>
            <div className="flex items-center gap-2"><MapPin className="size-4"/>제주 서귀포시 대정읍 ○○로 00</div>
          </div>
        </div>
      </div>
      <div className="border-t py-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Sunset Coast. All rights reserved.</div>
    </footer>
  );
}

export default function JejuCaravanLanding() {
  return (
    <main className="min-h-svh scroll-smooth bg-white text-slate-900">
      <Script
        id="seo-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />
      <Hero />
      <MediaSpotlight />
      <About />
      <Experience />
      <Reviews />
      <Gallery />
      <Booking />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
