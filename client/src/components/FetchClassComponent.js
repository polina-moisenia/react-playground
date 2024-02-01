import React from "react";

export default class FetchClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    //why not working for me ? should be already
    // state = { items: [] };

    componentDidMount() {
        fetch('https://gy44av6oj6.execute-api.eu-north-1.amazonaws.com/items')
            .then(res => res.json())
            .then((data) => this.setState({ ...this.state, items: data }))
            .catch(err => console.error(`Fetch failed in class component with error ${err}`));
    }

    render() {
        return (
            <div>
                {
                    this.state.items && this.state.items.map(item => <div key={item.id}>{item.description}</div>)
                }
            </div>
        );
    }
}