import blogs from "../data/blogs.json";
import BlogCard from "./BlogCard";

export default function Blogs() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#edf4ff] via-white to-[#f4f8ff] py-16 px-6">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">

        <div className="inline-block px-5 py-2 rounded-full bg-blue-100 text-[#1e3c72] font-semibold text-sm mb-5 shadow-sm">
          EnergInAI Insights
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-[#0d274d] leading-tight mb-6">
          Smart Energy
          <span className="block text-[#2a5298] mt-2">
            Blogs & Resources
          </span>
        </h1>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Explore the future of AI-powered energy management,
          sustainability, smart homes, solar innovation,
          and intelligent energy optimization with EnergInAI.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

    </section>
  );
}