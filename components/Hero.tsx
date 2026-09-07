"use client";

interface HeroProps {
  image: string;
  video?: string;
  headline: string;
  subheadline: string;
  description?: string;
  height?: string;
}

export default function Hero({ image, video, headline, subheadline, description, height = "h-[85vh]" }: HeroProps) {
  return (
    <section className={`relative ${height} w-full overflow-hidden`}>
      <div
        className="absolute inset-0 overflow-hidden bg-black"
      >
        {video ? (
          <video
            className="h-full w-full object-cover"
            src={video}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          />
        ) : (
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-[190px] text-center sm:pt-[210px] lg:pt-[250px]">
        <h1 className="max-w-6xl whitespace-pre-line font-script text-6xl leading-[0.9] text-white sm:text-7xl md:text-8xl">
          {headline}
        </h1>
        <div className="mb-5 flex w-full max-w-7xl items-center gap-4 md:gap-6">
          <div className="h-px flex-1 bg-white/70" />
          <p className="text-sm md:text-base tracking-[0.2em] text-white/90 font-light whitespace-nowrap">
            {subheadline}
          </p>
          <div className="h-px flex-1 bg-white/70" />
        </div>
        {description && (
          <p className="max-w-3xl text-sm md:text-base leading-relaxed text-white/80 font-light">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
