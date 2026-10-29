const isDebug = process.env.EXPO_PUBLIC_DEBUG === "true";

export const logger = {
  log: (...args: any[]) => {
    if (isDebug) {
      console.log(...args);
    }
  },
  warn: (...args: any[]) => {
    if (isDebug) {
      console.warn(...args);
    }
  },
  error: (...args: any[]) => {
    if (isDebug) {
      console.error(...args);
    }
  },
};

export default logger;
