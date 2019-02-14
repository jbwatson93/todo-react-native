import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Note from './Note'
class Main extends Component {
   
        state = {
            noteArray :[

            ],
            noteText: ''
        }
        addNote =()=> {
            if(this.state.noteText){
                var d = new Date();
                this.state.noteArray.push({
                    'date': d.getFullYear() + '/'+ (d.getMonth()+1) + '/' + d.getDate(),
                    'note': this.state.noteText
                })
            this.setState({noteArray: this.state.noteArray} )
            this.setState({noteText: ''})
        
            }
        }
        deleteNote(key){
            this.state.noteArray.splice(key,1)
            this.setState({noteArray: this.state.noteArray})
        }
    
    render() {
        let notes = this.state.noteArray.map((val,key)=>{
            return <Note key={key} keyval={key} val={val}  
            deleteMethod={()=>this.deleteNote(key)}/>
        })
        return (
            <View style={style.container}>
                <View style={style.header}>
                <Text style={style.headerText}> Header</Text>
                </View>
                <ScrollView style={style.scrollCont}>
                    {notes}
                </ScrollView>
                <View style={style.footer}>
                    <TextInput style={style.textInput} placeholder='>Notes' placeholderTextColor='white'
                    onChangeText={(noteText)=> this.setState({noteText})}
                    value={this.state.noteText}>

                    </TextInput>
                </View>
                <TouchableOpacity style={style.addButton} onPress={this.addNote}>
                    <Text style={style.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}



const style = StyleSheet.create({
    container: {
      flex: 1,
    
    },
    header: {
        backgroundColor: 'springgreen',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd'
    },
    headerText:{
        color: 'white',
        padding: 26,
        fontSize: 18,
    },
    scrollCont:{
        flex: 1,
        marginBottom: 100,
    },
    footer:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput:{
        alignSelf: 'stretch',
        color:'#fff',
        padding:20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed'
    },
    addButton:{
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: 'springgreen',
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText:{
        color: 'white',
        fontSize: 24,
    }
  });
  export default Main;
  