import styled from 'styled-components'
import { CircularProgress, Paper } from '@material-ui/core'
import { device } from '../../utils/style-helpers'

export const StyledCircularProgress = styled(CircularProgress)`
  && {
    color: #f8af18;
  }
`

export const StyledDropdown = styled(Paper)`
  position: absolute;
  max-height: 240px;
  overflow-y: auto;
`

export const StyledWorks = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  @media ${device.laptop} {
    grid-gap: 32px 0;
  }
`

export const StyledItems = styled.div`
  && {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(2, 1fr);
    @media ${device.tablet} {
      grid-template-columns: repeat(4, 1fr);
    }
    @media ${device.laptop} {
      grid-template-rows: max-content;
      grid-template-columns: repeat(7, 1fr);
    }
  }
`
