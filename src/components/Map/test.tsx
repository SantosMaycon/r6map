import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /openstreetmap/i
      })
    ).toBeInTheDocument
  })

  // it('should render with the marker in correct place', () => {
  //   const agent = {
  //     id: '1',
  //     name: 'Campos',
  //     slug: 'campos',
  //     location: {
  //       latitude: 0,
  //       longitude: 0
  //     }
  //   }

  //   render(<Map agents={[agent]} />)

  //   expect(screen.getByTitle(/campos/i)).toBeInTheDocument
  // })
})
