import React from "react";

const TimeCounterCard = ({counter, label}) => {
    return (

        <div>
        <div
          style={{
            width: 72,
            height: 72,
            margin: 10,
            borderRadius: 10,
            backgroundColor: "#423c6a",
            color: "#dcd7f7",
            fontSize: 36,
            textAlign: "center",
            display: "flex",
            paddingBottom: 4,
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {counter}
        </div>
        <div style={{ textAlign: "center", color: "white", marginBottom: 12, textTransform:'uppercase' }}>
          {label}
        </div>
      </div>
    )
}

const TimeCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <div
      style={{
        display: "flex",
        padding: 5,
        borderRadius: 15,
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
    >
        <TimeCounterCard counter={days} label='days' />
      <div>
        <div
          style={{
            width: 72,
            height: 72,
            margin: 10,
            borderRadius: 10,
            backgroundColor: "#423c6a",
            color: "white",
            fontSize: 36,
            textAlign: "center",
            display: "flex",
            paddingBottom: 4,
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {hours}
        </div>
        <div style={{ textAlign: "center", color: "white", marginBottom: 12 }}>
          HOURS
        </div>
      </div>
      <div>
        <div
          style={{
            width: 72,
            height: 72,
            margin: 10,
            borderRadius: 10,
            backgroundColor: "#423c6a",
            color: "white",
            fontSize: 36,
            textAlign: "center",
            display: "flex",
            paddingBottom: 4,
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {minutes}
        </div>
        <div style={{ textAlign: "center", color: "white", marginBottom: 12 }}>
          MINUTES
        </div>
      </div>
      <div>
        <div
          style={{
            width: 72,
            height: 72,
            margin: 10,
            borderRadius: 10,
            backgroundColor: "#423c6a",
            color: "white",
            fontSize: 36,
            textAlign: "center",
            display: "flex",
            paddingBottom: 4,
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {seconds}
        </div>
        <div style={{ textAlign: "center", color: "white", marginBottom: 12 }}>
          SECONDS
        </div>
      </div>
    </div>
    </div>
  );
};

export default TimeCounter;
