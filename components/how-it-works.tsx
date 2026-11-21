export function HowItWorks() {
  return (
    <section className="mt-16 border-t border-ink/10 pt-14">
      <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
      <p className="mt-2 max-w-xl text-plum">
        Wind it up, load it, and let your dog work for dinner.
      </p>

      <ol className="mt-8 grid gap-5 sm:grid-cols-3">
        <Step
          number="1"
          title="Load the tower"
          body="Fill the chamber with dry kibble and set the openings for your dog's food size."
        />
        <Step
          number="2"
          title="Wind the key"
          body="A few turns of the key set the mechanism running for about three hours."
        />
        <Step
          number="3"
          title="Let it forage"
          body="Kibble drops out in small doses while your dog noses, nudges, and waits."
        />
      </ol>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">
            Safety &amp; limits
          </h3>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-plum">
            <SafetyItem
              title="Dry food only"
              body="Wet food, treats, and very small pieces can jam the mechanism."
            />
            <SafetyItem
              title="Medium and large dogs"
              body="The tower is sized for bigger noses and mouths."
            />
            <SafetyItem
              title="Supervise at first"
              body="Watch the first few sessions until your dog gets the hang of it."
            />
            <SafetyItem
              title="Not for destructive chewers"
              body="This is a puzzle, not a chew toy."
            />
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold tracking-tight">FAQs</h3>
          <div className="mt-4 divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white">
            <Faq
              question="How long does one wind last?"
              answer="About three hours, depending on the kibble size and how far the openings are set."
            />
            <Faq
              question="Can I use treats or wet food?"
              answer="No. Use dry kibble only — anything moist or very small can clog the mechanism."
            />
            <Faq
              question="Can my dog use it alone?"
              answer="After a few supervised sessions, yes. Just remember it is not a chew toy."
            />
            <Faq
              question="How do I clean it?"
              answer="Wipe the tower and base with a damp cloth. Do not submerge the wind-up mechanism."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <li className="rounded-2xl border border-ink/10 bg-white p-6">
      <span className="grid size-8 place-items-center rounded-full bg-deep-plum text-xs font-medium text-white">
        {number}
      </span>
      <h3 className="mt-4 font-medium">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-plum">{body}</p>
    </li>
  );
}

function SafetyItem({ title, body }: { title: string; body: string }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-plum/40" />
      <span>
        <span className="font-medium text-ink">{title}.</span> {body}
      </span>
    </li>
  );
}

function Faq({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group px-5 py-4">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium [&::-webkit-details-marker]:hidden">
        {question}
        <span className="text-lg text-plum transition group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-2 text-sm leading-relaxed text-plum">{answer}</p>
    </details>
  );
}
