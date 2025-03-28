// express 
const express = require('express')

// importazione dei dati
const posts = require('../data/posts.js');
const { error } = require('console');


// index
function index(req,res){
    res.json(posts);
}

// show
function show(req,res){
    const currentId = parseInt(req.params.id);
    const currentPost = posts.find(post => post.id === currentId)
    if(!currentPost){
        res.status(404)
        return res.json({
            error: 'Not found',
            message: 'Post non trovato'
        })
    }
    res.json(currentPost)
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
    
}

// esportazione controller
module.exports = {index,show,store,update,modify,destroy}