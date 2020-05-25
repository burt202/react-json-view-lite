import React from 'react';
import { toType } from './../util';
import CopyToClipboard from './CopyToClipboard';

//data type components
import {
    JsonBoolean,
    JsonDate,
    JsonFloat,
    JsonInteger,
    JsonNull,
    JsonString,
    JsonUndefined
} from './DataTypes/DataTypes';

//clibboard icon
import { Edit, CheckCircle, RemoveCircle as Remove } from './icons';

//theme
import Theme from './../themes/getStyle';

class VariableEditor extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            editValue: '',
            renameKey: false,
            parsedInput: {
                type: false,
                value: null
            }
        };
    }

    render() {
        const {
            variable,
            src,
            singleIndent,
            type,
            theme,
            namespace,
            indentWidth,
            enableClipboard,
            rjvId
        } = this.props;
        const { editMode } = this.state;

        return (
            <div
                {...Theme(theme, 'objectKeyVal', {
                    paddingLeft: indentWidth * singleIndent
                })}
                class="variable-row"
                key={variable.name}
            >
                {type == 'array' ? (
                    <span
                        {...Theme(theme, 'array-key')}
                        key={variable.name + '_' + namespace}
                    >
                        {variable.name}
                        <div {...Theme(theme, 'colon')}>:</div>
                    </span>
                ) : (
                    <span>
                        <span
                            {...Theme(theme, 'object-name')}
                            class="object-key"
                            key={variable.name + '_' + namespace}
                        >
                            <span style={{ verticalAlign: 'top' }}>"</span>
                            <span style={{ display: 'inline-block' }}>
                                {variable.name}
                            </span>
                            <span style={{ verticalAlign: 'top' }}>"</span>
                        </span>
                        <span {...Theme(theme, 'colon')}>:</span>
                    </span>
                )}
                <div
                    class="variable-value"

                    {...Theme(theme, 'variableValue', {
                        cursor:  'default'
                    })}
                >
                    {this.getValue(variable, editMode)}
                </div>
                {enableClipboard ? (
                    <CopyToClipboard
                        hidden={editMode}
                        src={variable.value}
                        clickCallback={enableClipboard}
                        {...{ theme, namespace }}
                    />
                ) : null}
            </div>
        );
    }


    getValue = (variable, editMode) => {
        const type = editMode ? false : variable.type;
        const { props } = this;
        switch (type) {
        case 'string':
            return <JsonString value={variable.value} {...props} />;
        case 'integer':
            return <JsonInteger value={variable.value} {...props} />;
        case 'float':
            return <JsonFloat value={variable.value} {...props} />;
        case 'boolean':
            return <JsonBoolean value={variable.value} {...props} />;
        case 'null':
            return <JsonNull {...props} />;
        case 'undefined':
            return <JsonUndefined {...props} />;
        case 'date':
            return <JsonDate value={variable.value} {...props} />;
        default:
            // catch-all for types that weren't anticipated
            return (
                <div class="object-value">
                    {JSON.stringify(variable.value)}
                </div>
            );
        }
    }
}

//export component
export default VariableEditor;
