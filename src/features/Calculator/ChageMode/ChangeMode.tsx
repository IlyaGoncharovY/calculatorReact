import React from 'react';
import {ConstructorButton, RuntimeButton} from "../../../styled/styled";

const ChangeMode = () => {
    return (
        <>
            <RuntimeButton>Runtime</RuntimeButton>
            <ConstructorButton>Constructor</ConstructorButton>
        </>
    );
};

export default ChangeMode;