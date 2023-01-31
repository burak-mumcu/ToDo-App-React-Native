import React, {Component} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  useColorScheme,
  TextInput,
  View,
} from 'react-native';

export default class App extends Component {
  constructor(){
    super();
   this.state={
    text:'',
    data:[],
   }
  }

  handleSave = () => {
    const { text,data } = this.state;
    data.push({text});
    this.setState({data,text:''});
    console.log(this.state.data);
  };

  render() {
    const { text,data } = this.state;
    return (
      <View style={[{flex: 1,paddingTop:0}]}>
    <View style={stil.title}><Text style={stil.title_text}>To Do Application</Text></View>
   <View style={{backgroundColor:'#ccc',padding:10,flexDirection:'row'}}><TextInput
      style={stil.input}
      value={text}
      onChangeText={(text)=>this.setState({text})}
    />
    <TouchableOpacity onPress={this.handleSave} style={stil.Button}>
      <Text style={stil.title_text}>
        Ekle
      </Text>
    </TouchableOpacity>
    </View>
    <View>
      {data.map((item)=>{
        return <Text style={stil.textList}>{item.text}</Text>
      })
      }
    </View>
      </View> 
    );
  }
} 
const stil = StyleSheet.create({
  textList:{fontSize:15,margin:5,color:'black',backgroundColor:'#ddd',paddingLeft:15,height:25},
  welcome_area: {backgroundColor: 'red',flex:1},
  welcometext: {color: 'black', fontSize: 30},
  title:{backgroundColor:'blue',padding:10},
  title_text:{color:'white',fontSize:15,textAlign:'center'},
  input:{padding:10,backgroundColor:'white',flex:1},
  Button:{padding:10,backgroundColor:'aqua',borderRadius:5,marginLeft:10}
});
