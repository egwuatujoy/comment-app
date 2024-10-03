import Reply from "./Reply";

const Replies = ({ replies }) => {
  return (
    <div className="flex flex-col justify-end items-end">
      <div className="w-9/12 max-md:w-full">
        {replies.map((reply) => (
          <Reply key={reply.id} reply={reply} />
        ))}
      </div>
    </div>
  );
};

export default Replies;
