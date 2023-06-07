import Category from "./Component/Category"
import CategoryWise from "./Component/CategoryWise"
import Header from "./Component/Header"
import Nav from "./Component/Nav"
import SelectAddress from "./Component/SelectAddress"
import Trending from "./Component/Trending"

function App() {

  return (
    <div className="mx-20">  
     <div style={{ fontFamily: 'Nunito Sans' }}>
     <Nav></Nav>
     <Header></Header>
     </div>
     <div>
      <SelectAddress></SelectAddress>
      <Trending></Trending>
      <Category/>
      <CategoryWise></CategoryWise>
     </div>
    </div>
  )
}

export default App
