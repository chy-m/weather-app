import React from 'react'
import { StyledMainLayout } from './MainLayout.styles'
import { Container } from '@material-ui/core'

export const MainLayout = ({ children }) => {
  return (
    <StyledMainLayout>
      <Container data-testid='container' size='large'>
        {children}
      </Container>
    </StyledMainLayout>
  )
}

export default MainLayout
