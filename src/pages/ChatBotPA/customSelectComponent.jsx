import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { OCEAN } from '../../constants/Colors';

const useStyles = makeStyles((theme) => ({
    ItemCardOptions: {
        color: 'blue',
        position: 'relative',
        width: '120px',
        border: '1px solid black',
    },
    buttonDisable: {
        background: 'white',
        margin: '2px',
        padding: '2px',
        borderRadius: '10px',
    },
    buttonEnable: {
        color: 'white',
        background: OCEAN,
        outline: 'none',
        margin: '2px',
        padding: '2px',
        borderRadius: '10px',
    },
    buttonDone: {
        alignSelf: 'flexEnd',
        marginTop: '50px',
    },
}));

const CustomSelectComponent = ({
    triggerNextStep,
    updateValue,
    selectedOptions,
    setSelectedOptions,
    componentName,
}) => {
    const classes = useStyles();

    const CustomOption = ({ name, index, status }) => (
        <button
            id={`componentIconsOption${name}`}
            type="button"
            className={status ? classes.buttonEnable : classes.buttonDisable}
            onClick={(e) => {
                e.preventDefault();
                const componentItem = document.getElementById(
                    `componentIconsOption${name}`
                );
                componentItem.classList.toggle(classes.buttonEnable);
                selectedOptions[index].value = !status;
                setSelectedOptions(selectedOptions);
                console.log('selectedOptions', selectedOptions);
            }}
        >
            <span>{name}</span>
        </button>
    );

    const nextStep = (componentName) => {
        updateValue(selectedOptions, componentName, '6');
        triggerNextStep();
    };

    return (
        <div style={{ display: 'flex' }}>
            <div>
                {Object.values(selectedOptions).map((value, index) => {
                    return (
                        <CustomOption
                            name={value.name}
                            status={value.value}
                            index={index}
                            key={`select-${value.name}`}
                        />
                    );
                })}
            </div>
            <div>
                <button onClick={() => nextStep(componentName)} type="button">
                    OK
                </button>
            </div>
        </div>
    );
};

export default CustomSelectComponent;
