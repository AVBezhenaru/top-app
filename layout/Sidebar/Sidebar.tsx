import {SidebarProps} from "./SidebarProps";
import cn from "classnames";
import styles from "./Sidebar.module.css";

export const Sidebar = ({...props}: SidebarProps):JSX.Element => {
    return (
       <div {...props}>
           Sidebar
       </div>
    );
};
