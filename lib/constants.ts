import { MediaItem } from "@/typs";

export const RESERVE_URL = "https://booking.ddnayo.com/booking-calendar-status?accommodationId=16384";
export const CONTACT_TEL = "tel:+82-10-4741-7064";
export const MEDIA_ITEMS: MediaItem[] = [
  {
    id: "jtbc",
    broadcaster: "JTBC",
    program: "끝사랑",
    episode: "8화",
    subtitle:
      "제주 바다, 제주 노을, 돌고래로 유명한 대정의 감성 카라반 캠핑장",
    coverSrcs: [
      "/images/jtbc-ends-love-ep2.png",
      "/images/jtbc-ends-love-ep1.png",
      "/images/jtbc-ends-love-ep3.png",
    ],
    href: "https://www.youtube.com/watch?v=gOwxj6SDsOg&list=PL5qRfk4DowRCZ6tYkO_OAXA-kKLxYyZKj&index=9",
    anchorId: "media-jtbc",
  },
  {
    id: "sbsbiz",
    broadcaster: "SBS Biz",
    program: "고수열전",
    subtitle:
      "제주 대정 바다 앞 카라반, 가족과 커플이 사랑한 감성 숙소",
    coverSrcs: [
      "/images/sbsbiz-master1.png",
      "/images/sbsbiz-master2.png",
      "/images/sbsbiz-master3.png",
      "/images/sbsbiz-master4.png",
      "/images/sbsbiz-master5.png",
      "/images/sbsbiz-master6.png",
      "/images/sbsbiz-master7.png",
    ],
    href: "https://www.youtube.com/watch?v=0759uBk08ec&list=PLfxwZc8zqolT9TFHf63TrJeT-s62KHEJc&index=6",
    anchorId: "media-sbsbiz",
  },
];

export const MEDIA_HIGHLIGHTS: { label: string; value: string }[] = [
  { label: "총 방송 출연", value: "2회" },
  { label: "이용자 만족도", value: "★ 4.8/5" },
  { label: "전체 예약", value: "2000+" },
];