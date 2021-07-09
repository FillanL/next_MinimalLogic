import React from "react";
import { Tab } from "../../interfaces/enums";
import NewPost from "./newPost";
import ViewAllPost from "./viewAllPost";
import Home from "./";

const navHandler = ({ tab }) => {
    if (tab === Tab.HOME) return <Home />;
    if (tab === Tab.NEWPOST) return <NewPost />;
    if (tab === Tab.VIEWALL) return <ViewAllPost />;
};

export default navHandler;
