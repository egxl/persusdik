export type PageId = "home" | "naskah" | "faq" | "jadwal" | "disiplin" | "organisasi" | "kuis";

export interface NavItem {
  id: PageId;
  label: string;
  shortLabel?: string;
  description: string;
  badge?: string;
}
