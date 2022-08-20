import React, {Component} from 'react';
import Headers from "./common/headers2";
import Footers from "./common/footers";
class Layout extends Component {
    render() {
        return (
            <>
                <Headers/>
                {this.props.children}
                <Footers/>
            </>
        );
    }
}

export default Layout;
