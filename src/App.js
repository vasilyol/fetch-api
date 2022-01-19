import './App.css';
import { Component } from 'react';

class App extends Component {

    state = {
        content: null,
        author: null,
        image: null,
        person: null
    }

    async componentDidMount() {
        const url1 = "https://api.quotable.io/random";
        const url2 = "https://randomfox.ca/floof/";
        const url3 = "https://api.randomuser.me/";

        const response1 = await fetch(url1);
        const data1 = await response1.json();

        const response2 = await fetch(url2);
        const data2 = await response2.json();

        const response3 = await fetch(url3);
        const data3 = await response3.json();

        this.setState({
            content: data1.content, 
            author: data1.author, 
            image: data2.image,
            person: data3.results[0]  
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.content}</p>
                <p>{this.state.author}</p>
                <img src={this.state.image} alt="fox" width="500px"/>
                {!this.state.person ? <p>Loading...</p> :
                <div>
                    <p>First Name: {this.state.person.name.first}</p>
                    <p>Last Name: {this.state.person.name.last}</p>
                    <p>Email: {this.state.person.email}</p>
                    <img src={this.state.person.picture.large} alt='person'/>
                </div>
                }
            </div>
        );
    }    
}

export default App;
