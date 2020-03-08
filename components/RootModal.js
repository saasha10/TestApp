import React from 'react'
import { Modal, Button, View } from 'react-native'

export default RootModal = () => {
    return (
        <Modal visible={true} animationType="fade" testID="modal">
            <View
                style={{
                    flex: 1,
                    padding: 20,
                    justifyContent: 'space-between',
                }}>
                <View />
                <Button onPress={() => { }} title="Close" color="blue" />
            </View>
        </Modal>
    )
}