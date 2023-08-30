import React, {useEffect, useState } from 'react'
import { getGistForUser, getPublicGists } from '../services/gistService';
import Gist from './Gist';
import _ from 'lodash';


const GistList = ({searchText}) =>{
    const [allGists,setAllGists] = useState([])
  console.log('search text',searchText)
    useEffect(()=>{
        if(!searchText){
            getPublicGists().then(({data})=>{
              console.log(data )
              setAllGists([...data])
              
            }).catch((err)=>{
              console.log(err)
            });
        }
        if(searchText){

          _.debounce((searchText) => {
            getGistForUser(searchText).then(({data})=>{
              console.log(data)
              setAllGists([...data])
          }).catch((err)=>{
            setAllGists([])
              console.log(err)
          })
          },1000); 
           
        }

      },[searchText])

      return  allGists.length ? allGists?.map((gist)=> <Gist key={gist.id} gist={gist}/> ) : null

}
export default GistList
