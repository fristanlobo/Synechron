import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native"
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesData: [],
    }
  }

  componentDidMount = () => {
    this.loadMovies();

  }

  loadMovies = () => {
    const movies = []
    fetch('https://jsonplaceholder.typicode.com/photos/')
      .then(response => response.json())
      .then(json => this.setState({
        moviesData: json
      }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.warningMsg}>Welcome {this.props.getLoginData.username}!! {'\n'}Your Favourite List of Movies is here</Text>
        <FlatList
          data={this.state.moviesData}
          renderItem={({ item, index }) =>
            <View style={{ flexDirection: 'column', flex: 2 }}>
              <Text>{item.id}.{item.title}</Text>
              <Image
                source={{
                  uri: item.url,
                }}
              />
            </View>}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 16
  },
  warningMsg: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0000ff',
  }
});

const mapStateToProps = (state) => ({
  getLoginData: state.reducerUpdatestatus.LoginData,
});

export default connect(mapStateToProps)(Home);