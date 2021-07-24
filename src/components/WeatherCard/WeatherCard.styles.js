import styled from 'styled-components'
import { Card, CardContent, Divider, Typography } from '@material-ui/core'

export const StyledCard = styled(Card)`
  && {
    display: grid;
    grid-gap: 8px 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    padding: 16px;
    text-align: center;
  }
`

export const StyledCardHead = styled.div`
  display: grid;
  grid-gap: 8px 0;
  padding: 0;
`

export const StyledDate = styled(Typography)`
  min-height: 48px;
`

export const StyledImage = styled.img`
  display: flex;
  justify-content: center;
  width: 60%;
  margin: 0 auto;
`

export const StyledCardContent = styled(CardContent)`
  && {
    padding: 0;
    &:last-child {
      padding-bottom: 0;
    }
  }
`

export const StyledDivider = styled(Divider)`
  && {
    width: 50%;
    margin: 8px auto;
  }
`
