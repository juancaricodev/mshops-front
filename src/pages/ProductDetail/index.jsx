import React from 'react'

import './styles.scss'

const product = {
  id: 'MLA876190028',
  title: 'Guitarra Electrica Ibanez Rg350dxz',
  price: {
    currency: 'ARS',
    amount: 82190,
    decimals: 0.9400000000023283
  },
  picture: 'http://http2.mlstatic.com/D_745271-MLA43336454342_092020-O.jpg',
  condition: 'used',
  free_shipping: true,
  sold_quantity: 0,
  description: 'PROAUDIO CENTER \nVenta de Instrumentos Musicales y Audio Profesional\n--------------------------------------------------------------------------------------------------\n\nCombo Guitarra Eléctrica Squier Mainstream\n\nLa Stratocaster Mainstream, asequible y práctica, es un modelo exclusivo de Latinoamérica que fue diseñado para principiantes y estudiantes. Una elección perfecta como primera guitarra sin importar tu nivel ni el estilo de música que desees aprender. Con las características clásicas que han hecho de la Strat una de las guitarras favoritas de los músicos en el mundo entero, la Mainstream es un fantástico primer paso de entrada en la familia Fender®, con un precio incluso más bajo que la famosa Bullet.\n\nCaracterísticas:\n• Cuerpo en Pawlounia (kiri)\n• Mástil de maple en forma de \"C\"\n• Escala de 25,5\" (648 mm)\n• 22 trastes medio jumbo\n• Radio de 9,5\" (241 mm)\n• Ancho de 1,65\" (42 mm)\n• Clavijas blindadas estándar\n• Puente fijo estilo vintage con 6 selletas\n• 3 micrófonos estándar de bobina simple\n• Pickguard de tres capas\n• Switch de 5 posiciones\n• Controles MV / T / T\n• Encordado .009 - .042\n\nIncluye:\n• Guitarra Squier Stratocaster Mainstream\n• Amplificador de 10 Watts Ross / Anderson\n• Correa\n• Funda\n• Cable Plug\n• Púas\n\n--------------------------------------------------------------------------------------------------\n\nUBICACIÓN:\nEstamos en la zona de Primera Junta en el barrio Caballito, cerca de la estación del subte A\n\nHORARIOS:\nLunes a Viernes: 9:30 a 13 hs y 14:30 a 19 hs\nSábados: 10:30 a 13:30 hs\n\nACERCA DE NOSOTROS\nEmitimos factura tipo A o B\nTodos nuestros productos tienen garantía oficial en Argentina\nVisitá nuestro e-shop y conocé todos nuestros productos: https://eshops.mercadolibre.com.ar/PROAUDIO+CENTER\n\nGracias por visitarnos\nPROAUDIO CENTER'
}

const ProductDetail = () => {
  return (
    <div className='detail'>
      <section className='detail__cover'>
        <img src={product.picture} alt={product.title} />
      </section>

      <section className='detail__info'>
        <div className='detail__info-status'>
          {product.condition} - {product.sold_quantity} vendidos
        </div>

        <div className='detail__info-title'>
          {product.title}
        </div>

        <div>
          &#36; {product.price.amount}
          <sup>{product.price.decimals}</sup>
        </div>

        <button type='button'>Comprar</button>
      </section>

      <section className='detail__description'>
        <div>Descipci&oacute;n del producto</div>

        <div>{product.description}</div>
      </section>
    </div>
  )
}

export default ProductDetail
