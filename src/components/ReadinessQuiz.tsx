import React, { useState } from "react";
import { QUIZ_QUESTIONS } from "../data/quizScenarios";
import { Award, RotateCcw, BookOpen, CheckCircle2, XCircle, AlertCircle, HelpCircle } from "lucide-react";

export const ReadinessQuiz: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSelect = (questionId: number, letter: string) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: letter,
    }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const score = Object.entries(selectedAnswers).reduce((acc, [qId, letter]) => {
    const q = QUIZ_QUESTIONS.find((item) => item.id === Number(qId));
    const isCorrect = q?.options.find((opt) => opt.letter === letter)?.isCorrect;
    return isCorrect ? acc + 1 : acc;
  }, 0);

  const totalQuestions = QUIZ_QUESTIONS.length;
  const percentage = Math.round((score / totalQuestions) * 100);
  const answeredCount = Object.keys(selectedAnswers).length;

  return (
    <section className="space-y-6 max-w-4xl mx-auto">
      {/* Quiz Masthead */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-b border-slate-100 pb-6 mb-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-md bg-command-50 border border-command-100 text-command-700 text-xs font-bold tracking-wide uppercase">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Simulasi & Evaluasi Mandiri Serdik</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
              Uji Kesiapan Aturan Kesatrian
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              10 studi kasus lapangan untuk menguji reflek kepatuhan Anda terhadap Peraturan Khusus Peserta Didik P3MD sebelum apel inspeksi dan jam komandan.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 px-5 py-3 rounded-xl text-center shrink-0 self-start sm:self-center">
            <div className="text-2xl sm:text-3xl font-black text-command-700 font-mono">
              10
            </div>
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Studi Kasus
            </div>
          </div>
        </div>

        {/* Evaluation Summary Card */}
        {isSubmitted && (
          <div
            className={`p-6 sm:p-8 rounded-2xl border text-center space-y-4 animate-fadeIn ${
              percentage >= 80
                ? "bg-emerald-50/70 border-emerald-200 text-emerald-950"
                : "bg-amber-50/70 border-amber-200 text-amber-950"
            }`}
          >
            <div
              className={`w-14 h-14 rounded-2xl mx-auto flex items-center justify-center ${
                percentage >= 80
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                  : "bg-amber-600 text-white shadow-md shadow-amber-600/20"
              }`}
            >
              <Award className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <div className="text-xs uppercase font-bold tracking-widest text-slate-500">
                Laporan Hasil Uji Mandiri
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                Skor Anda: {score} / {totalQuestions} ({percentage}%)
              </h3>
            </div>

            <p className="text-sm sm:text-base max-w-xl mx-auto leading-relaxed text-slate-700">
              {percentage >= 80
                ? "Hasil Sangat Baik! Anda menguasai regulasi tata tertib Kesatrian Soedirman dan siap menjalani tradisi kehormatan korps serdik."
                : "Perlu Pendalaman Serius: Teliti ulasan pasal resmi pada soal yang keliru untuk menghindari catatan pelanggaran disiplin pada apel inspeksi."}
            </p>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="inline-flex items-center space-x-2 px-6 py-2.5 bg-navy-950 hover:bg-navy-900 text-white rounded-xl text-xs sm:text-sm font-semibold transition shadow-xs cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Ulangi Uji Kesiapan</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Questions Stack */}
      <div className="space-y-6">
        {QUIZ_QUESTIONS.map((q, idx) => {
          const userChoice = selectedAnswers[q.id];

          return (
            <div
              key={q.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5 transition hover:border-slate-300"
            >
              {/* Question Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-full bg-navy-950 text-white text-xs font-bold font-mono flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-navy-950 uppercase tracking-wide">
                    Skenario Situasi #{idx + 1}
                  </span>
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
                  {q.pasalRef}
                </span>
              </div>

              {/* Scenario Narrative Box */}
              <div className="space-y-3">
                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border-l-4 border-command-600 border-y border-r border-slate-200 text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                  <span className="font-semibold text-command-900 block text-xs uppercase tracking-wider mb-1">
                    Kronologi Situasi:
                  </span>
                  &ldquo;{q.scenario}&rdquo;
                </div>
                <h3 className="text-base sm:text-lg font-bold text-navy-950 leading-snug">
                  {q.question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {q.options.map((opt) => {
                  const isThisSelected = userChoice === opt.letter;
                  let optionClass =
                    "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300";
                  let letterBadgeClass = "bg-slate-100 border-slate-300 text-slate-700";

                  if (isSubmitted) {
                    if (opt.isCorrect) {
                      optionClass =
                        "bg-emerald-50/80 border-emerald-500 text-emerald-950 font-medium ring-1 ring-emerald-400";
                      letterBadgeClass = "bg-emerald-600 text-white border-emerald-600";
                    } else if (isThisSelected && !opt.isCorrect) {
                      optionClass =
                        "bg-rose-50/80 border-rose-500 text-rose-950 ring-1 ring-rose-400";
                      letterBadgeClass = "bg-rose-600 text-white border-rose-600";
                    }
                  } else if (isThisSelected) {
                    optionClass =
                      "bg-command-50/80 border-command-600 text-command-950 font-semibold ring-2 ring-command-500/20";
                    letterBadgeClass = "bg-command-600 text-white border-command-600";
                  }

                  return (
                    <button
                      key={opt.letter}
                      onClick={() => handleSelect(q.id, opt.letter)}
                      disabled={isSubmitted}
                      className={`w-full p-3.5 sm:p-4 rounded-xl border text-left text-sm sm:text-base transition flex items-start space-x-3.5 leading-relaxed cursor-pointer ${optionClass}`}
                    >
                      <span
                        className={`font-mono font-bold text-xs shrink-0 w-7 h-7 rounded-lg border flex items-center justify-center transition mt-0.5 ${letterBadgeClass}`}
                      >
                        {opt.letter}
                      </span>
                      <span className="leading-relaxed flex-1 pt-0.5">{opt.text}</span>
                      {isSubmitted && opt.isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      )}
                      {isSubmitted && isThisSelected && !opt.isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Official Review Box */}
              {isSubmitted && (
                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 space-y-2 animate-fadeIn">
                  <div className="flex items-center space-x-2 font-bold text-command-700 text-xs uppercase tracking-wider">
                    <BookOpen className="w-4 h-4" />
                    <span>Ulasan Ketentuan Resmi ({q.pasalRef})</span>
                  </div>
                  <p className="leading-relaxed text-slate-700 font-normal">{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Submit Action */}
      {!isSubmitted && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 text-center space-y-3 shadow-xs">
          <div className="flex items-center justify-center space-x-2 text-sm text-slate-600">
            <AlertCircle className="w-4 h-4 text-command-600" />
            <span>
              Telah dijawab <strong className="font-bold text-navy-950">{answeredCount}</strong> dari{" "}
              <strong className="font-bold text-navy-950">{totalQuestions}</strong> pertanyaan.
            </span>
          </div>
          <button
            onClick={() => {
              setIsSubmitted(true);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            disabled={answeredCount === 0}
            className="px-8 py-3.5 bg-command-600 hover:bg-command-700 disabled:opacity-50 text-white text-sm font-bold rounded-xl transition shadow-md shadow-command-600/20 tracking-wide cursor-pointer"
          >
            Kirim Jawaban &amp; Periksa Hasil Evaluasi
          </button>
        </div>
      )}
    </section>
  );
};
