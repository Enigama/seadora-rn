import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { CustomText } from "../custom-text/CustomText";
import { colorTheme } from "../../../baseStyle/baseStyle.js";

export const Timer = () => {
  const [dateFinish, setDateFinish] = useState(new Date(1600999453 * 1000))
  const [date, setDate] = useState({day: 0, hour: 0, min: 0, sec: 0});
  
  useEffect(() => {
    const timeinterval = setInterval(updateTimer, 1000);
    function updateTimer(){
      const t = getTimeRemaining();
      const days = t.days;
      const hours = ('0' + t.hours).slice(-2);
      const minutes = ('0' + t.minutes).slice(-2);
      const seconds = ('0' + t.seconds).slice(-2);
      setDate({day: days, hour: hours, min: minutes, sec: seconds})
    }

    function getTimeRemaining(){
      const t = Date.parse(dateFinish) - Date.parse(new Date());
      const seconds = Math.floor((t / 1000) % 60);
      const minutes = Math.floor((t / 1000 / 60) % 60);
      const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      const days = Math.floor(t / (1000 * 60 * 60 * 24));
      //console.log(t, days, hours, minutes, seconds)

      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }
    return () => clearInterval(timeinterval)
  });

  return (
    <View style={Style.TimerRow}>
      <View style={Style.TimerBlock}>
        <CustomText text={date.day} propsStyle={Style.TimerNumber} />
        <CustomText text={"дней"} propsStyle={Style.TimerDesc} />
      </View>

      <View style={Style.TimerBlock}>
        <CustomText text={date.hour} propsStyle={Style.TimerNumber} />
        <CustomText text={"часов"} propsStyle={Style.TimerDesc} />
      </View>

      <View style={Style.TimerBlock}>
        <CustomText text={date.min} propsStyle={Style.TimerNumber} />
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
    color: colorTheme,
  },
  TimerDesc: {
    fontSize: 12,
    color: colorTheme,
    textAlign: "center",
  },
});
