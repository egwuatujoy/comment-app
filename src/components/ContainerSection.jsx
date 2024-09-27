import { useEffect, useState } from "react";
import CommentSection from "./CommentSection";
import Replies from "./Replies";

const ContainerSection = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const apiUrl = "http://localhost:8000/comments/";

      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setComments(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className="flex justify-center items-center my-40 mx-40 max-md:my-20 max-md:mx-5">
      <div>
        {comments.map((comment) => (
          <CommentSection key={comment.id} comment={comment} />
        ))}
        <Replies/>
      </div>
    </div>
  );
};

export default ContainerSection;
