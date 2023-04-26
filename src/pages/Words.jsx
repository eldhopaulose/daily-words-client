import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { featchWords } from "../slices/wordSlice";

function WordList() {
  const dispatch = useDispatch();
  const words = useSelector((state) => state.words.words);
  const status = useSelector((state) => state.words.status);
  const error = useSelector((state) => state.words.error);

  useEffect(() => {
    dispatch(featchWords());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Words of the day</h1>
      <ul>
        {words.map((word) => (
          <li key={word.english_word}>
            <strong>{word.english_word}</strong>: {word.malayalam_definition}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WordList;
