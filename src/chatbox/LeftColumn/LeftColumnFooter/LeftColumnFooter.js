import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const LeftColumnFooter = ({ handleModal }) => {
  return (
    <div className="left-column-footer">
      <a
        href="https://github.com/dfinkle1/custom-gpt"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={icon({ name: "github", style: "brands" })}
          size="xl"
        />
      </a>

      <div className="settings">
        <button className="settings-btn" onClick={handleModal}>
          <FontAwesomeIcon icon={icon({ name: "gear" })} size="xl" />
        </button>
      </div>
    </div>
  );
};

export default LeftColumnFooter;
