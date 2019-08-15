import {observable, action, decorate} from "mobx";

class RightPanel {
    isOpen = true;

    open() {
        this.isOpen = true;
    }

    close() {
        this.isOpen = false;
    }
}

decorate(RightPanel, {
    isOpen: observable,
    open: action,
    close: action
})

const rightPanel = new RightPanel();

export default rightPanel;