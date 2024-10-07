import React, { useState } from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton.js";
import AddFriendDialog from "./AddFriendDialog.js";

const additionalStyles = {
  marginTop: "10px",
  width: "80%",
  padding: "20px 0",
  backgroundColor: "#3ba55d",
};

export default function AddFriendButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handelOpenAddFriendDialog = () => {
    setIsDialogOpen(true);
  };

  const handelCloseAddFriendDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <CustomPrimaryButton
        additionalStyles={additionalStyles}
        label={"All Doctors"}
        onClick={handelOpenAddFriendDialog}
      />
      <AddFriendDialog
        isDialogOpen={isDialogOpen}
        closeDialogHandler={handelCloseAddFriendDialog}
      />
    </>
  );
}
