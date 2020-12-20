import React, { Component } from "react";
import MapView from "react-native-maps";
import { View, StyleSheet } from "react-native";

import PlaceList from "../utils/PlaceList";

class Natural extends Component {
  state = {
		region: {
			latitude: 41.0087,
			longitude: 29.0173,
			latitudeDelta: 0.0622,
			longitudeDelta: 0.0421,
		},
		places: [],
		fetching: false
	};

	async componentDidMount() {
		this.findMe();
	}

	findMe = async () => {
    this.watchID = await navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          },
        });
      },
      (error) => console.log(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

	render() {
		return (
			<View style={styles.container}>
				<MapView
					style={styles.map}
					showsUserLocation={true}
					region={this.state.region}
					ref={ref => this.map = ref}
				>
					{
						this.state.places.map(place => {
							const { geometry: { location: { lat, lng }} } = place;
							console.log(place);
							return(
								<Marker
									key={place.id}
									coordinate={{
										latitude: lat,
										longitude: lng
									}}
									title={place.name}
								/>
							)
						})
					}
				</MapView>

				<View style={styles.placesContainer}>
					{
						this.state.fetching ? <Text style={styles.loading}>Loading nearby places...</Text> : <PlaceList map={this.map} places={this.state.places} />
					}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  map: {
    position: "absolute",
    zIndex: -1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Natural;
