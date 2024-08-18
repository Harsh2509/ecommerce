"use client";
import * as React from "react";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

export default function SimpleAlert({
  className,
}: {
  className: string;
}): JSX.Element {
  return (
    <div className={className}>
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        Added to cart
      </Alert>
    </div>
  );
}
