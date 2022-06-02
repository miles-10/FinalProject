import {StyleSheet, Text, TextInput, View} from 'react-native';
import Colors from '@utility/styles/Colors';
import React, {FC} from 'react';

interface input {
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  onFocus?: () => void;
}
const InputText: FC<input> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  ...props
}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.textinputView}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.inputText}
        {...props}></TextInput>
        </View>
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 16,
    
  },
  inputText: {
    height: 48,
    borderColor: Colors.secondary,
    backgroundColor: '#fff',
    borderWidth: 1,
    color: '',
    
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
    fontWeight: 'bold',
    color: Colors.white,
    width: '90%',
    marginLeft: '4%',  
  },
  textinputView: {
    width: '90%',
    marginLeft: '4%',  
  }
});
