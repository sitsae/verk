import {
  Box,
  Input,
  QrCode,
  parseColor,
  Color,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import ColorPickerComponent from "@/components/ColorPickerComponent";

export default function QRCode() {
  const [urlValue, setUrlValue] = useState("erfaringeras.no");
  const [color, setColor] = useState<Color>(parseColor("#000"));

  const {
    hue = 0,
    saturation = 0,
    lightness = 0,
    alpha = 1,
  } = color as Partial<{
    hue: number;
    saturation: number;
    lightness: number;
    alpha: number;
  }>;

  return (
    <Box className="qr-code-container">
      <Box>
        <Input
          value={urlValue}
          onChange={(e) => setUrlValue(e.target.value)}
          style={{ padding: "0 4px ", fontSize: "16px", marginBottom: "16px" }}
        />
        <ColorPickerComponent setColor={setColor} color={color} />
      </Box>
      <QrCode.Root value={urlValue} size={"full"} encoding={{ ecc: "H" }}>
        <QrCode.Frame
          style={{
            borderColor: `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`,
            borderWidth: "4px",
            borderRadius: "16px",
          }}
          fill={`hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`}
        >
          <QrCode.Pattern />
        </QrCode.Frame>
        <QrCode.DownloadTrigger
          asChild
          fileName="qr-code.png"
          mimeType="image/png"
        >
          <Button variant="outline" size="xs" mt="3">
            Download
          </Button>
        </QrCode.DownloadTrigger>
      </QrCode.Root>
    </Box>
  );
}
