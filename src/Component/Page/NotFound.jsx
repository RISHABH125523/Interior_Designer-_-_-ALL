
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Home, Search } from "lucide-react";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#f8f6f1] flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full text-center">

        {/* 404 NUMBER */}
        <div className="relative">
          <h1 className="text-[150px] sm:text-[220px] font-serif font-bold leading-none text-[#e7dfd0]">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#f8f6f1] px-5 py-3">
              <span className="text-sm tracking-[5px] font-semibold text-[#ad9165]">
                PAGE NOT FOUND
              </span>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <h2 className="mt-4 text-3xl sm:text-5xl font-serif font-bold text-[#29271f]">
          Oops! Something Went Wrong
        </h2>

        <p className="mt-6 max-w-xl mx-auto text-gray-600 leading-8">
          The page you are looking for may have been moved, deleted, or
          doesn't exist. Let's help you find your way back.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-[#29271f] text-white px-7 py-4 font-semibold transition hover:bg-[#ad9165]"
          >
            <Home size={19} />
            Back to Home
            <ArrowRight size={18} />
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-3 border border-[#c9bda9] text-[#29271f] px-7 py-4 font-semibold transition hover:bg-[#e7dfd0]"
          >
            <ArrowLeft size={19} />
            Go Back
          </button>
        </div>

        {/* BRAND */}
        <div className="mt-16 border-t border-[#ded8cb] pt-8">
          <Link to="/" className="inline-flex flex-col">
            <span className="text-2xl font-serif tracking-[6px] text-[#29271f]">
              RISHI<span className="text-[#ad9165]">.</span>
            </span>

            <span className="mt-1 text-[9px] tracking-[4px] text-[#8c806c]">
              INTERIOR & ALL
            </span>
          </Link>

          <p className="mt-4 text-sm text-gray-500">
            Designing Spaces. Creating Experiences.
          </p>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
