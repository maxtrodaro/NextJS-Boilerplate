import { render, screen } from '@testing-library/react'

import Boticario from '.'

describe('Boticario test component', () => {
  it('should render the heading', () => {
    const { container } = render(<Boticario />)

    expect(screen.getByRole('heading', { name: /Boticario/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
