import React from 'react'
import { connectLocale } from '../HOCC/connectLocale'
import { Modal, View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

const RootModal = ({ statusModal, setStatusModal, children, message }) => (
    <Modal visible={statusModal} animationType="slide" transparent testID="modal">
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                {children}
                <View
                    style={{
                        marginTop: 10,
                        flexDirection: "row",
                        justifyContent: 'space-between',
                    }}>
                    <Button onPress={() => setStatusModal(!statusModal)} title={message.Close} buttonStyle={{ backgroundColor: 'red', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10 }} />
                    <Button onPress={() => { }} title={message.Accept} buttonStyle={{ backgroundColor: 'green', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10 }} />
                </View>
            </View>
        </View>
    </Modal>
)

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        margin: 10
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        paddingBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
})

export default connectLocale(RootModal)