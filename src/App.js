import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import StarRating from "./components/star-rating";
import UseFetchHookTest from "./components/use-fetch/test";


function App() {
  return (
    <div className="App">
      
      {/* /* <Accordian/> */ }

      <RandomColor/>

     
      {/* <StarRating noOfStars={10}/> */}

    
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

    
      {/* <LoadMoreData/> */}

     
    
      {/* <QRCodeGenerator/> */}

    
      {/* <LightDarkMode/> */}


      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      
      {/* <UseFetchHookTest/> */}

    
    </div>
  );
}

export default App;
