import { useState } from "react";

const CommentSection = ({ comment }) => {
  console.log(comment);

  let [count, setCount] = useState(0);

  function minusBtn() {
    setCount(count--);
  }

  function plusBtn() {
    setCount(count++);
  }

  return (
    <section>
      <div className=" container flex justify-center items-center gap-5 w-full p-4 bg-whites rounded-md mb-7 max-md:flex-col-reverse max-md:items-start">
        <div className="bg-veryLightGray py-2 px-3 rounded-md flex items-center flex-col gap-4 max-md:flex-row ">
          <button onClick={minusBtn}>
            <img src="/images/icon-minus.svg" alt="" className="w-3" />
          </button>
          <h1 className="text-moderateBlue font-bold ">{count}</h1>
          <button onClick={plusBtn}>
            <img src="/images/icon-plus.svg" alt="" className="w-3" />
          </button>
        </div>

        <div>
          <div className="flex justify-between mb-3 relative ">
            <div className="flex justify-center items-center gap-4">
              <img src={`${comment.user.image.png}`} alt="" className="w-10" />
              <p className="text-darkBlue font-bold">{comment.user.username}</p>
              <p className="text-grayishBlue font-medium text-sm">
                {comment.createdAt}
              </p>
            </div>

            <div className="flex justify-center items-center gap-2 max-md:absolute top-40  right-0 ">
              <img src="/images/icon-reply.svg" alt="" />
              <h2 className="text-moderateBlue font-bold text-sm ">Reply</h2>
            </div>
          </div>

          <p className="text-grayishBlue font-medium  text-sm">
            {comment.content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommentSection;
