"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/components/LanguageProvider";

type Review = {
  id: number | string;
  name: string;
  title?: string;
  review: string;
  image: string;
  rating?: number;
};

export function ReviewsCarousel({ reviews, spanishReviews }: { reviews: Review[]; spanishReviews: Review[] }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const localizedReviews = language === "es"
    ? reviews.map(review => spanishReviews.find(spanishReview => spanishReview.id === review.id) ?? review)
    : reviews;

  const scroll = (direction: "left" | "right") => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.scrollBy({
      left: direction === "left" ? -carousel.clientWidth * 0.85 : carousel.clientWidth * 0.85,
      behavior: "smooth",
    });
  };

  if (localizedReviews.length === 0) return null;

  return <div className="mt-10" data-language-content>
    <div className="mb-5 flex justify-end gap-2">
      <button type="button" onClick={() => scroll("left")} aria-label="Previous reviews" className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-navy shadow-sm transition hover:border-teal hover:bg-teal hover:text-white focus:outline-none focus:ring-4 focus:ring-teal/20">
        <ChevronLeft size={20} />
      </button>
      <button type="button" onClick={() => scroll("right")} aria-label="Next reviews" className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-navy shadow-sm transition hover:border-teal hover:bg-teal hover:text-white focus:outline-none focus:ring-4 focus:ring-teal/20">
        <ChevronRight size={20} />
      </button>
    </div>
    <div ref={carouselRef} className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 [scrollbar-width:thin] [scrollbar-color:#0C8A91_transparent]">
      {localizedReviews.map(review => {
        const rating = Math.min(5, Math.max(0, review.rating ?? 5));
        return <figure key={review.id} className="flex min-w-[88%] snap-start flex-col rounded-3xl bg-white p-6 shadow-sm sm:min-w-[70%] md:min-w-[calc(50%-0.625rem)] lg:min-w-[32%] lg:p-7">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Image src={`/google-reviews/images/${review.image}`} alt={`${review.name} profile`} width={64} height={64} className="h-14 w-14 shrink-0 rounded-full border-2 border-white object-cover shadow-md" />
              <div>
                <figcaption className="font-bold text-navy">{review.name}</figcaption>
                <div className="mt-1 flex gap-0.5 text-amber-400" aria-label={`${rating} out of 5 stars`}>
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} size={14} fill={star <= rating ? "currentColor" : "none"} className={star <= rating ? "" : "text-slate-300"} />)}
                </div>
              </div>
            </div>
            <span aria-label="Google" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-lg font-bold shadow-sm">
              <span className="text-blue">G</span>
            </span>
          </div>
          {review.title && <h3 className="mt-5 text-lg font-bold leading-snug text-navy">{review.title}</h3>}
          <blockquote className="mt-3 flex-1 text-sm leading-6 text-slate-600">“{review.review}”</blockquote>
        </figure>;
      })}
    </div>
  </div>;
}
