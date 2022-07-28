import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal,Image } from "react-native";
function GoalInput(props) {
  const [state, setState] = useState("");

  function goalInputHandler(enteredText) {
    setState(enteredText);
  }

  function addGoalHandler() {
    props.addGoal(state);
    setState("");
  }
  return (
    <Modal visible={props.showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.image}/>
        <TextInput
          placeholder="Your goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
          <Button title="Add Goal" onPress={addGoalHandler} color="white"/>
          </View>
          <View style={styles.button} >
          <Button title="Cacel" onPress={props.pressCancel} color="#f31282"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding :16,
    backgroundColor:"#311b6b"
  },
  textInput: {
    borderWidth: 1,
    width: "70%",
    borderColor: "#cccccc",
    marginRight: 8,
    padding: 8,
    borderColor:'#e4d0ff',
    backgroundColor: '#e4d0ff',
    color:'#120438',
    borderRadius:6
  },
  buttonContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:16
  },
  button:{
    width:"40%",
    marginHorizontal:8,
  },
  image:{
    width:100,
    height:100,
    marign:20
  }
});
