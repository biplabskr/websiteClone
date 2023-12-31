import React from 'react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import NotAvailable from '../components/NotAvailable';
import SelectGenre from '../components/SelectGenre';
import Slider from '../components/Slider';
import { fetchMovies, getGenres } from '../store';
import { firebaseAuth } from '../utils/firebase-config';

export default function UserLiked() {
    const [isScrolled, setIsScrolled] = useState(false);

    const movies = useSelector((state)=> state.netflix.movies);
    
    const[email,setEmail] = useState(undefined);

    onAuthStateChanged(firebaseAuth,(currentUser)=>{
        if(currentUser){

            setEmail(currentUser.email);

        }else{
            navigate("/login");
        }
        
      })
  
    const dispatch = useDispatch();
  
    useEffect(()=> {
      if(email){
        dispatch(getUserLikedMovies(email));
      }
    },[email]);

  
    window.onscroll = () => {
  
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => {window.onscroll = null};
    }

  return (
    <Container>

        <Navbar isScrolled={isScrolled}/>
        <div className='content flex column'>
            <h1>My list
            </h1>

            <div className='grid flex'>
                {movies.map((movie,index)=>{

                    return <Card movieData={movie} index={index} key={movie.id} isLiked={true}/>

                })}

            </div>

        </div>


      
    </Container>
  )
}
const Container = styled.div`
.content{
    margin: 2.3rem;
    margin-top: 8rem;
    gap: 3rem;

}`;