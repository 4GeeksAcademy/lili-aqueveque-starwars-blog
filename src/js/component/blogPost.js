import React, { useState, useEffect, useContext } from "react";
import { Characters } from "../views/characters";
import { Vehicles } from "../views/vehicles";
import { Planets } from "../views/planets";
import { Context } from "../store/appContext";

export const BlogPost = () => {
    const { store } = useContext(Context);
    return (
        <div>
            <Characters />
            <Vehicles />
            <Planets />
        </div>
    );
};
