import React from "react";
import ReactDOM from "react-dom";
import Cards from "./card";
import Data from "./data";

import "./styles.css";
// const url = "https://reqres.in/api/users?page=1";

function myFunction(val) {
  return <Cards title={val.title} img={val.img} link={val.link} />;
}

function App() {
  return (
    <div className="Cards">
      {/* array map */}
      {Data.map(myFunction)}
    </div>
  );
}
export default App;
// // array of object
/*  //   <Cards title={Data[0].title} img={Data[0].img} link={Data[0].link} />
    //   <Cards title={Data[1].title} img={Data[1].img} link={Data[1].link} />
    //   <Cards title={Data[2].title} img={Data[2].img} link={Data[2].link} />
    //   <Cards title={Data[3].title} img={Data[3].img} link={Data[3].link} /> */
