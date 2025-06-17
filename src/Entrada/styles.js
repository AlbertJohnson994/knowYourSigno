// // EntradaStyle.js
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// export const Container = styled.div`
//   max-width: 100%;
//   padding: 0.2rem;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
//   font-family: "Segoe UI", sans-serif;
//   color: #1f2937;
//   line-height: 1.6;

//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;


// export const Title = styled.h1`
//   font-size: 1.9rem;
//   font-weight: bold;
//   margin-bottom: 1rem;
//   color: #fff;
//   text-align: center;
//   //background-color: #c6c6c6;
// `;

// export const Form = styled.form`
//   max-width: 500px;
//   padding: 1rem;
//   //background-color: #c6c6c6;
//   border-radius: 0.5rem;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
//   margin-bottom: 1rem;  
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

// export const Input = styled.input`
//     border-radius: 0.375rem;
// `;

// export const Button = styled.button`
//   padding: 0.5rem;
//   background-color: #16a34a;
//   color: white;
//   border: none;
//   border-radius: 0.375rem;
//   cursor: pointer;

//   &:hover {
//     background-color: #15803d;
//   }
// `;

// export const ResultBox = styled.div`
//   margin-top: 1.5rem;
//   padding: 1rem;
//   background-color: white;
//   border-radius: 0.375rem;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
// `;

// export const ResultTitle = styled.h2`
//   font-size: 1.25rem;
//   font-weight: 600;
//   margin-bottom: 0.5rem;
// `;

// export const ResultText = styled.p`
//   margin-bottom: 0.5rem;
// `;

// export const LinkBox = styled.div`
//   margin-top: 1rem;
// `;

// export const StyledLink = styled(Link)`
//   color: #fff;
//   text-decoration: underline;
//   cursor: pointer;

//   &:hover {
//     color: #1d4ed8;
//   }
// `;


// EntradaStyle.js
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 100%;
  padding: 0.2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-family: "Segoe UI", sans-serif;
  color: #1f2937;
  line-height: 1.6;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 1.9rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #fff;
  text-align: center;
  /* background-color: #c6c6c6; */
`;

export const Form = styled.form`
  max-width: 500px;
  padding: 1rem;
  /* background-color: #c6c6c6; */
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;  
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  border-radius: 0.375rem;
`;

export const Button = styled.button`
  padding: 0.5rem;
  background-color: #16a34a;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;

  &:hover {
    background-color: #15803d;
  }
`;

export const ResultBox = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: white;
  border-radius: 0.375rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const ResultTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const ResultText = styled.p`
  margin-bottom: 0.5rem;
`;

export const LinkBox = styled.div`
  margin-top: 1rem;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #1d4ed8;
  }
`;
