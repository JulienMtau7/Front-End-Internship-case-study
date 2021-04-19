import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

import { getImageFromApi } from '../API/TMDBApi'

class BusinessesItem extends React.Component {
  render() {

    const film = this.props.film

    return (
      <View style={styles.main_container}>
        <Image
          style={styles.image}
          source={{uri: getImageFromApi(film.poster_path)}}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{film.title}</Text>
            <Text style={styles.vote_text}>{film.average}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>{film.release_date}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row',
    marginTop: 30
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    marginBottom: 10
  },

  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },

  adresse_container: {
    flex: 7
  },

  adresse_text: {
    fontStyle: 'italic',
    color: '#666666'
  },

  number_container: {
    flex: 1
  },
  number_text: {
    textAlign: 'right',
    fontSize: 14
  },
})

export default BusinessesItem