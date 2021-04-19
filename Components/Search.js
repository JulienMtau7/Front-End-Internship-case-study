import React from 'react'

import { StyleSheet, View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native'

// import React Native Elements
import { SearchBar  } from 'react-native-elements'

// import component
import FilmItem from './FilmItem'

// import Data static
import filmData from '../Data/filmData'

// import Data from API
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'



class Search extends React.Component {

    constructor(props) {
        super(props)
        this.searchedText = ""
        this.state = {
          films: []
        }
      }

    _loadFilms() {
        if (this.searchedText.length > 0) {
          getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
              this.setState({ films: data.results })
          })
        }
      }

    _searchTextInputChanged(text){
        this.searchedText = text
    }

    render() {
        return (
            <View style={styles.main_container}>
                <Text style={styles.title}>Search a Film</Text>
                <TextInput
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                    style={styles.textinput} 
                    placeholder="Titre du film" 
                />
                <TouchableOpacity style={styles.button} onPress={() => this._loadFilms()}>
                    <Text>Rechercher</Text>
                </TouchableOpacity>

                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        margin: 20,
        marginTop: 50,
        flex: 1,
    },

    title: {
        color: "#ebefff",
        fontWeight: "bold",
        fontSize: 40
    },

    textinput: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10,
        marginTop: 20,
        height: 50,
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
    }

})
  
export default Search