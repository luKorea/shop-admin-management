import styled from 'styled-components'

export const PageLayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  .layout-navbar {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: var(--nav-size-height);
    z-index: 100;
    &-hidden {
      height: 0;
    }
  }
`
