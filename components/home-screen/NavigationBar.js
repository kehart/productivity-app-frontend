import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NavigationBar = props => {
    return (
        <View style={styles.topBar}> 
            <Text>{props.text}</Text>
        </View>
)};

const styles = StyleSheet.create({
    topBar : {
        borderWidth: 1,
        borderColor: 'red',
        flex: 1,
        width: '100%',
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center'
      },
});

export default NavigationBar;