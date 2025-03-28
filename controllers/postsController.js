// express 
const express = require('express')

// importazione dei dati
const posts = require('../data/posts.js')


// index
function index(req,res){
    console.log('lista posts')
}

// show
function show(req,res){
    console.log('post singolo')
}

// store
function store(req,res){
    console.log('aggiungi post')
}

// update
function update(req,res){
    console.log('modifica del post')
}

// modify
function modify(req,res){
    console.log('modifica parte del post')
}


// destroy
function destroy(req,res){
    console.log('cancella post')
}

// esportazione controller
module.exports = {index,show,store,update,modify,destroy}