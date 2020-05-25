import React from 'react';

import Theme from './../../themes/getStyle';

export default class extends React.PureComponent {

    render() {
        let { value , theme} = this.props;
        let style = { style: { cursor: 'default' } };

        return (
            <div {...Theme(theme, 'string')}>
                <span
                    class="string-value"
                    {...style}
                >
                    "{value}"
                </span>
            </div>
        );
    }
}
