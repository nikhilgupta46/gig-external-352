import Landing from "./components/audivo/components/Landing";
import "./App.css";
import { Register } from "./components/register/Register";
import BottomTransition from "./components/Bottom";
import { useState } from "react";
import VoiceRecorder from "./components/voiceRecorder/VoiceRecorder";
import "./i18n"; // Import i18n configuration

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [abletoRecord, setAbleToRecord] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const submitHandler = () => {
    setAbleToRecord(true);
  };

  const handleSaveAudio = (audioBlob) => {
    console.log("Audio Blob for API:", audioBlob);
    // Upload to API or handle blob
  };
  return (
    <>
      {abletoRecord ? null : <Landing toggleVisibility={toggleVisibility} />}
      <BottomTransition isVisible={isVisible}>
        <Register
          toggleVisibility={toggleVisibility}
          submitHandler={submitHandler}
        />
      </BottomTransition>
      {abletoRecord ? (
        <VoiceRecorder
          handleSaveAudio={handleSaveAudio}
          setAbleToRecord={setAbleToRecord}
        />
      ) : null}

      {/* <LanguageSwitcher /> */}
    </>
  );
}

export default App;
