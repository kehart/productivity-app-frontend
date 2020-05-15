import React from 'react';
import { StyleSheet, View, Modal, Text, Button } from 'react-native';

const CreateGoalModal = props => {
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.container}>
                <Text> Goal creationn modal! </Text>
                <Button title="create goal" onPress={props.onSubmit} />
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

export default CreateGoalModal;