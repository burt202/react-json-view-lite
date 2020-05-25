import React from 'react';

import Theme from './../../themes/getStyle';

export default class extends React.PureComponent {

    render() {
        return (
            <div {...Theme(this.props.theme, 'boolean')}>
                {this.props.value ? 'true' : 'false'}
            </div>
        );
    }

}
