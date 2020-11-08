import styled from 'styled-components';

export const Wrapper = styled.div`
    display: inline-block;
    background: ${({ theme }) => theme.secondary};
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    width: 300px;
    max-height: 100%;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    text-align: center;
`;

export const Details = styled(Wrapper)`
    width: 500px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;

export const Img = styled.img`
    width: 150px;
    height: 150px;
    border: 3px solid ${({ theme }) => theme.text};
    border-radius: 50%;
`;

export const Strong = styled.span`
    font-weight: bold;
    color: ${({ theme }) => theme.strong};
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

export const Btn = styled.button`
    padding: 10px;
    margin: 0 10px;
    border: 2px solid ${({ theme }) => theme.text};
    border-radius: 10px;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
    font-size: 16px;
    cursor: pointer;
    outline: none;
`;

export const List = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const Controller = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.primary};
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const Input = styled.input`
    width: 300;
    padding: .5rem;
    border: 2px solid ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.secondary};
    border-radius: 10px;
    margin-right: 1rem;
    outline: none;
    font-size: 20px;
    color: ${({ theme }) => theme.text};
`;

export const Submit = styled(Input)`
    cursor: pointer;
`;

export const Regions = styled.ul`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    background: ${({ theme }) => theme.filter};
    list-style: none;
    margin-top: 0;
    color: whitesmoke;
    padding: 1rem 0;
`;

export const Pagination = styled(Regions)`
    ul {
        list-style: none;
        display: flex;
        padding: 0;
        li {
            margin: 0 1rem;
        }
    }
`;

export const Title = styled.h3`
    width: 100%;
    text-align: center;
    margin-top: 0;
`;

export const Filter = styled.li`
    font-size: 20px;
    color: #fff;
    margin: 0 1rem;
    border: 2px solid #fff;
    border-radius: 10px;
    padding: 0 10px;
`;

export const Neighbour = styled.p`
    color: ${({ theme }) => theme.text};
    cursor: pointer;
`;

