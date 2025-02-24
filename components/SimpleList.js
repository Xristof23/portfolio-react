import styled from "styled-components"

const UnorderList = styled.ul`
  list-style-type: disc;
  margin: 0.25rem 1.25rem 0.25rem;
  padding: 0.25rem;
`;

export default function SimpleList({ array }) {
    return (<UnorderList>
        {array.map((entry) => <li key={entry}>{entry}</li>)
    }</UnorderList>)
}