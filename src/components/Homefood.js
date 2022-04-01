import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

// CSS Settings
import {
  Header, AppNameComp,
  SearchComp, SearchInput
} from './headerComponents';

import {
  RecipeContainer, RecipeName, IngredientsLabel, SeeCompleteLabel
} from './recipeComponents';

import Footer from './Footer';
import { Button } from "reactstrap";

const APP_ID = "3a52131c";
const APP_KEY = "723dcf897f4f05dd03d6e0d05a65fd2e";

const Container = styled.div`
    display: flex;
    flex-direction: column;
  `;
const RecipeList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 20;
  justify-content: space-evenly;
`;
const Placeholder = styled.img`
  width: 140px;
  height: 140px;
  margin: 200px;
`;

const RecipeComponent = (props) => {
  const [show, setShow] = useState(false);
  console.log("props", props);
  const { recipeObj } = props;
  return (
    <>
      <Dialog open={show}>
        <DialogTitle>Detail Recipe</DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <th>Ingredients</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredientObj) => ( 
              <tr>
                <td>{ingredientObj.text}</td>
                <td>{ingredientObj.weight}</td>
              </tr>))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <IngredientsLabel onClick={() => window.open(recipeObj.url)}>See More</IngredientsLabel>
          <SeeCompleteLabel onClick={() => setShow("")}>Close</SeeCompleteLabel>
        </DialogActions>
      </Dialog>
      <RecipeContainer>
        <img src={recipeObj.image} />
        <RecipeName>{recipeObj.label}</RecipeName>
        <IngredientsLabel onClick={() => setShow(true)}>Ingredients</IngredientsLabel>
        <SeeCompleteLabel onClick={() => window.open(recipeObj.url)}>See Complete Recipe</SeeCompleteLabel>
      </RecipeContainer>
    </>
  );
};

const Homefood = () => {


  const Logout = async () => {
    try {
      await axios.delete('http://localhost:5000/logout');
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
    getUsers();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) navigate("/Home");
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:5000/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const getUsers = async () => {
    const response = await axiosJWT.get("http://localhost:5000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUsers(response.data);
  };

  const [timeoutId, updateTimeoutId] = useState();
  const [ListRecipe, updateListRecipe] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    updateListRecipe(response.data.hits);
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 500);
    updateTimeoutId(timeout);
  };
  return (
    <Container>
      <Header>
        <img src="/paimon-logo.png" width={60} height={60} />
        <AppNameComp style={{ marginTop: 12 }}>
          Paimon Recipe
        </AppNameComp>
        <SearchComp>
          <img src="/icons8-search.svg" width={30} height={30} margin={15} />
          <SearchInput placeholder="Paimon can help you :)" onChange={onTextChange} />
        </SearchComp>
        <Button color="light" size="lg" onClick={Logout} >
        Logout
      </Button>
      </Header>
      <RecipeList>
        {ListRecipe.length ?
          ListRecipe.map((recipeObj) => (
            <RecipeComponent recipeObj={recipeObj.recipe} />
          )): <Placeholder src="/paimon-logo.png"/>}
      </RecipeList>
      <Footer />
    </Container>
  );
}

export default Homefood