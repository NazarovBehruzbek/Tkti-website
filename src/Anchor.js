import React, { Component } from "react";
import { AnchorLink } from "react-spy-scroll";

class Anchor extends Component {
    render() {
        // const url = this.props.activeItem === this.props.href ? 'http://findicons.com/files/icons/287/maneki_neko/128/cat_5.png' : 'http://icons.iconarchive.com/icons/martin-berube/flat-animal/256/dog-icon.png';

        return (
            <AnchorLink style={{width:'50px',height:'50px',backgroundColor:'white'}} href={this.props.href}>
                jhk
            </AnchorLink>
        );
    }
}


export default Anchor;