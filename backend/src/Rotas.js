import express from "express"
import Pesquisas from "./Pesquisas.js"

const rotas = express.Router()

rotas.get("/pesquisas", function(requisicao, resposta) {
    resposta.status(200).json(Pesquisas)
})

rotas.get("/pesquisa/:codigo", function(requisicao, resposta) {
    const { codigo } = requisicao.params
    const resultado = Pesquisas.filter(function(pesquisa) {
        return pesquisa.codigo == codigo
    })
    resposta.status(200).json(resultado[0])
})

rotas.post("/pesquisa", function(requisicao, resposta) {
    const resultado = requisicao.body
    console.log(resultado)
    resposta.status(200).json(resultado)
})

rotas.get("*", function(requisicao, resposta) {
    resposta.sendStatus(404)
})

export default rotas