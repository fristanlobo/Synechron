import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";
import { connect } from 'react-redux';
import { updateLoginDetails } from '../../Redux/action/action';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            usernameVisibleTag: '',
            passwordVisibleTag: '',
        }
    }

    componentDidMount = () => {
    }

    validateEmail = (value) => {
        if (value !== '') {
            const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            this.setState({
                usernameVisibleTag: validateEmail.test(value) === true ? false : true,
            })
        }
    }

    validatePassword = (value) => {
        const validatePass = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,15})/
        if (value !== '') {
            this.setState({
                passwordVisibleTag: validatePass.test(value) === true ? false : true,
            })
        }
    }

    Login = () => {
        const loginData = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.saveLoginData(loginData)
        this.props.navigation.navigate('Home', {

        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                    onChangeText={(email) => this.setState({ username: email })}
                    underlineColorAndroid='rgba(0,0,0,0)' placeholder="Email Address"
                    placeholderTextColor="#000"
                    keyboardType="email-address"
                    ref={(input) => this.password = input}
                    onEndEditing={(e) => this.validateEmail(e.nativeEvent.text)}
                    //onFocus={() => this.setState({ usernameVisibleTag: false})}
                />
                {this.state.usernameVisibleTag ?
                    <Text style={styles.warningMsg}>Please enter the valid email address!!</Text>
                    : null
                }
                <TextInput
                    style={styles.inputBox}
                    onChangeText={(Password) => this.setState({ password: Password })}
                    underlineColorAndroid='rgba(0,0,0,0)' placeholder="Enter Password"
                    secureTextEntry={true}
                    placeholderTextColor="#000"
                    ref={(input) => this.password = input}
                    onSubmitEditing={(e) => this.validatePassword(e.nativeEvent.text)}
                    //onFocus={() => this.setState({ passwordVisibleTag: false})}
                />
                {this.state.passwordVisibleTag ?
                    <Text style={styles.warningMsg}>Password size limitation between 8 - 15 characters(Alpha Number with at least one Capital Letter and 1 Special Character)</Text>
                    : null
                }
                <TouchableOpacity
                    style={this.state.usernameVisibleTag===false && this.state.passwordVisibleTag===false ?styles.button:styles.button1}
                    disabled={this.state.usernameVisibleTag===false && this.state.passwordVisibleTag===false ?false:true}
                    onPress={() => this.Login()}
                >
                    <Text
                        style={styles.buttonText}
                    >
                        Login
                    </Text>
                </TouchableOpacity>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:16
    },
    inputBox: {
        width: 299,
        backgroundColor: '#ede8e8',
        borderRadius: 24,
        paddingHorizontal: 15,
        fontSize: 15,
        color: '#000',
        marginVertical: 9
    },
    button: {
        width: 299,
        backgroundColor: '#b8236b',
        borderRadius: 24,
        marginVertical: 9,
        paddingVertical: 11
    },
    button1: {
        width: 299,
        backgroundColor: '#A0A0A0',
        borderRadius: 24,
        marginVertical: 9,
        paddingVertical: 11
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    warningMsg:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FF0000',
    }
});
const mapDispatchToProps = (dispatch) => ({
    saveLoginData: (props) => {
        dispatch(updateLoginDetails(props))
    }
})

export default connect(null, mapDispatchToProps)(Login);