import React from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native'

import firebase from 'firebase'

class Auth extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
        }

        this.onSignIn = this.onSignIn.bind(this)
    }

    onSignIn(){
        const { email, password } = this.state
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log('SUCCESS!')

                this.props.navigation.navigate('Search')
            })
            .catch((error) => {
                console.error(error);
            })
    }
    render() {   
        return (
            <View style={styles.main_container}>
                <Text style={styles.title}>Authentification</Text>

                <View style={styles.auth_container}>
                    <TextInput
                        style={styles.text_input}
                        placeholder="Ton email"
                        onChangeText={(email) => this.setState({ email })} 
                    />

                    <TextInput
                        style={styles.text_input}
                        placeholder="Ton mot de passe"
                        onChangeText={(password) => this.setState({ password })} 
                    />

                    <TouchableOpacity style={styles.button} onPress={() => this.onSignIn()}>
                        <Text>Go</Text>
                    </TouchableOpacity>
                </View>         
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        marginTop: 150,
        flex: 1
    },

    auth_container: {
        marginTop: 50,
        flex: 2,
        alignItems: "center"
    },

    title: {
        color: "#ebefff",
        fontWeight: "bold",
        fontSize: 40,
        textAlign: "center"
    },

    text_input: {
        marginBottom: 10,
        marginTop: 20,
        height: 50,
        width: 300,
        backgroundColor: "#ebefff",
        paddingLeft: 10,
        borderRadius: 10
    },

    button: {
        alignItems: "center",
        backgroundColor: "#ebefff",
        borderRadius: 10,
        padding: 10,
        marginRight: 7,
        marginLeft: 7,
        marginTop: 150,
        width: 200,
    },
})
  
export default Auth