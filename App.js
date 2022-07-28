import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  Image
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [visible,setVisible]=useState(false);
  function addGoalHandler(state) {
    setGoals((currrentGoals) => [...currrentGoals, {text :state , id:Math.random().toString()}]);
  }

  function deleteGoalHandler(id){
    setGoals((currrentGoals)=>{
      return currrentGoals.filter((goal)=>goal.id !==id)
    })
  }

  function startAddGoalHandler(){
    setVisible(true);
  }

  
  function endGoalHandler(){
    setVisible(false);
  }
  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title="Add new goal" color="white" onPress={startAddGoalHandler}/>
      <GoalInput addGoal={addGoalHandler} showModal={visible} pressCancel={endGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemdata) => {
            return <GoalItem text = {itemdata.item.text} pressDelete = {deleteGoalHandler} id={itemdata.item.id} />;
          }}
          alwaysBounceHorizontal={false}
          keyExtractor={(item,index)=>{
            return item.id
          }}
        ></FlatList>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
 
  goalsContainer: {
    flex: 4,
  },

});
