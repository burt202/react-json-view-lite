import React from 'react';

import CopyToClipboard from './CopyToClipboard';
import {toType} from './../util';

//icons
import {
    RemoveCircle as Remove, AddCircle as Add
} from './icons';

//theme
import Theme from './../themes/getStyle';


export default class extends React.PureComponent {

    render = () => {
        const {
            theme,
            enableClipboard,
            src,
            namespace
        } = this.props;
        return (
            <div
                {...Theme(theme, 'object-meta-data')}
                class='object-meta-data'
                onClick={(e)=>{
                    e.stopPropagation();
                }}
            >
                {/* copy to clipboard icon */}
                {enableClipboard
                    ? (<CopyToClipboard
                        clickCallback={enableClipboard}
                        {...{src, theme, namespace}} />)
                    : null
                }
                {/* copy add/remove icons */}
            </div>
        );
    }

}
