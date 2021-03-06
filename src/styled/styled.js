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

    @media (max-width: 320px) {
        width: 80vw;
    }
`;
// sneaker
export const Circle = styled.div`
    max-height: 35vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    
`;
// circle
export const InnerCircle = styled.div`
    width: 150px;
    height: 150px;
    background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.75),
        rgba(0, 0, 0, 0.75)
    );
    position: absolute;
    border-radius: 50%;
    z-index: 1;
    top: 5rem;
`;
//info
export const InfoDetail = styled.div`
    margin-top: 2rem;
    transform: ${({ y, x }) => y !== 0 && x !== 0 && "translateZ(150px)"};
    transition: ${({ y, x }) => y === 0 && x === 0 && "all 0.75s ease"};
`;

// card
export const Details = styled(Wrapper)`
    width: 400px;
    height: 600px;
    max-height: 80vh;
    box-shadow: 0 20px 20px rgba(0,0,0,.2), 0 0 50px rgba(0,0,0,.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    transform: rotateY(${({ y }) => y}deg) rotateX(${({ x }) => x}deg);
    transition: ${({ y, x }) => y === 0 && x === 0 && "all 0.5s ease"}
`;

// container
export const Card = styled(Wrapper)`
    width: 800px;
    height: 800px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
    background: transparent;
    box-shadow: none;

    @media (max-width: 320px) {
        width: fit-content;
        position: static;
        left: none;
        transform: none;
        margin: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        button {
            margin-bottom: 1rem;
        }
    }
`;

export const Img = styled.img`
    width: 100px;
    height: 50px;
    z-index: 2;
    transform: ${({ y, x }) => y !== 0 && x !== 0 && "translateZ(150px)"};
    transition: ${({ y, x }) => y === 0 && x === 0 && "all 0.75s ease"};
    box-shadow: 0 20px 20px rgba(0,0,0,.5), 0 0 50px rgba(0,0,0,.5);

    @media (max-width: 768px) {
        width: 75px;
        height: 75px;
    }
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

    @media (min-width: 320px) {
        font-size: 12px;
    }

    @media (min-width: 768px) {
        font-size: 18px;
    }
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

    @media (max-width: 320px) {
        font-size: 12px;
    }
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

    @media (max-width: 320px) {
        flex-direction: column;
        form {
            display: flex;
            align-items: center;    
        }
    }
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

    @media (max-width: 320px) {
        font-size: 12px;
        margin-bottom: 1rem;
    }
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
    padding-top: 1rem;

    @media (max-width: 320px) {
        padding: 0;
    }
`;

export const Pagination = styled(Regions)`
    padding-left: 0;

    @media (max-width: 320px) {
        display: none;
    }
    ul {
        list-style: none;
        display: flex;
        justify-content: center;
        padding: 0;
        width: 100%;
        padding-bottom: 1rem;
        li {
            margin: 0 1rem;
        }
    }
`;

export const Title = styled.h3`
    width: 100%;
    text-align: center;
    margin: 1rem 0;
    font-size: 22px;
    text-overflow: ellipsis;
    overflow:hidden;
    white-space:nowrap;

    @media (max-width: 768px) {
        font-size: 20px;
    }
    @media (max-width: 320px) {
        font-size: 16px;
    }
`;

export const Filter = styled.li`
    font-size: 20px;
    color: #fff;
    margin: 1rem;
    border: 2px solid #fff;
    border-radius: 10px;
    padding: 0 10px;

    @media (max-width: 320px) {
        font-size: 14px;
    }
`;

export const Neighbour = styled.p`
    color: ${({ theme }) => theme.text};
    cursor: pointer;
`;

export const NavBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

