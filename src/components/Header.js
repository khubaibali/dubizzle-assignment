import React from 'react'
import styled from 'styled-components'
import Octicon from 'react-octicon'
import Search from './Search';

function Header({searchText,setSearchText}) {


  return (
    <Wrapper>
      <Octicon name="mark-github" mega/>
      
        <Search >
            <Input value={searchText} placeholder="Search Gists for the username" onChange={(e)=>{setSearchText(e.target.value)}}/>
        </Search>
      
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #24292e;
  color: #ffffff;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus{
    outline: 0;
  }
`;

export default Header
