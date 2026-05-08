import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:-translate-y-2">

      {/* Image */}
      <div className="overflow-hidden relative">

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-60 object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute top-4 left-4 bg-[#1e3c72] text-white text-xs px-4 py-2 rounded-full font-semibold shadow-lg">
          EnergInAI Blog
        </div>
      </div>

      {/* Content */}
      <div className="p-7">

        <h2 className="text-2xl font-bold text-[#0d274d] mb-4 leading-snug group-hover:text-[#2a5298] transition-colors duration-300">
          {blog.title}
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
          {blog.excerpt}
        </p>

        <Link
          to={`/blogs/${blog.slug}`}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1e3c72] to-[#2a5298] text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-md"
        >
          Read Full Article

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}