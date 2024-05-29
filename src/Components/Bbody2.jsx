import { useState } from "react"




const Card = ({name,src,rate,getstate}) => {
    const [valuee,setvalue]=useState("Add to cart")
    const [count,setcount]=useState(0)
const handleclick=(e)=>{
   if(valuee=="Add to cart"){
    setvalue("remove from cart")
    setcount(count+1)
    getstate(count)
   
   }else{
    setvalue("Add to cart")
    setcount(count-1)
    getstate(count)
   }

}
  return (
<div class="col mb-5" id="box">
    <div class="card h-100">
        <img class="card-img-top" src={src} alt="..."></img>
        
        <div class="card-body p-4">
        
            <div class="text-center">
            <h5 class="fw-bolder">{name}</h5>
            </div>
            <div id="rate">${rate}</div>
        </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
    
            <div class="text-center">
                <button class="btn btn-outline-dark mt-auto"  onClick={(e)=>handleclick(e)} >{valuee}</button>
            </div>
        </div>
        </div>
     
</div>
  )
}






const Bbody2 = ({count}) => {
    const getstate=(n)=>{
      count(n)
    }
  return (
    <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <Card name="Fancy Product" rate="16" getstate={getstate} src="https://5.imimg.com/data5/ANDROID/Default/2021/1/GQ/VN/YY/3545876/product-jpeg.jpg"/>
                <Card name="Cricket Bat" rate="70" getstate={getstate} src="https://gmcricket.in/media/catalog/product/cache/757ea7d2b7282843694bdb6de7a23598/p/r/prima-707-english-willow-cricket-bat-1.jpg"/>
                <Card name="Volley Ball" rate="45" getstate={getstate} src="https://cdn.nwscdn.com/media/wysiwyg/3kf/forza/FORZA_Size_5_competition_standard_volleyball_for_all_volleyball_tournaments_and_matches.jpg"/>
                <Card name="Mask" rate="1" getstate={getstate} src="https://www.standardhealthcare.in/wp-content/uploads/2020/03/61ilDgVVwS._SL1500_.jpg"/>
                <Card name="Shirt" rate="36" getstate={getstate} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrecYn1ST5AJ0Gyc-difkbXAh_LBEXN-sEEA&s"/>
                <Card name="Ton jeans" rate="38" getstate={getstate} src="https://rukminim1.flixcart.com/image/300/300/jw6pifk0/jean/k/9/v/36-9114351-roadster-original-imafgwhrkjvyrrez.jpeg"/>
                <Card name="Laptop" rate="150" getstate={getstate} src="https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg"/>
                <Card name="Nikon Camera" rate="200" getstate={getstate} src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"/>
            </div>
        </div>
    </section>
  


   
  )
}

export default Bbody2