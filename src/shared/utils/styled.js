import styled from 'styled-components';

export const Wrapper = styled.div`
display: inline-block;
background: #eee;
border: 1px solid #ccc;
width: 300px;
max-height: 100%;
border-radius: 10px;
padding: 10px;
margin: 10px;
text-align: center;
font-family: Verdana, Geneva, Tahoma, sans-serif;
cursor: pointer;
`;

export const Img = styled.img`
width: 150px;
height: 150px;
border: 3px solid lightslategray;
border-radius: 50%;
`;

export const Strong = styled.strong`
  color: firebrick;
`;

export const Info = styled.div`
  font-size: 12px;
  margin: 3rem 1.5rem;
  text-align: left;
  display: flex;
  justify-content: space-between;
`;

export const Right = styled.div`
  text-align: right;
`;

export const List = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const Controls = styled.div`
    width: 100%;
    background: #ccc;
    padding: 1rem;
    display: flex;
    justify-content: center;
`;

export const Input = styled.input`
    width: 300px;
    padding: .5rem;
    border: none;
    border-radius: 10px;
    margin-right: 1rem;
    outline: none;
    font-size: 20px;
`;

export const Submit = styled(Input)`
    padding: .5rem;
    border: none;
    border-radius: 10px;
    outline: none;
    font-size: 20px;
    background: blanchedalmond;
    cursor: pointer;
`;