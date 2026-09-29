export default function About() {
  return (
    <div className="font-sans">

      {/* HERO */}
      <section className="bg-[#0d274d] py-10 md:py-20 px-6 text-center">
        <h1 className="text-[38px] md:text-[54px] font-extrabold text-white tracking-tight">
          The Team and the Dream.
        </h1>
      </section>

      {/* ABOUT ENERGINAI */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-[30px] md:text-[36px] font-bold text-[#0d1f4c] tracking-tight mb-3">
            About EnerginAI
          </h2>
          <div className="w-12 h-[3px] bg-orange-400 mx-auto rounded-full mb-10" />

          <p className="text-[17px] text-gray-600 leading-relaxed text-justify">
            EnerginAI was founded on a simple yet powerful belief — every individual deserves to
            understand and control their energy consumption. Born from a desire to tackle inefficiencies
            and the lack of transparency in the Indian energy sector, our mission is to build a future
            where data-driven decisions lead to financial savings and a more sustainable planet for all.
          </p>

          {/* GOVERNMENT RECOGNITIONS */}
          <p className="text-[17px] text-gray-600 leading-relaxed text-justify mt-6">
            We are officially recognized by the Government of India, so you can trust who is
            building your energy future.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 text-left">

            {/* DPIIT */}
            <div className="bg-[#f0f0eb] rounded-xl border border-gray-200 border-t-[3px] border-t-orange-400 p-6">
              <div className="flex items-center gap-3 mb-4">
                <svg
                  className="w-7 h-7 text-orange-400 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <h3 className="text-[20px] font-bold text-[#0d1f4c] tracking-tight">
                  DPIIT Recognized
                </h3>
              </div>
              <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
                Recognized as a startup by the Department for Promotion of Industry and Internal
                Trade, Ministry of Commerce &amp; Industry, Government of India.
              </p>
              <dl className="text-[14px] space-y-1.5">
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Certificate No.</dt>
                  <dd className="font-semibold text-[#0d1f4c] text-right">DIPP273976</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Sector</dt>
                  <dd className="font-semibold text-[#0d1f4c] text-right">Green Technology / Clean Tech</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Issued</dt>
                  <dd className="font-semibold text-[#0d1f4c] text-right">24 July 2026</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Valid up to</dt>
                  <dd className="font-semibold text-[#0d1f4c] text-right">24 February 2036</dd>
                </div>
              </dl>
            </div>

            {/* MSME */}
            <div className="bg-[#f0f0eb] rounded-xl border border-gray-200 border-t-[3px] border-t-orange-400 p-6">
              <div className="flex items-center gap-3 mb-4">
                <svg
                  className="w-7 h-7 text-orange-400 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="9" r="5" />
                  <path d="M9 13.5L8 21l4-2 4 2-1-7.5" />
                  <path d="M10 9l1.5 1.5L14 8" />
                </svg>
                <h3 className="text-[20px] font-bold text-[#0d1f4c] tracking-tight">
                  MSME Certified
                </h3>
              </div>
              <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
                Registered under Udyam by the Ministry of Micro, Small and Medium Enterprises,
                Government of India.
              </p>
              <dl className="text-[14px] space-y-1.5">
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Udyam No.</dt>
                  <dd className="font-semibold text-[#0d1f4c] text-right">UDYAM-MP-10-0174217</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Enterprise type</dt>
                  <dd className="font-semibold text-[#0d1f4c] text-right">Micro Enterprise</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Major activity</dt>
                  <dd className="font-semibold text-[#0d1f4c] text-right">Manufacturing</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Registered</dt>
                  <dd className="font-semibold text-[#0d1f4c] text-right">21 July 2026</dd>
                </div>
              </dl>
            </div>

          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-[#f0f0eb] py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-[28px] md:text-[36px] font-extrabold text-[#0d1f4c] tracking-tight mb-3">
            Our Story
          </h2>
          <div className="w-12 h-[3px] bg-orange-400 mx-auto rounded-full mb-10" />

          <p className="text-[17px] text-gray-600 leading-relaxed text-justify">
            Driven by a shared passion for technology and sustainability, our founders bring together
            decades of experience in engineering, data science, and consumer technology. They witnessed
            firsthand the challenges faced by Indian households and businesses — from unpredictable bills
            to a lack of actionable insights — and were inspired to build a solution that puts control
            back into the hands of the consumer. EnerginAI is the result of their commitment to
            innovation, transparency, and a greener future.
          </p>
        </div>
      </section>

      {/* OUR VISION */}
      <section className="bg-[#dce8f8] py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-[28px] md:text-[36px] font-extrabold text-[#0d1f4c] tracking-tight mb-3">
            Our Vision
          </h2>
          <div className="w-12 h-[3px] bg-orange-400 mx-auto rounded-full mb-10" />

          <p className="text-[17px] text-gray-600 leading-relaxed text-justify">
            Our vision extends beyond monitoring. We are building a collaborative ecosystem that
            connects homeowners, solar providers, and energy experts — all powered by AI. We envision
            a future where every Indian home is energy-independent, electricity bills become a thing
            of the past, and clean energy is accessible to all. EnerginAI is just the beginning of
            that journey.
          </p>
        </div>
      </section>

    </div>
  );
}
