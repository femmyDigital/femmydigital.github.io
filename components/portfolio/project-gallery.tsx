"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type ProjectGalleryProps = {
  title: string;
  images: string[];
};

export function ProjectGallery({ title, images }: ProjectGalleryProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    updateCurrent();
    api.on("select", updateCurrent);
    api.on("reInit", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
      api.off("reInit", updateCurrent);
    };
  }, [api]);

  useEffect(() => {
    if (!api || images.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      const nextIndex = (api.selectedScrollSnap() + 1) % images.length;
      api.scrollTo(nextIndex);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [api, images.length]);

  return (
    <div className="space-y-4">
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: images.length > 1 }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={`${image}-${index}`}>
              <div className="relative h-[26rem] overflow-hidden rounded-2xl border border-foreground/10 bg-gradient-to-br from-primary/15 via-background to-primary/5 sm:h-[32rem]">
                <Image
                  src={image}
                  alt={`${title} screenshot ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 672px, 100vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {images.length > 1 && (
          <>
            <CarouselPrevious className="left-4 top-1/2 border-white/20 bg-black/45 text-white hover:bg-black/60 disabled:opacity-40" />
            <CarouselNext className="right-4 top-1/2 border-white/20 bg-black/45 text-white hover:bg-black/60 disabled:opacity-40" />
          </>
        )}
      </Carousel>

      {images.length > 1 && (
        <div className="flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={current === index}
              className={`h-2.5 rounded-full transition-all ${
                current === index
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-foreground/20 hover:bg-foreground/35"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
