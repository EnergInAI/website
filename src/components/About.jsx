export default function About() {
  return (
    <div className="font-sans">

      {/* ══════════════════════════════════════
          HERO — Dark Navy
      ══════════════════════════════════════ */}
      <section className="bg-[#0d274d] py-10 md:py-20 px-6 text-center">
        <h1 className="text-[38px] md:text-[54px] font-extrabold text-white tracking-tight">
          The Team and the Dream.
        </h1>
      </section>

      {/* ══════════════════════════════════════
          ABOUT ENERGINAI — White bg with watermark
      ══════════════════════════════════════ */}
      <section className="relative bg-white py-24 px-6 overflow-hidden">
        {/* Watermark background text */}
        
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-[30px] md:text-[36px] font-bold text-[#0d1f4c] tracking-tight mb-3 ">
            About EnerginAI™
          </h2>
          <div className="w-12 h-[3px] bg-orange-400 mx-auto rounded-full mb-10" />
          <p className="text-[17px] text-gray-600 leading-relaxed">
            EnerginAI was founded on a simple but powerful belief: that every individual deserves to understand and
            control their energy consumption. Born from a desire to tackle the inefficiencies and lack of transparency
            in the Indian energy sector, our mission is to build a future where data-driven decisions lead to financial
            savings and a more sustainable planet for all.
          </p>
        </div>
      </section>  

      {/* ══════════════════════════════════════
          OUR STORY — Light Gray bg with watermark  
      ══════════════════════════════════════ */}
      <section className="relative bg-[#f0f0eb] py-24 px-6 overflow-hidden">
        {/* Watermark background text */}
       
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-[28px] md:text-[36px] font-extrabold text-[#0d1f4c] tracking-tight mb-3">
            Our Story
          </h2>
          <div className="w-12 h-[3px] bg-orange-400 mx-auto rounded-full mb-10" />
          <p className="text-[17px] text-gray-600 leading-relaxed">
            Driven by a shared passion for technology and sustainability, our founders bring together decades of
            experience in engineering, data science, and consumer technology. They witnessed firsthand the
            challenges faced by Indian households and businesses—from unpredictable bills to a lack of actionable
            information—and were inspired to build a solution that puts power back into the hands of the consumer.
            EnerginAI is the result of their commitment to innovation, transparency, and a greener future.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          OUR VISION — Light Blue bg
      ══════════════════════════════════════ */}
      <section className="relative bg-[#dce8f8] py-24 px-6 overflow-hidden">
        {/* Watermark background text */}
       
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-[28px] md:text-[36px] font-extrabold text-[#0d1f4c] tracking-tight mb-3">
            Our Vision
          </h2>
          <div className="w-12 h-[3px] bg-orange-400 mx-auto rounded-full mb-10" />
          <p className="text-[17px] text-gray-600 leading-relaxed">
            Our goal extends beyond monitoring. We are building a collaborative ecosystem that connects
            homeowners, solar providers, and energy experts — all powered by AI. We envision a future where
            every Indian home is energy-independent, bills are a thing of the past, and clean energy is
            accessible to all. EnerginAI is just the beginning of that journey.
          </p>
        </div>
      </section>

    </div>
  );
}