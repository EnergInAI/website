import { FaWhatsapp } from "react-icons/fa";

const WhatsAppWidget = () => {
  return (
    <a
      href="https://wa.me/918889991290?text=Hi%20EnergInAI%2C%20I%20want%20to%20know%20more%20about%20your%20services."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-[9999]"
    >
      <div className="bg-[#25D366] p-3 rounded-full shadow-2xl hover:scale-110 transition duration-300">
        <FaWhatsapp size={38} color="white" />
      </div>
    </a>
  );
};

export default WhatsAppWidget;