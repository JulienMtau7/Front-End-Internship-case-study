import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class BusinessesItem extends React.Component {
  render() {

    const data = this.props.data

    return (
      <View style={styles.main_container}>
        <Image
          style={styles.image}
          source={{uri: data.image_url}}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{data.name}</Text>
            <Text>Note: {data.rating}</Text>
          </View>

          <View style={styles.adresse_container}>
            <Text style={styles.adresse_text}>adresse:</Text>
            <Text>{data.location.address1}</Text>
            <Text>{data.location.zip_code} {data.location.city}</Text>
          </View>
          <View style={styles.number_container}>
            <Text style={styles.number_text}>{data.phone}</Text>
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