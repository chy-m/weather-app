import styled from 'styled-components'
import { device } from '../../utils/style-helpers'

export const StyledWorks = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  @media ${device.laptop} {
    grid-gap: 0 24px;
  }
`

export const StyledItems = styled.div`
  && {
    display: grid;
    grid-gap: 16px 0;
    @media ${device.tablet} {
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 16px;
    }

    @media ${device.laptop} {
      grid-template-rows: max-content;
      grid-template-columns: repeat(7, 1fr);
    }
  }
`
