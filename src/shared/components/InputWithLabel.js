import { styled } from "@mui/material";
import React from "react";

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
});

const Label = styled("p")({
  color: "#b9bbbe",
  textTransform: "uppercase",
  fontWeight: "600",
});

const Input = styled("input")({
  flexGrow: 1,
  height: "40px",
  border: "1px solid black",
  borderRadius: "5px",
  color: "#dcddde",
  background: "#35393f",
  margin: "0",
  padding: "0 5px",
});

export default function InputWithLabel(props) {
  const { value, setValue, label, type, placeholder } = props;
  const handleValueChange =(event)=>{
    setValue(event.target.value)
  }
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        value={value}
        onChange={handleValueChange}
        type={type}
        placeholder={placeholder}
      />

    </Wrapper>
  );
}
