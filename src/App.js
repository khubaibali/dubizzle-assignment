
import styled from 'styled-components'
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import GistList from './components/GistList';
import { useState } from 'react';
import './global.css'

const App = () => {
  const [searchText,setSearchText] = useState('')
  return (
    <Wrapper className="App" data-testid="app">
      
        <Header setSearchText={setSearchText} searchText={searchText}  />
        <GistList searchText={searchText}/>
        
      <GlobalStyles/>
    </Wrapper>
  );
}



const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
