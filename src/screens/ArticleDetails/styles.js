import {  StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safeAreaContainer:{
        flex: 1, backgroundColor: '#ffffff'
    },
    container: { flex: 1 },
    headerContainer: {
        width: '100%', alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: '#000',
        paddingVertical: 10,
        flexDirection: 'row',
    },
    backArrowContainer: { position: 'absolute', zIndex: 2, marginLeft: 8 },
    backArrowImage: { height: 20, width: 20 },
    headerText: { fontSize: 20, flex: 1, textAlign: 'center' },
    subContainer: { padding: 12 },
    text1: { fontSize: 16, fontWeight: 'bold' },
    text2: { fontSize: 14, marginTop: 4 },
    coverImage: { width: "100%", height: 250, marginTop: 4 },
    text3: { fontSize: 12, marginTop: 4 },
    
});

export default styles;
