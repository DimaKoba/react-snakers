import {Card} from './components/Card';
import { Drawer } from './components/Drawer';
import { Header } from './components/Header';



function App() {
  return (
    <div className='wrapper clear'>
     
      <Drawer/>
      <Header />

      <div className='content p-40'>
        <div className='d-flex align-center justify-between p-40'>
        <h1>Все кроссовки</h1>
        <div className='search-block d-flex'>
          <img src='/img/search-icon.svg' alt='Search'/>
          <input placeholder='Поиск...'/>
          </div>
      </div>
      
        <div className='d-flex'>

          <div className='card'>
            <div className='favorite'>
            <img src='/img/likeBtnOff.svg' alt='likeOff'/>
            </div>          
            <img width='133' height='112' src='/img/cross/cross1.jpg'/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div> 
              <button className='button'>
              <img width='11' height='11' src='/img/plus.svg'/>
              </button>
            </div>
          </div>

        <div className='card'>
             <img width='133' height='112' src='/img/cross/cross2.jpg'/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
          <div className='d-flex flex-column'>
           <span>Цена:</span>
           <b>12 999 руб.</b>
            </div> 
             <button className='button'>
           <img width='11' height='11' src='/img/plus.svg'/>
               </button>
          </div>
        </div>

           <div className='card'>
             <img width='133' height='112' src='/img/cross/cross3.jpg'/>
             <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
             <div className='d-flex justify-between align-center'>
               <div className='d-flex flex-column'>
                 <span>Цена:</span>
                 <b>12 999 руб.</b>
               </div> 
               <button className='button'>
               <img width='11' height='11' src='/img/plus.svg'/>
               </button>
             </div>
           </div>

          <div className='card'>
            <img width='133' height='112' src='/img/cross/cross4.jpg'/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div> 
              <button className='button'>
              <img width='11' height='11' src='/img/plus.svg'/>
              </button>
            </div>
          </div>

          <Card />
    
    
    
    
    
    

      </div>
      
      
      
      
      
      
      
      
      
      
      
      
      </div>    

    </div>
  );
}

export default App;
