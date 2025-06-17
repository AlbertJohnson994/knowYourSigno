// styles.ts
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
  background-color: #fdfdfd;
  color: #222;
  line-height: 1.6;
`;

export const Heading = styled.h1`
  font-size: 1.8rem;
  margin: 2rem 0 1rem;
  color: #333;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const SpanHighlight = styled.span`
  font-weight: bold;
  color: #0077cc;
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 1.5rem;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #e0e0e0;
`;

export const TableHeader = styled.th`
  padding: 0.75rem;
  text-align: left;
  border: 1px solid #ccc;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #fafafa;
  }
`;

export const TableCell = styled.td`
  padding: 0.75rem;
  border: 1px solid #ddd;
`;
export const BackLink = styled.a`
  color: #2563eb;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #1d4ed8;
  }
`;
export const Footer = styled.footer`
  text-align: center;
  margin-top: 2rem;

  img {
    max-width: 40px;
    margin: 0 auto;
    padding: 0.5rem 0;
    display: block;
  }

  p {
    color: #4b5563;
    font-size: 0.875rem;
  }
`;
export const StyledLink = styled(RouterLink)`
  color: #2563eb;
  text-decoration: underline;

  &:hover {
    color: #1d4ed8;
  }
`;