import type { Translations } from "./types";

/**
 * Bahasa Indonesia. The About paragraphs here match the original
 * content already in /data/profile.ts (kept in sync manually since
 * that file is the canonical, un-overwritten source of the Indonesian
 * text). Personal data itself is never duplicated for display — only
 * UI chrome and these two long-form blocks have a full translation.
 */
export const id: Translations = {
  common: {
    languageLabel: "Bahasa",
  },
  nav: {
    home: "Beranda",
    about: "Tentang",
    skills: "Keahlian",
    projects: "Proyek",
    education: "Pendidikan",
    certificates: "Sertifikat",
    contact: "Kontak",
  },
  hero: {
    badge: "Terbuka untuk belajar & berkolaborasi",
    tagline:
      "Seorang pelajar developer yang bersemangat di bidang rekayasa perangkat lunak, pemrograman, dan terus belajar.",
    viewProjects: "Lihat Proyek",
    contactMe: "Hubungi Saya",
    scroll: "Gulir",
  },
  about: {
    eyebrow: "Kenali saya",
    title: "Tentang Saya",
    paragraphs: [
      "Haloo, saya Raditya Musyaffa Urdha, saya adalah siswa kelas XI Rekayasa Perangkat Lunak di SMK Muhammadiyah 1 Yogyakarta yang memiliki minat di bidang teknologi, pemrograman, dan pengembangan perangkat lunak.",
      "Saat ini saya sedang aktif mempelajari Python, HTML, CSS, dan Basic C++, serta berbagai konsep algoritma untuk meningkatkan kemampuan problem solving.",
      "Hingga saat ini saya Alhamdulillah, telah menghafal 8 juz Al-Qur'an, yaitu Juz 30, 29, 28, 27, 26, 25, 24, dan Juz 1.",
      "Di luar dunia teknologi, saya senang mengaji, mendengarkan musik, menonton Formula 1 dan favorit driver saya George Russell, mendesain, ngoding, mendengarkan podcast, serta terus belajar hal-hal baru.",
    ],
    roleLabel: "Peran",
    schoolLabel: "Sekolah",
    locationLabel: "Lokasi",
  },
  hobbies: {
    eyebrow: "Di luar layar",
    title: "Hobi",
  },
  interests: {
    eyebrow: "Yang menggerakkan saya",
    title: "Minat",
  },
  skills: {
    eyebrow: "Yang saya kuasai",
    title: "Keahlian",
    description: "Gambaran kemampuan saya saat ini — terus berkembang.",
    programmingTitle: "Keahlian Pemrograman",
    languagesTitle: "Bahasa",
    otherTitle: "Keahlian Lainnya",
  },
  projects: {
    eyebrow: "Karya pilihan",
    title: "Proyek",
    description:
      "Beberapa hal yang telah saya buat selama belajar — akan terus bertambah.",
    code: "Kode",
    liveDemo: "Demo Langsung",
  },
  games: {
    eyebrow: "Dibuat untuk bersenang-senang",
    title: "Proyek Game",
    description:
      "Game browser kecil yang dibuat dengan Construct 3 — sisi lain dari kebiasaan memecahkan masalah yang sama.",
    playNow: "Mainkan Sekarang",
  },
  github: {
    eyebrow: "Aktivitas terbaru",
    title: "GitHub",
    description: "Langsung dari GitHub — repositori publik yang baru diperbarui.",
    viewRepository: "Lihat Repositori",
    fallbackTitle: "Etalase GitHub",
    fallbackDescription:
      "Repositori tidak dapat dimuat saat ini — bagian ini terhubung otomatis ke GitHub API publik dan akan terisi begitu dapat diakses.",
    visitProfile: "Kunjungi Profil GitHub",
  },
  education: {
    eyebrow: "Perjalanan sejauh ini",
    title: "Linimasa Pendidikan",
    currentlyStudying: "Sedang Menempuh",
    programLabel: "Program",
  },
  achievements: {
    eyebrow: "Pencapaian",
    title: "Prestasi",
  },
  certificates: {
    eyebrow: "Kredensial terverifikasi",
    title: "Sertifikat",
    description: "Setiap sertifikat tertaut ke halaman verifikasi resminya.",
    verify: "Verifikasi Sertifikat",
  },
  university: {
    eyebrow: "Universitas Impian",
    targetIntake: "Target masuk",
  },
  contact: {
    eyebrow: "Mari terhubung",
    title: "Kontak",
    description:
      "Jangan ragu untuk menghubungi saya — saya selalu terbuka untuk belajar, masukan, dan koneksi baru.",
  },
  footer: {
    builtWith: "Dibangun dengan Next.js, TypeScript & Framer Motion.",
  },
};
