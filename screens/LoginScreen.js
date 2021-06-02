import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, Alert, ScrollView, Image, Icon } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { RFValue } from "react-native-responsive-fontsize";
import db from '../config'
import firebase from 'firebase'

export default class LoginScreen extends Component {
    constructor() {
        super();
        this.state = {
            emailId: "",
            password: ""
        }
    }

    userLogin = (emailId, password) => {
        firebase.auth().signInWithEmailAndPassword(emailId, password)
            .then(() => {
                this.props.navigation.navigate("AddReminder");
            })
            .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                return Alert.alert(errorMessage);
            });
    };

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require("../assets/Reminder.jpeg")}
                    style={styles.Image}
                />
                <View style={{ flex: 1 }}>
                    <View style={styles.TextInput}>

                        <View style={{flex:1}}>
                            <Text style={styles.inputTitle}>Email</Text>
                        </View>

                        <TextInput
                            style={styles.loginBox}
                            placeholder="abc@xyz.com"
                            placeholderTextColor="silver"
                            keyboardType='email-address'
                            onChangeText={(text) => {
                                this.setState({
                                    emailId: text
                                })
                            }}
                        />

                        <View style={{flex:1}}>
                            <Text style={styles.inputTitle}>Password</Text>
                        </View>

                        <TextInput
                            label="password"
                            style={styles.loginBox}
                            secureTextEntry={true}
                            placeholder="password"
                            placeholderTextColor="silver"
                            onChangeText={(text) => {
                                this.setState({
                                    password: text
                                })
                            }}
                        />
                    </View>
                </View>

                <View style={{ flex: 0.5, alignItems: "center" }}>
                    <TouchableOpacity
                        style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
                        onPress={() => {
                            this.userLogin(this.state.emailId, this.state.password);
                        }}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderWidth: 7,
        borderColor: "#c4dfe6"
    },
    title: {
        fontSize: 60,
        fontWeight: '300',
        textAlign: 'center',
        paddingBottom: 10,
        color: '#fb6542'
    },
    inputTitle: {
        position:'absolute',
        left:-157,
        fontSize:15,
        fontWeight: "bold",
        paddingLeft: 20,
        marginTop:10
    },
    loginBox: {
        width: "80%",
        height: RFValue(50),
        marginTop:30,
        borderBottomWidth: 1,
        borderColor: "silver",
        fontSize: RFValue(20),
    },
    button: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#273238",
        shadowColor: "#98dbc6",
        bottom: 100,
        top: 1,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
    },
    buttonText: {
        color: '#ffff',
        fontWeight: '200',
        fontSize: 20
    },
    label: {
        fontSize: RFValue(13),
        color: "#5c777f",
        fontWeight: "bold",
        paddingLeft: RFValue(10),
        marginLeft: RFValue(20)
    },
    formInput: {
        width: "90%",
        height: RFValue(45),
        padding: RFValue(10),
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#FFD700",
        paddingBottom: RFValue(10),
        marginLeft: RFValue(20),
        marginBottom: RFValue(14)
    },
    TextInput: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center",
        marginTop:20
    },
    Image: {
        width: 270,
        height: 270,
        left: 40,
        marginTop: 60,
        bottom: 30
    },
});