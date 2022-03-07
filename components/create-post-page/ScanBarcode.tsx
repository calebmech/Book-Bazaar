/// <reference path="@lib/types/quagga.d.ts">
import { Container } from "@chakra-ui/react";
import { gtin } from "cdigit";
import Quagga, { QuaggaJSResultObject } from "@ericblade/quagga2";
import React, { useEffect, useRef } from "react";

interface Props {
  onDetected: (isbn: string) => void;
  onNoCamera: VoidFunction;
}

const ScanBarcode = ({ onDetected, onNoCamera }: Props) => {
  const scannerContainer = useRef(null);

  const updateBarcode = (result: QuaggaJSResultObject) => {
    if (
      result.codeResult &&
      result.codeResult.code?.length === 13 &&
      // https://www.gs1.org/standards/id-keys/company-prefix
      (result.codeResult.code.startsWith("978") ||
        result.codeResult.code.startsWith("979")) &&
      gtin.validate(result.codeResult.code)
    ) {
      Quagga.stop();
      onDetected(result.codeResult.code);
    }
  };

  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          type: "LiveStream",
          target: scannerContainer.current ?? undefined,
        },
        locator: {
          patchSize: "medium",
          halfSample: true,
        },
        numOfWorkers: 2,
        frequency: 10,
        decoder: {
          readers: ["ean_reader"],
        },
        locate: true,
      },
      (err: any) => {
        if (err) {
          console.error(
            `Error while initializing Quagga (barcode scanner): ${err}`
          );
          onNoCamera();
        } else {
          try {
            Quagga.start();
          } catch (e: any) {
            onNoCamera();
          }
        }
      }
    );

    Quagga.onDetected(updateBarcode);

    return () => {
      Quagga.offDetected(updateBarcode);
      Quagga.stop();
    };
  }, []);

  return (
    <Container sx={{ canvas: { display: "none" } }}>
      <div ref={scannerContainer} />
    </Container>
  );
};

// Copied from POC
export default ScanBarcode;
