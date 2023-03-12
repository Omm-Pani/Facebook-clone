import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";

export default function EmojiPickerBackground({ text, setText, user, type2 }) {
  const [picker, setPicker] = useState(false);
  const [cursorPosition, setCursorPosition] = useState();
  const textRef = useRef(null);
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
    <div className={type2 ? "images_input" : ""}>
      <div className={!type2 ? "flex_centre" : ""}>
        <textarea
          maxLength="100"
          ref={textRef}
          value={text}
          placeholder={`What is in your mind, ${user.first_name}`}
          className={`post_input ${type2 ? "input2" : ""}`}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <div className={!type2 ? "post_emoji_wrap" : ""}>
        {picker && (
          <div
            className={`comment_emoji_picker ${
              type2 ? "move_picker2" : "rlmove"
            }`}
          >
            <EmojiPicker height={400} width={350} onEmojiClick={handleEmoji} />
          </div>
        )}
        {!type2 && <img src="../../../icons/colorful.png" alt="" />}
        <i
          className={`emoji_icon_large ${type2 && "move_left"}`}
          onClick={() => {
            setPicker((prev) => !prev);
          }}
        ></i>
      </div>
    </div>
  );
}
