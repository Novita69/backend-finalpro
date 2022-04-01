import styled from 'styled-components';

// Recipe Container List
export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  box-shadow: 0 3px 10px 0 #aaa;
`;

export const CoverImg = styled.img`
  height: 200px;
`;

export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
`;

export const IngredientsLabel = styled.span`
  font-size: 18px;
  border: solid 1px green;
  color: black;
  margin: 10px 0;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 5px;
  color: green;
  text-align: center;
  margin-bottom: 8px;
`;

export const SeeCompleteLabel = styled.span`
  font-size: 18px;
  border: solid 1px #eb3300;
  color: black;
  margin: 10px 0;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 5px;
  color: #eb3300;
  text-align: center;
`;