import React, { useEffect } from "react";
import one from "../assets/one.jpg";
import one1 from "../assets/one1.jpg";
import one2 from "../assets/one2.jpg";
import one3 from "../assets/one3.jpg";
import one4 from "../assets/one4.jpg";
import two from "../assets/two.jpg";
import two1 from "../assets/two1.jpg";
import two2 from "../assets/two2.jpg";
import two3 from "../assets/two3.jpg";
import three from "../assets/three.jpg";
import three1 from "../assets/three1.jpg";
import three2 from "../assets/three2.jpg";
import four from "../assets/four.jpg";
import four1 from "../assets/four1.jpg";
import four2 from "../assets/four2.jpg";
import four3 from "../assets/four3.jpg";
import five from "../assets/five.jpg";
import five1 from "../assets/five1.jpg";
import five2 from "../assets/five2.jpg";
import five3 from "../assets/five3.jpg";
import six from "../assets/six.jpg";
import six1 from "../assets/six1.jpg";
import six2 from "../assets/six2.jpg";
import six3 from "../assets/six3.jpg";
import seven from "../assets/seven.jpg";
import seven1 from "../assets/seven1.jpg";
import seven2 from "../assets/seven2.jpg";
import seven3 from "../assets/seven3.jpg";
import eight from "../assets/eight.jpg";
import eight1 from "../assets/eight1.jpg";
import eight2 from "../assets/eight2.jpg";
import eight3 from "../assets/eight3.jpg";
import nine from "../assets/nine.jpg";
import nine1 from "../assets/nine1.jpg";
import nine2 from "../assets/nine2.jpg";
import nine3 from "../assets/nine3.jpg";
import ten from "../assets/ten.jpg";
import ten1 from "../assets/ten1.jpg";
import ten2 from "../assets/ten2.jpg";
import ten3 from "../assets/ten3.jpg";
import { useData } from "../context/DataContext";

const PuzzleGallery = () => {
  const datas = [
    one,
    one1,
    one2,
    one3,
    one4,
    two,
    two1,
    two2,
    two3,
    three,
    three1,
    three2,
    four,
    four1,
    four2,
    four3,
    five,
    five1,
    five2,
    five3,
    six,
    six1,
    six2,
    six3,
    seven,
    seven1,
    seven2,
    seven3,
    eight,
    eight1,
    eight2,
    eight3,
    nine,
    nine1,
    nine2,
    nine3,
    ten,
    ten1,
    ten2,
    ten3,
  ];
  const { data, handleImageChange } = useData();
  useEffect(() => {
    handleImageChange(datas);
    console.log("the data from context", data);
  }, []);
};

export default PuzzleGallery;
