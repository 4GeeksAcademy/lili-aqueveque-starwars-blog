import React, { useState, useEffect } from "react";
import { Characters } from "../views/characters";
import { Vehicles } from "../views/vehicles";
import { Planets } from "../views/planets";

export const BlogPost = () => {
    return (
        <div>
            <Characters />
            <Vehicles />
            <Planets />
        </div>
    );
};
