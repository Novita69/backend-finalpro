import styled from 'styled-components';

export const Header = styled.div`
  color:white;
  background-color:black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555
`;

export const AppNameComp = styled.div``;

export const SearchComp = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  width: 50%;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
`;

// Recipe Container List
// export const RecipeList = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   padding: 30px;
//   gap: 20;
//   justify-content: space-evenly;
// `;

// export const RecipeContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 10px;
//   width: 300px;
//   box-shadow: 0 3px 10px 0 #aaa;
// `;

// export const CoverImg = styled.img`
//   height: 200px;
// `;

// export const RecipeName = styled.span`
//   font-size: 18px;
//   font-weight: bold;
//   color: black;
//   margin: 10px 0;
// `;

// export const IngredientsLabel = styled.span`
//   font-size: 18px;
//   border: solid 1px green;
//   color: black;
//   margin: 10px 0;
//   cursor: pointer;
//   padding: 10px 15px;
//   border-radius: 5px;
//   color: green;
//   text-align: center;
//   margin-bottom: 8px;
// `;

// export const SeeCompleteLabel = styled.span`
//   font-size: 18px;
//   border: solid 1px #eb3300;
//   color: black;
//   margin: 10px 0;
//   cursor: pointer;
//   padding: 10px 15px;
//   border-radius: 5px;
//   color: #eb3300;
//   text-align: center;
// `;

// const SearchIcons = styled.img`
//   width: 32px;
//   height: 32px;
// `;