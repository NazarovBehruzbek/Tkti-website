import React from "react";
import {AnchorElement, AnchorLink, ScrollPanel} from "react-spy-scroll";
import "./styles.css";
import Anchor from "./Anchor";
import Element1 from "./element1";
import Element2 from "./element2";
class Spyexample extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            active: null
        };
    }

    isInside = (
        scrollOffset,
        elemTopBound,
        elemBottomBound,
        container,
        somethingElse,
        item
    ) => {
        const inside =
            scrollOffset >= elemTopBound && scrollOffset <= elemBottomBound;

        if (inside && this.state.active !== item) {
            this.setState(() => ({
                active: item
            }));
        }

        return inside;
    };
    render() {
        return (
           <div>
               <div>
                   <nav>
                       <ul style={{position:'fixed'}}>
                           <li>
                               <Anchor href="itemA" activeItem={this.state.active}  />
                           </li>
                           <li>
                               <Anchor href="itemB" activeItem={this.state.active} />
                           </li>
                           <li>
                               <Anchor href="itemC" activeItem={this.state.active} />
                           </li>
                           <li>
                               <Anchor href="itemD" activeItem={this.state.active} />
                           </li>
                           <li>
                               <Anchor href="itemE" activeItem={this.state.active} />
                           </li>
                       </ul>
                   </nav>
                   <ScrollPanel
                       style={{ backgroundColor: "yellow", height: 200, overflow: "scroll" }}
                   >
                       <AnchorElement
                           id="itemA"
                           isInside={(...args) => this.isInside(...args, "itemA")}
                       >
                           <Element1/>
                       </AnchorElement>
                       <AnchorElement
                           id="itemB"
                           isInside={(...args) => this.isInside(...args, "itemB")}
                       >
                           <Element2/>
                       </AnchorElement>
                       <AnchorElement
                           id="itemC"
                           isInside={(...args) => this.isInside(...args, "itemC")}
                       >
                           <div className="element">C</div>
                       </AnchorElement>
                       <AnchorElement
                           id="itemD"
                           isInside={(...args) => this.isInside(...args, "itemD")}
                       >
                           <div className="element">D</div>
                       </AnchorElement>
                       <AnchorElement
                           id="itemE"
                           isInside={(...args) => this.isInside(...args, "itemE")}
                       >
                           <div className="element">E</div>
                       </AnchorElement>
                   </ScrollPanel>
               </div>
           </div>
        );
    }
}
export default Spyexample;