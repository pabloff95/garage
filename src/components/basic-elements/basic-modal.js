import React from "react";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import FaIcon from "./fa-icon";

export default class BasicModal extends React.Component {
  render = () => {
    return (
      <Modal
        open={this.props.isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-container"
        onClose={this.props.onClose}
        disableScrollLock
      >
        <Box className="modal-box">
          <section className="flex flex-row justify-between">
            <h1 className="text-xl font-bold">{this.props.title}</h1>
            {this.props.showCloseButton && (
              <div
                role="button"
                onClick={this.props.onClose}
                className="hover:text-element-gained-focus"
              >
                <FaIcon icon="times" />
              </div>
            )}
          </section>
          <section className="h-full">{this.props.children}</section>
        </Box>
      </Modal>
    );
  };
}
