"use client";

import { FormEvent, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const consultationRecipient = "reneehuang889@gmail.com";

const formText = {
  en: {
    title: "Schedule a Consultation",
    fullName: "Full Name *",
    email: "Email Address *",
    phone: "Phone Number",
    school: "Student's Current School",
    grade: "Student's Current Grade",
    gradePlaceholder: "Select grade",
    interest: "Area of Interest",
    interestPlaceholder: "Select service",
    message: "Message",
    messagePlaceholder: "Tell us about your goals and how we can help...",
    submit: "Send Message",
    subject: "New Consultation Request",
    mailNote:
      "Your email app will open with the completed message addressed to our team.",
    grades: [
      "Middle School",
      "Grade 9",
      "Grade 10",
      "Grade 11",
      "Grade 12",
      "Undergraduate",
      "Graduate",
      "Other",
    ],
    interests: [
      "Private High School Admissions",
      "Undergraduate Admissions",
      "Graduate School Admissions",
      "Summer School Applications",
      "Campus Visit Program",
      "Academic Support",
      "International Student Support",
    ],
  },
  zh: {
    title: "预约咨询",
    fullName: "姓名 *",
    email: "邮箱地址 *",
    phone: "电话号码",
    school: "学生目前就读学校",
    grade: "学生当前年级",
    gradePlaceholder: "请选择年级",
    interest: "感兴趣的服务",
    interestPlaceholder: "请选择服务",
    message: "留言",
    messagePlaceholder: "请简单介绍学生目标，以及我们可以如何帮助...",
    submit: "发送信息",
    subject: "新的咨询预约",
    mailNote: "点击发送后，将打开你的邮件应用，并自动填入收件人与表单内容。",
    grades: [
      "初中",
      "9 年级",
      "10 年级",
      "11 年级",
      "12 年级",
      "本科",
      "研究生",
      "其他",
    ],
    interests: [
      "美国私立高中申请",
      "本科申请",
      "研究生申请",
      "暑期项目申请",
      "校园访问项目",
      "学术支持",
      "国际学生支持",
    ],
  },
};

type ConsultationForm = {
  fullName: string;
  email: string;
  phone: string;
  school: string;
  grade: string;
  interest: string;
  message: string;
};

export default function ContactPage() {
  const { lang, t } = useLanguage();
  const copy = formText[lang];
  const [form, setForm] = useState<ConsultationForm>({
    fullName: "",
    email: "",
    phone: "",
    school: "",
    grade: "",
    interest: "",
    message: "",
  });

  const updateForm = (field: keyof ConsultationForm, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = [
      `${copy.fullName.replace(" *", "")}: ${form.fullName}`,
      `${copy.email.replace(" *", "")}: ${form.email}`,
      `${copy.phone}: ${form.phone || "N/A"}`,
      `${copy.school}: ${form.school || "N/A"}`,
      `${copy.grade}: ${form.grade || "N/A"}`,
      `${copy.interest}: ${form.interest || "N/A"}`,
      "",
      `${copy.message}:`,
      form.message || "N/A",
    ].join("\n");

    const mailtoUrl = `mailto:${consultationRecipient}?subject=${encodeURIComponent(
      copy.subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <main className="page-shell">
      <section className="page-section">
        <div className="surface-card reveal-up rounded-2xl p-8 md:p-12">
          <h1 className="page-title">{t.contact.title}</h1>

          <h2 className="mt-8 text-3xl font-bold text-gray-900">
            {t.contact.subtitle}
          </h2>

          <div className="mt-8 space-y-6">
            <p className="text-xl leading-relaxed text-gray-700">
              {t.contact.intro1}
            </p>
            <p className="text-xl leading-relaxed text-gray-700">
              {t.contact.intro2}
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/85">
              <h3 className="text-2xl font-bold text-gray-900">
                {t.contact.usTitle}
              </h3>
              <ul className="mt-5 space-y-3 text-lg leading-relaxed text-gray-700">
                {t.contact.usLocations.map((location, index) => (
                  <li key={index}>{location}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/85">
              <h3 className="text-2xl font-bold text-gray-900">
                {t.contact.chinaTitle}
              </h3>
              <ul className="mt-5 space-y-3 text-lg leading-relaxed text-gray-700">
                {t.contact.chinaLocations.map((location, index) => (
                  <li key={index}>{location}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-gray-900">
              {t.contact.contactTitle}
            </h3>

            <div className="mt-5 space-y-4 text-lg text-gray-700">
              <p>
                <span className="font-semibold">{t.contact.emailLabel}：</span>
                {t.contact.email}
              </p>
              <p>
                <span className="font-semibold">{t.contact.phoneLabel}：</span>
                {t.contact.phone}
              </p>
            </div>
          </div>

          <p className="mt-10 text-xl leading-relaxed text-gray-700">
            {t.contact.closing}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="consultation-form surface-card reveal-up stagger-1 mt-12 rounded-2xl p-8 md:p-12"
        >
          <h2 className="consultation-title">{copy.title}</h2>

          <div className="mt-10 grid gap-7">
            <label className="consultation-field">
              <span>{copy.fullName}</span>
              <input
                required
                type="text"
                value={form.fullName}
                onChange={(event) => updateForm("fullName", event.target.value)}
              />
            </label>

            <label className="consultation-field">
              <span>{copy.email}</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) => updateForm("email", event.target.value)}
              />
            </label>

            <label className="consultation-field">
              <span>{copy.phone}</span>
              <input
                type="tel"
                value={form.phone}
                onChange={(event) => updateForm("phone", event.target.value)}
              />
            </label>

            <label className="consultation-field">
              <span>{copy.school}</span>
              <input
                type="text"
                value={form.school}
                onChange={(event) => updateForm("school", event.target.value)}
              />
            </label>

            <label className="consultation-field">
              <span>{copy.grade}</span>
              <select
                value={form.grade}
                onChange={(event) => updateForm("grade", event.target.value)}
              >
                <option value="">{copy.gradePlaceholder}</option>
                {copy.grades.map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
            </label>

            <label className="consultation-field">
              <span>{copy.interest}</span>
              <select
                value={form.interest}
                onChange={(event) => updateForm("interest", event.target.value)}
              >
                <option value="">{copy.interestPlaceholder}</option>
                {copy.interests.map((interest) => (
                  <option key={interest} value={interest}>
                    {interest}
                  </option>
                ))}
              </select>
            </label>

            <label className="consultation-field">
              <span>{copy.message}</span>
              <textarea
                value={form.message}
                placeholder={copy.messagePlaceholder}
                onChange={(event) => updateForm("message", event.target.value)}
              />
            </label>
          </div>

          <button type="submit" className="consultation-submit">
            {copy.submit}
          </button>

          <p className="mt-5 text-center text-sm leading-relaxed text-gray-600">
            {copy.mailNote}
          </p>
        </form>
      </section>
    </main>
  );
}
