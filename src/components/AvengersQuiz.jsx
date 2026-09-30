import React, { useState } from 'react';
import { Award, CheckCircle2, XCircle, RefreshCw, Zap, Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFX } from '../utils/soundEffects';

export default function AvengersQuiz() {
  const quizQuestions = [
    {
      id: 1,
      question: "What is Shubham's reaction when someone asks a 'dumb' or basic question?",
      options: [
        "He sends you 50 links to the docs without explaining.",
        "He answers with infinite patience, zero judgement, and genuine kindness.",
        "He sighs loudly and asks you to figure it out.",
        "He ignores the question."
      ],
      correctIndex: 1,
      explanation: "Shubham is legendary for making everyone feel valued and safe to ask any question!"
    },
    {
      id: 2,
      question: "How does Shubham handle an impossible code emergency right before a release?",
      options: [
        "He panics and reschedules the release.",
        "He invents a genius, clean 'Jugaad' method that saves the day in 5 minutes!",
        "He refactors the entire codebase from scratch overnight.",
        "He blames the staging server."
      ],
      correctIndex: 1,
      explanation: "Shubham is the master of ethical, out-of-the-box Jugaad hacks!"
    },
    {
      id: 3,
      question: "What is Shubham's Morale & Optimism Power Level?",
      options: [
        "50% Average",
        "100% Good",
        "3000% Pure Unstoppable Optimism Core!",
        "0% Grumpy"
      ],
      correctIndex: 2,
      explanation: "Shubham brings 3000% energy and positivity to every single sprint!"
    },
    {
      id: 4,
      question: "Which Marvel Avenger superhero is Shubham?",
      options: [
        "Hawkeye",
        "IRON MAN — The Genius, Optimist, Poet & Hero with a Heart of Gold!",
        "Loki",
        "The Collector"
      ],
      correctIndex: 1,
      explanation: "I AM IRON SHUBHAM! We love you 3000!"
    }
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQ = quizQuestions[currentStep];

  const handleSelectOption = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQ.correctIndex) {
      soundFX.playArcPower();
      setScore(prev => prev + 1);
    } else {
      soundFX.playHudClick();
    }
  };

  const handleNext = () => {
    soundFX.playHudClick();
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
      // Confetti burst for quiz completion
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#ffd700', '#e52521']
      });
      soundFX.playRepulsor();
    }
  };

  const handleReset = () => {
    soundFX.playHudClick();
    setCurrentStep(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
    setIsAnswered(false);
  };

  return (
    <section id="quiz" className="py-24 relative bg-[#060812] border-t border-cyan-500/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/90 border border-cyan-400/40 text-cyan-300 font-orbitron text-xs tracking-widest uppercase mb-4">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>AVENGERS INITIATIVE • TRIVIA CHALLENGE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-red-500 mb-3">
            ARE YOU SHUBHAM-APPROVED?
          </h2>
          <p className="font-outfit text-base text-slate-300">
            Test your knowledge of Shubham's optimism, patience, and genius jugaad powers!
          </p>
        </div>

        {/* Quiz Container Card */}
        <div className="iron-card p-6 sm:p-10 rounded-3xl border-cyan-500/40 bg-[#090e1a]/95 relative shadow-2xl">
          
          {!showResult ? (
            <div>
              {/* Progress Bar */}
              <div className="flex justify-between items-center mb-4 font-orbitron text-xs text-cyan-400">
                <span>QUESTION {currentStep + 1} OF {quizQuestions.length}</span>
                <span className="text-yellow-400 font-bold">SCORE: {score}</span>
              </div>
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden mb-8">
                <div 
                  className="bg-gradient-to-r from-cyan-400 via-amber-400 to-red-500 h-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>

              {/* Question Title */}
              <h3 className="font-orbitron font-bold text-xl sm:text-2xl text-white mb-6 leading-snug">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-3 mb-8">
                {currentQ.options.map((opt, idx) => {
                  let btnStyle = "bg-slate-950 border-slate-800 text-slate-300 hover:border-cyan-400/50 hover:text-white";
                  if (isAnswered) {
                    if (idx === currentQ.correctIndex) {
                      btnStyle = "bg-green-950/80 border-green-400 text-green-200 shadow-[0_0_15px_rgba(74,222,128,0.3)]";
                    } else if (idx === selectedOption) {
                      btnStyle = "bg-red-950/80 border-red-500 text-red-200";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswered}
                      className={`w-full p-4 rounded-2xl border text-left font-outfit text-sm sm:text-base transition-all cursor-pointer flex items-center justify-between ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {isAnswered && idx === currentQ.correctIndex && (
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 ml-2" />
                      )}
                      {isAnswered && idx === selectedOption && idx !== currentQ.correctIndex && (
                        <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next Button */}
              {isAnswered && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-cyan-950/40 border border-cyan-400/30 animate-fadeIn">
                  <p className="font-outfit text-xs sm:text-sm text-cyan-200 italic">
                    💡 <strong>Insight:</strong> {currentQ.explanation}
                  </p>
                  <button
                    onClick={handleNext}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-orbitron font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-[0_0_15px_rgba(0,240,255,0.4)] whitespace-nowrap"
                  >
                    {currentStep === quizQuestions.length - 1 ? 'VIEW CERTIFICATE →' : 'NEXT QUESTION →'}
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Quiz Results Screen */
            <div className="text-center py-6 animate-fadeIn">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-yellow-950/80 border-2 border-yellow-400 flex items-center justify-center text-yellow-300 shadow-[0_0_30px_rgba(255,215,0,0.5)] animate-arc-pulse">
                <Sparkles className="w-10 h-10 text-yellow-300" />
              </div>

              <span className="font-orbitron text-xs text-cyan-400 tracking-widest uppercase block mb-1">
                AVENGERS INITIATIVE CERTIFICATE
              </span>
              <h3 className="font-orbitron font-black text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-300 to-yellow-400 mb-2">
                YOU ARE 100% SHUBHAM CERTIFIED!
              </h3>
              <p className="font-outfit text-lg text-slate-300 mb-6">
                You scored <strong className="text-yellow-400">{score}/{quizQuestions.length}</strong>! You truly understand the heart, optimism, and genius jugaad spirit of Shubham.
              </p>

              <div className="p-6 rounded-2xl bg-slate-950 border border-yellow-400/40 max-w-md mx-auto mb-8 text-center font-orbitron text-xs text-yellow-300 uppercase tracking-widest space-y-2">
                <p>★ CERTIFIED OPTIMIST • 3000% POWER ★</p>
                <p className="text-slate-300 text-xs font-outfit normal-case">
                  "Keep answering every question with kindness, keep inventing clean jugaad solutions, and love your team 3000."
                </p>
              </div>

              <button
                onClick={handleReset}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-500 text-white font-orbitron font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(229,37,33,0.5)] hover:scale-105 transition-all cursor-pointer flex items-center space-x-2 mx-auto"
              >
                <RefreshCw className="w-4 h-4" />
                <span>REPLAY TRIVIA CHALLENGE</span>
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
