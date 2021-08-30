import React from 'react'

export const Drawer = () => {
    return (
        <div className='overlay'>      
        <div className='driwer'>
        <h2 className='mb-30 d-flex justify-between'>
          
          Корзина
          <img className='removeBtn cu-p' src='/img/btnRemoveInBasket.svg' alt='remove'/>
          </h2>
         
         <div className='items'>
           <div className='d-flex cartItem align-center mb-20'>
             <div style={{backgroundImage:'url(/img/cross/cross2.jpg)'}} className='cartItemImg'>
           </div>
             <div className='mr-20 flex'>
               <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
               <b>12 999 руб.</b>
           </div>
             <img className='removeBtn' src='/img/btnRemoveInBasket.svg' alt='remove'/>
           </div>
           <div className='d-flex cartItem align-center mb-20'>
          <div style={{backgroundImage:'url(/img/cross/cross2.jpg)'}} className='cartItemImg'>
           </div>
           <div className='mr-20 flex'>
               <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
          <b>12 999 руб.</b>
              </div>
                 <img className='removeBtn' src='/img/btnRemoveInBasket.svg' alt='remove'/>
              </div>
         <div className='cartTotalBlock'> 
         <ul className='cartTotalBlock'>
            <li className='d-flex'>
             <span>Итого:</span>
             <div></div>
               <b>21 498 руб. </b>
              </li>
             <li  className='d-flex'>
             <span>Налог:</span>
               <div></div>
                <b>1074 руб. </b>
                 </li>
                </ul>
                   <button className='greenBtn'>Оформить заказ <img src='img/arrowBtn.svg' alt='arrow'/></button>
         </div>          
         </div>     
      </div>         
        </div>
        
    )
}
