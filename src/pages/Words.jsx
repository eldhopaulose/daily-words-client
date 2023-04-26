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
      <table class="table ">
        <thead>
          <tr>
            <th scope="col">English</th>
            <th scope="col">Malayalam</th>
          </tr>
        </thead>
      </table>
      {words.map((word) => (
        <table className="table table-bordered table-hover table-striped">
          <tbody>
            <tr key={word.english_word}>
              <td className="text-left d-md-flex" style={{ Width: "200px" }}>
                <strong>{word.english_word}</strong>
              </td>
              <td className="text-left">{word.malayalam_definition}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default WordList;
