import React, { useState } from 'react'

import './styles.scss'

const route = [
  {
    id: 'MLA1182',
    name: 'Instrumentos Musicales'
  },
  {
    id: 'MLA4611',
    name: 'Instrumentos de Cuerdas'
  },
  {
    id: 'MLA417638',
    name: 'Guitarras'
  },
  {
    id: 'MLA4275',
    name: 'Eléctricas'
  }
]

const Breadcrumb = () => {
  const [routes, setRoutes] = useState(route)

  return (
    <div className='breadcrumb'>
      <ul>
        {routes.map((element) => (
          <li key={element.id}>
            {element.name}
          </li>
        )).reduce((prev, curr) => [prev, '> ', curr])}
      </ul>
    </div>
  )
}

export default Breadcrumb
