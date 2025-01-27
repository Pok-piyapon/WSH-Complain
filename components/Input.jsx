import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../styles/styles.css';
const RichInput = ({ label, placeholder, onChangeText, value }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleClear = () => {
    onChangeText('');
  };

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, focused && styles.inputContainerFocused]}>
        <Text style={[styles.label, focused && styles.labelFocused]}>
          {label}
        </Text>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#8e8e8e"
        />
        <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
          {value.length > 0 && <Text style={styles.clearButtonText}>X</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '60%',
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    position: 'relative',
  },
  inputContainerFocused: {
    borderColor: colors.Button,
  },
  label: {
    position: 'absolute',
    left: 10,
    top: 12,
    fontSize: 16,
    color: '#aaa',
  },
  labelFocused: {
    top: -8,
    fontSize: 12,
    color: colors.Button,
  },
  input: {
    width: '100%',
    height: 30,
    fontSize: 16,
    color: '#333',
    paddingLeft: 10,
  }
});

export default RichInput;
