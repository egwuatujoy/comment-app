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
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <CommentSection comment={comment} />
          {comment.replies.length > 0 && <Replies replies={comment.replies} />}
        </div>
      ))}
    </div>
  );
};

export default ContainerSection;
