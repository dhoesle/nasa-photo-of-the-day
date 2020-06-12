import styled from 'styled-components'

const margin = '16px'
const tablet = '(max-width: 800px)'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgb(210, 210, 210);
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  border-radius: ${props => props.count || 8}px;
  margin: ${margin};
  padding: 16px 8px 12px 16px;
  background-color: black;
  color: ${props => {
    return props.danger ? 'red' : 'inherit';
  }};
  @media ${tablet} {
    color: purple;
  }
`

export default Container