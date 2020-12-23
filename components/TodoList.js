import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import colors from "./Colors";
import TodoModal from "./TodoModal";

export default TodoList = ({ list }) => {
  const [showListVisible, setShowListVisible] = useState(false);

  toggleListModal = () => {
    setShowListVisible(true);
  };

  closeListModal = () => {
    setShowListVisible(false);
  };

  return (
    <View>
      <Modal
        animationType="slide"
        visible={showListVisible}
        onRequestClose={toggleListModal}
      >
        <TodoModal list={list} closeModal={closeListModal} />
      </Modal>
      <TouchableOpacity
        style={[styles.listContainer, { backgroundColor: list.color }]}
        onPress={toggleListModal}
      >
        <Text style={styles.listTitle} numberOfLines={1}>
          {list.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 10,
    borderRadius: 6,
    width:500
  },
  listTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.white,
    marginBottom: 18,
  },
  count: {
    fontSize: 48,
    fontWeight: "200",
    color: colors.white,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.white,
  },
});
