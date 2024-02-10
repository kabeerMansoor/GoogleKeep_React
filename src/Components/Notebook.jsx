import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css'

function Notebook(props) {

  const [expand,setExpand] = useState(false);

  const showBox = () => {
    setExpand(true);
  }

  const showNothing = () => {
    setExpand(false);
  }

  const [Note,setNote] = useState({
    title : '',
    content : '',
  })

  const myApp = (event) => {
    const {value,name} = event.target;
    setNote((prev)=>{
      return{
        ...prev,[name]:value
      }
    })
  }

  const add = () => {
    props.placeNote(Note);
    setNote({
      title : '',
      content : '',
    });
  }


  return (
    <div className='d-flex justify-content-center mt-3' onDoubleClick={showNothing}>
      <div className='Notebook_Box d-flex flex-column p-3'>

     { expand?
        <input type='text' placeholder='Enter Title' className='mt-2 p-2' onChange={myApp} value={Note.title} name='title'/>
        : null}

        <textarea rows={5} cols={30} className='mt-3' onChange={myApp} value={Note.content} name='content' onClick={showBox} placeholder='Click here to Write Notes'></textarea>
       { expand?
        <div className='d-flex justify-content-end mt-3'>
            <button className='py-2 px-3 bg-success text-white rounded pill' onClick={add}><i class="fa-solid fa-plus"></i>
            </button>
        </div>:null}
      </div>
    </div>
  );
}

export default Notebook;
