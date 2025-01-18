
import React, { useState, useEffect } from 'react';

const About = (props) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [noPerPage, setNoPerPage] = useState(10);


  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();
    // const pageAsPerData = json.slice(intialPageFeed, endPageFeed);
    setData(json);

  }
  const paginationForward = (p) => {
    if(p !== noOfPage) setPage(p => p + 1);


  }

  const paginationBacward = (p) => {
    if( p !==  1){
        setPage(p => p - 1);
    }
    
  }
  const noOfPage = data.length/noPerPage;

  const toDisplayPageNo = [...Array(noOfPage +1).keys()].slice(1)

  const lastIndexPage = page * noPerPage;
  const fistIndexPage = lastIndexPage - noPerPage;

  const displayItems = data.slice(fistIndexPage, lastIndexPage);

  console.log(toDisplayPageNo);
  return (
    <div className='App'>
      <div>
        {
          displayItems.map((item, index) => (
            <div className="bg-yellow-400" key={index}>
              <h1>{item.id}</h1>
              <h2>{item.title}</h2>
              <h2>{item.body}</h2>
            </div>
          ))
        }
        <button className='bg-slate-500 px-11 mx-72 ' onClick={() => paginationBacward(page)}>Change Page backward</button>
        {toDisplayPageNo.map((page) =>(
            <span onClick={()=> setPage(page)}>  {page}   | </span>
        )
        )}
        <button className='bg-slate-500 px-11 mx-10' onClick={() => paginationForward(page)}>Change Page forward</button>
      </div>
    </div>
  );
}













// import React, { Component } from 'react'


// const About = () =>{
//     return(
//         <div>
//             <h1>about</h1>
//         </div>
//     )
// }


// class About extends React.Component{
//     constructor(props){
//         super(props);
//         this.state ={
//             count:0
//         }

//         this.compon= this.compon.bind(this) 
//     }

//     compon(){
        
//           // Changing state 
//     this.setState((prevState) => {
//         return { count: prevState.count + 1}
//       }) 
//     }

// render(){
// return(
//     <>
//     <h2>{this.state.count}</h2>
//     <button onClick={this.compon}>
//         kljlkjl
//     </button>
//     </>
    
// )
// }

// }

export default About;