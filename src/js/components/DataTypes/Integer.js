import React from 'react';

import Theme from './../../themes/getStyle';

export default class extends React.PureComponent {

    render() {
        const {props} = this;
        return (
            <div {...Theme(props.theme, 'integer')}>
                {this.props.value}
            </div>
        );
    }

}
