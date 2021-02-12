import React from "react";
import "./styles.css";

type Props = {
  children: React.PropTypes.node,
  title: string,
  onClose: () => mixed,
  onSave: () => mixed,
  open: boolean,
};

const PopupModal = ({ open, children, onClose, onSave, title }: Props) => {
  const showHideClassName = open
    ? "modal-background display-block"
    : "modal-background display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {title && (
          <h3 className="modal-title">
            {title}
          </h3>
        )}
        {children}
        <div className="modal-actions">
          <button className="app-button" style={{marginRight: '10px'}} type="button" onClick={onClose}>
            Close
          </button>
          <button className="app-button" type="button" onClick={onSave}>
            Save
          </button>
        </div>
      </section>
    </div>
  );
};

export default PopupModal;
