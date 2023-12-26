import React from "react";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "./button";

export default class BasicModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <Modal
        open={this.props.isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-container"
        onClose={this.props.onClose}
      >
        <Box className="modal-box">
          <section className="flex flex-row justify-between">
            <h1 className="text-xl font-bold">{this.props.title}</h1>
            {this.props.showCloseButton && (
              <Button
                onClick={this.props.onClose}
                icon="times"
                styles="px-1 py-0 h-fit"
              ></Button>
            )}
          </section>
          <section className="h-full">{this.props.children}</section>
        </Box>
      </Modal>
    );
  };
}
