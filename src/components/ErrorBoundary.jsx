import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Stark Protocol System Exception:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#080b12] text-slate-100 flex flex-col items-center justify-center p-6 text-center font-outfit">
          <div className="w-20 h-20 rounded-full bg-[#0b1320] border-4 border-red-500 shadow-[0_0_50px_rgba(229,37,33,0.8)] flex items-center justify-center mb-6 animate-pulse">
            <div className="w-10 h-10 rounded-full bg-red-400" />
          </div>
          <h1 className="font-orbitron font-black text-3xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-300 to-yellow-400 mb-3 uppercase tracking-wider">
            STARK HUD DIAGNOSTIC REBOOT
          </h1>
          <p className="font-rajdhani text-cyan-300 text-lg sm:text-xl font-bold uppercase tracking-widest mb-6 max-w-xl">
            A TEMPORARY TELEMETRY FAULT OCCURRED. CLICK BELOW TO RESTART THE SUIT.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-amber-500 to-yellow-400 text-slate-950 font-orbitron font-black text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(255,215,0,0.8)] hover:scale-105 transition-all cursor-pointer"
          >
            REBOOT STARK PROTOCOL ⚡
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
