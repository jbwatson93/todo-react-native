import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

class Note extends Component {
    render() {
        return (
           <View key={this.props.keyval} style={style.note}>
            <Text style={style.noteText}>{this.props.val.date}</Text>
            <Text style={style.noteText}>{this.props.val.note}</Text>
            <TouchableOpacity onPress={this.props.deleteMethod} style={style.noteDelete}>
            <Text style={style.noteDeleteText}>X</Text>
            </TouchableOpacity>
           </View>
        );
    }
}

export default Note;
const style = StyleSheet.create({
   note: {
       backgroundColor: 'lightgrey',
       position: 'relative',
       padding: 20,
       paddingRight: 100,
       borderBottomWidth: 2,
       borderBottomColor: '#ededed'
 },
 noteText:{
     paddingLeft:20,
     borderLeftWidth:10,
     borderLeftColor: 'grey'

 },
 noteDelete:{
     position:'absolute',
     justifyContent:'center',
     alignItems: 'center',
     backgroundColor:'blue',
     padding:10,
     bottom:10,
     right:10,
     top:10,
 },
 noteDeleteText:{
     color: 'white'
 }
  });
  