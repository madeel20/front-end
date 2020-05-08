import React from 'react';
import { Spin } from 'antd';

const Loading = ({className = ''}) => {
    return(
        <div className={`loading ${className}`}>
            <Spin size='large'/>
        </div>
    )
};

export default Loading
