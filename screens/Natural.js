import React, { Component } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { View, StyleSheet } from "react-native";
import { GOOGLE_API_KEY } from "react-native-dotenv";

import PlaceList from "../utils/PlaceList";

class Natural extends Component {
  static navigationOptions = props => {
    const placeName = props.navigation.getParam("Natural Places");
    return { headerTitle: placeName.toUpperCase() };
  };
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      long: null,
      places: [],
      isLoading: false,
      placeType: "restaurant"
    };
  }
  componentDidMount() {
    console.log(this.props);
    const { navigation } = this.props;
    const placeType = navigation.getParam("placeType");
    this.setState({ placeType: placeType });

    this.getCurrentLocation();
  }

  //Kullanıcının şu an bulunduğu konum..
  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      this.setState({ lat: lat, long: long });
      this.getPlaces();
    });
  }

  //mekanın url adresi..
  getPlacesUrl(lat, long, radius, type, apiKey) {
    const baseUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?`;
    const location = `location=${lat},${long}&radius=${radius}`;
    const typeData = `&types=${type}`;
    const api = `&key=${apiKey}`;
    return `${baseUrl}${location}${typeData}${api}`;
  }

  getPlaces() {
    const { lat, long, placeType } = this.state;
    const markers = [];
    const url = this.getPlacesUrl(lat, long, 1500, placeType, GOOGLE_API_KEY);
    fetch(url)
      .then(res => res.json())
      .then(res => {
        res.results.map((element, index) => {
          const marketObj = {};
          marketObj.id = element.id;
          marketObj.name = element.name;
          marketObj.photos = element.photos;
          marketObj.rating = element.rating;
          marketObj.vicinity = element.vicinity;
          marketObj.marker = {
            latitude: element.geometry.location.lat,
            longitude: element.geometry.location.lng
          };

          markers.push(marketObj);
        });
        //mekan listesini düzenlediğimiz kısım..
        this.setState({ places: markers });
      });
  }

  render() {
    const { lat, long, places } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.mapView}>
          <MapView
            style={{
              flex: 1
            }}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: lat,
              longitude: long,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          >
            {places.map((marker, i) => (
              <MapView.Marker
                key={i}
                coordinate={{
                  latitude: marker.marker.latitude,
                  longitude: marker.marker.longitude
                }}
                title={marker.name}
              />
            ))}
          </MapView>
        </View>
        <View style={styles.placeList}>
          <PlaceList places={places} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  mapView: {
    flex: 1,
    justifyContent: "center",
    height: "50%",
    width: "100%"
  },
  placeList: {
    flex: 1,
    justifyContent: "center"
  },
});


export default Natural;
