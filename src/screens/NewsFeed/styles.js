import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1, backgroundColor: '#ffffff'
    },
    container: { flex: 1 },
    headerContainer: {
        width: '100%', alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: '#000',
        paddingVertical: 10
    },
    headerText: { fontSize: 20 },
    searchContainer: {
        borderWidth: 0.5,
        borderColor: '#000',
        borderRadius: 10,
        width: "90%",
        alignSelf: 'center',
        marginTop: 12
    },
    searchInput: { fontSize: 16, padding: 10 },
    categoriesContainer: {
        marginTop: 12,
        paddingHorizontal: 4,
        alignItems: 'center',
    },
    categoryContainer: {
        borderColor: "#000000", borderWidth: 0.5, borderRadius: 20, padding: 8,
        width: "30%",
        alignItems: 'center',
        marginHorizontal: 4
    },
    categorySeperator: { margin: 8 },
    newsItemContainer: {
        borderColor: "#000000", borderWidth: 0.5, borderRadius: 20, padding: 12,
        marginHorizontal: 4
    },
    text1: { fontSize: 16, fontWeight: 'bold' },
    text2: { fontSize: 14, marginTop: 4 },
    coverImage: { width: "100%", height: 150, marginTop: 4 },
    text3: { fontSize: 12, color: "#000000", marginTop: 4 },
    newsListContainer: {
        paddingHorizontal: 16,
        flex: 1,
        marginTop: 12,
        alignItems: 'center'
    },
    loader: { marginVertical: 8 },
    newsSeperator: { margin: 6 },


});

export default styles;
