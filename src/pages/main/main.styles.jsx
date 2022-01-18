import styled from 'styled-components';

export const MainPageContainer = styled.div`
  height: 100vh;
  padding: 25px;
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
`;

export const MainContentContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SquaresContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const Square = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid black;
  background-color: ${({ color }) => color};
  font-size: 3rem;
  margin: 10px;

  display: grid;
  justify-items: center;
  align-items: center;
`;

export const CustomButton = styled.button`
  background-color: ${({ color }) => color};
  font-size: 3rem;
  border-radius: 10px;
  padding: 10px;
`;

export const HeaderFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
