import React, { useState, useEffect } from "react";
import { Container, FormControlLabel, CardMedia, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IOSSwitch } from "components/wrappers/IOSSwitch";
import { BaseEmoji, Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import { TextInputPost } from "components/wrappers/TextInputPost";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import { ColorPicker, useColor, Color } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import Link from "next/link";
import { useRouter } from "next/router";
import NavbarMod from "components/NavbarMod";

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div className="right-[-35px] cursor-pointer absolute top-2/4  -translate-y-1/2 border-2 border-solid border-[#00b3ff] p-1 rounded-md">
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={18}
        onClick={onClick}
      >
        <polyline points="5.54 21.59 15.86 12 5.54 2.42" fill="#fff" />
        <polygon
          points="7.78 24 20.7 12 7.78 0 3.3 4.83 11.01 12 3.3 19.17 7.78 24"
          fill="#1d1d1b"
        />
      </svg>
    </div>
  );
};

const PrevArrow = (props: any) => {

  const { className, style, onClick } = props;
  return (
    <div className="left-[-35px] cursor-pointer absolute top-2/4  -translate-y-1/2 border-2 border-solid border-[#00b3ff] p-1 rounded-md">
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={18}
        onClick={onClick}
      >
        <polyline points="18.22 21.59 7.9 12 18.22 2.42" fill="#fff" />
        <polygon
          points="15.97 24 3.05 12 15.97 0 20.46 4.83 12.74 12 20.46 19.17 15.97 24"
          fill="#1d1d1b"
        />
      </svg>
    </div>
  );
};

export const NewText = () => {
  const router = useRouter();
  const [freeContent, setFreeContent] = useState(false);
  const handleToggle = (e: any) => {
    setFreeContent(!freeContent);
  };
  const [input, setInput] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);
  const [showColors, setShowColors] = useState(false);
  const [showColorsText, setShowColorsText] = useState(false);
  const addEmoji = (e: BaseEmoji) => {
    let sym = e.unified.split("-");
    let codesArray: any = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  const settingsSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const [color, setColor] = useColor("hex", "#c59966");
  const [colorText, setColorText] = useColor("hex", "#000000");
  const [bgColor, setBgColor] = useState(false);
  const [defaultImgs, setDefaultImgs] = useState("/assets/img/bg/01.jpg");

  /////////////////
  // img Preview
  /////////////////

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState<any>();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setBgColor(false);
    setSelectedFile(e.target.files[0]);
  };

  const [texto, setTexto] = useState('');
  function enviarTexto(){
    let pala = localStorage.getItem('palabra');
    alert(texto);
  }

  return (
    <>
    <NavbarMod />
      <Container sx={{ maxWidth: "620px!important" }}>
        <div className="mt-6" />
        <div className="flex items-center space-x-3 mb-7">
          <Link href='/post/new' >
            <a>
              <ArrowBackIcon />
            </a>
          </Link>
          <div className="text-base md:text-xl font-semibold">
            {" "}
            New text post{" "}
          </div>
        </div>

        <div className="px-3">
          {/* {selectedFile && <img src={preview} />} */}
          {bgColor ? (
            <div id="contenedor"
              // className={`w-full h-[150px] md:h-[300px] mb-3 `}
              className="aspect-w-16 aspect-h-9 mb-3 text-center "
              style={{
                background: `${color.hex}`,
              }}
            >
              <div
                className="p-8 flex items-center justify-center"
                style={{
                  color: `${colorText.hex}`,
                }}
              >
                {input}
              </div>
            </div>
          ) : selectedFile ? (
            <>
              <div
                id="ideal"
                className="aspect-w-16 aspect-h-9"
                style={{ backgroundColor: "#000000", marginBottom: "0.75rem" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "250px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:before": {
                      content: "''",
                      backgroundImage: `url('${preview}')`,
                      backgroundSize: "cover",
                      position: "absolute",
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      // opacity: 0.75,
                    },
                  }}
                >
                  <h1
                    className="text-lg"                    
                    style={{
                      color: `${colorText.hex}`,
                      zIndex: 1,
                    }}
                  >
                    {input}
                  </h1>
                </Box>
              </div>
            </>
          ) : (
            <>
              <div
                className="aspect-w-16 aspect-h-9"
                style={{ backgroundColor: "#000000", marginBottom: "0.75rem" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "250px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:before": {
                      content: "''",
                      backgroundImage: `url('${defaultImgs}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      position: "absolute",
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      // opacity: 0.75,
                    },
                  }}
                >
                  <h1
                    className="text-lg"
                    style={{
                      color: `${colorText.hex}`,
                      zIndex: 1,
                    }}
                  >
                    {input}
                  </h1>
                </Box>
              </div>
            </>
          )}
        </div>
        <div className="bg-gray-100 rounded-full relative dark:bg-gray-800 border-t">
          <textarea
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-xs
        md:text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleFormControlTextarea1"
            rows={4}
            placeholder="Compose new post"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
          <div className="-m-0.5 absolute bottom-2 flex items-center right-6 text-xl">
            <button
              className="button mr-1"
              onClick={() => {
                setShowColorsText(!showColorsText);
                showEmojis && setShowEmojis(false);
                showColors && setShowColors(false);
              }}
            >
              <FormatColorFillIcon sx={{ color: "#05D6F2" }} />
            </button>
            <button
              className="button"
              onClick={() => {
                setShowEmojis(!showEmojis);
                showColors && setShowColors(false);
              }}
            >
              <SentimentSatisfiedAltIcon sx={{ color: "#05D6F2" }} />
            </button>
          </div>
        </div>
        {showColorsText && (
          <div className="relative ">
            <div className="absolute right-0 z-50 ">
              <ColorPicker
                width={300}
                height={228}
                color={colorText}
                onChange={setColorText}
                hideHSV
                hideRGB
                dark
              />
            </div>
          </div>
        )}

        {showEmojis && (
          <div className="relative ">
            <div className="md:absolute right-0 z-50 ">
              <Picker onSelect={addEmoji} />
            </div>
          </div>
        )}

        {/* Slider */}
        <div className="px-6 mt-2">
          <Slider {...settingsSlider} className="bg-transparent">
            <div
              className="h-[46px] rounded-md  bg-[#1d6fb3] cursor-pointer"
              onClick={() => {
                setBgColor(true);
                setColor({
                  hex: "#1d6fb3",
                  hsv: {
                    h: 207.2,
                    s: 83.79888268156424,
                    v: 70.19607843137254,
                    a: undefined,
                  },
                  rgb: { r: 29, g: 111, b: 179, a: undefined },
                });
              }}
            />
            <div
              className="h-[46px] rounded-md cursor-pointer bg-[url('/assets/img/bg/paleta.jpg')] bg-no-repeat bg-center bg-cover"
              onClick={() => {
                setBgColor(true);
                setShowColors(!showColors);
                showEmojis && setShowEmojis(false);
                showColorsText && setShowColorsText(false);
              }}
            />
            <div
              className="h-[46px] rounded-md cursor-pointer bg-[url('/assets/img/bg/01.jpg')] bg-no-repeat bg-center bg-cover"
              onClick={() => {
                setBgColor(false);
                setDefaultImgs("/assets/img/bg/01.jpg");
                setColor({
                  hex: "#1d6fb3",
                  hsv: {
                    h: 207.2,
                    s: 83.79888268156424,
                    v: 70.19607843137254,
                    a: undefined,
                  },
                  rgb: { r: 29, g: 111, b: 179, a: undefined },
                });
              }}
            />
            <div
              className="h-[46px] rounded-md cursor-pointer bg-[url('/assets/img/bg/02.jpg')] bg-no-repeat bg-center bg-cover"
              onClick={() => {
                setBgColor(false);
                setDefaultImgs("/assets/img/bg/02.jpg");
                setColor({
                  hex: "#b91621",
                  hsv: {
                    h: 355.9509202453988,
                    s: 88.10810810810811,
                    v: 72.54901960784314,
                    a: undefined,
                  },
                  rgb: { r: 185, g: 22, b: 33, a: undefined },
                });
              }}
            />
            <div
              className="h-[46px] rounded-md cursor-pointer bg-[url('/assets/img/bg/17.jpg')] bg-no-repeat bg-center bg-cover"
              onClick={() => {
                setBgColor(false);
                setDefaultImgs("/assets/img/bg/17.jpg");
                setColor({
                  hex: "#c59966",
                  hsv: {
                    h: 32.210526315789465,
                    s: 48.223350253807105,
                    v: 77.25490196078432,
                    a: undefined,
                  },
                  rgb: { r: 197, g: 153, b: 102, a: undefined },
                });
              }}
            />

            <div
              className="h-[46px] rounded-md cursor-pointer bg-[url('/assets/img/background-post-text-box.jpg')] bg-no-repeat bg-center bg-cover"
              onClick={() => {
                setBgColor(false);
                setDefaultImgs("/assets/img/background-post-text-box.jpg");
                setColor({
                  hex: "#b91621",
                  hsv: {
                    h: 355.9509202453988,
                    s: 88.10810810810811,
                    v: 72.54901960784314,
                    a: undefined,
                  },
                  rgb: { r: 185, g: 22, b: 33, a: undefined },
                });
              }}
            />

            <div
              className="h-[46px] rounded-md cursor-pointer bg-[url('/assets/img/bg/04.jpg')] bg-no-repeat bg-center bg-cover"
              onClick={() => {
                setBgColor(false);
                setDefaultImgs("/assets/img/bg/04.jpg");
                setColor({
                  hex: "#39a53e",
                  hsv: {
                    h: 122.77777777777777,
                    s: 65.45454545454545,
                    v: 64.70588235294117,
                    a: undefined,
                  },
                  rgb: { r: 57, g: 165, b: 62, a: undefined },
                });
              }}
            />

            <div
              className="h-[46px] rounded-md cursor-pointer bg-[url('/assets/img/bg/05.jpg')] bg-no-repeat bg-center bg-cover"
              onClick={() => {
                setBgColor(false);
                setDefaultImgs("/assets/img/bg/05.jpg");
                setColor({
                  hex: "#0294d2",
                  hsv: {
                    h: 197.8846153846154,
                    s: 99.04761904761905,
                    v: 82.35294117647058,
                    a: undefined,
                  },
                  rgb: { r: 2, g: 148, b: 210, a: undefined },
                });
              }}
            />

            <div
              className="h-[46px] rounded-md cursor-pointer bg-[url('/assets/img/bg/16.jpg')] bg-no-repeat bg-center bg-cover"
              onClick={() => {
                setBgColor(false);
                setDefaultImgs("/assets/img/bg/16.jpg");
                setColor({
                  hex: "#64748b",
                  hsv: {
                    h: 215.38461538461536,
                    s: 28.057553956834525,
                    v: 54.509803921568626,
                    a: undefined,
                  },
                  rgb: { r: 100, g: 116, b: 139, a: undefined },
                });
              }}
            />

            <div
              className="h-[46px] rounded-md cursor-pointer bg-[url('/assets/img/bg/15.jpg')] bg-no-repeat bg-center bg-cover"
              onClick={() => {
                setBgColor(false);
                setDefaultImgs("/assets/img/bg/15.jpg");
                setColor({
                  hex: "#b45309",
                  hsv: {
                    h: 25.964912280701753,
                    s: 95,
                    v: 70.58823529411765,
                    a: undefined,
                  },
                  rgb: { r: 180, g: 83, b: 9, a: undefined },
                });
              }}
            />

            <div
              className="h-[46px] rounded-md cursor-pointer bg-[url('/assets/img/bg/08.jpg')] bg-no-repeat bg-center bg-cover"
              onClick={() => {
                setBgColor(false);
                setDefaultImgs("/assets/img/bg/08.jpg");
                setColor({
                  hex: "#1f2937",
                  hsv: {
                    h: 214.99999999999997,
                    s: 43.63636363636364,
                    v: 21.568627450980394,
                    a: undefined,
                  },
                  rgb: { r: 31, g: 41, b: 55, a: undefined },
                });
              }}
            />

            <div
              className="h-[46px] rounded-md cursor-pointer bg-[url('/assets/img/bg/09.jpg')] bg-no-repeat bg-center bg-cover"
              onClick={() => {
                setBgColor(false);
                setDefaultImgs("/assets/img/bg/09.jpg");
                setColor({
                  hex: "#d846ef",
                  hsv: {
                    h: 291.8343195266272,
                    s: 70.7112970711297,
                    v: 93.72549019607843,
                    a: undefined,
                  },
                  rgb: { r: 216, g: 70, b: 239, a: undefined },
                });
              }}
            />
            <div
              className="h-[46px] rounded-md cursor-pointer bg-[url('/assets/img/bg/17.jpg')] bg-no-repeat bg-center bg-cover"
              onClick={() => {
                setBgColor(false);
                setDefaultImgs("/assets/img/bg/17.jpg");
                setColor({
                  hex: "#d846ef",
                  hsv: {
                    h: 291.8343195266272,
                    s: 70.7112970711297,
                    v: 93.72549019607843,
                    a: undefined,
                  },
                  rgb: { r: 216, g: 70, b: 239, a: undefined },
                });
              }}
            />
            <div
              className="h-[46px] rounded-md cursor-pointer bg-[url('/assets/img/bg/11.jpg')] bg-no-repeat bg-center bg-cover"
              onClick={() => {
                setBgColor(false);
                setDefaultImgs("/assets/img/bg/11.jpg");
                setColor({
                  hex: "#d846ef",
                  hsv: {
                    h: 291.8343195266272,
                    s: 70.7112970711297,
                    v: 93.72549019607843,
                    a: undefined,
                  },
                  rgb: { r: 216, g: 70, b: 239, a: undefined },
                });
              }}
            />
            <div
              className="h-[46px] rounded-md cursor-pointer bg-[url('/assets/img/bg/12.jpg')] bg-no-repeat bg-center bg-cover"
              onClick={() => {
                setBgColor(false);
                setDefaultImgs("/assets/img/bg/12.jpg");
                setColor({
                  hex: "#d846ef",
                  hsv: {
                    h: 291.8343195266272,
                    s: 70.7112970711297,
                    v: 93.72549019607843,
                    a: undefined,
                  },
                  rgb: { r: 216, g: 70, b: 239, a: undefined },
                });
              }}
            />
            <div
              className="h-[46px] rounded-md cursor-pointer bg-[url('/assets/img/bg/13.jpg')] bg-no-repeat bg-center bg-cover"
              onClick={() => {
                setBgColor(false);
                setDefaultImgs("/assets/img/bg/13.jpg");
                setColor({
                  hex: "#d846ef",
                  hsv: {
                    h: 291.8343195266272,
                    s: 70.7112970711297,
                    v: 93.72549019607843,
                    a: undefined,
                  },
                  rgb: { r: 216, g: 70, b: 239, a: undefined },
                });
              }}
            />
            <div
              className="h-[46px] rounded-md cursor-pointer bg-[url('/assets/img/bg/14.jpg')] bg-no-repeat bg-center bg-cover"
              onClick={() => {
                setBgColor(false);
                setDefaultImgs("/assets/img/bg/14.jpg");
                setColor({
                  hex: "#d846ef",
                  hsv: {
                    h: 291.8343195266272,
                    s: 70.7112970711297,
                    v: 93.72549019607843,
                    a: undefined,
                  },
                  rgb: { r: 216, g: 70, b: 239, a: undefined },
                });
              }}
            />
          </Slider>
        </div>

        {showColors && (
          <div className="relative ">
            <div className="absolute right-0 z-50 ">
              <ColorPicker
                width={300}
                height={228}
                color={color}
                onChange={setColor}
                hideHSV
                hideRGB
                dark
              />
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="inline-block relative max-w-full align-middle mt-6">
          <input
            type="file"
            name="img"
            className="absolute top-0 z-10 w-full h-full left-0 opacity-0 cursor-pointer"
            onChange={onSelectFile}
            accept="image/*"
          />
          <button
            type="button"
            className="cursor-pointer px-6 pt-2.5 pb-2 bg-[#00b3ff]  text-white font-medium text-xs leading-normal  rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
          >
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 mr-2"
            >
              <path
                d="M20.18,23.81H4.63a.91.91,0,0,1-.91-.92V1.11A.91.91,0,0,1,4.63.19H15.79l5.3,5.31V22.89A.92.92,0,0,1,20.18,23.81Z"
                fill="#fff"
              />
              <path
                d="M20,6.59H15.79a1.09,1.09,0,0,1-1.1-1.09V1.29a1.1,1.1,0,0,1,1.1-1.1l5.3,5.31A1.09,1.09,0,0,1,20,6.59Z"
                fill="#00b2ff"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.25px"
              />
              <path
                d="M11.23,12.83V9.31h2.35v3.52h3.51v2.35H13.58V18.7H11.23V15.18H7.72V12.83Z"
                fill="#00b2ff"
              />
            </svg>
            Custom your background
          </button>
        </div>

        <div className="flex space-x-2 justify-center mt-8 mb-12">
          <button
            onClick={(e) => router.push("/post/new")}
            type="button"
            className="inline-block px-6 py-2.5 bg-[#ff00a2] text-white  text-xs leading-tight font-semibold rounded shadow-md hover:bg-[#f545b4] hover:shadow-lg focus:bg-[#f545b4] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Discard
          </button>

          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-[#00b3ff] text-white  text-xs leading-tight font-semibold rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={enviarTexto}
          >
            Submit
          </button>
        </div>
      </Container>
    </>
  );
};
