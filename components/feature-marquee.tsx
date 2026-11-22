import Image from "next/image";

const phrase = "SLOWBOWL · CLOCKWORK FORAGE TOWER · ~3 HOURS · ";
const phraseRepeats = 6;

function StencilText({ text }: { text: string }) {
  return (
    <>
      {Array.from(text).map((character, index) => (
        <span key={`${character}-${index}`} className="stencil-letter">
          {character === " " ? "\u00A0" : character}
        </span>
      ))}
    </>
  );
}

function MarqueeGroup() {
  return (
    <div className="flex shrink-0">
      {Array.from({ length: phraseRepeats }).map((_, repeat) => (
        <span key={repeat} className="whitespace-nowrap">
          <StencilText text={phrase} />
        </span>
      ))}
    </div>
  );
}

export function FeatureMarquee() {
  return (
    <section className="relative mx-4 h-[650px] overflow-hidden rounded-[36px] bg-[#F3E9F4]">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[120px] overflow-hidden"
      >
        <div className="marquee-right flex w-max text-[64px] font-bold uppercase leading-none text-[#CDBFD3] sm:text-[100px]">
          <MarqueeGroup />
          <MarqueeGroup />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-[120px] overflow-hidden"
      >
        <div className="marquee-left flex w-max text-[64px] font-bold uppercase leading-none text-[#CDBFD3] sm:text-[100px]">
          <MarqueeGroup />
          <MarqueeGroup />
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 z-10 w-[420px] max-w-[calc(100%-32px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl bg-[linear-gradient(to_bottom,#BA8FC7_0%,#E7D7EC_100%)] p-6 shadow-[0_24px_60px_-24px_rgba(45,24,51,0.5)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 overflow-hidden"
        >
          <div className="absolute left-1/2 top-5 h-[140%] w-[130%] -translate-x-1/2 rounded-t-full bg-[linear-gradient(to_bottom,rgba(255,255,255,0.6),rgba(255,255,255,0.12)_55%,rgba(255,255,255,0))]" />
          <div className="absolute left-1/2 top-5 h-[140%] w-[130%] -translate-x-1/2 rounded-t-full border-t border-white/70" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <span className="inline-flex rounded-full bg-deep-plum px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#F3E6F6]">
            Level up mealtime
          </span>
          <h2 className="mt-3 text-2xl font-semibold uppercase tracking-tight text-ink">
            How the tower works
          </h2>
          <div className="animate-float relative mt-6 aspect-square w-[240px] max-w-full overflow-hidden rounded-2xl bg-white/35 shadow-[0_18px_40px_-18px_rgba(45,24,51,0.55)] ring-1 ring-white/50">
            <Image
              src="/tower-product.png"
              alt="Clockwork Forage Tower"
              fill
              sizes="240px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
