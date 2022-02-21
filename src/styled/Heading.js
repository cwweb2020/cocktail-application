import styled from 'styled-components';

export const Heading = styled.h2`
   font-family: ${props => props.font || "'Dancing Script', cursive "};
   font-size: ${props => props.fs || '3.1rem'};
   text-align: ${props => props.ta || 'center'};
   
`