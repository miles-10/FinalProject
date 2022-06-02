import {KeyboardAvoidingView, Keyboard, TouchableOpacity,Platform, StyleSheet,TextInput, Text, View, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '@utility/styles/Colors';
import TaskList from '@components/TaskList';



const ToDoList = () => {

  const [task, setTask] = useState<string>();
  const [taskItems, setTaskItems] = useState<any>([]);
  
  useEffect(() => {
    showData();
  }
  ,[]);


  const saveData =  async (task: any ) => {
    try { 
      const taskString = await AsyncStorage.getItem('task');
      const tasks = taskString ? JSON.parse(taskString): [];
      const save = JSON.stringify([...tasks, task]);
      await AsyncStorage.setItem('task', save);
    } catch (e) {
      console.log(e);
    }
  }

  const showData = async () => {
    try {
      const tasks = await AsyncStorage.getItem('task');
      if(tasks) {
        setTaskItems(JSON.parse(tasks));
      }
    } catch(e){
      console.log(e);
    }
  }

  


  const handleAddtask = () => {
    // if(taskItems == ''){
    //   Alert.alert('Please enter a task');
    // } else{
    Keyboard.dismiss();
    saveData(task).then(res => {
      setTaskItems([...taskItems, task]);
      setTask('');
    });
  }

  const completeTask = (index: number) => {
    let itemCopy = [...taskItems];
    itemCopy.splice(index, 1);
    AsyncStorage.setItem('task', JSON.stringify(itemCopy)).then(res => {
      setTaskItems(itemCopy);
    }
    );
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.wrapper}>
        <Text style={styles.sectionTitle}>Reminder</Text>
        <View style={styles.items}>
          {
            taskItems.map((item: string, index: number) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <TaskList  text={item} />
                </TouchableOpacity>
              )
            })
          }
          {/* <TaskList text={'Task 1'} />
          <TaskList text={'Task 2'} /> */}
        </View>
      </View>
      

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTask}>
          <TextInput style={styles.Input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>

          <TouchableOpacity onPress={() => handleAddtask()}>
            <View style={styles.addButton}>
              <Text style={styles.addText}>Add</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  wrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTask: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
   
  },
  Input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: Colors.white,
    borderRadius: 60,
    borderColor: Colors.secondary,
    borderWidth: 1,
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: Colors.white,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.secondary,
    borderWidth: 1,
  },
  addText:{},
});
