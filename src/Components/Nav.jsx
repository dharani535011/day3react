import { ShoppingCart } from "react-iconsax-vite";

const Nav = ({total}) => {
    // console.log(total)
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container px-4 px-lg-5">
    <a class="navbar-brand" href="#">Shopping</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Shop
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">All Products</a></li>
            <li>
                <hr class="dropdown-divider"></hr>
            </li>
            <li><a class="dropdown-item" href="#">Popular Items</a></li>
           
            <li><a class="dropdown-item" href="#">New Arrivals</a></li>
          </ul>
        </li>
      </ul>
    
       <button class="btn btn-outline-dark" type="submit">
       <ShoppingCart type="linear" size="32" color="#5e70d2"/>
        Cart
        <span class="badge bg-dark text-white ms-1 rounded-pill">{total.length>0?total:"0"}</span>
       </button>
      
    </div>
  </div>
</nav>

    </div>
  )
}

export default Nav