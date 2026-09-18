import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Button from "../../components/Button";
import { useNavigate } from "react-router";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col  items-center justify-center h-screen">
      <div className="size-80">
        <DotLottieReact
          src="/404.lottie"
          loop
          autoplay
          width={20}
          height={20}
        />
      </div>
      <p className="text-center w-full text-3xl font-comicrelief">
        Page Not Found
      </p>
      <div className="flex gap-4 pt-3.5">
        <Button
          label="Go back"
          onClick={() => navigate(-1)}
          variant="secondary"
          IconLeft={ArrowLeft}
        />
        <Button
          label="Home"
          onClick={() => navigate("/")}
          variant="primary"
          IconRight={Home}
        />
      </div>
    </div>
  );
};

export default NotFound;
