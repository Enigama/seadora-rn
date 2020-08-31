import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { CustomText } from "../custom-text/CustomText";
import { colors } from "../../../baseStyle/baseStyle.js";

export const Timer = ({finishDate}) => {
  const [dateFinish, setDateFinish] = useState(new Date(finishDate * 1000))
  
  const calculateTimeLeft = () => {
    let timeLeft = {};
    const t = Date.parse(dateFinish) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));

    timeLeft = {
      days,
      hours: ('0' + hours).slice(-2),
      minutes: ('0' + minutes).slice(-2),
      seconds: ('0' + seconds).slice(-2),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <View style={Style.TimerRow}>
      <View style={Style.TimerBlock}>
        <CustomText text={timeLeft.days} propsStyle={Style.TimerNumber} />
        <CustomText text={"дней"} propsStyle={Style.TimerDesc} />
      </View>

      <View style={Style.TimerBlock}>
        <CustomText text={timeLeft.hours} propsStyle={Style.TimerNumber} />
        <CustomText text={"часов"} propsStyle={Style.TimerDesc} />
      </View>

      <View style={Style.TimerBlock}>
        <CustomText text={timeLeft.minutes} propsStyle={Style.TimerNumber} />
        <CustomText text={"минут"} propsStyle={Style.TimerDesc} />
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  TimerRow: {
    flexDirection: "row",
  },
  TimerBlock: {
    backgroundColor: "white",
    borderRadius: 8,
    marginRight: 8,
    paddingVertical: 7,
    paddingHorizontal: 12,
  },
  TimerNumber: {
    marginBottom: 5,
    fontSize: 32,
    color: colors.theme,
  },
  TimerDesc: {
    fontSize: 12,
    color: colors.theme,
    textAlign: "center",
  },
});
