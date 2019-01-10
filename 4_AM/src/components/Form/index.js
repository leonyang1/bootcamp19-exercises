import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        name: '',
        gender: '',
        pronoun: '',
        hometown: '',
        food1: '',
        food2: '',
        food3: '',
        birthday: '',
        id: '',
        concentration: '',
        }
        this.nameChange = this.nameChange.bind(this);
        this.genderChange = this.genderChange.bind(this);
        this.pronounChange = this.pronounChange.bind(this);
        this.hometownChange = this.hometownChange.bind(this);
        this.food1Change = this.food1Change.bind(this);
        this.food2Change = this.food2Change.bind(this);
        this.food3Change = this.food3Change.bind(this);
        this.birthdayChange = this.birthdayChange.bind(this);
        this.idChange = this.idChange.bind(this);
        this.concentrationChange = this.concentrationChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    nameChange(e) {
        this.setState({name: e.target.value});
    }

    genderChange(e) {
        this.setState({gender: e.target.value});
    }

    pronounChange(e) {
        this.setState({pronoun: e.target.value});
    }

    hometownChange(e) {
        this.setState({hometown: e.target.value});
    }

    food1Change(e) {
        this.setState({food1: e.target.value});
    }

    food2Change(e) {
        this.setState({food2: e.target.value});
    }

    food3Change(e) {
        this.setState({food3: e.target.value});
    }

    birthdayChange(e) {
        this.setState({birthday: e.target.value});
    }

    idChange(e) {
        this.setState({id: e.target.value});
    }

    concentrationChange(e) {
        this.setState({concentration: e.target.value});
    }

    onSubmit() {
        console.log("User's name is " + this.state.name + ", and " + this.state.pronoun +  " is from " + this.state.hometown + ". " + this.state.pronoun + " was born on " + this.state.birthday + ", and " + this.state.name + "'s favorite foods are " + this.state.food1 + ", " + this.state.food2 + ", and " + this.state.food3 + ". At Harvard, " + this.state.name + " studies " + this.state.concentration + ".")
    }
    render() {
        return(
        <React.Fragment>
            <div>
                Name:
                <input type="text" value={this.state.name} onChange={this.nameChange}/>
            </div>
            <div>
                Gender:
                <input type="text" value={this.state.gender} onChange={this.genderChange}/>
            </div>
            <div>
                Pronoun:
                <select value={this.state.pronoun} onChange={this.pronounChange}>
                    <option selected value="" disabled></option>
                    <option value ="he">He</option>
                    <option value="she">She</option>
                    <option value="they">They</option>
                </select>
            </div>
            <div>
                Hometown:
                <input type="text" value={this.state.hometown} onChange={this.hometownChange}/>
            </div>
            <div>
                Favorite Food 1:
                Pizza<input
                    type="radio"
                    value="pizza"
                    checked={this.state.food1 === "pizza"}
                    onChange={this.food1Change}
                    />
               Not Pizza<input
                    type="radio"
                    value="not pizza"
                    checked={this.state.food1 === "not pizza"}
                    onChange={this.food1Change}
                    />
            </div>
            <div>
                Favorite Food 2:
                <input type="text" value={this.state.food2} onChange={this.food2Change}/>
            </div>
            <div>
                Favorite Food 3:
                <input type="text" value={this.state.food3} onChange={this.food3Change}/>
            </div>
            <div>
                Birthday:
                <input type="text" value={this.state.birthday} onChange={this.birthdayChange}/>
            </div>
            <div>
                HUID:
                <input type="text" value={this.state.id} onChange={this.idChange}/>
            </div>
            <div>
                Concentration:
                <input type="text" value={this.state.concentration} onChange={this.concentrationChange}/>
            </div>
            <button onClick={() => this.onSubmit()}>Click Me</button>
        </React.Fragment>
        );
    }
}

export default Form;
