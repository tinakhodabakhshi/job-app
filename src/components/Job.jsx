import { Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Heart, HeartFill, Trash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToFavouriteAction, removeToFavouriteAction } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const favouritePositions = useSelector((state) => state.favourite.content);

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={7}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={2} className="text-end">
        {location.pathname.includes("favourite") ? (
          <Trash
            style={{ cursor: "pointer" }}
            color="red"
            onClick={() => {
              dispatch(removeToFavouriteAction(data._id));
            }}
          ></Trash>
        ) : favouritePositions.some((position) => position._id === data._id) ? (
          <HeartFill
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(removeToFavouriteAction(data._id));
            }}
          ></HeartFill>
        ) : (
          <Heart
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(addToFavouriteAction(data));
            }}
          ></Heart>
        )}
      </Col>
    </Row>
  );
};

export default Job;
