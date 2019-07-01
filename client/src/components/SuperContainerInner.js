import React from 'react';

function SuperContainerInner(props) {
    return (
        <div className="super_container_inner">

            {props.children}
        </div>
    );
}

export default SuperContainerInner;