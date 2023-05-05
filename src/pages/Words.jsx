import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { featchWords } from "../slices/wordSlice";
import { Waveform } from "@uiball/loaders";


function WordList() {
  const dispatch = useDispatch();
  const words = useSelector((state) => state.words.words);
  const status = useSelector((state) => state.words.status);
  const error = useSelector((state) => state.words.error);

  useEffect(() => {
    dispatch(featchWords());
  }, [dispatch]);

  if (status === "loading") {
    return <div className="col-12 d-flex align-items-center justify-content-center mt-5">
    <Waveform size={40} lineWeight={3.5} speed={1} color="black" />
</div> 
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="mt-2">Words of the day</h1>
      <table class="table mt-5">
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
