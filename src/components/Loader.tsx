import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

import Colors from '@utility/styles/Colors';

const Loader = () => {
    return <ActivityIndicator size="large" color={Colors.primary} />;
}

export default Loader;