"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

const certificates = [
  { src: "/achievements/certificate01.jpg", label: "2022 Certificate of Recognition" },
  { src: "/achievements/certificate-02.jpg", label: "2023 Certificate of Recognition" },
  { src: "/achievements/certificate03.jpg", label: "2024 Certificate of Recognition" },
  { src: "/achievements/certificate-04.jpg", label: "2025 Certificate of Recognition" },
  { src: "/achievements/certificate-05.jpg", label: "2026 Medicare Training Certificate" },
];

const badges = [
  { src: "/achievements/certificate-06.jpg", label: "2019 Circle of Champions Badge" },
  { src: "/achievements/certificate-07.jpg", label: "2020 Elite Circle of Champions Badge" },
  { src: "/achievements/certificate-08.jpg", label: "2021 Elite Circle of Champions Badge" },
  { src: "/achievements/certificate-09.jpg", label: "2022 Elite Circle of Champions Badge" },
  { src: "/achievements/certificate-10.jpg", label: "2023 Elite Circle of Champions Badge" },
  { src: "/achievements/certificate-11.jpg", label: "2024 Elite Circle of Champions Badge" },
  { src: "/achievements/certificate-12.jpg", label: "2025 Elite Circle of Champions Badge" },
];

const achievements = [...certificates, ...badges];

export function AchievementsGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const showPrevious = () => setActiveIndex(index => index === null ? null : (index - 1 + achievements.length) % achievements.length);
  const showNext = () => setActiveIndex(index => index === null ? null : (index + 1) % achievements.length);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  const renderRow = (items: typeof achievements, offset: number, imageClass: string) => (
    <div className="flex gap-3 overflow-x-auto pb-3 sm:gap-4 lg:overflow-visible">
      {items.map((achievement, index) => (
        <button
          key={achievement.src}
          type="button"
          onClick={() => setActiveIndex(offset + index)}
          aria-label={`Open ${achievement.label}`}
          className="group min-w-[230px] flex-1 overflow-hidden rounded-2xl border border-white/15 bg-white p-2 text-left shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:border-teal focus:outline-none focus:ring-4 focus:ring-teal/40 sm:min-w-[260px] lg:min-w-0"
        >
          <Image src={achievement.src} alt={achievement.label} width={1043} height={808} className={`${imageClass} h-auto w-full rounded-xl transition duration-300 group-hover:scale-[1.02]`} />
        </button>
      ))}
    </div>
  );

  return <>
    <div className="mt-12">
      <h3 className="mb-5 text-xl font-bold text-white">Certificates</h3>
      {renderRow(certificates, 0, "aspect-[1.29/1] object-cover")}
    </div>
    <div className="mt-10">
      <h3 className="mb-5 text-xl font-bold text-white">Achievement Badges</h3>
      {renderRow(badges, certificates.length, "aspect-[1.29/1] object-contain")}
    </div>

    {activeIndex !== null && (
      <div role="dialog" aria-modal="true" aria-label="Achievement gallery" className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 p-4 sm:p-8" onClick={() => setActiveIndex(null)}>
        <button type="button" onClick={() => setActiveIndex(null)} aria-label="Close gallery" className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-teal/40 sm:right-8 sm:top-8"><X /></button>
        <button type="button" onClick={(event) => { event.stopPropagation(); showPrevious(); }} aria-label="Previous achievement" className="absolute left-3 z-10 rounded-full bg-white p-3 text-navy shadow-lg transition hover:bg-teal hover:text-white focus:outline-none focus:ring-4 focus:ring-teal/40 sm:left-8"><ChevronLeft /></button>
        <figure className="flex max-h-[90vh] max-w-5xl flex-col items-center" onClick={event => event.stopPropagation()}>
          <Image src={achievements[activeIndex].src} alt={achievements[activeIndex].label} width={1043} height={808} priority className="max-h-[78vh] h-auto w-auto max-w-full rounded-xl bg-white object-contain shadow-2xl" />
          <figcaption className="mt-4 text-center text-sm font-semibold text-white">{achievements[activeIndex].label} <span className="ml-2 text-blue-200">{activeIndex + 1} / {achievements.length}</span></figcaption>
        </figure>
        <button type="button" onClick={(event) => { event.stopPropagation(); showNext(); }} aria-label="Next achievement" className="absolute right-3 z-10 rounded-full bg-white p-3 text-navy shadow-lg transition hover:bg-teal hover:text-white focus:outline-none focus:ring-4 focus:ring-teal/40 sm:right-8"><ChevronRight /></button>
      </div>
    )}
  </>;
}
