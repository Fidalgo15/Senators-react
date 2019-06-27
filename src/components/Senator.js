import React from 'react';
import senators from '../senators.json'

export default class extends React.Component {
    state = {
        name:"",
    }
    render() {
        const simple = senators.json

const filter = senators.filter(senators => senators.simple == this.state.name);

const map = filter.map(senator => {
    return {
        Name:filter.simple,
        
    }
});

const reduce = map.reduce((acc,cur) => (this.state.name));
// console.log(senatorSenior)
        return(
            <>
            <input type="text" placeholder="Search" onChange={(event) => this.setState({ name: event.target.value })} />


            </>
            

        )
    }
}

