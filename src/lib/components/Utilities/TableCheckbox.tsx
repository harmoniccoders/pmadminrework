import { Flex } from "@chakra-ui/react";
import React from "react";

interface ICheckbox {
  checked: any;
  onChange: any;
  label?: string;
  mb?: string;
  disabled?: boolean;
}

function TableCheckbox({ checked, onChange, label, mb, disabled }: ICheckbox) {
  return (
    <Flex fontSize=".9rem" gap=".9rem" fontWeight="500" mb={mb} pl="1rem">
      <label style={{ display: "flex", cursor: "pointer" }}>
        {label}
        <input
          type="checkbox"
          className="formcheck"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          value={checked}
        />
      </label>
    </Flex>
  );
}

export default TableCheckbox;
