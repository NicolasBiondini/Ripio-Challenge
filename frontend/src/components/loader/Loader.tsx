import { useLottie, LottieOptions } from "lottie-react";
import loader from "../../images/loader.json";

type Props = {};

function Loader({}: Props) {
  const options: LottieOptions = {
    animationData: loader,
    loop: true,
    autoplay: true,
    height: 100,
    width: 100,
  };

  const { View } = useLottie(options);

  return View;
}

export default Loader;
