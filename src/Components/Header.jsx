import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css'

function Header() {
    return (
        <div>
            <nav class="navbar navbar-light bg-blue ">
                <div class="container-fluid">
                    <a class="navbar-brand bolded fs-2" href="#">NotesApp</a>
                </div>
            </nav>
        </div>
    );
}

export default Header;
