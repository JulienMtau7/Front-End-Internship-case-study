import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Icon } from 'react-native-elements'

import { getImageFromApi } from '../API/TMDBApi'

class FilmItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      display: false
    }
  }

  _resumeDisplay(){
    if(this.state.display == true) {
      this.setState({ display: false })
    } else if (this.state.display == false) {
      this.setState({ display: true })
    }
  }

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

          <View style={styles.vote_container}>
          <Icon
            name='star'
            type='font-awesome'
          />
            <Text style={styles.vote_text}>{film.vote_average}</Text>
          </View>

          <View style={styles.date_container}>
            <Text style={styles.date_text}>{film.release_date}</Text>
            <Icon
              name='long-arrow-right'
              type='font-awesome'
              onPress={() => this._resumeDisplay()}
            />
          </View>
        </View>

        <View style={this.state.display ? styles.resume_container : styles.resume_container_hide}>
          <Text style={styles.resume_text} numberOfLines={6}>{film.overview}</Text>

            <Icon
              iconStyle={styles.cross}
              containerStyle={styles.container_cross}
              name='times'
              type='font-awesome'
              onPress={() => this._resumeDisplay()}
            />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row',
    backgroundColor: '#ebefff',
    marginTop: 20,
    position: "relative"
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: '#ebefff'
  },
  content_container: {
    flex: 1,
    margin: 5,
    
  },
  header_container: {
    flex: 4,
    flexDirection: 'row',
  },

  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,
    textAlign: 'center',
  },

  vote_container: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    flex: 7
  },

  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    marginLeft: 10
  },

  date_container: {
    flex: 2,
    justifyContent: "space-around",
    flexDirection: 'row',
    marginBottom: 10
  },
  date_text: {
    textAlign: 'center',
    fontSize: 18
  },

  resume_container: {
    backgroundColor: 'rgba(0,0,0,0.9)',
    position: "absolute",
    top: 0,
    height: '100%',
    width: '100%',
    padding: 20,
    flex: 1
  },

  resume_container_hide: {
    height: 0,
    width: 0,
  },

  resume_text: {
    color: '#ebefff',
  },

  container_cross:{
    marginTop: 5,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },

  cross: {
    color: '#ebefff',
    justifyContent: "flex-end",
    alignItems: "flex-end"
  }
})

export default FilmItem