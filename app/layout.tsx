import "@/app/globals.css";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  title: {
    default: "제주 카라반 캠핑장 – 별 보는 감성 숙소",
    template: "%s | 제주 카라반 캠핑장",
  },
  description:
    "제주 대정읍 카라반 캠핑장. 별 보기, 감성 바비큐, 가족/연인 맞춤. TV 출연 캠핑장.",
  openGraph: {
    title: "제주 카라반 캠핑장 – 별 보는 감성 숙소",
    description:
      "제주 대정읍 카라반 캠핑장. 별 보기, 감성 바비큐, 가족/연인 맞춤. TV 출연 캠핑장.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Jeju Caravan Night Sky",
      },
    ],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: PropsWithChildren) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen bg-background text-foreground")}> 
        {/* JSON-LD – LodgingBusiness/Campground */}
        <script
          type="application/ld+json"
          // @ts-ignore
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Campground",
              name: "제주 카라반 캠핑장",
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
              image: [
                new URL("/og-cover.jpg", process.env.NEXT_PUBLIC_SITE_URL || "https://example.com").toString(),
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "제주특별자치도 서귀포시 대정읍",
                addressCountry: "KR",
              },
              geo: { "@type": "GeoCoordinates", latitude: 33.2372, longitude: 126.3134 },
              telephone: "+82-10-1234-5678",
              starRating: { "@type": "Rating", ratingValue: 4.8 },
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "별 보기", value: true },
                { "@type": "LocationFeatureSpecification", name: "바비큐", value: true },
                { "@type": "LocationFeatureSpecification", name: "주차", value: true },
              ],
            }),
          }}
        />

        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              // @ts-ignore
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);} gtag('js', new Date());
                gtag('config', '${gaId}', { send_page_view: true });
              `,
              }}
            />
          </>
        )}

        {children}
      </body>
    </html>
  );
}