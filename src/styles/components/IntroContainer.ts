import styled from 'styled-components';
import backgroundImage from '../../../public/background_image.jpg';


export const Container = styled.section`
  top: 0;
  margin-top: -85px;
  background: url(${backgroundImage})  round;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 775px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px 30px 30px;

  h3 {
    font-family: 'Orbitron', sans-serif;
    color: white;
    font-weight: 200;
    font-size: 50px;
    text-align: center;
    margin-top: 200px;
  }

  h1 {
    color: #fff;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    font-size: 75px;
    text-align: center;
  }
`;