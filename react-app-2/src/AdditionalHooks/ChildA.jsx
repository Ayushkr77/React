import React, { memo } from "react";

function ChildA({ learning }) {

    console.log("Child Component rendered");
    return <></>;
}

export default memo(ChildA);
