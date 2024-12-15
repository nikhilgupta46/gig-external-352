import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Define translations
const resources = {
  en: {
    translation: {
      startRecording: "Start Recording",
      stopRecording: "Stop Recording",
      reRecord: "Re-Record",
      saveRecording: "Save",
      errorNoAudio: "No audio recorded!",
      title: "Audio Recorder",
    },
  },
  es: {
    translation: {
      startRecording: "Comenzar Grabación",
      stopRecording: "Detener Grabación",
      reRecord: "Regrabar",
      saveRecording: "Guardar Grabación",
      errorNoAudio: "¡No se ha grabado ningún audio!",
      title: "Grabadora de Audio",
    },
  },
  // Add more languages here
};

// Initialize i18n
i18n
  .use(LanguageDetector) // Detect language automatically
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en", // Default language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
