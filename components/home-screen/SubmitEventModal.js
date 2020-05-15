import React from 'react';
import { StyleSheet, View, Modal, Text, Button } from 'react-native';

const SubmitEventModal = props => {
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.container}>
                <Text> Event submission modal! </Text>
                <Button title="submit event" onPress={props.onSubmit} />
                <Button title="cancel" onPress={props.onCancel}/>
            </View>
        </Modal>
)};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SubmitEventModal;