import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Testimonial.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Testimonial = () => {
  return (
    <div
      className="testimonial"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 50,
        marginBottom: 50,
      }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <h1
          style={{
            marginTop: 50,
            marginBottom: 10,
            color: "goldenrod",
          }}
        >
          TESTIMONIALS
        </h1>
        <h3
          style={{
            marginTop: 10,
            marginBottom: 50,
            color: "#000",
          }}
        >
          What Our Students Have To Say
        </h3>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <Card
            img=""
            desc="I learn programming"
            name="Temiyores"
            status="Student"
            course="ADSE"
          />
          <Card
            img=""
            desc="I learn programming"
            name="Bidemi"
            status="Faculty"
            course="ADSE"
          />
          <Card
            img=""
            desc="I learn programming"
            name="Jeremiah"
            status="Student"
            course="ADSE"
          />
          <Card
            img=""
            desc="I learn programming"
            name="Desmond"
            status="Student"
            course="ADSE"
          />
          <Card
            img=""
            desc="I learn programming"
            name="LazyOut"
            status="Student"
            course="ADSE"
          />
          <Card
            img=""
            desc="I learn programming"
            name="Julius berger"
            status="Student"
            course="ADSE"
          />
          <Card
            img=""
            desc="I learn programming"
            name="Cheta"
            status="Graduate"
            course="ADSE"
          />
          <Card
            img=""
            desc="I learn programming"
            name="Emmanuel"
            status="Graduate"
            course="ADSE"
          />
          <Card
            img=""
            desc="I learn programming"
            name="Tobi"
            status="Student"
            course="ADSE"
          />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img, desc, name, course, status }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p>{desc}</p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "green" }}>{name}</span> ,{" "}
        {course}({status})
      </p>
    </div>
  );
};

export default Testimonial;
