import { useParams } from "react-router-dom";
import blogs from "../data/blogs.json";

export default function BlogDetails() {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-[#0d274d]">
          Blog Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-b from-[#edf4ff] via-white to-[#f4f8ff] min-h-screen py-16 px-5">

      <div className="max-w-5xl mx-auto bg-white rounded-[32px] shadow-2xl overflow-hidden border border-blue-100">

        {/* Banner Image */}
        <div className="relative">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[420px] object-contain bg-[#edf4ff] p-4"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

          <div className="absolute bottom-10 left-10">
            <div className="bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm inline-block mb-4 border border-white/30">
              EnergInAI Resource Center
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
              {blog.title}
            </h1>
          </div>
        </div>

        {/* Blog Content */}
        <div className="p-8 md:p-12">

          <div className="flex items-center gap-4 mb-8 text-sm text-gray-500 border-b border-gray-200 pb-5">
            <span>⚡ Smart Energy</span>
            <span>•</span>
            <span>AI Powered Solutions</span>
            <span>•</span>
            <span>EnergInAI</span>
          </div>

          <p className="text-[18px] leading-9 text-gray-700 whitespace-pre-line">
            {blog.content}
          </p>

        </div>
      </div>
    </section>
  );
}