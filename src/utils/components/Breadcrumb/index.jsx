import React from 'react'

const Breadcrumb = () => {
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
  return (
    <div className='breadcrumb'>
      <ul>
        {route.map((element) => (
          <li key={element.id}>
            {element.name} &gt;
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Breadcrumb
