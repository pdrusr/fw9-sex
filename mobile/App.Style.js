import { StyleSheet, Dimensions } from "react-native"

const Estilo = StyleSheet.create({

    titulo: {
        color: "#34222e",
        fontSize: 35,
        marginVertical: 32,
        textAlign: "center"
    },

    imagem: {
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        height: 300,
        resizeMode: "cover",
        width: Dimensions.get("window").width,
    },

    paragrafo: {
        fontSize: 16,
        paddingHorizontal: 16,
        textAlign: "justify"
    }

})

export default Estilo