import React from 'react';
import {polyfill} from 'react-lifecycles-compat';
import {toType} from './util';
import JsonObject from './components/DataTypes/Object';

import Theme from './themes/getStyle';

class ReactJsonView extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    //reference id for this instance
    rjvId = Date.now().toString()

    //all acceptable props and default values
    static defaultProps = {
        src: {},
        name: 'root',
        theme: 'rjv-default',
        collapsed: false,
        shouldCollapse: false,
        groupArraysAfterLength: 100,
        indentWidth: 4,
        enableClipboard: true,
        iconStyle: 'triangle',
        style: {},
    }

    render() {
        const { style, defaultValue, name } = this.props;
        const namespace = [name];
        return (
            <div
                class="react-json-view"
                style={{...Theme(this.props.theme, 'app-container').style, ...style}}
            >
                <div class="pretty-json-container object-container" >
                    <div class="object-content">
                        <JsonObject
                            namespace={namespace}
                            depth={0}
                            jsvRoot={true}
                            type={toType(this.props.src)}
                            rjvId={this.rjvId}
                            {...this.props} />
                    </div>
                </div>

            </div>
        );
    }

}

polyfill(ReactJsonView);

export default ReactJsonView;
