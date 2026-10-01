"use client";

import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  Bookmark,
  Check,
  Clock3,
  Code2,
  Palette,
  Play,
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
    title: "រចនាដោយមានគំនិតច្បាស់លាស់",
    instructor: "មីណា អូកាហ្វ័រ",
    category: "រចនា",
    lessons: 18,
    duration: "៤ ម៉ោង ២០ នាទី",
    level: "កម្រិតដំបូង",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=85",
    imageAlt: "ស្នាដៃសិល្បៈចម្រុះពណ៌",
    color: "coral",
    icon: Palette,
  },
  {
    title: "ការអភិវឌ្ឍផ្នែកខាងមុខប្រកបដោយការគិតគូរ",
    instructor: "លីអូ ចេន",
    category: "អភិវឌ្ឍន៍កម្មវិធី",
    lessons: 24,
    duration: "៦ ម៉ោង ១០ នាទី",
    level: "កម្រិតមធ្យម",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",
    imageAlt: "បន្ទះសៀគ្វីចម្រុះពណ៌",
    color: "mint",
    icon: Code2,
  },
  {
    title: "បង្កើតម៉ាកឱ្យគេចងចាំ",
    instructor: "ជូលស៍ រីវេរ៉ា",
    category: "ទីផ្សារ",
    lessons: 16,
    duration: "៣ ម៉ោង ៤៥ នាទី",
    level: "កម្រិតដំបូង",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    imageAlt: "កន្លែងធ្វើការរួមដ៏ភ្លឺស្រឡះ",
    color: "lavender",
    icon: TrendingUp,
  },
  {
    title: "រៀបចំយុទ្ធសាស្ត្រផលិតផលដំបូងរបស់អ្នក",
    instructor: "អាម៉ារ៉ា ស៊ីង",
    category: "អាជីវកម្ម",
    lessons: 12,
    duration: "២ ម៉ោង ៥៥ នាទី",
    level: "កម្រិតដំបូង",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=85",
    imageAlt: "ក្រុមការងាររៀបចំគម្រោងជុំវិញតុ",
    color: "yellow",
    icon: BarChart3,
  },
];

export default function LearningHome() {
  const [activeTopic, setActiveTopic] = useState("All courses");
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
    <main className="learning-page">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ទំព័រដើម រៀនល្អ">
          <span className="brand-mark" aria-hidden="true">រ</span>
          <span>រៀនល្អ</span>
        </a>
        <nav className="main-nav" aria-label="ម៉ឺនុយមេ">
          <a className="nav-link nav-link-active" href="#course-library">ស្វែងរកវគ្គសិក្សា</a>
          <a className="nav-link" href="#how-it-works">របៀបរៀន</a>
          <a className="nav-link" href="#community">សហគមន៍</a>
        </nav>
        <a className="header-cta" href="#course-library">
          ចាប់ផ្ដើមរៀន <ArrowRight size={15} strokeWidth={1.8} />
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" />ចាប់ផ្ដើមរីកចម្រើននៅទីនេះ</div>
          <h1 id="hero-title">បើកឱកាសសម្រាប់<br /><span>អ្វីដែលនៅបន្ទាប់</span></h1>
          <p className="hero-description">
            ការចង់ដឹងចង់ឃើញនាំទៅរកអ្វីល្អៗ។ ស្វែងរកជំនាញថ្មី តាមចំណង់ចំណូលចិត្ត
            ហើយរៀនតាមល្បឿនដែលសមនឹងអ្នក។
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#course-library">
              ស្វែងរកវគ្គសិក្សា <ArrowRight size={17} />
            </a>
            <a className="text-link" href="#how-it-works">ស្វែងយល់បន្ថែម <ArrowDownRight size={16} /></a>
          </div>
          <div className="learner-note">
            <div className="avatar-stack" aria-hidden="true">
              <span className="avatar avatar-one">ស</span>
              <span className="avatar avatar-two">អ</span>
              <span className="avatar avatar-three">ជ</span>
              <span className="avatar avatar-more">+</span>
            </div>
            <p><strong>១២,០០០+</strong> នាក់កំពុងរៀនជាមួយគ្នា</p>
          </div>
        </div>
        <div className="hero-art" role="img" aria-label="សិស្សកំពុងគូររូបក្នុងបន្ទប់សិល្បៈដែលមានពន្លឺថ្ងៃ">
          <div className="hero-image" />
          <div className="hero-image-wash" />
          <div className="hero-note">
            <span className="note-icon"><Sparkles size={16} /></span>
            <span><strong>កន្លែងល្អសម្រាប់ចាប់ផ្ដើម</strong><small>ជំហានតូចៗក៏មានន័យដែរ។</small></span>
          </div>
          <div className="hero-stamp" aria-hidden="true">
            <span>រៀនបន្តិច</span><span className="stamp-star">✳</span><span>រីកចម្រើនច្រើន</span>
          </div>
        </div>
      </section>

      <section className="trust-strip" id="how-it-works" aria-label="អត្ថប្រយោជន៍នៃការរៀន">
        <p>រៀនតាមរបៀបដែលសមនឹងអ្នក</p>
        <div><Check size={15} /> បង្រៀនដោយអ្នកជំនាញ</div>
        <div><Check size={15} /> រៀនតាមពេលវេលាផ្ទាល់ខ្លួន</div>
        <div><Check size={15} /> សម្រាប់អ្នកចូលចិត្តស្វែងយល់</div>
      </section>

      <section className="course-section" id="course-library" aria-labelledby="courses-title">
        <div className="section-heading">
          <div>
            <span className="section-kicker">ជ្រើសរើសអ្វីដែលអ្នកចូលចិត្ត</span>
            <h2 id="courses-title">តើអ្នកចង់អភិវឌ្ឍជំនាញអ្វី?</h2>
            <p>វគ្គសិក្សាជាក់ស្ដែង ជួយបម្លែងការចង់ដឹងរបស់អ្នកទៅជាជំនាញថ្មី។</p>
          </div>
          <a className="browse-link" href="#course-library">មើលវគ្គសិក្សាទាំងអស់ <ArrowRight size={16} /></a>
        </div>

        <div className="course-tools">
          <div className="topic-list" aria-label="ច្រោះតាមប្រធានបទ">
            {topics.map((topic) => (
              <button
                className={`topic-button${activeTopic === topic ? " topic-button-active" : ""}`}
                key={topic}
                type="button"
                aria-pressed={activeTopic === topic}
                onClick={() => setActiveTopic(topic)}
              >
                {topic}
              </button>
            ))}
          </div>
          <label className="search-box">
            <Search size={17} aria-hidden="true" />
            <span className="sr-only">ស្វែងរកវគ្គសិក្សា</span>
            <input
              type="search"
              placeholder="តើអ្នកចង់ស្វែងយល់អំពីអ្វី?"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <kbd>/</kbd>
          </label>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="course-grid" aria-live="polite">
            {filteredCourses.map((course) => {
              const CourseIcon = course.icon;

              return (
                <article className="course-card" key={course.title}>
                  <div
                    className={`course-image course-image-${course.color}`}
                    role="img"
                    aria-label={course.imageAlt}
                    style={{ backgroundImage: `url("${course.image}")` }}
                  >
                    <span className="course-category"><CourseIcon size={13} /> {course.category}</span>
                    <span className="bookmark-icon" aria-hidden="true"><Bookmark size={16} /></span>
                  </div>
                  <div className="course-card-copy">
                    <div className="course-meta">
                      <span>{course.level}</span><span className="meta-separator" />
                      <span><Clock3 size={13} /> {course.duration}</span>
                    </div>
                    <h3>{course.title}</h3>
                    <div className="course-card-footer">
                      <span>ដោយ {course.instructor}</span>
                      <span className="lesson-count">{formatKhmerNumber(course.lessons)} មេរៀន</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="empty-state" aria-live="polite">
            <Search size={21} />
            <h3>រកមិនឃើញវគ្គសិក្សាទេ</h3>
            <p>សាកល្បងស្វែងរកពាក្យផ្សេង ឬជ្រើសរើសប្រធានបទផ្សេង។</p>
            <button
              className="reset-button"
              type="button"
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

      <section className="featured-section" id="community" aria-labelledby="featured-title">
        <div className="featured-image" role="img" aria-label="សិស្សកំពុងរៀននៅតុធ្វើការដែលមានពន្លឺថ្ងៃ" />
        <div className="featured-copy">
          <span className="section-kicker">ចាប់ផ្ដើមពីទីនេះ</span>
          <h2 id="featured-title">ការចាប់ផ្ដើមថ្មី មិនចាំបាច់ធំដុំទេ។</h2>
          <p>
            ជ្រើសរើសអ្វីមួយដែលអ្នកចង់ស្វែងយល់។ យើងមានគ្រូបង្រៀន ឧបករណ៍
            និងកម្លាំងចិត្តបន្តិចបន្តួចជូនអ្នក។
          </p>
          <a className="button button-dark" href="#course-library">ស្វែងរកវគ្គសិក្សា <Play size={15} fill="currentColor" /></a>
        </div>
        <span className="featured-decoration" aria-hidden="true">រ</span>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true">រ</span><span>រៀនល្អ</span>
        </a>
        <p>រៀនបន្តិចបន្តួច នាំទៅរកការរីកចម្រើនដ៏ធំធេង។</p>
        <span className="footer-copyright">© ២០២៦ រៀនល្អ</span>
      </footer>
    </main>
  );
}