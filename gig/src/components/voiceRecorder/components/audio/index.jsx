import React, { useState } from "react";
import { ReactMic } from "react-mic";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";
import start from "../../../../assets/start.png";
import stop from "../../../../assets/stop.png";
import cancel from "../../../../assets/cancel.png";

const AudioRecorder = ({ onSave }) => {
  const { t } = useTranslation(); // Hook for translations
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioURL, setAudioURL] = useState("");
  const [error, setError] = useState(null);
  const [cancelled, setCancelled] = useState(false);

  const startRecording = () => {
    setIsRecording(true);
    setError(null);
    setCancelled(false);
  };

  const stopRecording = () => {
    setIsRecording(false);
    setCancelled(false);
  };

  const onData = (recordedBlob) => {
    console.log("Recording in progress:", recordedBlob);
  };

  const onStop = (recordedBlob) => {
    setAudioBlob(recordedBlob.blob);
    setAudioURL(URL.createObjectURL(recordedBlob.blob));
  };

  const handleSave = async () => {
    if (audioBlob) {
      try {
        const response = await fetch("https://your-api-endpoint.com/upload", {
          method: "POST",
          body: audioBlob,
          headers: {
            "Content-Type": "audio/wav",
          },
        });

        if (response.ok) {
          alert.log("Audio uploaded successfully");
          handleReRecord();
        } else {
          alert("Failed to upload audio");
        }
      } catch (err) {
        alert("Error uploading audio:", err);
        handleReRecord();
      }
    } else {
      setError(t("errorNoAudio"));
      alert(t("errorNoAudio"));
    }
  };

  const handleReRecord = () => {
    stopRecording();
    setAudioBlob(null);
    setAudioURL("");
    setCancelled(false);
  };

  const cancelHandler = () => {
    stopRecording();
    setAudioBlob(null);
    setAudioURL("");
    setCancelled(true);
  };

  return (
    <div className={styles.audioRecorder}>
      {isRecording ? (
        <p>
          <span style={{ fontFamily: "Cinzel" }}>Recording in</span>{" "}
          <span
            style={{ fontFamily: "CinzelBold", color: "rgba(199, 83, 10, 1)" }}
          >
            Progress{" "}
          </span>
          .....
        </p>
      ) : null}
      <div className={styles.recorderContainer}>
        <ReactMic
          record={isRecording}
          onStop={onStop}
          onData={onData}
          strokeColor="#FF0000"
          backgroundColor="#FFF"
          className={styles.mic}
        />
      </div>

      {audioURL && (
        <div className={styles.playback}>
          <audio controls src={audioURL}>
            Your browser does not support the audio element.
          </audio>
        </div>
      )}

      <div className={styles.controlsContainer}>
        {!audioBlob || cancelled ? (
          <>
            <button
              onClick={stopRecording}
              disabled={!isRecording}
              className={styles.recordButton}
            >
              <img src={stop} alt="Record" className={styles.recordIcon} />
            </button>

            <button
              onClick={startRecording}
              disabled={isRecording}
              className={styles.starButton}
            >
              <img
                src={start}
                alt="Audio Waveform"
                className={styles.waveform}
              />
            </button>
            <button
              onClick={cancelHandler}
              className={styles.playButton}
              aria-label="Play Recording"
            >
              <img src={cancel} alt="Play" className={styles.recordIcon} />
            </button>
          </>
        ) : (
          <>
            <button onClick={handleSave} className={styles.ctaButton}>
              {t("saveRecording")}
            </button>
            <button
              onClick={() => {
                stopRecording();
                setAudioBlob(null);
                setAudioURL("");
                setCancelled(true);
              }}
              className={styles.ctaButton}
            >
              Re-Record
            </button>
          </>
        )}
      </div>

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default AudioRecorder;
