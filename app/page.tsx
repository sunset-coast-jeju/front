import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { MapPin, Phone, Mail, Menu, Fish, Stars, Waves, Tv2, Camera, Anchor, ChevronRight } from "lucide-react";

// --- Top Navigation ---
function TopNav() {
  const items = [
    { href: "#home", label: "홈" },
    { href: "#about", label: "카라반 소개" },
    { href: "#experience", label: "체험 & 주변" },
    { href: "#reviews", label: "후기" },
    { href: "#gallery", label: "갤러리" },
    { href: "#booking", label: "예약하기" },
    { href: "#location", label: "오시는 길" },
    { href: "#contact", label: "문의" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="size-9 rounded-2xl bg-blue-600" />
          <Link href="#home" className="font-bold tracking-tight">SUNSET COAST</Link>
          <Badge variant="secondary" className="ml-2 hidden sm:inline-flex">대정 바다 앞</Badge>
        </div>

        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {items.map((i) => (
                <NavigationMenuItem key={i.href}>
                  <Link className="px-3 py-2 text-sm hover:text-blue-600" href={i.href}>{i.label}</Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden gap-2 md:flex">
          <Button asChild size="sm" variant="secondary"><Link href="#booking">예약하기</Link></Button>
          <Button asChild size="sm"><Link href="#experience">체험 보러가기</Link></Button>
        </div>

        {/* Mobile */}
        <Sheet>
          <SheetTrigger className="md:hidden" aria-label="open menu"><Menu /></SheetTrigger>
          <SheetContent side="right" className="w-72 p-0">
            <div className="p-4">
              <div className="mb-4 flex items-center gap-2">
                <div className="size-8 rounded-2xl bg-blue-600" />
                <span className="font-semibold">Sunset Coast</span>
              </div>
              <Separator />
              <div className="grid gap-2 py-4">
                {items.map((i) => (
                  <Link key={i.href} href={i.href} className="rounded-xl px-3 py-2 text-sm hover:bg-muted">{i.label}</Link>
                ))}
              </div>
              <div className="flex gap-2">
                <Button asChild className="flex-1"><Link href="#booking">예약하기</Link></Button>
                <Button asChild variant="secondary" className="flex-1"><Link href="#experience">체험 보기</Link></Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

// --- Hero Section ---
function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative isolate">
        {/* Video Background (replace src with your asset). Use poster for CLS */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <video className="h-full w-full object-cover" autoPlay muted loop playsInline poster="/hero-poster.jpg">
            <source src="/hero-drone-sea.webm" type="video/webm" />
            <source src="/hero-drone-sea.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-white" />
        </div>

        <div className="mx-auto flex min-h-[72svh] max-w-7xl flex-col items-start justify-center px-4 py-24 text-white">
          <div className="mb-4 flex items-center gap-2">
            <Tv2 className="size-5" />
            <span className="text-xs uppercase tracking-wide">MBC · KBS 방영</span>
          </div>
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            TV에 나온 그 캠핑장.<br />
            창밖으로 <span className="underline decoration-blue-300 underline-offset-4">돌고래</span>가 보이는 카라반
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
            바다 바로 앞, 한적한 제주 대정에서 즐기는 프라이빗 힐링. 해질녘엔 낚시, 밤에는 별빛.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="group">
              <Link href="#booking">실시간 예약 안내 <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" /></Link>
            </Button>
            <Button asChild size="lg" variant="secondary"><Link href="#experience">체험 살펴보기</Link></Button>
          </div>

          {/* USP Badges */}
          <div className="mt-8 flex flex-wrap gap-2">
            <Badge className="bg-white/90 text-black hover:bg-white"><Waves className="mr-1 size-4"/>바다 앞 10초</Badge>
            <Badge variant="secondary"><Stars className="mr-1 size-4"/>한적·프라이빗</Badge>
            <Badge variant="outline"><Fish className="mr-1 size-4"/>바다 낚시 포인트</Badge>
            <Badge variant="outline"><Tv2 className="mr-1 size-4"/>지상파 2회 방영</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}

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

// --- Page ---
export default function JejuCaravanLanding() {
  return (
    <main className="min-h-svh scroll-smooth bg-white text-slate-900">
      <TopNav />
      <Hero />
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
