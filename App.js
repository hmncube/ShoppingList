import React,{useState} from "react";
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native'
import AddItem from "./components/AddItem";
import Header from './components/Header';
import ListItem from './components/ListItem';

const App =()=>{
  const [items, setItems] = useState([
    {id: 1, text:'milk'},
    {id: 2, text:'bread'},
    {id: 3, text:'dovi'},
    {id: 4, text:'jam'},
    {id: 5, text:'upfu'}
  ])

  const deleteItem =(id)=>{
    setItems(prevItems => {
      return prevItems.filter(item=> item.id != id);
    });
  }

  
  const addItem =(text)=>{
    if(!text){
      Alert.alert('Error', 'Please enter an item')
    }else{
      setItems(prevItems => {
        return [{id: 6, text}, ...prevItems]
      });
    }  
  }
  return(
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem}/>
      <FlatList 
      data={items} 
      renderItem={({item}) => <ListItem item={item}
      deleteItem={deleteItem}
      />}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})

export default App;