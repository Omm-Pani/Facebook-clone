import { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
export default function CreateComment({ user }) {
  const [picker, setPicker] = useState(false);
  const [text, setText] = useState("");
  const [cursorPosition, setCursorPosition] = useState();
  const textRef = useRef(null);
  const ImgRef = useRef(null);
  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition;
  }, [textRef, cursorPosition]);
  const handleEmoji = ({ emoji }) => {
    const ref = textRef.current;
    ref.focus();
    const start = text.substring(0, ref.selectionStart);
    const end = text.substring(ref.selectionStart);
    const newText = start + emoji + end;
    setText(newText);
    setCursorPosition(start.length + emoji.length);
  };
  return (
    <div className="create_comment_wrap">
      <div className="create_comment">
        <img src={user.picture} alt="" />
        <div className="comment_input_wrap">
          {picker && (
            <div className="comment_emoji_picker">
              <EmojiPicker onEmojiClick={handleEmoji} />
            </div>
          )}
          <input
            type="file"
            hidden
            ref={ImgRef}
            accept="image.png, image.jpeg, image.jpg, image.webp, image.gif"
          />
          <input
            type="text"
            ref={textRef}
            value={text}
            placeholder=" Write a comment..."
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="comment_circle_icon hover2"
            onClick={() => {
              setPicker((prev) => !prev);
            }}
          >
            <i className="emoji_icon"></i>
          </div>
          <div
            className="comment_circle_icon hover2"
            onClick={() => ImgRef.current.click()}
          >
            <i className="camera_icon"></i>
          </div>
          <div className="comment_circle_icon hover2">
            <i className="gif_icon"></i>
          </div>
          <div className="comment_circle_icon hover2">
            <i className="sticker_icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
