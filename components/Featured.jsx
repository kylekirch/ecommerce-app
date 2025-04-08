import './component_src/css/featured.css'; // We'll create this CSS file next


function Featured() {
  return (
      <>
      <div className="feature">
        
        <div className="discount">
        <a href="#" id="text">Spend $30 for $5 OFF + FREE SHIPPING</a>
        </div>
        <div className="product-row">
        <a className="product-img" id="img-1" href="#">
            <p className="product-name">Cloudberry
              <p className="flag" id="canada" />
            </p>
            <div className="tag">
              <p href="#" id="text">Limited Time Only</p>
            </div>
          </a>
          <a className="product-img" id="img-2" href="#">
            <p className="product-name">Rambutan
              <p className="flag" id="indonesia" />
            </p>
            <div className="tag discount">
              <p href="#" id="text">45% OFF - SALE</p>
            </div>
          </a>
          
          <a className="product-img" id="img-3" href="#">
            <p className="product-name">Guava
              <p className="flag" id="mexico" />
            </p>
            <div className="tag">
              <p href="#" id="text">BEST SELLER</p>
            </div>
          </a>
          <a className="product-img" id="img-2" href="#">
            <p className="product-name">Prickly Pear
              <p className="flag" id="usa" />
            </p>
            <div className="tag discount">
              <p href="#"  id="text">20% OFF - SALE</p>
            </div>
          </a>
          <a className="product-img" id="img-5" href="#">
            <p className="product-name">Papaya
              <p className="flag" id="mexico" />
            </p>
            <div className="tag">
              <p href="#"  id="text">FEW LEFT</p>
            </div>
          </a>
        </div>
        <a href="#"id="more">More ⮕</a>
        
      </div>
      </>
    );
}

export default Featured;