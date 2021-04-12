import { render, screen, fireEvent } from '@testing-library/react'

import HomeComponent from '.'

describe('HomeComponent test', () => {
  it('should render the title', () => {
    const { container } = render(<HomeComponent title="header text" />)

    expect(
      screen.getByRole('heading', { name: /header text/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the description', () => {
    const { container } = render(<HomeComponent description="description" />)

    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    const { container } = render(<HomeComponent buttonText="Ir para o backoffice" />)

    expect(
      screen.getByRole('button', { name: /backoffice/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
