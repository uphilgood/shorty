import React from "react"
import Cards from "./Cards"
import friends from '../friends.json';
import NavigationTabs from './NavigationTabs'

let clickedPics = []

class CardsList extends React.Component {


handleChange = (name, id) => {
//    let currentCharacter = this.state.cartoonCharacters.filter(character => {
//         character.id === id
//     });
if(clickedPics.includes(id)) {
    alert("Already Clicked")
    clickedPics = []
    this.setState({clicked: 0})
} else {
    clickedPics.push(id)
    this.setState({ currentCartoon: name, clicked: this.state.clicked+1});
    this.shuffle(this.state.cartoonCharacters);
    console.log(clickedPics, this.state.clicked)
}
}

shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

state = {
    cartoonCharacters: friends,
    currentCartoon: "",
    clicked: 0,
}

goHome = () => {
    console.log("went home")
    return (
      <NavigationTabs />
  )
  }

render() {
    return (
        <div>
            <NavigationTabs goHome={this.goHome} clicks={this.state.clicked} currentClicked={this.state.currentCartoon} />
            <div className="py-5">
                <div className="row hidden-md-up">
                    <div className="card">
                        <div className="col-md-3">
                            
                            {this.state.cartoonCharacters.map(item => (

                                <Cards id={item.id} name={item.name} occupation={item.occupation} location={item.location} image={item.image} handleChange={this.handleChange} />

                            ))}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default CardsList;