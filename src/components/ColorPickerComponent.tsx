import { Color, ColorPicker, HStack, Portal } from "@chakra-ui/react";

interface Props {
  setColor: React.Dispatch<React.SetStateAction<Color>>;
  color: Color;
}
export default function ColorPickerComponent({ setColor, color }: Props) {
  return (
    <ColorPicker.Root
      defaultValue={color}
      value={color}
      onValueChange={(e) => setColor(e.value)}
      format="hsla"
      maxW="200px"
    >
      <ColorPicker.HiddenInput />
      <ColorPicker.Label>Color</ColorPicker.Label>
      <ColorPicker.Control>
        <ColorPicker.Input style={{ padding: "0 4px", fontSize: "16px" }} />
        <ColorPicker.Trigger />
      </ColorPicker.Control>
      <Portal>
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            <ColorPicker.Area />
            <HStack>
              <ColorPicker.EyeDropper size="xs" variant="outline" />
              <ColorPicker.Sliders />
            </HStack>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </Portal>
    </ColorPicker.Root>
  );
}
