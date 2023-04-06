import React from 'react';
import {ChangeModeWrapper, ConstructorButton, RuntimeButton} from "../../../styled/styled";

const ChangeMode = () => {
    return (
        <ChangeModeWrapper>
            <RuntimeButton>Runtime</RuntimeButton>
            <ConstructorButton>Constructor</ConstructorButton>
        </ChangeModeWrapper>
    );
};

export default ChangeMode;