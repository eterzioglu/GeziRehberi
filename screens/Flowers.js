import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import React, { useState, useEffect, useRef } from "react";
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  Button,
  SafeAreaView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Firebase from "../config/Firebase";

import colors from "../components/Colors";
import TodoList from "../components/TodoList";
import AddListModal from "../components/AddListModal";



//disable yellow warnings on EXPO client!
console.disableYellowBox = true;

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});



const Flowers = () => {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [users, setUsers] = useState([]); // Initial empty array of users
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);


  
  const notificationListener = useRef();
  const responseListener = useRef();
  

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current = Notifications.addNotificationReceivedListener(
      (notification) => {
        setNotification(notification);
      }
    );

    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(response);
      }
    );

    Notifications.scheduleNotificationAsync({
      content: {
        title: "There is a message from your flowers 🌸",
        body: "Please don't forget to water us",
        data: { data: "goes here" },
      },
      trigger: { seconds: 60 * 60* 24000 },
    });

    var user = Firebase.auth().currentUser;


    const subscriber = Firebase.firestore()
      .collection("user")
      .doc(user)
      .collection(user)
      .onSnapshot((querySnapshot) => {
        const users = [];

        querySnapshot.forEach((documentSnapshot) => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setUsers(users);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
      subscriber();
    };
  }, []);

  const [addFlowersVisible, setFlowers] = useState(false);

  toggleAddFlowersModal = () => {
    setFlowers(true);
  };

  closeModal = () => {
    setFlowers(false);
  };

  renderList = (list) => {
    return <TodoList list={list} />;
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={addFlowersVisible}
        onRequestClose={toggleAddFlowersModal}
      >
        <AddListModal closeModal={closeModal} />
      </Modal>

      <Text style={styles.title}>FLOWERS</Text>

      <View style={styles.listArea}>
        <FlatList
          data={users}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => renderList(item)}
        />
      </View>

      <View style={styles.buttonArea}>
        <TouchableOpacity
          style={styles.addList}
          onPress={toggleAddFlowersModal}
        >
          <AntDesign name="plus" size={16} color={colors.blue} />
        </TouchableOpacity>
        <Text style={styles.add}>Add Flower</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightPink,
    alignItems: "center",
  },
  listArea: {
    flex: 1,
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: colors.green,
    paddingTop: 20,
  },
  buttonArea: {
    paddingBottom: 10,
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    marginTop: 0,
  },
  add: {
    color: colors.blue,
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8,
  },
});

export default Flowers;
