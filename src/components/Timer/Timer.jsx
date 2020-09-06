import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { CustomText } from "../custom-text/CustomText";
import { colors } from "../../../baseStyle/baseStyle.js";

export const Timer = ({ finishDate, small = false }) => {
  const [dateFinish, setDateFinish] = useState(new Date(finishDate * 1000));

  const calculateTimeLeft = () => {
    let timeLeft = {};
    const t = Date.parse(dateFinish) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));

    timeLeft = {
      days,
      hours: ("0" + hours).slice(-2),
      minutes: ("0" + minutes).slice(-2),
      seconds: ("0" + seconds).slice(-2),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <View style={[Style.TimerRow]}>
      <View style={[Style.TimerBlock, small ? Style.TimerBlockSmall : {}]}>
        <CustomText
          text={timeLeft.days}
          propsStyle={[Style.TimerNumber, small ? Style.TimerNumberSmall : {}]}
        />
        <CustomText
          text={"дней"}
          propsStyle={[Style.TimerDesc, small ? Style.TimerDescSmall : {}]}
        />
      </View>

      <View style={[Style.TimerBlock, small ? Style.TimerBlockSmall : {}]}>
        <CustomText
          text={timeLeft.hours}
          propsStyle={[Style.TimerNumber, small ? Style.TimerNumberSmall : {}]}
        />
        <CustomText
          text={"часов"}
          propsStyle={[Style.TimerDesc, small ? Style.TimerDescSmall : {}]}
        />
      </View>

      <View style={[Style.TimerBlock, small ? Style.TimerBlockSmall : {}]}>
        <CustomText
          text={timeLeft.minutes}
          propsStyle={[Style.TimerNumber, small ? Style.TimerNumberSmall : {}]}
        />
        <CustomText
          text={"минут"}
          propsStyle={[Style.TimerDesc, small ? Style.TimerDescSmall : {}]}
        />
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  TimerRow: {
    flexDirection: "row",
  },
  TimerBlock: {
    width: 64,
    backgroundColor: "white",
    borderRadius: 8,
    marginRight: 8,
    paddingVertical: 7,
  },
  TimerBlockSmall: {
    width: 38,
    paddingVertical: 4.5,
  },
  TimerNumber: {
    marginBottom: 5,
    fontSize: 32,
    color: colors.theme,
    textAlign: "center",
  },
  TimerNumberSmall: {
    marginBottom: 0,
    fontSize: 18,
  },
  TimerDesc: {
    fontSize: 12,
    color: colors.theme,
    textAlign: "center",
  },
  TimerDescSmall: {
    fontSize: 8,
  },
});
