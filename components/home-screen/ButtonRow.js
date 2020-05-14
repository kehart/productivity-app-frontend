import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';


const ButtonRow = props => {
    return (
        <View style={styles.rowView}>
            <TouchableOpacity style={styles.touchableTile}>
                <Text> {props.firstButtonTitle}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.touchableTile}>
            <Text> {props.secondButtonTitle}</Text>
            </TouchableOpacity>
        </View>
)};

const styles = StyleSheet.create({
    rowView: {
        // borderWidth: 1,
        // borderColor: 'green',
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 5,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
      },
      // Level 3, within rowView
      touchableTile: {
        backgroundColor: 'red',
        marginHorizontal: 15,
        height: '85%',
        flex: 1,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
      },
});

export default ButtonRow;