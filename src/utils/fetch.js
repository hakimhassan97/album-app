import React,{ createContext,useContext, useState, useEffect } from "react";
import axios from "axios";

export const getAlbum = async() => //[{id: 102, title: 'aparo'}]
await axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/albums',
    responseType: 'json'
  }).catch(e => console.log('Fetch album error')).then(res => {return(res.data)});

export const getPhotos = async (albumId) => 
await axios({
  method: 'get',
  url: `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`,
  responseType: 'json'
}).catch(e => console.log('Fetch pictures error')).then(res => {return(res.data)});




