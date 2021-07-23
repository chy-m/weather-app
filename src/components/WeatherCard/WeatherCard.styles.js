import styled from 'styled-components'
import { Card, CardMedia, CardContent } from '@material-ui/core'

export const StyledCard = styled(Card)`
  && {
    display: grid;
    grid-template-rows: auto 1fr;
    max-height: 240px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  }
`

export const StyledCardHead = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 0 12px;
  padding: 12px;
  text-align: center;
`

export const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  margin: 0 auto;
`

export const StyledCardMedia = styled(CardMedia)`
  && {
    border-radius: 100px;
    height: 80px;
    width: 80px;
  }
`

export const StyledCardContent = styled(CardContent)`
  && {
    &:last-child {
      padding-bottom: 16px;
    }
  }
`
