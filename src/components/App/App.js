import Row from "../Row/Row";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { loadCells } from "../../store/reducers/CalendarSlice";
import { AppWrapper } from "./styles.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCells({ firstDate: "2019-03-25" }));
  }, []);

  const times = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

  return (
    <AppWrapper>
      <Header firstDay={new Date(2019, 2, 25)}></Header>
      <div>
        {times.map((time, index) => {
          return (
            <Row key={index} firstDay={new Date(2019, 2, 24)} time={time}></Row>
          );
        })}
      </div>
      <Footer></Footer>
    </AppWrapper>
  );
}

export default App;
