import React from "react";
import { CloudIcon, NewspaperOIcon, ImageIcon, TwitterSquareIcon, VideoCameraIcon } from "react-line-awesome";

import SidebarItem from "../SidebarItem/SidebarItem";

import "./Sidebar.css";

export default class Sidebar extends React.Component {
    render() {
        return (
            <div id="sidebar">
                <SidebarItem icon={<CloudIcon />} label="Web" active/>
                <SidebarItem icon={<NewspaperOIcon />} label="News" />
                <SidebarItem icon={<ImageIcon />} label="Images" />
                <SidebarItem icon={<TwitterSquareIcon />} label="Social" />
                <SidebarItem icon={<VideoCameraIcon />} label="Videos" />
            </div>
        );
    }
}