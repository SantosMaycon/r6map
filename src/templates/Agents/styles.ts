import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: var(--large) var(--medium);
`

export const Container = styled.section`
  max-width: var(--container);
  margin: auto;
  h3 {
    font-size: 2rem;
    font-weight: 600;
  }

  span {
    display: inline-block;
    font-size: 1.8rem;
    color: #a89ff9;
    margin-bottom: var(--small);
  }
`

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--large);
  text-align: center;
  text-transform: uppercase;
`

export const Body = styled.div`
  margin-bottom: var(--large);
  background: #222a2b;
  padding: var(--small);
  border: 2px solid #a89ff9;
  border-radius: 16px;
  h2 {
    font-size: var(--medium);
    margin-bottom: var(--small);
  }

  p {
    font-size: var(--small);
    margin-bottom: var(--small);
  }
`
