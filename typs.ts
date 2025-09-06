export type MediaItem = {
  id: string;
  broadcaster: "JTBC" | "SBS Biz";
  program: string;
  episode?: string;
  subtitle: string;
  coverSrcs: string[];
  href?: string;
  anchorId: string;
};