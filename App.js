/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      temp: 0,
      airPressure: 0,
      humidity: 0,
      airQualityIndex: 0,
    }
  }

  componentDidMount() {
    return fetch("https://api.airvisual.com/v2/city?city=Denver&state=Colorado&country=USA&key=8RFFvdj63HWR7Bk4x")
      .then((response) => response.json())
      .then((response) => {
        console.log("working?: " + response.data.current.weather.tp);
        this.setState({
          temp: response.data.current.weather.tp,
          airPressure: response.data.current.weather.pr,
          humidity: response.data.current.weather.hu,
          airQualityIndex: response.data.current.pollution.aqius,
        })
        }
      )
      .catch((error) => {
        console.error(error);
      })
  }


  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F5FCFF"}}>
        <Text>Welcome to React Native!</Text>
        <Text>{this.state.temp}</Text>
      </View>
    );
  }
}

