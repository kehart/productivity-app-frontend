import React, { useState } from 'react';
import { StyleSheet, View, Modal, Text, Button, ScrollView, FormLabel, FormInput, FormValidationMessage } from 'react-native';

const SubmitEventModal = props => {
    /* <FormLabel> {'Test'}</FormLabel>
                        <FormInput onChangeText={() => console.log('hi')}/>*/

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <ScrollView>
                        
                    </ScrollView>

                </View>
                
                <View style={styles.buttonContainer}> 
                    <View style={styles.button}>
                        <Button title="submit event" onPress={props.onSubmit} /> 
                    </View>
                    <View style={styles.button}>
                        <Button title="cancel" color='red' onPress={props.onCancel}/> 
                    </View>

                    
                   
                </View>
                
            </View>
        </Modal>
)};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        flex: 9
    },
    buttonContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
    },
    button: {
        width: '40%',
        borderWidth: 1,
        borderColor: 'black'
    }
});

export default SubmitEventModal;