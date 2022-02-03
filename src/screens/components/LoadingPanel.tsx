
import React, { FC, useEffect, useState } from "react";
import { process } from '@progress/kendo-data-query';
import { useNavigate } from "react-router-dom";

const LoadingPanel = () => (
    <div className="k-loading-mask">
        <span className="k-loading-text">Loading</span>
        <div className="k-loading-image"></div>
        <div className="k-loading-color"></div>
    </div>
);

export default LoadingPanel;
