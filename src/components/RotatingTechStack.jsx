import { useEffect, useState, useRef } from "react";
import useFetch from "../utils/useFetch";

//inspired by https://stackoverflow.com/questions/12813573/position-icons-into-circle

function RotatingTechStack({ basePath, isCircleRotating }) {
  const fullPath = basePath + "/pages/14?_embed&acf_format=standard";
  const { data, isLoaded } = useFetch(fullPath);
  const [images, setImages] = useState([]);
  const [rotationAngle, setRotationAngle] = useState(0);

  const ref = useRef(null);
  const angleIncrement = 0.6;

  function positionElementsInCircle(array, i, rotationAngle) {
    const positionAngle = (360 / array.length) * i;

    return {
      transform: `rotate(${positionAngle + rotationAngle}deg) translate(${
        ref.current.clientWidth / 2
      }px) rotate(-${positionAngle + rotationAngle}deg)`,
    };
  }

  useEffect(() => {
    if (isLoaded && isCircleRotating) {
      setImages(data.acf.toolkit);
      const elements = ref.current.childNodes;

      const rotateElements = setInterval(() => {
        elements.forEach((element, i) => {
          const styles = positionElementsInCircle(elements, i, rotationAngle);
          element.style.transform = styles.transform;
        });

        setRotationAngle((prevAngle) => (prevAngle += angleIncrement));
      }, 50);

      return () => clearInterval(rotateElements);
    }
  }, [isLoaded, data, isCircleRotating, rotationAngle]);

  return (
    <ul
      ref={ref}
      className="rounded-full w-[14rem] h-[14rem] md:w-[16rem] md:h-[16rem]"
    >
      {isLoaded &&
        images.map((item, i) => {
          const styles = positionElementsInCircle(images, i, rotationAngle);

          return (
            <li
              key={i}
              className={`absolute w-10 h-10 -m-5 top-1/2 left-1/2 rounded-full md:w-12 md:h-12 md:-m-6  ${
                isCircleRotating ? "saturate-[.25]" : "saturate-100"
              } `}
              style={styles}
            >
              <img src={item.image.url} alt={item.image.title} />
            </li>
          );
        })}
    </ul>
  );
}

export default RotatingTechStack;
