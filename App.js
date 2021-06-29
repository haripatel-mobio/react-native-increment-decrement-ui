/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import IncrementDecrementView from 'react-native-increment-decrement-ui'
import Icon from 'react-native-vector-icons/FontAwesome5';

class App extends React.Component {
  state = {
    value1: 10,
    value2: 10,
    incrementDecrementBy: 5
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
        <StatusBar barStyle={'light-content'} />
        <View style={{alignSelf: 'center'}}>
          <Text style={{alignSelf: 'center', fontSize: 20, marginBottom: 8}}>Default: Without any properties</Text>
          <IncrementDecrementView 
            /* value={this.state.value}
            incrementDecrementBy={5}
            minValue={-10}
            maxValue={10}
            buttonSize={50}
            // incrementDisable={true}
            incrementTapHandler={() => {
              this.setState({ value: this.state.value + 1 })
            }}
            decrementTapHandler={() => {
              this.setState({ value: this.state.value - 1 })
            }}
            // isSwipeControl={true}
            // incrementStyle={{
            //   backgroundColor: 'red'
            // }}
            valueStyle={{
              fontSize: 24
            }}
            decrementIcon={
              <Icon name="user-minus" size={16} color="#FFF" />
            }
            incrementIcon={
              <Icon name="user-plus" size={16} color="#FFF" />
            } */
          />
          <Text style={{alignSelf: 'center', fontSize: 20, marginBottom: 8, marginTop: 12}}>Add: value, minValue, maxValue properties</Text>
          <IncrementDecrementView 
            value={this.state.value1}
            minValue={-10}
            maxValue={10}
          />
          <Text style={{alignSelf: 'center', fontSize: 16, marginBottom: 8, marginTop: 12}}>Add: Swipe control, disable specific control properties</Text>
          <IncrementDecrementView 
            buttonSize={50}
            decrementDisable={true}
            isSwipeControl={true}
          />
          <Text style={{alignSelf: 'center', fontSize: 20, marginBottom: 8, marginTop: 12}}>Add: custom styling properties</Text>
          <IncrementDecrementView 
            buttonSize={50}
            style={{
              borderColor: 'orange',
              borderWidth: 4
            }}
            valueStyle={{
              fontSize: 24,
              color: 'blue'
            }}
            incrementStyle={{
              backgroundColor: 'red'
            }}
            decrementStyle={{
              backgroundColor: 'green'
            }}
          />
          <Text style={{alignSelf: 'center', fontSize: 20, marginBottom: 8, marginTop: 12}}>Add: controls with icons properties</Text>
          <IncrementDecrementView 
            buttonSize={50}
            valueStyle={{
              fontSize: 24
            }}
            incrementStyle={{
              backgroundColor: 'red'
            }}
            decrementStyle={{
              backgroundColor: 'green'
            }}
            decrementIcon={
              <Icon name="user-minus" size={16} color="#FFF" />
            }
            incrementIcon={
              <Icon name="user-plus" size={16} color="#FFF" />
            }
          />
          <Text style={{alignSelf: 'center', fontSize: 20, marginBottom: 8, marginTop: 12}}>Add: All properties</Text>
          <IncrementDecrementView 
            value={this.state.value2}
            incrementDecrementBy={this.state.incrementDecrementBy}
            minValue={-50}
            maxValue={50}
            buttonSize={50}
            incrementTapHandler={() => {
              this.setState({ value2: this.state.value2 + this.state.incrementDecrementBy })
            }}
            decrementTapHandler={() => {
              this.setState({ value2: this.state.value2 - this.state.incrementDecrementBy })
            }}
            incrementStyle={{
              backgroundColor: 'red'
            }}
            valueStyle={{
              fontSize: 24
            }}
            decrementIcon={
              <Icon name="user-minus" size={16} color="#FFF" />
            }
            incrementIcon={
              <Icon name="user-plus" size={16} color="#FFF" />
            }
          />
        </View>
      </SafeAreaView>
    );
  }
};

export default App;
