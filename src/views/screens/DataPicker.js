import React, { useState } from "react";
import { Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DataPicker = ({navigation, mode}) => {

  // const showDatePicker = () => {
  //   setDatePickerVisibility(true);
  // };

  const hideDatePicker = () => {
    // setDatePickerVisibility(false);
    navigation.navigate('TrangchuScreen')
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    // hideDatePicker();
  };

  return (
    <View>
      {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
      <DateTimePickerModal
        isVisible={true}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={() => hideDatePicker()}
      ></DateTimePickerModal>
    </View>
  );
};

export default DataPicker;