import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { colors } from "../../styles/styles.css";
import { useNavigation } from "@react-navigation/native";

const ContentPage = ({ route }) => {
    const data = route.params.data;
    const router = useNavigation()

    // Coordinates from data
    const latitude = parseFloat(data.ComplaintLat);
    const longitude = parseFloat(data.ComplaintLong);

    const handleViewDetails = () => {
        router.push('follow',{ data:data.ticket_follow })
    };

    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            {/* Image Section */}
            {data.ComplaintImage ? (
                <Image source={{ uri: data.ComplaintImage }} style={styles.image} />
            ) : (
                <View style={[styles.image, styles.placeholder]}>
                    <Text style={styles.placeholderText}>No Image</Text>
                </View>
            )}

            {/* Content Section */}
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Type: {data.ComplaintTypeName}</Text>
                <Text style={styles.cardSubtitle}>Place: {data.ComplaintPlace}</Text>
                <Text style={styles.cardSubtitle}>Street: {data.ComplaintStreetAlley}</Text>
                <Text style={styles.cardDescription}>
                    <Text style={{ fontWeight: "bold" }}>Note:</Text> {data.ComplaintNote}
                </Text>
                <Text style={styles.cardStatus}>Status: {data.ComplaintStatus}</Text>
                <Text style={styles.cardDate}>Date: {data.ComplaintDate}</Text>
                {/* Footer Section */}
                <View style={styles.cardFooter}>
                    <TouchableOpacity style={styles.button} onPress={handleViewDetails}>
                        <Text style={styles.buttonText}>ติดตามสถานะ</Text>
                    </TouchableOpacity>
                </View>
                {/* Map Section */}
                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: latitude,
                            longitude: longitude,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        }}
                    >
                        <Marker coordinate={{ latitude, longitude }} title="Complaint Location" />
                    </MapView>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContent: {
        padding: 16,
        backgroundColor: colors.backgroundColor,
        marginLeft: 9,
        marginRight: 9,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 8,
    },
    cardSubtitle: {
        fontSize: 14,
        color: "#555",
        marginBottom: 4,
    },
    cardDescription: {
        fontSize: 14,
        color: "#555",
        lineHeight: 20,
        marginVertical: 8,
    },
    cardStatus: {
        fontSize: 14,
        color: "#e67e22",
        fontWeight: "bold",
        marginTop: 8,
    },
    cardDate: {
        fontSize: 12,
        color: "#999",
        marginTop: 8,
    },
    cardFooter: {
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: "#ddd",
        alignItems: "flex-end",
    },
    button: {
        backgroundColor: colors.Button,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
    image: {
        width: "95%",
        height: 180,
        backgroundColor: "#ddd",
        margin: "auto",
        marginTop: 10,
        borderRadius: 5
    },
    placeholder: {
        justifyContent: "center",
        alignItems: "center",
    },
    placeholderText: {
        color: "#999",
        fontSize: 16,
    },
    mapContainer: {
        width: "100%",
        height: 300,
        marginTop: 15
    },
    map: {
        width: "98%",
        height: "60%",
        borderRadius: 10,
    },
});

export default ContentPage;
