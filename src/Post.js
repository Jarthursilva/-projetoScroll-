import React, {Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
export default class Post extends Component{

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.descricao}</Text>
                <Text style={styles.subtitle}>{this.props.autor}</Text>
                    <Text style={styles.lorem}>
                        {this.props.texto}.
                    </Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        margin: 15,
    },
    lorem:{
        fontWeight: 'bold', 
        color : 'black', 
        fontSize:16,
        textAlign: 'center',
        margin:  25,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10,
        color: '#00000F',
        marginTop: 10
    },
    subtitle: {
        marginLeft: 10,
        fontSize: 15,
        textDecorationLine: 'underline',

    }
})
