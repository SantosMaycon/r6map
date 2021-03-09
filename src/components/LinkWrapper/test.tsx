import { render, screen } from '@testing-library/react'
import LinkWrapper from '.'

describe('<LinkWrapper />', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="/linkizada">Any</LinkWrapper>)

    const children = screen.getByText(/any/i)

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/linkizada')
  })
})
