import React, { useEffect } from 'react';

import Canvas from '~/components/Canvas';
import CanvasEventListeners from '~/components/CanvasEventListeners';
import Overlay from '~/components/Overlay';
import { CANVAS_PREVIEW_UNIQUE_ID } from '~/config/globalElementIds';

//import 'SharedComponents/MainCss';
type AppLayoutProps = {
  handleExportFile?: (blob: Blob) => void;
};

export default function AppLayout(props:AppLayoutProps) {
  useEffect(() => {
    const html = document.querySelector('html');

    if (html) {
      html.style.overflow = 'hidden';
    }

    return () => {
      if (html) {
        html.style.overflow = 'auto';
      }
    };
  }, []);

  const saveToPNG = async () => {
    const canvas = document.getElementById(CANVAS_PREVIEW_UNIQUE_ID) as HTMLCanvasElement;
    if (canvas) {
      canvas.toBlob((blob) => {
        if (blob) {
          if(props.handleExportFile)
            props.handleExportFile(blob);
          console.log("Canvas export successfull");
        } else {
          console.log("Error export file");
        }
      });
      
    } else {
      console.log("Canvas not found");
    }
  };

  return (
    <>
      <Overlay handleSave={saveToPNG} />
      <Canvas />
      <CanvasEventListeners />
    </>
  );
}
