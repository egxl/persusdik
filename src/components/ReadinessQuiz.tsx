import React, { useState } from "react";
import { QUIZ_QUESTIONS } from "../data/quizScenarios";
import { Award, RotateCcw, BookOpen, CheckCircle2, XCircle, AlertCircle } from "lucide-react";

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
      <div className="command-panel-brass p-6 sm:p-8 bg-white shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-b border-canvas-300 pb-6 mb-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center space-x-2 text-[10px] font-mono font-bold uppercase tracking-widest text-brass-700">
              <span className="w-1.5 h-1.5 bg-brass-500"></span>
              <span>SIMULASI REFLEKS DOKTRIN &amp; EVALUASI MANDIRI</span>
            </div>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
              Uji Kesiapan Aturan Kesatrian
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed font-sans">
              10 skenario studi kasus lapangan untuk menguji pemahaman dan reflek kepatuhan Anda terhadap Perkhusserdik P3MD Batch 1 Soedirman sebelum apel inspeksi harian.
            </p>
          </div>

          <div className="bg-navy-950 border border-navy-800 px-5 py-3 rounded-xs text-center shrink-0 self-start sm:self-center">
            <div className="text-2xl sm:text-3xl font-mono font-black text-brass-400">
              10
            </div>
            <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
              STUDI KASUS
            </div>
          </div>
        </div>

        {/* Evaluation Report Card */}
        {isSubmitted && (
          <div
            className={`p-6 sm:p-8 rounded-xs border text-center space-y-4 ${
              percentage >= 80
                ? "bg-emerald-50/70 border-emerald-300 text-emerald-950"
                : "bg-amber-50/70 border-amber-300 text-amber-950"
            }`}
          >
            <div
              className={`w-12 h-12 rounded-xs mx-auto flex items-center justify-center border ${
                percentage >= 80
                  ? "bg-emerald-700 text-white border-emerald-800"
                  : "bg-amber-600 text-white border-amber-700"
              }`}
            >
              <Award className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <div className="text-[10px] font-mono uppercase font-bold tracking-widest text-slate-600">
                LAPORAN RESMI HASIL UJI REFLEKS ATURAN
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold tracking-tight text-navy-950">
                Skor Anda: {score} / {totalQuestions} ({percentage}%)
              </h3>
            </div>

            <p className="text-xs sm:text-sm max-w-xl mx-auto leading-relaxed text-slate-700 font-sans">
              {percentage >= 80
                ? "Hasil Sangat Baik: Pemahaman Anda terhadap regulasi Perkhusserdik telah matang dan mencerminkan kesiapan kepemimpinan berwibawa."
                : "Perlu Pendalaman: Periksa kembali ulasan pasal resmi pada soal yang belum tepat agar tidak terjadi pelanggaran saat dinas harian."}
            </p>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="inline-flex items-center space-x-2 px-6 py-2.5 bg-navy-950 hover:bg-navy-900 text-white rounded-xs text-xs font-mono font-bold uppercase tracking-wider transition cursor-pointer"
              >
                <RotateCcw className="w-4 h-4 text-brass-400" />
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
              className="command-panel p-6 sm:p-8 bg-white shadow-xs space-y-5 transition-colors hover:border-navy-900"
            >
              {/* Question Header */}
              <div className="flex items-center justify-between border-b border-canvas-200 pb-3">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-xs font-bold text-brass-700">
                    [{String(idx + 1).padStart(2, "0")}]
                  </span>
                  <span className="font-mono text-xs font-bold text-navy-950 uppercase tracking-wide">
                    SKENARIO KASUS #{idx + 1}
                  </span>
                </div>
                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-xs bg-canvas-100 text-navy-950 border border-canvas-300">
                  {q.pasalRef}
                </span>
              </div>

              {/* Scenario Narrative Box */}
              <div className="space-y-3">
                <div className="p-4 sm:p-5 rounded-xs bg-canvas-50 border-l-2 border-l-brass-500 border border-canvas-200 text-sm text-slate-800 leading-relaxed">
                  <span className="font-mono font-bold text-navy-950 block text-[10px] uppercase tracking-wider mb-1">
                    Kronologi Lapangan:
                  </span>
                  &ldquo;{q.scenario}&rdquo;
                </div>

                <h3 className="text-sm sm:text-base font-bold text-navy-950 leading-snug font-sans">
                  {q.question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {q.options.map((opt) => {
                  const isThisSelected = userChoice === opt.letter;
                  let optionClass =
                    "bg-white border-canvas-300 text-slate-700 hover:bg-canvas-50 hover:border-canvas-400";
                  let letterBadgeClass = "bg-canvas-100 border-canvas-300 text-slate-700";

                  if (isSubmitted) {
                    if (opt.isCorrect) {
                      optionClass =
                        "bg-emerald-50/80 border-emerald-600 text-emerald-950 font-medium";
                      letterBadgeClass = "bg-emerald-700 text-white border-emerald-700";
                    } else if (isThisSelected && !opt.isCorrect) {
                      optionClass =
                        "bg-crimson-50/80 border-crimson-600 text-crimson-950";
                      letterBadgeClass = "bg-crimson-700 text-white border-crimson-700";
                    }
                  } else if (isThisSelected) {
                    optionClass =
                      "bg-navy-950 border-navy-950 text-white font-semibold";
                    letterBadgeClass = "bg-brass-500 text-navy-950 border-brass-400";
                  }

                  return (
                    <button
                      key={opt.letter}
                      onClick={() => handleSelect(q.id, opt.letter)}
                      disabled={isSubmitted}
                      className={`w-full p-3.5 sm:p-4 rounded-xs border text-left text-xs sm:text-sm transition flex items-start space-x-3.5 leading-relaxed cursor-pointer ${optionClass}`}
                    >
                      <span
                        className={`font-mono font-bold text-xs shrink-0 w-6 h-6 rounded-xs border flex items-center justify-center transition mt-0.5 ${letterBadgeClass}`}
                      >
                        {opt.letter}
                      </span>
                      <span className="leading-relaxed flex-1 pt-0.5 font-sans">{opt.text}</span>
                      {isSubmitted && opt.isCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      )}
                      {isSubmitted && isThisSelected && !opt.isCorrect && (
                        <XCircle className="w-4 h-4 text-crimson-600 shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Official Review Box */}
              {isSubmitted && (
                <div className="p-4 sm:p-5 rounded-xs bg-canvas-50 border border-canvas-300 text-xs sm:text-sm text-slate-800 space-y-2">
                  <div className="flex items-center space-x-2 font-mono font-bold text-brass-700 text-xs uppercase tracking-wider">
                    <BookOpen className="w-4 h-4" />
                    <span>Ulasan Ketentuan Hukum ({q.pasalRef})</span>
                  </div>
                  <p className="leading-relaxed text-slate-700 font-sans">{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Submit Action */}
      {!isSubmitted && (
        <div className="command-panel p-6 sm:p-8 bg-white text-center space-y-3 shadow-xs">
          <div className="flex items-center justify-center space-x-2 text-xs font-mono text-slate-600">
            <AlertCircle className="w-4 h-4 text-brass-700" />
            <span>
              STATUS: Telah dijawab <strong className="font-bold text-navy-950">{answeredCount}</strong> dari{" "}
              <strong className="font-bold text-navy-950">{totalQuestions}</strong> studi kasus.
            </span>
          </div>
          <button
            onClick={() => {
              setIsSubmitted(true);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            disabled={answeredCount === 0}
            className="px-8 py-3.5 bg-navy-950 hover:bg-navy-900 disabled:opacity-50 text-brass-400 font-mono text-xs font-bold uppercase tracking-wider rounded-xs transition cursor-pointer"
          >
            Kirim Jawaban &amp; Buka Evaluasi Resmi
          </button>
        </div>
      )}
    </section>
  );
};
