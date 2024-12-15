import React from "react";
import styles from "./styles/VoiceRecorder.module.css";
import typographyStyles from "./styles/Typography.module.css";
import TextContent from "./components/TextContent";
import loud from "../../assets/gif/loud.gif";
import AudioRecorder from "./components/audio";

export default function VoiceRecorder({ handleSaveAudio, setAbleToRecord }) {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={typographyStyles.heading}>
          <span>Let's give your words a </span>{" "}
          <span
            style={{ fontFamily: "CinzelBold", color: "rgba(199, 83, 10, 1)" }}
          >
            voice{" "}
          </span>
          now
        </h1>
      </div>
      <span
        onClick={() => {
          setAbleToRecord(false);
        }}
        style={{
          fontFamily: "CinzelBold",
          color: "rgba(199, 83, 10, 1)",
          alignSelf: "flex-end",
          cursor: "pointer",
        }}
      >
        {"<-"} Back
      </span>

      <div className={styles.textContent}>
        <TextContent />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: "30px",
          alignSelf: "center",
          justifyContent: "space-between",
        }}
      >
        <h2 className={typographyStyles.subheading}>Press Record and Read</h2>
        <div className={styles.loud}>
          <img src={loud} alt="Voice Recorder Logo" className={styles.logo} />
        </div>
      </div>

      <AudioRecorder onSave={handleSaveAudio} />
    </div>
  );
}
