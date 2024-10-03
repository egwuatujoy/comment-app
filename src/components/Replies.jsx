import { useState } from "react";
import Reply from "./Reply";

const Replies = ({ replies }) => {
  const [hide, setHide] = useState(false);
  const handleClick = () => {
    alert("hello");
  };

  const handleDel = () => {
    setHide(!hide);
  };

  const displayDel = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-5 max-md:w-3/4 rounded-md w-2/5  ">
          <h1 className="text-lg text-darkBlue font-bold mb-3 ">Delete comment</h1>

          <p className="text-grayishBlue font-medium">
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <button className=" bg-grayishBlue uppercase font-semibold text-sm text-white px-4 py-2  rounded">
              No, Cancel
            </button>
            <button className=" bg-softRed uppercase font-semibold text-sm   text-white px-4 py-2 rounded">
              Yes, Delete
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-end items-end">
      <div className="w-9/12 max-md:w-full">
        {replies.map((reply, index) => {
          if (index % 2 === 0) {
            return (
              <Reply
                key={reply.id}
                reply={reply}
                name={"Reply"}
                nameImg={"/images/icon-reply.svg"}
                onClick={handleClick}
              />
            );
          } else {
            return (
              <div key={reply.id}>
                <Reply
                  reply={reply}
                  name={"Delete"}
                  nameImg={"/images/icon-delete.svg"}
                  edit={"Edit"}
                  editImg={"/images/icon-edit.svg"}
                  gap={3}
                  color={"softRed"}
                  onClick={handleDel}
                />
              </div>
            );
          }
        })}
      </div>
      {hide && displayDel()}
    </div>
  );
};

export default Replies;
