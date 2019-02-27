import React, {Component} from "react";
import {Text} from "react-native";


export default class Farenheit extends Component {

  constructor(props) {
    super(props)

    console.log(props)
  }
  render() {
    console.log("rendered")
    return (
      <Text>something</Text>
    )
  }
}