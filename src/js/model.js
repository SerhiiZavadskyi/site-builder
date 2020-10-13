import image from "./../assets/image.jpg";
import { TitleBlock, TextBlock, ImageBlock, ColumnsBlock } from "../classes/blocks";

export const model = [
  new TitleBlock("Hello", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #e66465, #9198e5)",
      color: "#fff",
      "text-align": "center",
      padding: "1.5rem",
    },
  }),
  new TextBlock(
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam incidunt?",
    {
      styles: {
        background: "linear-gradient(to left, #f2994a, #f2c94c)",
        padding: "1rem",
        "font-weight": "bold",
      },
    }
  ),
  new ColumnsBlock( ["1111", "22222", "3333", "44444"], {
    styles: {
      background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
      padding: "2rem",
      color: "#fff",
      "font-weight": "bold",
    },
  }),

  new ImageBlock(image, {
    styles: {
     padding: '2rem 0',
     display: "flex",
     'justify-content': 'center'
    },
    imageStyle: {
      width: "300px",
      height: "auto",
    },
  }),
];
