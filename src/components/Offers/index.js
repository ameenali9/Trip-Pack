import React, {Component} from 'react';

import {withFirebase} from '../Firebase';

class OffersPage extends Component {
    constructor(props) {
        super(props);
        // let offers = [];
        this.props.firebase.fb.collection('offers').where('qty', '>', 0)
        
            .onSnapshot((snapshot) => {
              let offers = [];
                snapshot.forEach((doc) => {
                    offers.push(doc.data());
                });
                this.setState({offers : offers}) //new script
            });
        
        this.state = {
            offers: [], // offers => []
            offers2: [
                {
                    'name': 'name1',
                    'date': '2019-10-1'
                },
                {
                    'name': 'name2',
                    'date': '2018-10-1'
                }
            ]
        };
    }

    render() {
        const {offers, offers2} = this.state;

        console.log('offers render', offers);
        console.log('offers2 render', offers2);

        return (
            <div>
                <h1>offers</h1>

                <ul>
                    {offers2.map((offer, i) => (
                        <li key={i}>
                            <span>
                                <strong>Date:</strong> {offer.date}
                            </span>
                            <span>
                                <strong>name:</strong> {offer.name}
                                {/*{console.log('off', offer)}*/}
                            </span>
                        </li>
                    ))}
                    <hr/>
                    {offers.map((offer, i) => {
                      let date = new Date(offer.date.seconds)
                      return(
                        <li key={i}>
                            <span>
                                <strong>Date:</strong> {date.toString()}
                            </span>
                            <span>
                                <strong>name:</strong> {offer.name}
                                {/*{console.log('off', offer)}*/}
                            </span>
                        </li>
                      )
                    })}
                </ul>
                <hr />
                <OfferList offers={this.state.offers}/>
            </div>
        );
    }
}

const OfferList = (props) => {
    return(
    <ul>
        {props.offers.map((offer, i) => {
          let date = new Date(offer.date.seconds)
          return(
            <li key={i}>
                <span>
                    <strong>Date:</strong> {date.toString()}
                </span>
                <span>
                    <strong>name:</strong> {offer.name}
                </span>
                {/* {console.log('list', offers)} */}
            </li>
          )
        })}
    </ul>
    )
};

export default withFirebase(OffersPage);