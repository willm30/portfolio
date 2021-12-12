import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  modalAnimation,
  modalExit,
  modalOut,
} from "../../../../animations/modal";
import Cross from "../../../../icons/cross";
import WaitingSpinner from "../../../../icons/waiting-spinner";
import {
  bgDark,
  bgLight,
  bgModal,
  borderLight,
  fontAlt,
  fontBase,
  textLight,
} from "../../../../styles/common";
import {
  getCaption,
  getOrder,
  isVideoThumbnail,
} from "../../../../utilities/images";
import Thumbnail from "./thumbnail";

export default function ImageGallery({
  images,
  videoLink,
  setModalDisplay,
  thumbnailIndex,
}) {
  const [hasIFrameLoaded, setHasIFrameLoaded] = useState(false);
  const [selectedIndex, setSelectIndex] = useState(thumbnailIndex);
  const galRef = useRef();
  const modalCont = useRef();
  const isMobile = typeof window != "undefined" && innerWidth < 768;

  function handleImageSelect(order: number) {
    setSelectIndex(order);
    setHasIFrameLoaded(false);
  }

  function getImageAt(order: number) {
    const selectedImg = images.filter((i) => getOrder(i) == order)[0];
    return selectedImg;
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  function handleKeyDown(e) {
    if (e.key == "ArrowRight" && selectedIndex < images.length)
      setSelectIndex(selectedIndex + 1);
    else if (e.key == "ArrowLeft" && selectedIndex > 1)
      setSelectIndex(selectedIndex - 1);
    else if (e.key == "Escape") handleClose();
    else return;
  }

  useLayoutEffect(() => {
    modalAnimation(galRef.current, modalCont.current);
  }, []);

  function handleClose() {
    modalOut(galRef.current, setModalDisplay, false, modalCont.current);
  }

  return (
    <div
      ref={modalCont}
      className={`absolute w-screen h-screen top-0 left-0 grid grid-cols-1 md:grid-cols-modal grid-rows-1 overflow-hidden`}
    >
      <div
        className={`hidden md:block md:col-start-1 md:col-end-2 hover:cursor-pointer `}
        onClick={handleClose}
      />
      <div
        id="modal-center"
        ref={galRef}
        className="invisible relative md:col-start-2 md:col-end-3 flex flex-col justify-center"
      >
        {!isMobile && (
          <button
            className="absolute top-2 right-2 md:-right-10"
            onClick={handleClose}
          >
            <Cross className={`fill-current ${textLight}`} />
          </button>
        )}
        <div
          id="gallery-cont"
          className={`${bgDark} ${borderLight} border-4 grid grid-rows-modal grid-cols-1 min-h-[85%] overflow-y-scroll md:overflow-y-hidden`}
        >
          {isMobile && (
            <button
              className="absolute top-2 right-2 md:top-0 md:-right-10"
              onClick={handleClose}
            >
              <Cross className={`fill-current ${textLight}`} />
            </button>
          )}
          <div className="row-start-1 row-end-2 p-4">
            <div
              className={`h-full flex justify-center items-center ${fontAlt} ${textLight}`}
            >
              {isVideoThumbnail(getImageAt(selectedIndex)) ? (
                <div className="relative h-full w-full">
                  <div
                    className={`${
                      hasIFrameLoaded ? "hidden" : ""
                    } absolute top-0 left-0 h-full w-full ${textLight} flex justify-center items-center`}
                  >
                    <div className="flex flex-row">
                      <span>Please wait while the video loads...</span>
                      <WaitingSpinner
                        className={`animate-spin mx-2 ${textLight} fill-current`}
                      />
                    </div>
                  </div>
                  <iframe
                    width="100%"
                    height="100%"
                    src={videoLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow=""
                    allowFullScreen
                    onLoad={() => setHasIFrameLoaded(true)}
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <GatsbyImage
                    image={getImage(getImageAt(selectedIndex))}
                    alt=""
                  />
                  <span className={`pt-2 ${fontBase}`}>
                    {getCaption(getImageAt(selectedIndex))}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="row-start-2 row-end-3">
            <div className="flex md:flex-nowrap flex-wrap justify-center items-center px-2">
              {images.map((image) => {
                const index = getOrder(image);
                const short =
                  typeof window != "undefined" && window.innerHeight < 600;

                const display =
                  selectedIndex == index
                    ? `hidden ${short ? "" : "md:block"}`
                    : "hidden";

                return (
                  <div
                    className="flex flex-col w-1/2 md:w-auto items-center md:my-0 my-2"
                    key={`galleryThumbnal${index}`}
                    style={{ order: getOrder(image) }}
                  >
                    <Thumbnail
                      onClick={() => handleImageSelect(index)}
                      image={getImage(image)}
                      className="mx-2"
                    />
                    <div
                      className={`${display} h-[0.5rem] w-[90%] ${bgLight} mt-2`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`hidden md:block md:col-start-3 md:col-end-4 hover:cursor-pointer`}
        onClick={handleClose}
      ></div>
    </div>
  );
}
