import styled from 'styled-components'

const Container = styled.section`
  width: 100%;
  flex-grow: 1;
  min-height: 100vh;
  /* .sidebar {
    background-color: rgba(35, 55, 75, 0.9);
    color: #fff;
    padding: 6px 12px;
    font-family: monospace;
    z-index: 1;

    margin: 12px;
    border-radius: 4px;
  }

  .map-container {
    height: 400px;
  } */

  #deckgl-wrapper {
   overflow: hidden;
   overflow: hidden;
    position: relative !important;
    height: 100% !important;
  }
`

export default Container
