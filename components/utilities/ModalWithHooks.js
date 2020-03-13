import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import TextInput from '../TextSearch'

export default function() {
    const [modalVisible, setModalVisible] = useState(false)

    const modalHeader = (
        <View style={styles.modalHeader}>
            <Text style={styles.title}>Searcher</Text>
            <View style={styles.divider}></View>
        </View>
    )

    const modalBody = (
        <View style={styles.modalBody}>
            <Text style={styles.bodyText}>Working in progress!</Text>
        </View>
    )

    const modalFooter = (
        <View style={styles.modalFooter}>
            <View style={styles.divider}></View>
            <View style={{ flexDirection: "row-reverse", margin: 10 }}>
                <TouchableOpacity style={{ ...styles.actions, backgroundColor: "#db2828" }}
                    onPress={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <Text style={styles.actionText}>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.actions, backgroundColor: "#21ba45" }}>
                    <Text style={styles.actionText}>Accept</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

    const modalContainer = (
        <View style={styles.modalContainer}>
            {modalHeader}
            {modalBody}
            {modalFooter}
        </View>
    )

    const modal = (
        <Modal
            transparent={false}
            animationType={"fade"}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
            <View style={styles.modal}>
                <View>
                    {modalContainer}
                </View>
            </View>
        </Modal>
    )

    return (
        <View style={styles.container}>
            {modal}
                <TextInput openModal={() => setModalVisible(true)}/>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        backgroundColor: "#00000099",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        backgroundColor: "#f9fafb",
        borderRadius: 5
    },
    modalHeader: {

    },
    title: {
        fontWeight: "bold",
        fontSize: 40,
        padding: 15,
        color: "#b364ff"
    },
    divider: {
        width: "100%",
        height: 1,
        backgroundColor: "lightgray"
    },
    modalBody: {
        backgroundColor: "#fff",
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    bodyText:{
        textAlign: "center",
    },
    modalFooter: {
    },
    actions: {
        borderRadius: 5,
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    actionText: {
        color: "#fff"
    }
});