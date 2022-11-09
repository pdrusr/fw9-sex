import React, { useState, useEffect } from "react"
import { ScrollView, View, Text, Image, StatusBar } from "react-native"

import Estilo from "./App.Style.js"

import axios from "axios"

export default function App() {

    const [ pesquisas, definirPesquisas ] = useState([])

    useEffect(function() {

        axios.get("http://192.168.0.18:4000/pesquisas")

            .then(function(resultado) {
                if (resultado.status === 200)
                    definirPesquisas(resultado.data)
                else
                    console.error(resultado.status)
            })
        
            .catch(function(erro) {
                console.error(erro)
            })

    }, [])

    return <ScrollView>
        <StatusBar barStyle="light-content" backgroundColor="#222"/>
        
        { pesquisas.length > 0 ?

            pesquisas.map(function(pesquisa, indice) {

                const data = new Date(pesquisa.datapub)
                const dataconv = data.toLocaleDateString("pt-BR")

                return <View key={ indice }>

                    <Image source={{ uri: pesquisa.imagem }} style={ Estilo.imagem }/>

                    <Text style={ Estilo.titulo }> { pesquisa.titulo } </Text>

                    <Text style={ Estilo.paragrafo }> { pesquisa.conteudo } </Text>

                    <Text> Data: { dataconv } </Text>

                </View>

            })

            :

            <View>
                <Text> Pesquisa não encontrada! </Text>
            </View>
        }

    </ScrollView>
}