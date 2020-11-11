import React, {Component, useState} from "react";
import '../styles/App.css';
import List from "./List";
import Entry from "./Entry";

function createEntry(enter) {
    return <Entry 
        key = {enter.id}
        name = {enter.name}
    />
}

class App extends Component {
    render() {

        return(
            <div id="main">
               {List.map(createEntry)}
            </div>
        )
    }
}


export default App;
