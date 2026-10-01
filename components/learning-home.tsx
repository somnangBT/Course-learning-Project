"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  Bookmark,
  Clock3,
  Code2,
  Palette,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const topics = ["វគ្គសិក្សាទាំងអស់", "រចនា", "អភិវឌ្ឍន៍កម្មវិធី", "អាជីវកម្ម", "ទីផ្សារ"];
const khmerDigits = "០១២៣៤៥៦៧៨៩";

function formatKhmerNumber(value: number) {
  return String(value).replace(/\d/g, (digit) => khmerDigits[Number(digit)]);
}

const courses = [
  {
    title: "រចនាដោយមានគំនិតច្បាស់លាស់ (UI/UX Design)",
    instructor: "មីណា អូកាហ្វ័រ",
    category: "រចនា",
    lessons: 18,
    duration: "៤ ម៉ោង ២០ នាទី",
    level: "កម្រិតដំបូង",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=85",
    imageAlt: "ស្នាដៃសិល្បៈចម្រុះពណ៌",
    color: "bg-rose-50 text-rose-600 border-rose-200",
    icon: Palette,
  },
  {
    title: "ការអភិវឌ្ឍផ្នែកខាងមុខប្រកបដោយការគិតគូរ (Frontend Dev)",
    instructor: "លីអូ ចេន",
    category: "អភិវឌ្ឍន៍កម្មវិធី",
    lessons: 24,
    duration: "៦ ម៉ោង ១០ នាទី",
    level: "កម្រិតមធ្យម",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",
    imageAlt: "បន្ទះសៀគ្វីចម្រុះពណ៌",
    color: "bg-emerald-50 text-emerald-600 border-emerald-200",
    icon: Code2,
  },
  {
    title: "បង្កើតម៉ាកឱ្យគេចងចាំ (Brand Marketing)",
    instructor: "ជូលស៍ រីវេរ៉ា",
    category: "ទីផ្សារ",
    lessons: 16,
    duration: "៣ ម៉ោង ៤៥ នាទី",
    level: "កម្រិតដំបូង",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    imageAlt: "កន្លែងធ្វើការរួមដ៏ភ្លឺស្រឡះ",
    color: "bg-indigo-50 text-indigo-600 border-indigo-200",
    icon: TrendingUp,
  },
  {
    title: "រៀបចំយុទ្ធសាស្ត្រផលិតផលដំបូងរបស់អ្នក (Product Strategy)",
    instructor: "អាម៉ារ៉ា ស៊ីង",
    category: "អាជីវកម្ម",
    lessons: 12,
    duration: "២ ម៉ោង ៥៥ នាទី",
    level: "កម្រិតដំបូង",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=85",
    imageAlt: "ក្រុមការងាររៀបចំគម្រោងជុំវិញតុ",
    color: "bg-amber-50 text-amber-600 border-amber-200",
    icon: BarChart3,
  },
];

export default function LearningHome() {
  const [activeTopic, setActiveTopic] = useState("វគ្គសិក្សាទាំងអស់");
  const [query, setQuery] = useState("");

  const filteredCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return courses.filter((course) => {
      const matchesTopic = activeTopic === "វគ្គសិក្សាទាំងអស់" || course.category === activeTopic;
      const matchesQuery =
        !normalizedQuery ||
        `${course.title} ${course.instructor} ${course.category}`
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesTopic && matchesQuery;
    });
  }, [activeTopic, query]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navbar Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-200/80 max-w-7xl mx-auto rounded-b-2xl shadow-sm">
        <a className="flex items-center gap-2 font-bold text-xl text-indigo-600" href="#top">
          <span className="flex items-center justify-center w-9 h-9 bg-indigo-600 text-white rounded-xl shadow-md font-extrabold text-lg">
            រ
          </span>
          <span className="tracking-tight text-slate-800">រៀនល្អ</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
          <a className="text-indigo-600 font-semibold hover:text-indigo-700 transition" href="#course-library">
            ស្វែងរកវគ្គសិក្សា
          </a>
          <a className="hover:text-slate-900 transition" href="#how-it-works">
            របៀបរៀន
          </a>
          <a className="hover:text-slate-900 transition" href="#community">
            សហគមន៍
          </a>
        </nav>
        <Link
          className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-xl shadow-sm hover:shadow-indigo-200 hover:shadow-md transition"
          href="/auth/login"
        >
          ចាប់ផ្ដើមរៀន <ArrowRight size={15} strokeWidth={2} />
        </Link>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-12 items-center" id="top">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            ចាប់ផ្ដើមរីកចម្រើននៅទីនេះ
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900">
            តោះ​ !<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              រៀនឥលូវនេះ
            </span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg">
            ការចង់ដឹងចង់ឃើញនាំទៅរកអ្វីល្អៗ។ ស្វែងរកជំនាញថ្មី តាមចំណង់ចំណូលចិត្ត ហើយរៀនតាមល្បឿនដែលសមនឹងអ្នក។
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              className="flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl shadow-md transition"
              href="#course-library"
            >
              ស្វែងរកវគ្គសិក្សា <ArrowRight size={17} />
            </a>
            <a
              className="flex items-center gap-1.5 px-4 py-3 text-slate-700 hover:text-indigo-600 font-medium transition"
              href="#how-it-works"
            >
              ស្វែងយល់បន្ថែម <ArrowDownRight size={16} />
            </a>
          </div>
          <div className="flex items-center gap-4 pt-4 border-t border-slate-200/80">
            <div className="flex -space-x-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500 text-white text-xs font-bold ring-2 ring-white">ស</span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white text-xs font-bold ring-2 ring-white">អ</span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-white text-xs font-bold ring-2 ring-white">ជ</span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 text-slate-700 text-xs font-bold ring-2 ring-white">+</span>
            </div>
            <p className="text-xs text-slate-600">
              <strong className="text-slate-900 font-semibold">១២,០០០+</strong> នាក់កំពុងរៀនជាមួយគ្នា
            </p>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 aspect-[4/3] group">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
            alt="សិស្សកំពុងរៀន"
            className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-white/40 shadow-lg flex items-center gap-3">
            <span className="p-2.5 bg-amber-100 text-amber-700 rounded-xl">
              <Sparkles size={18} />
            </span>
            <div>
              <p className="text-sm font-bold text-slate-900">កន្លែងល្អសម្រាប់ចាប់ផ្ដើម</p>
              <p className="text-xs text-slate-500">ជំហានតូចៗក៏មានន័យដែរ។</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course List Section */}
      <section className="max-w-7xl mx-auto px-6 py-16" id="course-library">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase">ជ្រើសរើសអ្វីដែលអ្នកចូលចិត្ត</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">តើអ្នកចង់អភិវឌ្ឍជំនាញអ្វី?</h2>
            <p className="text-slate-600 text-sm mt-1">វគ្គសិក្សាជាក់ស្ដែង ជួយបម្លែងការចង់ដឹងរបស់អ្នកទៅជាជំនាញថ្មី។</p>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {topics.map((topic) => (
              <button
                key={topic}
                type="button"
                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition ${
                  activeTopic === topic
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-100"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
                onClick={() => setActiveTopic(topic)}
              >
                {topic}
              </button>
            ))}
          </div>

          <div className="relative min-w-[260px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
            <input
              type="search"
              placeholder="តើអ្នកចង់ស្វែងយល់អំពីអ្វី?"
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </div>

        {/* Grid Display */}
        {filteredCourses.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCourses.map((course) => {
              const CourseIcon = course.icon;
              return (
                <article
                  key={course.title}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <img
                        src={course.image}
                        alt={course.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <span className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border ${course.color} backdrop-blur-md`}>
                        <CourseIcon size={13} /> {course.category}
                      </span>
                      <button className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white text-slate-700 rounded-full backdrop-blur-md transition shadow-sm">
                        <Bookmark size={15} />
                      </button>
                    </div>

                    <div className="p-5 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                        <span>{course.level}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock3 size={13} /> {course.duration}
                        </span>
                      </div>

                      <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-2 group-hover:text-indigo-600 transition cursor-pointer">
                        {course.title}
                      </h3>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <span>ដោយ <strong className="text-slate-800 font-medium">{course.instructor}</strong></span>
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-md font-semibold">
                      {formatKhmerNumber(course.lessons)} មេរៀន
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300 p-8">
            <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3">
              <Search size={22} />
            </div>
            <h3 className="text-base font-bold text-slate-800">រកមិនឃើញវគ្គសិក្សាទេ</h3>
            <p className="text-slate-500 text-sm mt-1 mb-4">សាកល្បងស្វែងរកពាក្យផ្សេង ឬជ្រើសរើសប្រធានបទផ្សេង។</p>
            <button
              type="button"
              className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold hover:bg-indigo-700 transition"
              onClick={() => {
                setQuery("");
                setActiveTopic("វគ្គសិក្សាទាំងអស់");
              }}
            >
              បង្ហាញវគ្គសិក្សាទាំងអស់
            </button>
          </div>
        )}
      </section>
    </main>
  );
}