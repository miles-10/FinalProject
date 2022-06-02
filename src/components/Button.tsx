import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from '@utility/styles/Colors';
import React, {FC} from 'react';

interface button {
  text: string;
  onPress: () => void;
}
const CustomButton: FC<button> = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
    btnStyle: {
        height: 48,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: '90%',
        marginLeft: '4%',  
    },
    textStyle: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: Colors.primary,
    },
});
