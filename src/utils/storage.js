// Safe localStorage wrapper to prevent React white screen crashes in strict/incognito browsers
export const safeGetItem = (key, fallbackValue) => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallbackValue;
  } catch (e) {
    console.warn("Storage access restricted, using fallback state:", e);
    return fallbackValue;
  }
};

export const safeSetItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn("Storage write restricted:", e);
  }
};
