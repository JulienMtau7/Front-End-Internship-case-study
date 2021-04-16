import React from 'react'

import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'

// import React Native Elements
import { SearchBar  } from 'react-native-elements'

// import component
import BusinessesItem from './BusinessesItem'

// import Data static
import businessesData from '../Data/businessesData'

class SearchBusinesses extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <Text style={styles.title}>Search a business</Text>
                <SearchBar
                    placeholder="Restaurant, coiffeur, plombier..."
                    onChangeText={console.log('Yo')}
                    containerStyle={styles.search_bar_container}
                    inputContainerStyle={styles.search_bar_input_container}
                />
                <TouchableOpacity style={styles.button}>
                    <Text>Rechercher</Text>
                </TouchableOpacity>

                <FlatList
                    data={businessesData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <BusinessesItem />}
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
        color: "#000",
        fontWeight: "bold",
        fontSize: 40
    },

    /* SearchBar Style */
    search_bar_container: {
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
    },

    search_bar_input_container: {
        backgroundColor: '#DDD',
        borderRadius: 10,
    },
    /* SearchBar End */

    button: {
        alignItems: "center",
        backgroundColor: "#DDD",
        borderRadius: 10,
        padding: 10,
        marginRight: 8,
        marginLeft: 8,
    }

})
  
export default SearchBusinesses