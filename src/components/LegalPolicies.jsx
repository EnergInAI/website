export default function LegalPoliciesContent() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">

      <h1 className="text-3xl font-bold text-center text-[#0d274d] mb-8">
        Legal & Policies
      </h1>

      {/* Privacy Policy */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-[#0d274d] mb-3">
          Privacy Policy
        </h2>

        <p className="text-gray-700 leading-relaxed">
          At <span className="font-semibold">EnergInAI</span>, we are committed to protecting your privacy and ensuring transparency in how your data is handled.
          <br /><br />

          Our platform uses analytics tools solely to understand general website traffic and usage patterns. We <b>do not collect personally identifiable information</b>, use tracking cookies, or attempt to identify individual users.
          <br /><br />

          We strictly follow a <b>no data selling or sharing policy</b>. All collected insights are anonymized and used only to improve platform performance, reliability, and security.
          <br /><br />

          For any privacy-related concerns or queries, you can contact us at{" "}
          <a
            href="mailto:info@energinai.com"
            className="text-orange-500 underline"
          >
            info@energinai.com
          </a>.
        </p>
      </div>

      {/* Terms & Conditions */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-[#0d274d] mb-3">
          Terms & Conditions
        </h2>

        <p className="text-gray-700 leading-relaxed">
          By accessing or using this website, you agree to comply with the following terms:
          <br /><br />

          • All content provided on this platform is for informational purposes only.  
          <br />
          • All materials, designs, branding, and text are the intellectual property of EnergInAI unless explicitly stated otherwise.  
          <br />
          • Unauthorized reproduction, distribution, or reuse of content is strictly prohibited without prior written permission.  
          <br />
          • We are not responsible for third-party websites linked from our platform.  
          <br />
          • These terms may be updated periodically. Continued use of the website implies acceptance of any changes.
        </p>
      </div>

      {/* Compliance */}
      <div>
        <h2 className="text-xl font-semibold text-[#0d274d] mb-3">
          Compliance with Indian Laws
        </h2>

        <p className="text-gray-700 leading-relaxed">
          EnergInAI operates in full compliance with applicable Indian laws and regulations, including but not limited to:
          <br /><br />

          • Information Technology Act, 2000  
          <br />
          • IT (Reasonable Security Practices and Procedures & Sensitive Personal Data) Rules, 2011  
          <br />
          • Digital Personal Data Protection Act, 2023  
          <br /><br />

          Our data protection, privacy practices, and security measures are regularly reviewed and updated to ensure compliance with evolving legal standards.
          <br /><br />

          For any legal or compliance-related inquiries, feel free to contact us at{" "}
          <a
            href="mailto:info@energinai.com"
            className="text-orange-500 underline"
          >
            info@energinai.com
          </a>.
        </p>
      </div>

    </div>
  );
}