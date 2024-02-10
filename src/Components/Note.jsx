import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {

    const delBtn = () => {
        props.deleteitem(props.id);
    }
    return (
        <div className='container mt-4 mb-5'>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3'>
                <div className='col'>
                    <div className='Note_Box'>

                        <h1 className='text-center'>{props.title}</h1>

                        <p className='px-3'>{props.content}</p>

                        <div className='d-flex justify-content-end'>
                        <button className='rounded-pill px-3 py-2 bg-danger text-white fs-5' onClick={delBtn}>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;


