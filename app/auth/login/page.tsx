"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-6 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-slate-200/60">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-600 text-white rounded-2xl shadow-lg shadow-indigo-200 font-extrabold text-3xl mb-5">
            រ
          </div>
          <h1 className="text-2xl font-bold text-slate-900">ចូលគណនី</h1>
          <p className="text-slate-500 text-sm mt-2">សូមស្វាគមន៍ត្រលប់មកកាន់ <strong>រៀនល្អ</strong></p>
        </div>

        {/* Login Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="email">
              អ៊ីមែល
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
            />
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-sm font-medium text-slate-700" htmlFor="password">
                ពាក្យសម្ងាត់
              </label>
              <a href="#" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition">
                ភ្លេចពាក្យសម្ងាត់?
              </a>
            </div>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
            />
          </div>

          <button
            type="button"
            className="w-full py-3 mt-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl shadow-md hover:shadow-indigo-200 transition"
          >
            ចូលរៀន
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col items-center gap-4">
          <p className="text-sm text-slate-600">
            មិនទាន់មានគណនីមែនទេ?{" "}
            <a href="#" className="text-indigo-600 font-bold hover:underline">
              ចុះឈ្មោះនៅទីនេះ
            </a>
          </p>
          
          <Link 
            href="/" 
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 transition"
          >
            <ArrowLeft size={16} /> ត្រលប់ទៅទំព័រដើមវិញ
          </Link>
        </div>
      </div>
    </main>
  );
}