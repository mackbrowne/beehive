// Framework
import React from "react";

// Components
import { Container, Row, Col, FormGroup, Label, Input } from "reactstrap";

// Helpers
import { camelCaseToTitle } from "../helpers/text";

// Types

/**
 * A single input field for a boolean, string or number.
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {Element} Stateless functional React component.
 */
const FieldRow = ({
  label = "Field",
  value,
  visibleLabel = true,
  stateSettingAction
}) => {
  const inputId = `${label}-${typeof value}-field-row-input`;
  const titleLabel = camelCaseToTitle(label);
  const labelClass = visibleLabel ? "" : "sr-only";
  const onChange = ({ target: { value } }) => stateSettingAction(label, value);
  return (
    <FormGroup className="field-row">
      <Label className={labelClass} for={inputId}>
        {titleLabel}
      </Label>
      <Input
        type="text"
        placeholder={titleLabel}
        name={inputId}
        id={inputId}
        onChange={onChange}
        value={value}
      />
    </FormGroup>
  );
};

export default FieldRow;
