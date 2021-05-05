import React from 'react';
import Header from './Header';
import Card from './Card';

const Home = (props) => {
  const {products, loading} = props;
  return (
    <div className="home">
      <Header/>
      <section>
        <div className="container">
          {loading ? (
            <div>Cargando Productos ... </div>
          ) : (
            <div className="row">
              {products.map((product, idx)=>{
                return(
                  <div className="col--3">
                    <Card key={product.id} product={product} />
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home;