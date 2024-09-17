import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, Button, StyleSheet, View } from 'react-native';

const App = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I help you today?', from: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim() === '') return;

    const newMessage = { id: messages.length + 1, text: inputText, from: 'user' };
    setMessages([...messages, newMessage]);
    setInputText('');

    const botReply = { id: messages.length + 2, text: 'I am just a simple bot!', from: 'bot' };
    setMessages(prevMessages => [...prevMessages, botReply]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.chatArea}>
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageContainer,
              message.from === 'bot' ? styles.botMessage : styles.userMessage,
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          value={inputText}
          onChangeText={setInputText}
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  chatArea: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#e6e6e6',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#add8e6',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});

export default App;
