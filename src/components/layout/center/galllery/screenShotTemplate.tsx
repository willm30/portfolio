import { getImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import BaseButton from "../../../buttons/base";
import Portal from "../../../portal/portal";
import ImageGallery from "./imageGallery";
import Thumbnail from "./thumbnail";
import { borderDark, fontBase } from "../../../../styles/common";
import { getOrder, isVideoThumbnail } from "../../../../utilities/images";

export default function ScreenShotTemplate({
  videoLink,
  imgFull,
  imgThumbnail,
}) {
  const [displayModal, setDisplayModal] = useState(false);
  const [thumbnailIndex, setThumbnailIndex] = useState(1);
  function handleOpenModal(index) {
    setDisplayModal(true);
    handleThumbnailSelect(index);
  }

  function handleThumbnailSelect(index) {
    setThumbnailIndex(index);
  }

  const short = typeof window != "undefined" && window.innerHeight < 600;

  return (
    <>
      <div className={`flex flex-col items-stretch`}>
        <BaseButton onClick={() => setDisplayModal(true)}>
          Open Gallery
        </BaseButton>
        <div
          className={`hidden ${
            short ? "" : "md:block"
          } ${fontBase} outline-screenshot border-2 rounded-sm ${borderDark}`}
        >
          {imgThumbnail.nodes.map((img) => {
            const index = getOrder(img);
            return isVideoThumbnail(img) ? null : (
              <Thumbnail
                onClick={() => handleOpenModal(index)}
                image={getImage(img)}
                className=""
                key={`screenshot${index}`}
              />
            );
          })}
        </div>
      </div>

      {displayModal ? (
        <Portal>
          <ImageGallery
            images={imgFull.nodes}
            videoLink={videoLink}
            setModalDisplay={setDisplayModal}
            thumbnailIndex={thumbnailIndex}
          />
        </Portal>
      ) : null}
    </>
  );
}
