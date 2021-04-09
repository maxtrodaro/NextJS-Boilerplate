import { render, screen } from '@testing-library/react'

import BackOfficeComponent from '.'

describe('BackOfficeComponent test', () => {
  it('should render the title', () => {
    const { container } = render(<BackOfficeComponent title="header text" />)

    expect(
      screen.getByRole('heading', { name: /header text/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the description', () => {
    const { container } = render(<BackOfficeComponent description="description" />)

    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
